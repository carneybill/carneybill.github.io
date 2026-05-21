(function () {
  function hasAnalytics() {
    return typeof window.gtag === "function";
  }

  function sendEvent(name, params) {
    if (!hasAnalytics()) {
      return;
    }

    window.gtag("event", name, Object.assign({
      page_location: window.location.href,
      page_path: window.location.pathname
    }, params));
  }

  function normalizeText(value) {
    return (value || "").replace(/\s+/g, " ").trim().slice(0, 120);
  }

  function classifyLink(link) {
    var href = link.href || "";

    if (href.indexOf("cal.com/bill-carney/60min") !== -1) {
      return "book_conversation_click";
    }

    if (href.indexOf("buy.stripe.com") !== -1 || href.indexOf("book.stripe.com") !== -1) {
      return "stripe_checkout_click";
    }

    if (href.indexOf("mailto:bill@carney.wiki") === 0) {
      return "offer_inquiry_email";
    }

    return "";
  }

  function trackOfferPageView() {
    var path = window.location.pathname;

    if (path.indexOf("/offers/") !== 0) {
      return;
    }

    sendEvent("offer_page_view", {
      offer_path: path
    });

    if (
      path.indexOf("/offers/ppc-performance-agent/") === 0 ||
      path.indexOf("/offers/ai-platform-owners-rep/") === 0 ||
      path.indexOf("/offers/proof-ops-sprint/") === 0
    ) {
      sendEvent("high_intent_offer_view", {
        offer_path: path
      });
    }
  }

  document.addEventListener("DOMContentLoaded", trackOfferPageView);

  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest("a") : null;

    if (!link) {
      return;
    }

    var eventName = classifyLink(link);

    if (!eventName) {
      return;
    }

    sendEvent(eventName, {
      link_url: link.href,
      link_text: normalizeText(link.textContent),
      offer_path: window.location.pathname
    });
  });
}());
