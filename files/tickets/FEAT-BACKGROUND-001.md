# TICKET — FEAT-BACKGROUND-001 Uniformiser le background du site

**Statut :** ✅ Résolu  
**Créé le :** 2026-02-10  
**Dernière mise à jour :** 2026-02-10  
**Responsable :** Codex

---

## Type
Feature

---

## 1. Problème / Besoin

Les pages utilisent des backgrounds hétérogènes ou localisés, ce qui casse l’unité visuelle du site.

---

## 2. Objectif

Appliquer un unique background commun à tout le site via le `body`, et supprimer les backgrounds posés ailleurs.

---

## 3. Contexte

- Image fournie : `assets/img/arriere-plan.png`
- Styles globaux : `assets/css/styles.css`
- Styles inline possibles sur certaines pages

---

## 4. Contraintes

- ✅ Utiliser le même background sur toutes les pages
- ✅ Appliquer le background au `body`
- ✅ Supprimer les backgrounds redondants ailleurs

---

## 5. Hypothèses à vérifier

- H1 — Des backgrounds inline masquent le background global
- H2 — Certaines sections utilisent un `background` explicite
- H3 — Le cache empêche de voir le changement immédiatement

---

## 6. Périmètre

**Inclus :**
- `assets/css/styles.css` (background `body`)
- Suppression de backgrounds locaux/inline

**Exclus :**
- Changement de contenu
- Refonte de la mise en page

---

## 7. Critères d’acceptation

- [x] Le même background apparaît sur toutes les pages
- [x] Aucun background local ne masque celui du `body`
- [x] Rendu correct sur desktop et mobile
- [x] Test visuel reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-02-10 | Centraliser le background sur `body` | Uniformiser le site |

---

## 9. Références

- Fichiers concernés : `assets/css/styles.css`, pages HTML (styles inline)
- Tickets liés : —
- Docs : —

---

## 10. Étape suivante

Explorer sans coder les backgrounds existants et proposer un plan d’implémentation.

---

## Clôture
Résumé:
- Ce qui a été appris : les fonds locaux masquaient le background global sur certaines sections.
- Ce qui a été fait : background global conservé sur `body` et suppression des fonds de sections ciblées.
- Ce qui reste à faire : rien.

Date de clôture: 2026-02-10
