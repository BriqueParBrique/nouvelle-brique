(function () {
  var baseurl = document.body.getAttribute("data-baseurl") || "";
  var key = "brique-progress-" + baseurl;

  function load() {
    try {
      return JSON.parse(localStorage.getItem(key)) || { visited: [], lastStep: null };
    } catch (e) {
      return { visited: [], lastStep: null };
    }
  }

  function save(data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      // Storage full or unavailable — silently ignore
    }
  }

  // Step page: record visit
  var article = document.querySelector("article.step-container[data-step]");
  if (article) {
    var step = article.getAttribute("data-step");
    var data = load();
    if (data.visited.indexOf(step) === -1) {
      data.visited.push(step);
    }
    data.lastStep = step;
    save(data);
    return;
  }

  // Homepage: mark visited cards and show resume link
  var cards = document.querySelectorAll(".step-card[data-step-file]");
  if (cards.length === 0) return;

  function renderHomepage() {
    var data = load();
    var resume = document.querySelector(".hero-resume");

    cards.forEach(function (card) {
      var file = card.getAttribute("data-step-file");
      card.classList.remove("visited", "current");
      if (file === data.lastStep) {
        card.classList.add("current");
      } else if (data.visited.indexOf(file) !== -1) {
        card.classList.add("visited");
      }
    });

    if (data.lastStep && resume) {
      resume.href = baseurl + "/" + data.lastStep + "/";
      resume.classList.add("visible");
    } else if (resume) {
      resume.classList.remove("visible");
    }
  }

  renderHomepage();

  // "Commencer" resets progress
  var resetLink = document.querySelector("[data-reset-progress]");
  if (resetLink) {
    resetLink.addEventListener("click", function () {
      try { localStorage.removeItem(key); } catch (e) {}
    });
  }

  // Re-render when page is restored from bfcache
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) renderHomepage();
  });
})();
