(function () {
  // Footer year
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (navToggle && nav) {
    function setExpanded(isOpen) {
      navToggle.setAttribute("aria-expanded", String(isOpen));
      nav.classList.toggle("is-open", isOpen);
    }

    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      setExpanded(!isOpen);
    });

    document.addEventListener("click", (e) => {
      const isOpen = nav.classList.contains("is-open");
      if (!isOpen) return;
      if (nav.contains(e.target) || navToggle.contains(e.target)) return;
      setExpanded(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setExpanded(false);
    });
  }

  // Toggle "+" (Accueil)
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-toggle");
      const content = document.getElementById(id);
      if (!content) return;

      const isOpen = content.classList.contains("open");
      content.classList.toggle("open");

      btn.textContent = isOpen ? "+" : "–";
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });
})();
