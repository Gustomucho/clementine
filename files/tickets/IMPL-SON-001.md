# TICKET — IMPL-SON-001 Ajustements UI souvenirs sonores

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

La carte “comment ça marche” est incohérente avec le reste de la page et le CTA est mal placé.

---

## 2. Objectif

Harmoniser la section avec la page “Souvenirs illustrés” et rapprocher le CTA de l’audio.

---

## 3. Contexte

- Page : `souvenirs-sonores.html`
- Zone : section “comment ça marche” + CTA
- Support : desktop et mobile

---

## 4. Contraintes

- ❌ Ne pas casser la logique audio
- ✅ Conserver la clarté du parcours

---

## 5. Hypothèses à vérifier

- H1 — La structure de la section n’est pas alignée avec celle des souvenirs illustrés
- H2 — Le CTA est trop éloigné de l’élément audio principal
- H3 — Des ajustements de spacing/ordre suffisent

---

## 6. Périmètre

**Inclus :**
- Ajustements de la section “comment ça marche” et position du CTA

**Exclus :**
- Modifications de contenu éditorial
- Changements du player audio externe

---

## 7. Critères d’acceptation

- [x] Le comportement est correct sur desktop
- [x] Le comportement est correct sur mobile
- [x] La section “comment ça marche” est harmonisée
- [x] Le CTA est visuellement proche de l’audio
- [x] Aucun effet de bord visuel
- [x] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | CTA remonté + densité steps ajustée | Harmoniser la section et rapprocher l’action |

---

## 9. Références

- Fichiers concernés : `souvenirs-sonores.html`, `assets/css/styles.css`
- Tickets liés : `FEAT-UI-REFINE-001`

---

## 10. Étape suivante

Passer au ticket suivant : IMPL-GRAPH-001.

---

## Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | CTA remonté après les étapes | `souvenirs-sonores.html` | Rapprocher l’action du bloc audio |
| 2026-01-27 | Espacements steps resserrés | `souvenirs-sonores.html` | Harmoniser la section |

---

## Analyse (sans code)

- La section “comment ça marche” (cartes) est visuellement différente du parcours des “Souvenirs illustrés”, d’où l’incohérence perçue.
- Le CTA est éloigné du player et des étapes, ce qui casse le flux d’action.
- Un repositionnement et un ajustement de spacing local devraient suffire sans refactor global.

---

## Plan d’ajustement (atomique)

1) Rapprocher le CTA du player audio (remonter le bloc CTA)
2) Harmoniser les espacements de la section “comment ça marche”
3) Vérifier desktop + mobile (logique audio conservée)
