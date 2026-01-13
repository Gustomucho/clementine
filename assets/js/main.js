/**
 * main.js
 * - Navigation mobile (hamburger)
 * - Ferme le menu si clic en dehors
 * - Ferme le menu au resize (retour desktop)
 * - Remplit automatiquement l’année dans le footer
 */
(function () {
  // Année automatique
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Menu mobile
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!navToggle || !nav) return;

  function setExpanded(isOpen) {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
  }

  // Toggle menu
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    setExpanded(!isOpen);
  });

  // Clic en dehors = fermer
  document.addEventListener("click", (e) => {
    const isOpen = nav.classList.contains("is-open");
    if (!isOpen) return;
    if (nav.contains(e.target) || navToggle.contains(e.target)) return;
    setExpanded(false);
  });

  // Resize = fermer si repasse en desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) setExpanded(false);
  });
})();
