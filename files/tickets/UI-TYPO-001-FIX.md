# FIX — UI-TYPO-001 Typo titres/sous-titres depuis assets/typo

**Statut :** 🛠 En cours  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème (résumé du diagnostic)

Lien vers ticket d’analyse : `files/tickets/UI-TYPO-001.md`

La typographie “Clementigre” est disponible dans `assets/typo` (woff2/woff) et
doit être appliquée aux titres et sous-titres. Les variantes de poids/italique
ne sont pas présentes (normal uniquement).

---

## 2. Objectif

Définir et appliquer la police “Clementigre” aux titres/sous-titres via
`@font-face` et variables CSS, sans impacter le corps de texte.

---

## 3. Contraintes

- ❌ Ne pas modifier la typo du body
- ✅ Utiliser uniquement les fichiers de `assets/typo`
- ✅ Éviter les styles non supportés (italique/gras) si absents

---

## 4. Plan de correction (atomique)

1. Déclarer `@font-face` pour “Clementigre” dans `assets/css/styles.css`.
2. Mettre à jour la variable de titres pour pointer sur “Clementigre”.
3. Vérifier le rendu des titres/sous-titres sur desktop et mobile.

> ⚠️ Une étape = une action testable

---

## 5. Critères d’acceptation

- [ ] Titres utilisent “Clementigre”
- [ ] Sous-titres utilisent “Clementigre”
- [ ] Corps de texte inchangé
- [ ] Rendu cohérent desktop/mobile

---

## 6. Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Déclaration font-face + variable titres | `assets/css/styles.css` | Utiliser la typo “Clementigre” pour les titres |

---

## 7. Revue adverse

Résumé des critiques / risques détectés après implémentation.

---

## 8. Décision finale

Utiliser la police fournie en woff2/woff pour éviter les dépendances externes
et conserver un rendu cohérent des titres.

---

## 9. Références

- Ticket analyse : `files/tickets/UI-TYPO-001.md`
- Commits : —
- Fichiers impactés : `assets/css/styles.css`, `assets/typo/`

---

## 10. Prochaine étape

Valider la disponibilité des variantes (graisse/italique) si nécessaires.
