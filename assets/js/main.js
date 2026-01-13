/**
 * main.js
 * - Navigation mobile (hamburger)
 * - Ferme le menu si clic en dehors
 * - Ferme le menu au resize (retour desktop)
 * - Remplit automatiquement l’année dans le footer
 * - Formulaire de contact Formspree (AJAX, sans quitter la page)
 */
(function () {
  // ======================
  // Année automatique
  // ======================
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // ======================
  // Menu mobile (si présent)
  // ======================
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (navToggle && nav) {
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
  }

  // ======================
  // Formulaire de contact (Formspree AJAX) - si présent
  // ======================
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // empêche la redirection

      // Petit feedback immédiat
      status.textContent = "Envoi en cours…";
      status.style.color = "#490D0B";

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          status.textContent = "Merci ✨ Votre message a bien été envoyé.";
          status.style.color = "#490D0B";
          form.reset();
        } else {
          status.textContent = "Oups… Une erreur est survenue. Réessayez plus tard.";
          status.style.color = "#EC423D";
        }
      } catch (error) {
        status.textContent = "Erreur de connexion. Vérifiez votre réseau.";
        status.style.color = "#EC423D";
      }
    });
  }
})();
