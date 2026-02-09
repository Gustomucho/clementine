# TICKET — FEAT-MARGES-001 Harmoniser les marges de la page Souvenirs sonores

**Statut :** ⏳ Ouvert | 🔍 En analyse | 🛠 En cours | ✅ Résolu | 📦 Archivé  
**Créé le :** 2026-02-04  
**Dernière mise à jour :** 2026-02-04  
**Responsable :** Codex

---

## Type
Feature

---

## 1. Problème / Besoin

La page "Souvenirs sonores" ne suit pas le même agencement et les mêmes marges que "Souvenirs illustrés". Le rendu paraît plus vide et moins cohérent visuellement.

---

## 2. Objectif

Aligner l’agencement et les marges de "Souvenirs sonores" sur la référence "Souvenirs illustrés" afin d’obtenir une lecture plus dense et cohérente.

---

## 3. Contexte

- Pages : `souvenirs-sonores.html` et `souvenirs-illustres.html`
- Styles communs : `assets/css/styles.css`
- Constat via captures Playwright desktop + mobile

---

## 4. Contraintes

- ❌ Ne pas modifier le contenu texte ni les illustrations
- ✅ Conserver la structure générale et le ton visuel du site
- ✅ Priorité aux marges/espacements (layout), pas de refonte

---

## 5. Hypothèses à vérifier

- H1 — Les marges supplémentaires proviennent de la combinaison `.cta-row` + `.note` sur la page sonore
- H2 — L’absence de galerie sur la page sonore accentue l’impression de vide
- H3 — La section `.steps-visual` a des marges identiques mais un contexte différent

---

## 6. Périmètre

**Inclus :**
- Ajustements d’espacements (marges/paddings) sur "Souvenirs sonores"
- Harmonisation visuelle avec "Souvenirs illustrés"

**Exclus :**
- Changement de contenu
- Refonte globale du design
- Modifications des autres pages

---

## 7. Critères d’acceptation

- [ ] Les espacements de "Souvenirs sonores" sont alignés sur "Souvenirs illustrés"
- [ ] Le rendu est cohérent sur desktop
- [ ] Le rendu est cohérent sur mobile
- [ ] Aucun effet de bord visuel sur les autres pages
- [ ] Test visuel reproductible (captures Playwright)

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-02-04 | Créer un ticket feature d’harmonisation | Préférence utilisateur : modèle "Souvenirs illustrés" |

---

## 9. Références

- Fichiers concernés : `souvenirs-sonores.html`, `souvenirs-illustres.html`, `assets/css/styles.css`
- Tickets liés : —
- Docs : —

---

## 10. Étape suivante

Explorer sans coder les écarts d’espacements précis et proposer un plan d’ajustements.
