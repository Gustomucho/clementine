# TICKET — FEAT-COPY-001 Refonte texte site

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Le texte actuel ne clarifie pas assez vite le message, l’émotion et la hiérarchie visuelle sur l’ensemble du site.
L’opportunité est d’améliorer la compréhension immédiate et la mémorisation, avec un ton plus humain.

---

## 2. Objectif

Clarifier le message clé, renforcer l’émotion, et améliorer la hiérarchie des textes pour guider la lecture.
Succès = compréhension plus rapide, ton plus humain, meilleure mémorisation.

---

## 3. Contexte

- Pages concernées : toutes les pages HTML du site
- Public : visiteurs découvrant l’offre (souvenirs sonores, souvenirs illustrés, graphisme/illustration)
- Support : desktop et mobile

---

## 3bis. Exploration (sans code)

**Valeur utilisateur :**
- Compréhension immédiate de l’offre (illustré / sonore / graphisme)
- Émotion plus forte et ton plus humain
- Meilleure mémorisation et projection
- Parcours plus fluide vers contact / CTA

**IN :**
- Tous textes visibles sur les pages HTML listées dans `files/content/COPY-SOURCE.md`
- Titres, accroches, CTA, sections “comment ça marche”, témoignages

**OUT :**
- Structure HTML/CSS
- Visuels et navigation
- Mentions légales et politique de confidentialité (sauf demande explicite)

**Risques :**
- Ton trop émotionnel au détriment de la clarté
- Perte d’infos sérieuses ou légales
- Ton trop familier pour publics professionnels
- Incohérences entre pages

**Hypothèses :**
- Un message central plus direct améliore la compréhension en <10 s
- Un ton plus humain augmente l’envie de contact
- Des CTA clarifiés améliorent le passage à l’action

---

## 4. Contraintes

- ❌ Pas de modification de code dans cette étape
- ✅ Conserver la structure générale des pages
- ✅ Rester fidèle à l’identité et au ton de Clémentine Lénelle

---

## 5. Hypothèses à vérifier

- H1 — Le message principal n’est pas assez explicite dès le haut de page.
- H2 — L’émotion est présente mais manque de hiérarchie pour être mémorisée.
- H3 — Le texte est long et gagnerait à être resserré par endroits.

---

## 6. Périmètre

**Inclus :**
- Refonte des textes sur toutes les pages HTML listées dans `files/content/COPY-SOURCE.md`

**Exclus :**
- Modifications de mise en page ou de styles
- Changements d’images ou d’illustrations

---

## 7. Critères d’acceptation

- [x] Le message principal est compris en moins de 10 secondes sur chaque page
- [x] Le ton est plus humain et émotionnellement engageant
- [x] Les titres et accroches renforcent la hiérarchie visuelle
- [x] Aucun impact sur la structure HTML/CSS

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | ADR-COPY-001 validée | Encadrer l’approche “source unique + règles explicites” |

---

## 9. Références

- Fichiers concernés : `files/content/COPY-SOURCE.md`, `index.html`, `contact.html`, `graphisme-illustrations.html`, `souvenirs-sonores.html`, `souvenirs-illustres.html`
- Tickets liés :
- Docs : `files/decisions/ADR-COPY-001.md`

---

## 10. Étape suivante

Plan d’implémentation atomique (sans code).

---

## 11. Plan d’implémentation (sans code)

1) Valider la cohérence globale des textes proposés dans `files/content/COPY-SOURCE.md`
2) Ajuster les textes pour aligner ton et hiérarchie (si besoin)
3) Vérifier les CTA et titres clés page par page
4) Préparer une checklist d’intégration pour la mise en page (sans modifier le HTML/CSS)

---

## 12. Checklist d’intégration (sans code)

- [x] Chaque page HTML utilise la section “Nouvelle version proposée” de `files/content/COPY-SOURCE.md`
- [x] Les CTA conservés sont présents (index, souvenirs sonores, souvenirs illustrés)
- [x] Le gras (emphase) est conservé tel que dans `files/content/COPY-SOURCE.md`
- [x] Aucun texte “Texte actuel” n’a été injecté par erreur
- [x] Mentions légales et politique de confidentialité inchangées
- [x] Relecture finale pour cohérence de ton et de vocabulaire

---

## Clôture
Résumé:
- Ce qui a été appris : l’approche “source unique + règles explicites” évite la perte de contenu et clarifie la hiérarchie.
- Ce qui a été fait : textes validés dans `files/content/COPY-SOURCE.md` puis intégrés dans les pages HTML avec CTA et emphases conservés.
- Ce qui reste à faire : rien (hors validation finale visuelle par l’humain).

Date de clôture: 2026-01-27

## Type

Feature
