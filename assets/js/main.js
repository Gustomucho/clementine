/**
 * main.js
 * - Navigation mobile (hamburger)
 *   - Toggle menu
 *   - Ferme le menu si clic en dehors
 *   - Ferme le menu au resize (retour desktop)
 *   - Ferme le menu quand on clique un lien
 * - Remplit automatiquement l’année dans le footer
 * - Formulaire de contact Formspree (AJAX, sans quitter la page)
 *   - Désactive le bouton pendant l’envoi
 *   - Messages d’état accessibles (aria-live)
 *   - Gère erreurs réseau + erreurs Formspree
 */
(function () {
  "use strict";

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

    function isOpen() {
      return nav.classList.contains("is-open");
    }

    // Toggle menu
    navToggle.addEventListener("click", () => setExpanded(!isOpen()));

    // Clic en dehors = fermer
    document.addEventListener("click", (e) => {
      if (!isOpen()) return;
      if (nav.contains(e.target) || navToggle.contains(e.target)) return;
      setExpanded(false);
    });

    // Ferme le menu quand on clique sur un lien (utile sur mobile)
    nav.addEventListener("click", (e) => {
      const link = e.target && e.target.closest ? e.target.closest("a") : null;
      if (!link) return;
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
    // Accessibilité: annoncer les changements
    status.setAttribute("aria-live", "polite");
    status.setAttribute("role", "status");

    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');

    function setStatus(message, kind) {
      status.textContent = message;

      // Couleurs en dur ici pour éviter de toucher au CSS global
      if (kind === "success") status.style.color = "#490D0B";
      else if (kind === "error") status.style.color = "#EC423D";
      else status.style.color = "#490D0B";
    }

    function setSubmitting(isSubmitting) {
      if (!submitBtn) return;
      submitBtn.disabled = isSubmitting;
      submitBtn.setAttribute("aria-disabled", String(isSubmitting));

      // Petit feedback texte bouton (sans casser ton style)
      if (isSubmitting) {
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = "Envoi…";
      } else if (submitBtn.dataset.originalText) {
        submitBtn.textContent = submitBtn.dataset.originalText;
        delete submitBtn.dataset.originalText;
      }
    }

    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // empêche la redirection Formspree

      // Validation HTML5 basique
      if (!form.checkValidity()) {
        setStatus("Il manque une information (ou une adresse email n’est pas valide).", "error");
        // Affiche les bulles natives du navigateur si besoin
        form.reportValidity && form.reportValidity();
        return;
      }

      setSubmitting(true);
      setStatus("Envoi en cours…", "info");

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: (form.method || "POST").toUpperCase(),
          body: data,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          setStatus("Merci ✨ Votre message a bien été envoyé.", "success");
          form.reset();
        } else {
          // Formspree renvoie souvent du JSON avec un champ errors
          let message = "Oups… Une erreur est survenue. Réessayez plus tard.";
          try {
            const json = await response.json();
            if (json && Array.isArray(json.errors) && json.errors.length) {
              // On affiche une version courte et utile
              message = json.errors.map((err) => err.message).join(" ");
            }
          } catch (_) {
            // ignore si pas du JSON
          }
          setStatus(message, "error");
        }
      } catch (error) {
        setStatus("Erreur de connexion. Vérifiez votre réseau puis réessayez.", "error");
      } finally {
        setSubmitting(false);
      }
    });
  }
})();
