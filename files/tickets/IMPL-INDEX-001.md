# TICKET — IMPL-INDEX-001 Ajustements UI index

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Sur la page d’accueil, l’espace au-dessus de “Salut” est trop important, le bloc audio est trop éloigné de “Souvenirs illustrés” et l’ordre des sections doit être inversé : afficher d’abord la ligne “Souvenirs illustrés”, puis la ligne “Souvenirs sonores”.

---

## 2. Objectif

Rapprocher le titre du haut, harmoniser les espacements et réordonner les blocs pour une hiérarchie plus claire.

---

## 3. Contexte

- Page : `index.html`
- Zone : hero + section services
- Support : desktop et mobile

---

## 4. Contraintes

- ❌ Ne pas casser le responsive
- ❌ Aucun chevauchement de blocs
- ✅ Conserver l’équilibre global du layout

---

## 5. Hypothèses à vérifier

- H1 — Les marges/paddings du hero créent un vide excessif au-dessus du titre
- H2 — La grille services crée une distance trop grande entre audio et “Souvenirs illustrés”
- H3 — L’ordre actuel des blocs casse la lecture naturelle

---

## 6. Périmètre

**Inclus :**
- Ajustements d’espacements et d’ordre des blocs sur `index.html`

**Exclus :**
- Modifications de contenu éditorial
- Refactor global du layout

---

## 7. Critères d’acceptation

- [x] Le comportement est correct sur desktop
- [x] Le comportement est correct sur mobile
- [x] Les espaces au-dessus de “Salut” sont resserrés
- [x] L’audio est visuellement plus proche du bloc “Souvenirs illustrés”
- [x] Aucun effet de bord visuel
- [x] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Ajuster hero + grille services | Resserer l’espace et réordonner les blocs |

---

## 9. Références

- Fichiers concernés : `index.html`, `assets/css/styles.css`
- Tickets liés : `FEAT-UI-REFINE-001`

---

## 10. Étape suivante

Passer au ticket suivant : IMPL-ILLUS-001.

---

## Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | `margin-top` réduit sur `.hero-overlay` | `assets/css/styles.css` | Resserer l’espace au-dessus du H1 |
| 2026-01-27 | `gap` vertical réduit + réordonnancement grille services | `assets/css/styles.css` | Rapprocher les blocs et inverser l’ordre |
| 2026-01-27 | Audio déplacé en ligne 2 (colonne gauche) | `assets/css/styles.css` | Aligner l’audio en face du bloc “Souvenirs sonores” |

---

## Analyse (sans code)

- L’espace au-dessus de “Salut” vient probablement des paddings/margins du hero (`.hero-snap`, `.hero-overlay`, `.hero-title`) et du scroll-snap qui amplifie la respiration visuelle.
- La distance entre le bloc audio et “Souvenirs illustrés” est liée au `gap` vertical de `.services-layout-inner` et à la disposition en grille.
- L’ordre “illustrés puis sonores” nécessite une inversion de placement dans la grille (via `grid-row`/`grid-column` ou réordonnancement des blocs).

---

## Plan d’ajustement (atomique)

1) Réduire l’espace au-dessus du H1 “Salut” (hero) via les marges/paddings ciblés
2) Diminuer le `gap` vertical de la grille services pour rapprocher audio et “Souvenirs illustrés”
3) Inverser l’ordre des sections pour afficher “Souvenirs illustrés” avant “Souvenirs sonores”
4) Vérifier desktop + mobile (aucun chevauchement, responsive intact)
