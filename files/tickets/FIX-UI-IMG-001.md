# FIX — FIX-UI-IMG-001 Remplacer l’image "jump" par "ramasser-fleurs" et ajuster l’alignement

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème (résumé du diagnostic)

Lien vers ticket d’analyse : `[UI-IMG-001]`

L’image affichée dans `index.html` pointe vers `Jump.webp`, et ses dimensions/alignements sont définis par `.jump-illustration` dans `assets/css/styles.css`, ce qui ne correspond pas à l’image souhaitée ni à sa présentation attendue.

---

## 2. Objectif

Afficher `ramasser-fleurs.webp` à la place de `Jump.webp`, avec une taille légèrement réduite et un centrage correct dans sa cellule, sans impacter les autres blocs.

---

## 3. Contraintes

- ❌ Ne pas modifier d’autres images ou sections
- ✅ Conserver la cohérence visuelle globale de la grille

---

## 4. Plan de correction (atomique)

1. Remplacer la source de l’image dans `index.html` par `ramasser-fleurs.webp`.
2. Ajuster les styles `.jump-illustration` pour centrer l’image et réduire légèrement sa taille.
3. Vérifier l’affichage desktop et mobile (règles responsive existantes).

> ⚠️ Une étape = une action testable

---

## 5. Critères d’acceptation

- [x] L’image affichée est `ramasser-fleurs.webp`
- [x] L’image est un peu plus petite que l’actuelle
- [x] L’image est centrée dans sa cellule
- [x] Aucun effet de bord
- [x] Fonctionne sur desktop
- [x] Fonctionne sur mobile
- [x] Tests validés

---

## 6. Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Remplacer l’image Jump par ramasser-fleurs | `index.html` | Afficher l’asset demandé |
| 2026-01-27 | Centrer et ajuster la taille de l’image | `assets/css/styles.css` | Centrage + taille réduite |
| 2026-01-27 | Agrandir légèrement la taille desktop | `assets/css/styles.css` | Ajustement visuel demandé |

---

## 7. Revue adverse

Risque principal : l’image pourrait être trop grande/petite sur certains écrans.  
Mitigation : ajustement via `clamp()` et validation desktop + mobile confirmée.

---

## 8. Décision finale

Solution retenue car elle respecte la demande (asset correct, centrage, taille ajustée) sans impact sur les autres blocs.

---

## 9. Références

- Ticket analyse : `files/tickets/UI-IMG-001.md`
- Commits :
- Fichiers impactés :

---

## 10. Prochaine étape

Clôturer le ticket.

---

## Clôture
Résumé:
- Ce qui a été appris: l’image et son alignement sont pilotés par `.jump-illustration` + asset déjà présent
- Ce qui a été fait: remplacement de l’asset + ajustement taille/centrage
- Ce qui reste à faire: rien

Date de clôture: 2026-01-27
