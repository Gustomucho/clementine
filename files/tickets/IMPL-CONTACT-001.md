# TICKET — IMPL-CONTACT-001 Ajustements UI contact

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Le H1 de la page contact est trop espacé, ce qui affaiblit la hiérarchie.

---

## 2. Objectif

Resserrer l’en-tête tout en conservant une lisibilité intacte.

---

## 3. Contexte

- Page : `contact.html`
- Zone : en-tête (H1)
- Support : desktop et mobile

---

## 4. Contraintes

- ✅ Lisibilité intacte
- ❌ Ne pas casser le responsive

---

## 5. Hypothèses à vérifier

- H1 — Le spacing H1 est trop large pour la densité de la page
- H2 — Un ajustement ciblé suffit sans toucher aux autres sections
- H3 — L’impact est visible sur mobile et desktop

---

## 6. Périmètre

**Inclus :**
- Ajustements d’espacement sur l’en-tête de `contact.html`

**Exclus :**
- Modifications de contenu éditorial
- Changement de structure du formulaire

---

## 7. Critères d’acceptation

- [x] Le comportement est correct sur desktop
- [x] Le comportement est correct sur mobile
- [x] H1 resserré sans perte de lisibilité
- [x] Aucun effet de bord visuel
- [x] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Resserer l’en‑tête contact | Améliorer la hiérarchie |

---

## 9. Références

- Fichiers concernés : `contact.html`, `assets/css/styles.css`
- Tickets liés : `FEAT-UI-REFINE-001`

---

## 10. Étape suivante

Passer au ticket suivant : IMPL-MENU-001.

---

## Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Resserrement H1/en‑tête | `assets/css/styles.css`, `contact.html` | Densifier la hiérarchie |

---

## Plan d’ajustement (atomique)

1) Réduire l’espacement sous le H1 (page-header)
2) Vérifier desktop + mobile (lisibilité intacte)
