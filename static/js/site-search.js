(function () {
  const root = document.querySelector("[data-site-search-root]");

  if (!root) {
    return;
  }

  const triggers = document.querySelectorAll("[data-site-search-open]");
  const closeTargets = root.querySelectorAll("[data-site-search-close]");
  const input = root.querySelector("[data-site-search-input]");
  const status = root.querySelector("[data-site-search-status]");
  const results = root.querySelector("[data-site-search-results]");
  const indexUrl = root.getAttribute("data-site-search-index") || "/index.json";
  let lastActiveElement = null;
  let pages = [];
  let loadPromise = null;

  function normalize(value) {
    return (value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

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

  function setStatus(message, state) {
    status.textContent = message;
    status.setAttribute("data-state", state || "idle");
  }

  function clearResults() {
    results.innerHTML = "";
  }

  function createEmptyResult(message) {
    const empty = document.createElement("div");
    empty.className = "site-search-empty";
    empty.textContent = message;
    results.appendChild(empty);
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
    lastActiveElement = trigger || document.activeElement;
    root.hidden = false;
    document.body.classList.add("site-search-open");

    triggers.forEach(function (button) {
      button.setAttribute("aria-expanded", "true");
    });

    window.requestAnimationFrame(function () {
      input.focus();
      input.select();
    });

    void loadIndex();
    void renderResults(input.value);
  }

  function closeSearch() {
    root.hidden = true;
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

    setStatus("Loading search index...", "loading");

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

        setStatus("Start typing to search.", "idle");
        return pages;
      })
      .catch(function () {
        setStatus("Search is unavailable right now.", "error");
        return [];
      });

    return loadPromise;
  }

  function renderResults(query) {
    const normalizedQuery = normalize(query);

    clearResults();

    if (!normalizedQuery) {
      setStatus("Start typing to search.", "idle");
      return loadIndex();
    }

    const terms = normalizedQuery.split(" ").filter(Boolean);

    setStatus("Searching...", "loading");

    return loadIndex().then(function (index) {
      const matches = index
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
        setStatus("No results found.", "empty");
        createEmptyResult('No matches found for "' + query + '".');
        return;
      }

      setStatus(matches.length + (matches.length === 1 ? " result" : " results"), "ready");

      matches.forEach(function (entry) {
        results.appendChild(createResult(entry.page));
      });
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

  input.addEventListener("input", function (event) {
    void renderResults(event.target.value);
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const firstResult = results.querySelector(".site-search-result");

      if (firstResult) {
        window.location.href = firstResult.href;
      }
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !root.hidden) {
      closeSearch();
    }
  });
}());
