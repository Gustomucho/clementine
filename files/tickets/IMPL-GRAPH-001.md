# TICKET — IMPL-GRAPH-001 Ajustements UI graphisme

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Le H1 est trop aéré et un témoignage paraît hors contexte.

---

## 2. Objectif

Resserrer la hiérarchie et simplifier la section sans appauvrir la page.

---

## 3. Contexte

- Page : `graphisme-illustrations.html`
- Zone : en-tête + témoignages
- Support : desktop et mobile

---

## 4. Contraintes

- ❌ Ne pas appauvrir la page
- ✅ Conserver l’équilibre visuel global

---

## 5. Hypothèses à vérifier

- H1 — Le spacing du H1 crée un rythme trop lâche
- H2 — Un témoignage ne sert pas directement la section
- H3 — Des ajustements ciblés suffisent sans refonte

---

## 6. Périmètre

**Inclus :**
- Ajustements de hiérarchie/espacements sur l’en-tête
- Réévaluation de l’emplacement/poids des témoignages

**Exclus :**
- Modifications de contenu éditorial
- Refactor layout global

---

## 7. Critères d’acceptation

- [x] Le comportement est correct sur desktop
- [x] Le comportement est correct sur mobile
- [x] Hiérarchie visuelle resserrée
- [x] Témoignages contextualisés ou simplifiés
- [x] Aucun effet de bord visuel
- [x] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Resserer H1 + retirer témoignages | Simplifier sans appauvrir |

---

## 9. Références

- Fichiers concernés : `graphisme-illustrations.html`, `assets/css/styles.css`
- Tickets liés : `FEAT-UI-REFINE-001`

---

## 10. Étape suivante

Passer au ticket suivant : IMPL-CONTACT-001.

---

## Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Resserrement H1/en‑tête | `assets/css/styles.css`, `graphisme-illustrations.html` | Densifier la hiérarchie |
| 2026-01-27 | Suppression des témoignages | `graphisme-illustrations.html` | Simplifier la page |

---

## Analyse (sans code)

- Le H1 trop aéré peut venir des marges du `.page-header` et de la taille/line-height du titre.
- Le bloc témoignages peut paraître hors contexte par son poids visuel ou sa position.
- Un ajustement local (espacements + densité) devrait suffire sans refactor.

---

## Plan d’ajustement (atomique)

1) Resserer l’espacement du H1 et de l’en‑tête
2) Supprimer la section témoignages
3) Vérifier desktop + mobile (page non appauvrie, hiérarchie claire)
