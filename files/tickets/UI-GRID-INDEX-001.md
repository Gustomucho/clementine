# TICKET — UI-GRID-INDEX-001 Réécriture de la grille 2 colonnes / 3 lignes (index)

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

La section grille 2 colonnes / 3 lignes de `index.html` doit être réécrite proprement pour refléter un nouvel agencement, sans modifier ni supprimer les textes existants.

---

## 2. Objectif

Réorganiser la grille selon l’ordre demandé (1A, 1B, 2A, 2B, 3A, 3B) en conservant tous les textes existants et sans en créer de nouveaux.

---

## 3. Contexte

- Page : `index.html`
- Zone : section “grille 2 colonnes / 3 lignes”
- Device : desktop et mobile

---

## 4. Contraintes

- ❌ Ne pas créer de nouveau texte
- ❌ Ne pas modifier les textes existants
- ❌ Ne pas supprimer les textes existants
- ✅ 2A vide mais commenté dans le HTML pour ajout futur

---

## 5. Hypothèses à vérifier

- H1 — La grille actuelle ne correspond pas à l’ordre souhaité
- H2 — Le repositionnement peut se faire sans toucher aux textes
- H3 — La structure HTML peut être réorganisée sans casser le responsive

---

## 6. Périmètre

**Inclus :**
- Réorganisation des blocs de la grille dans `index.html`
- Placement des images indiquées

**Exclus :**
- Modification des textes
- Refonte CSS globale

---

## 7. Critères d’acceptation

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

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
|      |          |          |

---

## 9. Références

- Fichiers concernés : `index.html`, `assets/css/styles.css`
- Tickets liés :
- Docs :

---

## 10. Étape suivante

Créer un ticket FIX (`/creer-fix`).

---

## Conclusion

**Cause principale :** la structure HTML de la grille ne correspond pas à l’ordre/cellules demandés (placements 1A/1B/2A/2B/3A/3B).  
**Cause secondaire :** le bloc audio est dupliqué (dans 1A + bloc séparé), ce qui rend le réagencement ambigu.  
**Hypothèses rejetées :** un simple ajustement CSS suffirait sans réécrire la structure HTML (faux ici, l’ordre et le contenu des cellules doivent changer).
