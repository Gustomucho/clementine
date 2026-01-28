# TICKET — IMPL-MENU-001 Ajustements UI menu mobile

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Le logo est trop petit sur mobile dans la barre de menu.

---

## 2. Objectif

Rendre le logo 2x plus grand dans le menu mobile, sans casser la hauteur du header ni masquer le menu.

---

## 3. Contexte

- Zone : header mobile (logo + menu)
- Pages concernées : toutes les pages
- Support : mobile

---

## 4. Contraintes

- ❌ Ne pas casser la hauteur du header
- ❌ Ne pas masquer le menu
- ✅ Responsive intact

---

## 5. Hypothèses à vérifier

- H1 — La taille actuelle du logo est fixée via un style mobile spécifique
- H2 — Un ajustement ciblé du logo suffit sans impacter le menu
- H3 — L’espace vertical disponible permet un logo 2x plus grand

---

## 6. Périmètre

**Inclus :**
- Ajustements CSS du logo en mode mobile

**Exclus :**
- Refactor de la navigation
- Modifications du markup HTML du header

---

## 7. Critères d’acceptation

- [x] Le logo est 2x plus grand sur mobile
- [x] Le header conserve sa hauteur
- [x] Le menu reste visible et accessible
- [x] Le comportement est correct sur mobile
- [x] Aucun effet de bord visuel
- [x] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Scale logo mobile x2 | Agrandir sans modifier la hauteur du header |

---

## 9. Références

- Fichiers concernés : `assets/css/styles.css`, `index.html` (structure header)
- Tickets liés : `FEAT-UI-REFINE-001`

---

## 10. Étape suivante

Clôturer les tickets restants de la feature.

---

## Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | `transform: scale(2)` sur `.brand-logo` mobile | `assets/css/styles.css` | Agrandir le logo sans casser le header |

---

## Analyse (sans code)

- Le logo mobile est contrôlé par `.brand-logo` dans `@media (max-width: 860px)` avec `height: 38px; max-width: 150px;`.
- Doubler la taille sans augmenter la hauteur du header nécessite soit un `transform` ciblé, soit un ajustement des paddings du header mobile.
- Un ajustement local mobile devrait suffire sans impacter le desktop.

---

## Plan d’ajustement (atomique)

1) Augmenter visuellement la taille du logo en mobile (x2) via CSS ciblé
2) Vérifier que la hauteur du header ne change pas et que le menu reste visible
3) Tester desktop + mobile (responsive intact)
