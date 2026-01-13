/**
 * main.js
 * - Navigation mobile (hamburger)
 * - Ferme le menu si clic en dehors
 * - Ferme le menu si on repasse en desktop (resize)
 * - Remplit automatiquement l’année dans le footer
 */
(function () {
  // 1) Année automatique dans le footer
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // 2) Menu mobile (hamburger)
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  // Si la page n'a pas de nav (ou structure différente), on ne fait rien
  if (!navToggle || !nav) return;

  function setExpanded(isOpen) {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
  }

  // Toggle au clic
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    setExpanded(!isOpen);
  });

  // Fermer le menu si clic en dehors (mobile)
  document.addEventListener("click", (e) => {
    const isOpen = nav.classList.contains("is-open");
    if (!isOpen) return;
    if (nav.contains(e.target) || navToggle.contains(e.target)) return;
    setExpanded(false);
  });

  // Fermer au resize quand on repasse en desktop (évite états bizarres)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) setExpanded(false);
  });
})();
