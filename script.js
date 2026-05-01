// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (typeof IntersectionObserver === "undefined") {
    els.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach(function (el) { observer.observe(el); });
})();
