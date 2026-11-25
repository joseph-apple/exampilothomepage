// Show a site-wide maintenance notice
var maintenanceBanner = document.createElement("div");
maintenanceBanner.className = "maintenance-banner";
maintenanceBanner.setAttribute("role", "status");
maintenanceBanner.textContent = "Maintenance notice: The login credentials system isn't working. We aim to have it fixed by 27th Nov 2026.";
document.body.insertBefore(maintenanceBanner, document.body.firstChild);

// Add the ExamPilot Instagram link to the shared footer
var footerLinks = document.querySelector(".footer-links");
if (footerLinks) {
  var instagramSeparator = document.createElement("span");
  instagramSeparator.className = "footer-sep";
  instagramSeparator.setAttribute("aria-hidden", "true");
  instagramSeparator.textContent = "·";

  var instagramLink = document.createElement("a");
  instagramLink.className = "footer-link";
  instagramLink.href = "https://www.instagram.com/exampilot.app/";
  instagramLink.target = "_blank";
  instagramLink.rel = "noopener noreferrer";
  instagramLink.setAttribute("aria-label", "Follow ExamPilot on Instagram (@exampilot.app)");
  instagramLink.textContent = "Instagram: @exampilot.app";

  footerLinks.appendChild(instagramSeparator);
  footerLinks.appendChild(instagramLink);
}

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
