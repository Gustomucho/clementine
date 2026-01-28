# TICKET — FEAT-UI-REFINE-001 Harmonisation des espacements et hiérarchie visuelle

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Les espacements et la hiérarchie visuelle manquent d’homogénéité entre les pages, ce qui nuit à la lisibilité et à l’équilibre global du site.

---

## 2. Objectif

Améliorer la lisibilité, la cohérence et l’équilibre visuel sur l’ensemble du site.  
Succès = navigation plus claire, message plus lisible, meilleure expérience mobile/desktop.

---

## 3. Contexte

- Pages concernées : index, souvenirs illustrés, souvenirs sonores, graphisme, contact
- Support : desktop et mobile
- Enjeu : harmoniser espacements/hiérarchie sans refonte structurelle

---

## 3bis. Exploration (sans code)

**IN :**
- Ajustements d’espacements/hiérarchie par page (index, illustres, sonores, graphisme, contact)
- Ajustements ciblés du header mobile (logo)

**OUT :**
- Changements éditoriaux
- Refactor global HTML/CSS
- Modifications du player audio externe

**Risques :**
- Effet domino sur la grille services (index)
- Déséquilibre visuel entre desktop et mobile
- Perte de lisibilité si densification trop forte
- Conflits d’alignement dans le header mobile

**Hypothèses :**
- Des ajustements locaux suffisent à améliorer la hiérarchie perçue
- La cohérence inter-pages améliore la navigation et la compréhension
- Un logo mobile plus grand est possible sans augmenter la hauteur du header

---

## 4. Contraintes

- ❌ Ne pas casser le responsive
- ✅ Conserver l’identité visuelle existante
- ✅ Garder l’équilibre global des layouts

---

## 5. Hypothèses à vérifier

- H1 — Des espacements incohérents perturbent la lecture et le rythme visuel
- H2 — Une hiérarchie typographique plus claire améliore la compréhension
- H3 — Des ajustements ciblés suffisent sans refonte majeure

---

## 6. Périmètre

**Inclus :**
- Ajustements UI/espacements/hiérarchie par page
- Tickets d’implémentation dédiés par page

**Exclus :**
- Changements de contenu éditorial
- Refactor CSS/HTML massif

---

## 7. Critères d’acceptation

- [x] Lisibilité améliorée sur desktop
- [x] Lisibilité améliorée sur mobile
- [x] Hiérarchie visuelle plus claire
- [x] Aucun effet de bord visuel
- [x] Tests reproductibles

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | ADR-UI-REFINE-001 validée | Encadrer l’approche par ajustements ciblés |

---

## 9. Références

- Tickets liés : IMPL-INDEX-001, IMPL-ILLUS-001, IMPL-SON-001, IMPL-GRAPH-001, IMPL-CONTACT-001, IMPL-MENU-001
- Docs : `files/decisions/ADR-UI-REFINE-001.md`

---

## 10. Étape suivante

Clôturer la feature après revue globale.

---

## 11. Plan d’implémentation (atomique)

1) IMPL-INDEX-001 — Ajuster espacements + ordre des blocs
2) IMPL-ILLUS-001 — Densifier hiérarchie + traiter l’image hors propos
3) IMPL-SON-001 — Harmoniser “comment ça marche” + repositionner CTA
4) IMPL-GRAPH-001 — Resserer H1 + simplifier témoignages
5) IMPL-CONTACT-001 — Resserer H1
6) IMPL-MENU-001 — Agrandir le logo mobile x2 sans casser le header

---

## Clôture
Résumé:
- Ce qui a été appris : des ajustements ciblés par page permettent d’améliorer la hiérarchie sans refactor global.
- Ce qui a été fait : espacements harmonisés, ordre ajusté, CTA rapproché, logo mobile agrandi, témoignages retirés.
- Ce qui reste à faire : rien, hors validation finale visuelle globale.

Date de clôture: 2026-01-27

## Type

Feature
