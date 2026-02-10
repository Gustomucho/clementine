# TICKET — FEAT-HERO-002 Centrer le hero de la page d'accueil

**Statut :** ⏳ Ouvert | 🔍 En analyse | 🛠 En cours | ✅ Résolu | 📦 Archivé  
**Créé le :** 2026-02-10  
**Dernière mise à jour :** 2026-02-10  
**Responsable :** Codex

---

## Type
Feature

---

## 1. Problème / Besoin

Le bloc d’accueil ("Salut" + texte + boutons) n’est pas centré verticalement sur toutes les tailles d’écran.

---

## 2. Objectif

Centrer verticalement et horizontalement le bloc hero de la page d’accueil, quel que soit le viewport.

---

## 3. Contexte

- Page : `index.html`
- Styles : `assets/css/styles.css`
- Zone : `.hero-snap`, `.hero-snap-inner`, `.hero-overlay`

---

## 4. Contraintes

- ✅ Pas de décalage vers le haut
- ✅ Comportement stable sur desktop et mobile
- ✅ Pas de refonte du contenu

---

## 5. Hypothèses à vérifier

- H1 — Le centrage dépend de marges/padding variables
- H2 — Les media queries écrasent les réglages globaux
- H3 — Le hero n’utilise pas un layout centré (flex)

---

## 6. Périmètre

**Inclus :**
- Ajustements CSS du hero sur la page d’accueil

**Exclus :**
- Changement de contenu
- Modification des autres pages

---

## 7. Critères d’acceptation

- [ ] Le bloc hero est centré verticalement et horizontalement sur desktop
- [ ] Le bloc hero est centré verticalement et horizontalement sur mobile
- [ ] Aucun effet de bord sur les autres sections
- [ ] Test visuel reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-02-10 | Créer un ticket feature de centrage hero | Demande utilisateur |

---

## 9. Références

- Fichiers concernés : `index.html`, `assets/css/styles.css`
- Tickets liés : —
- Docs : —

---

## 10. Étape suivante

Explorer sans coder les modifications CSS nécessaires et proposer un plan d’implémentation.
