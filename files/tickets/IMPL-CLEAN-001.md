# TICKET — IMPL-CLEAN-001 Nettoyage CSS/HTML inutilisés

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Des règles CSS et sections HTML ne semblent plus utilisées après les derniers ajustements UI, ce qui alourdit la base et peut créer de la confusion.

---

## 2. Objectif

Supprimer les règles/sections devenues inutiles sans impact sur le rendu.

---

## 3. Contexte

- `assets/css/styles.css` : `.hero-kicker`, `.illustre-side-img`
- `graphisme-illustrations.html` : styles `.testimonials` restants

---

## 4. Contraintes

- ❌ Ne pas casser le rendu existant
- ✅ Nettoyage ciblé uniquement

---

## 5. Hypothèses à vérifier

- H1 — `.hero-kicker` n’est plus présent dans le HTML
- H2 — `.illustre-side-img` est supprimée de la page souvenirs illustrés
- H3 — La section témoignages a été retirée de la page graphisme

---

## 6. Périmètre

**Inclus :**
- Suppression des styles/sections inutilisés identifiés

**Exclus :**
- Refactor global CSS
- Nettoyage non vérifié

---

## 7. Critères d’acceptation

- [x] Aucun changement visuel
- [x] CSS/HTML inutilisés supprimés
- [x] Aucun effet de bord
- [x] Tests reproductibles

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Nettoyage ciblé | Réduire le bruit CSS/HTML |

---

## 9. Références

- Fichiers concernés : `assets/css/styles.css`, `graphisme-illustrations.html`
- Tickets liés : `FEAT-UI-REFINE-001`

---

## 10. Étape suivante

Clôturer les tickets restants / proposer un commit.

---

## Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Suppression `.hero-kicker` + `.illustre-side-img` | `assets/css/styles.css` | Styles orphelins |
| 2026-01-27 | Suppression styles `.testimonials` | `graphisme-illustrations.html` | Section retirée |
