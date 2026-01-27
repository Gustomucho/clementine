# TICKET — UI-TYPO-001 Typo titres/sous-titres depuis assets/typo

**Statut :** 🔍 En analyse  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Les titres et sous-titres doivent utiliser une typographie disponible dans
`assets/typo`.

---

## 2. Objectif

Utiliser une typo personnalisée pour les titres et sous-titres, tout en
assurant une intégration cohérente sur l’ensemble du site.

---

## 3. Contexte

- Typo présente dans `assets/typo` (fichiers à identifier).
- Titres et sous-titres actuellement basés sur une variable CSS.

---

## 4. Contraintes

- ❌ Pas de changement visuel hors titres/sous-titres
- ✅ Respecter les formats de police disponibles dans `assets/typo`
- ✅ Compatible desktop + mobile

---

## 5. Hypothèses à vérifier

- H1 — Formats disponibles (woff2/woff/ttf) dans `assets/typo`
- H2 — Mapping des titres/sous-titres via variables CSS existantes
- H3 — Poids/italiques disponibles et correspondance avec les styles actuels

---

## 6. Périmètre

**Inclus :**
- Déclaration `@font-face` pour la typo titres/sous-titres
- Ajustement de la variable de police titres

**Exclus :**
- Changement de la typographie du corps de texte

---

## 7. Critères d’acceptation

- [ ] Titres utilisent la nouvelle typo
- [ ] Sous-titres utilisent la nouvelle typo
- [ ] Aucun impact sur la typo du corps de texte
- [ ] Rendu correct desktop/mobile

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Diagnostic initial (sans correction) | Identifier les assets typo disponibles |

---

## 9. Diagnostic (observations)

1) Actifs disponibles
- Dossier : `assets/typo/`
- Fichiers : `Clementigre.woff2`, `Clementigre.woff`, `stylesheet.css`

2) Déclaration fournie
- `assets/typo/stylesheet.css` définit :
  - font-family: `Clementigre`
  - formats `woff2` + `woff`
  - weight: normal, style: normal
  - font-display: swap

3) Points à vérifier avant correction
- Où sont définis les titres/sous-titres (variables CSS, classes, balises)
- Correspondance des poids/italiques requis (seul “normal” disponible)

4) Risques si correction sans diagnostic complet
- Styles italique/gras forcés sur une police sans variantes.
- Incohérences visuelles entre titres et sous-titres.

---

## 9. Références

- Fichiers concernés : `assets/css/styles.css`, `assets/typo/`
- Tickets liés : —
- Docs : `files/AGENT-RULES.md`

---

## 10. Étape suivante

Inspecter les polices disponibles dans `assets/typo` et documenter les formats
et variantes avant toute correction.
