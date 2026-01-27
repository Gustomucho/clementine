# FIX — UI-BG-002 Correction fond d’écran (bandes latérales)

**Statut :** 🛠 En cours  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème (résumé du diagnostic)

Lien vers ticket d’analyse : `files/tickets/UI-BG-002.md`

Le fond est appliqué au `body` avec une image centrée, répétée uniquement en Y
et de taille auto. Sur grands viewports, la texture ne couvre pas la largeur,
ce qui laisse apparaître la couleur de fond sur les côtés.

---

## 2. Objectif

Avoir un fond homogène sur toute la largeur, sans bandes latérales visibles, en
conservant l’aspect “papier” du motif sur desktop et mobile.

---

## 3. Contraintes

- ❌ Ne pas déformer la texture
- ✅ Conserver l’aspect “papier”
- ✅ Comportement cohérent desktop + mobile

---

## 4. Plan de correction (atomique)

1. Acter un fond étiré en largeur (sans tuilage X).
2. Appliquer le changement CSS minimal dans `assets/css/styles.css`.
3. Vérifier l’absence de bandes latérales sur desktop/mobile.

> ⚠️ Une étape = une action testable

---

## 5. Critères d’acceptation

- [ ] Le bug est corrigé
- [ ] Aucun effet de bord
- [ ] Fonctionne sur desktop
- [ ] Fonctionne sur mobile
- [ ] Tests visuels validés

---

## 6. Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Mise à jour du background-repeat | `assets/css/styles.css` | Éviter les bandes latérales sans étirer la texture |
| 2026-01-27 | Ajustement du background-size | `assets/css/styles.css` | Étirer la texture en largeur pour supprimer les joints |

---

## 7. Revue adverse

Résumé des critiques / risques détectés après implémentation.

---

## 8. Décision finale

Étirer la texture sur la largeur du viewport pour supprimer les bandes sans
tuilage visible.

---

## 9. Références

- Ticket analyse : `files/tickets/UI-BG-002.md`
- Commits : —
- Fichiers impactés : `assets/css/styles.css`

---

## 10. Prochaine étape

Ouvrir un ticket de revue visuelle si des ajustements d’image sont nécessaires.
