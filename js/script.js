(function () {
  "use strict";

  /* ---------- Année footer ---------- */
  var yearEl = document.getElementById("fd-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header : fond au scroll ---------- */
  var header = document.getElementById("fd-header");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById("fd-burger");
  var nav = document.getElementById("fd-nav");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Reveal au scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Curseur avant / après ---------- */
  document.querySelectorAll("[data-fd-slider]").forEach(function (slider) {
    var frame = slider.querySelector(".fd-slider__frame");
    var after = slider.querySelector("[data-fd-after]");
    var handle = slider.querySelector("[data-fd-handle]");
    var afterImg = after.querySelector("img");
    var dragging = false;

    function syncImgWidth() {
      afterImg.style.width = frame.offsetWidth + "px";
    }
    function setPercent(pct) {
      pct = Math.max(0, Math.min(100, pct));
      after.style.width = pct + "%";
      handle.style.left = pct + "%";
    }
    function updateFromClientX(clientX) {
      var rect = frame.getBoundingClientRect();
      var pct = ((clientX - rect.left) / rect.width) * 100;
      setPercent(pct);
    }

    syncImgWidth();
    window.addEventListener("resize", syncImgWidth);

    frame.addEventListener("pointerdown", function (e) {
      e.preventDefault(); // bloque le glisser natif d'image (Firefox surtout), qui volerait le geste
      dragging = true;
      frame.setPointerCapture(e.pointerId);
      updateFromClientX(e.clientX);
    });
    frame.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      updateFromClientX(e.clientX);
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach(function (evt) {
      frame.addEventListener(evt, function () { dragging = false; });
    });

    /* Petite animation d'intro pour montrer que c'est interactif */
    var introDone = false;
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !introDone) {
          introDone = true;
          setPercent(30);
          setTimeout(function () { setPercent(70); }, 500);
          setTimeout(function () { setPercent(50); }, 1000);
        }
      });
    }, { threshold: 0.4 });
    io2.observe(slider);
  });
})();
