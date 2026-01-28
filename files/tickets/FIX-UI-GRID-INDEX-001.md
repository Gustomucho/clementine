# FIX — FIX-UI-GRID-INDEX-001 Réécriture grille services (index)

**Statut :** ⏳ Ouvert  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème (résumé du diagnostic)

Lien vers ticket d’analyse : `UI-GRID-INDEX-001`

La structure HTML de la grille ne correspond pas aux cellules demandées (1A/1B/2A/2B/3A/3B) et l’audio est dupliqué.

---

## 2. Objectif

Réorganiser la grille dans `index.html` selon l’ordre demandé, sans créer ni modifier de texte, en conservant tous les textes existants.

---

## 3. Contraintes

- ❌ Ne pas créer de nouveau texte
- ❌ Ne pas modifier les textes existants
- ❌ Ne pas supprimer les textes existants
- ✅ 2A vide mais commenté dans le HTML
- ✅ Responsive intact

---

## 4. Plan de correction (atomique)

1. Réorganiser les blocs HTML pour obtenir 1A/1B/2A/2B/3A/3B
2. Déplacer l’audio sous “Souvenirs sonores” en 2B
3. Placer les images `Porter-sur-le-dos.webp` (1B) et `ramasser-fleurs.webp` (3B)
4. Vérifier desktop + mobile (aucun texte modifié)

> ⚠️ Une étape = une action testable

---

## 5. Critères d’acceptation

- [ ] Le comportement est correct sur desktop
- [ ] Le comportement est correct sur mobile
- [ ] 1A = Les Souvenirs illustrés
- [ ] 1B = image `Porter-sur-le-dos.webp`
- [ ] 2A = vide et commenté dans le HTML
- [ ] 2B = Les Souvenirs Sonores + audio en dessous
- [ ] 3A = Graphisme et illustration
- [ ] 3B = image `ramasser-fleurs.webp`
- [ ] Aucun effet de bord visuel
- [ ] Le test est reproductible

---

## 6. Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
|      |        |          |          |

---

## 7. Revue adverse

À compléter après implémentation.

---

## 8. Décision finale

À compléter après implémentation.

---

## 9. Références

- Ticket analyse : `UI-GRID-INDEX-001`
- Commits :
- Fichiers impactés : `index.html`, `assets/css/styles.css`

---

## 10. Prochaine étape

Implémenter l’étape 1 du plan.
