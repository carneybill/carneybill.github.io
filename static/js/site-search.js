(function () {
  const overlayRoot = document.querySelector("[data-site-search-root]");
  const inlineRoots = Array.from(document.querySelectorAll("[data-site-search-inline-root]"));

  if (!overlayRoot && !inlineRoots.length) {
    return;
  }

  const triggers = document.querySelectorAll("[data-site-search-open]");
  let lastActiveElement = null;
  let pages = [];
  let loadPromise = null;

  function createContext(root) {
    return {
      root: root,
      input: root.querySelector("[data-site-search-input]"),
      status: root.querySelector("[data-site-search-status]"),
      results: root.querySelector("[data-site-search-results]"),
      section: normalize(root.getAttribute("data-site-search-section")),
      idleMessage: root.getAttribute("data-site-search-idle") || "Start typing to search.",
      emptyMessage: root.getAttribute("data-site-search-empty") || "No matches found for"
    };
  }

  function normalize(value) {
    return (value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  const overlay = overlayRoot ? createContext(overlayRoot) : null;
  const closeTargets = overlayRoot ? overlayRoot.querySelectorAll("[data-site-search-close]") : [];
  const indexUrl = overlayRoot ? (overlayRoot.getAttribute("data-site-search-index") || "/index.json") : "/index.json";
  const inlineContexts = inlineRoots.map(createContext);

  function formatDate(value) {
    if (!value) {
      return "";
    }

    const date = new Date(value + "T12:00:00");

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  }

  function setStatus(context, message, state) {
    if (!context || !context.status) {
      return;
    }

    context.status.textContent = message;
    context.status.setAttribute("data-state", state || "idle");
  }

  function clearResults(context) {
    if (!context || !context.results) {
      return;
    }

    context.results.innerHTML = "";
  }

  function createEmptyResult(message) {
    const empty = document.createElement("div");
    empty.className = "site-search-empty";
    empty.textContent = message;

    return empty;
  }

  function appendResult(context, result) {
    if (!context || !context.results) {
      return;
    }

    context.results.appendChild(result);
  }

  function createResult(page) {
    const link = document.createElement("a");
    link.className = "site-search-result";
    link.href = page.permalink;

    const meta = document.createElement("div");
    meta.className = "site-search-result-meta";

    const section = document.createElement("span");
    section.className = "site-search-result-section";
    section.textContent = page.section || "Page";
    meta.appendChild(section);

    if (page.date) {
      const date = document.createElement("span");
      date.className = "site-search-result-date";
      date.textContent = formatDate(page.date);
      meta.appendChild(date);
    }

    const title = document.createElement("h3");
    title.className = "site-search-result-title";
    title.textContent = page.title;

    const copy = document.createElement("p");
    copy.className = "site-search-result-copy";
    copy.textContent = page.summary || page.content.slice(0, 180);

    link.appendChild(meta);
    link.appendChild(title);
    link.appendChild(copy);

    return link;
  }

  function getScopedPages(index, context) {
    if (!context || !context.section) {
      return index;
    }

    return index.filter(function (page) {
      return normalize(page.section) === context.section;
    });
  }

  function scorePage(page, query, terms) {
    const haystack = page.searchText;

    if (!terms.every(function (term) { return haystack.indexOf(term) !== -1; })) {
      return 0;
    }

    let score = 0;

    if (page.titleText === query) {
      score += 400;
    }

    if (page.titleText.indexOf(query) === 0) {
      score += 180;
    }

    if (page.titleText.indexOf(query) !== -1) {
      score += 120;
    }

    if (page.summaryText.indexOf(query) !== -1) {
      score += 60;
    }

    if (page.tagsText.indexOf(query) !== -1) {
      score += 40;
    }

    if (page.contentText.indexOf(query) !== -1) {
      score += 20;
    }

    terms.forEach(function (term) {
      if (page.titleText.indexOf(term) !== -1) {
        score += 40;
      }

      if (page.summaryText.indexOf(term) !== -1) {
        score += 15;
      }

      if (page.tagsText.indexOf(term) !== -1) {
        score += 10;
      }

      if (page.contentText.indexOf(term) !== -1) {
        score += 5;
      }
    });

    return score;
  }

  function openSearch(trigger) {
    if (!overlay) {
      return;
    }

    lastActiveElement = trigger || document.activeElement;
    overlay.root.hidden = false;
    document.body.classList.add("site-search-open");

    triggers.forEach(function (button) {
      button.setAttribute("aria-expanded", "true");
    });

    window.requestAnimationFrame(function () {
      overlay.input.focus();
      overlay.input.select();
    });

    void loadIndex();
    void renderResults(overlay, overlay.input.value);
  }

  function closeSearch() {
    if (!overlay) {
      return;
    }

    overlay.root.hidden = true;
    document.body.classList.remove("site-search-open");

    triggers.forEach(function (button) {
      button.setAttribute("aria-expanded", "false");
    });

    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  }

  function loadIndex() {
    if (pages.length) {
      return Promise.resolve(pages);
    }

    if (loadPromise) {
      return loadPromise;
    }

    if (overlay) {
      setStatus(overlay, "Loading search index...", "loading");
    }

    loadPromise = window.fetch(indexUrl, {
      headers: {
        Accept: "application/json"
      }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Search index request failed");
        }

        return response.json();
      })
      .then(function (data) {
        pages = (data || []).map(function (page) {
          const titleText = normalize(page.title);
          const summaryText = normalize(page.summary);
          const contentText = normalize(page.content);
          const tagsText = normalize(page.tags);
          const searchText = normalize([
            page.title,
            page.summary,
            page.content,
            page.section,
            page.tags
          ].join(" "));

          return {
            title: page.title || "",
            summary: page.summary || "",
            content: page.content || "",
            permalink: page.permalink || "/",
            section: page.section || "Page",
            tags: page.tags || "",
            date: page.date || "",
            titleText: titleText,
            summaryText: summaryText,
            contentText: contentText,
            tagsText: tagsText,
            searchText: searchText
          };
        });

        if (overlay) {
          setStatus(overlay, overlay.idleMessage, "idle");
        }

        inlineContexts.forEach(function (context) {
          setStatus(context, context.idleMessage, "idle");
        });

        return pages;
      })
      .catch(function () {
        if (overlay) {
          setStatus(overlay, "Search is unavailable right now.", "error");
        }

        inlineContexts.forEach(function (context) {
          setStatus(context, "Search is unavailable right now.", "error");
        });

        return [];
      });

    return loadPromise;
  }

  function renderResults(context, query) {
    const normalizedQuery = normalize(query);

    clearResults(context);

    if (!normalizedQuery) {
      setStatus(context, context.idleMessage, "idle");
      return loadIndex();
    }

    const terms = normalizedQuery.split(" ").filter(Boolean);

    setStatus(context, "Searching...", "loading");

    return loadIndex().then(function (index) {
      const matches = getScopedPages(index, context)
        .map(function (page) {
          return {
            page: page,
            score: scorePage(page, normalizedQuery, terms)
          };
        })
        .filter(function (entry) {
          return entry.score > 0;
        })
        .sort(function (left, right) {
          if (right.score !== left.score) {
            return right.score - left.score;
          }

          return String(right.page.date || "").localeCompare(String(left.page.date || ""));
        })
        .slice(0, 8);

      if (!matches.length) {
        setStatus(context, "No results found.", "empty");
        appendResult(context, createEmptyResult(context.emptyMessage + ' "' + query + '".'));
        return;
      }

      setStatus(context, matches.length + (matches.length === 1 ? " result" : " results"), "ready");

      matches.forEach(function (entry) {
        appendResult(context, createResult(entry.page));
      });
    });
  }

  function bindSearchInput(context) {
    if (!context || !context.input) {
      return;
    }

    context.input.addEventListener("input", function (event) {
      void renderResults(context, event.target.value);
    });

    context.input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const firstResult = context.results.querySelector(".site-search-result");

        if (firstResult) {
          window.location.href = firstResult.href;
        }
      }
    });
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openSearch(trigger);
    });
  });

  closeTargets.forEach(function (target) {
    target.addEventListener("click", closeSearch);
  });

  if (overlay) {
    bindSearchInput(overlay);
  }

  inlineContexts.forEach(function (context) {
    bindSearchInput(context);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && overlay && !overlay.root.hidden) {
      closeSearch();
    }
  });
}());
