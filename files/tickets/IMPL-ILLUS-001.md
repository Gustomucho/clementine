# TICKET — IMPL-ILLUS-001 Ajustements UI souvenirs illustrés

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

La page “Souvenirs illustrés” présente des interlignes trop grands et l’image bébé semble hors propos.

---

## 2. Objectif

Densifier la hiérarchie typographique et épurer la page sans casser la grille.

---

## 3. Contexte

- Page : `souvenirs-illustres.html`
- Zone : contenu principal + image illustrative
- Support : desktop et mobile

---

## 4. Contraintes

- ❌ Ne pas casser la grille
- ✅ Conserver la lisibilité

---

## 5. Hypothèses à vérifier

- H1 — Les marges/interlignes actuels rendent la lecture trop aérée
- H2 — L’image latérale n’est pas alignée avec le récit de la page
- H3 — Un ajustement typographique suffit sans toucher au layout global

---

## 6. Périmètre

**Inclus :**
- Ajustements d’interlignes/marges et présence de l’image sur la page

**Exclus :**
- Modifications de contenu éditorial
- Refactor de la grille globale

---

## 7. Critères d’acceptation

- [x] Le comportement est correct sur desktop
- [x] Le comportement est correct sur mobile
- [x] Hiérarchie visuelle plus dense et lisible
- [x] L’image hors propos est supprimée ou repositionnée de façon cohérente
- [x] Aucun effet de bord visuel
- [x] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Densifier + retirer l’image latérale | Épurer la page sans casser la grille |

---

## 9. Références

- Fichiers concernés : `souvenirs-illustres.html`, `assets/css/styles.css`
- Tickets liés : `FEAT-UI-REFINE-001`

---

## 10. Étape suivante

Passer au ticket suivant : IMPL-SON-001.

---

## Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Ajustement interlignes `.illustre-content .text` | `assets/css/styles.css` | Densifier la hiérarchie |
| 2026-01-27 | Suppression de l’image latérale | `souvenirs-illustres.html` | Épurer la page |

---

## Analyse (sans code)

- Les interlignes “trop grands” peuvent venir des marges verticales des paragraphes `.text` et d’un `line-height` global généreux.
- L’image “bébé” correspond à `.illustre-side-img` (`assets/img/illustrations-site/Bebe.webp`) et peut paraître déconnectée du récit, surtout en regard du contenu textuel.
- Un ajustement ciblé sur la page (CSS localisé) devrait suffire sans casser la grille.

---

## Plan d’ajustement (atomique)

1) Réduire les marges verticales des paragraphes `.text` sur la page “Souvenirs illustrés”
2) Masquer ou déplacer l’image `.illustre-side-img` pour épurer la page
3) Vérifier desktop + mobile (grille intacte, lisibilité conservée)
