# TICKET — UI-IMG-001 Remplacer l’image "jump" par "ramasser-fleurs" dans index.html

**Statut :** ✅ Résolu (analyse)  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

La page `index.html` affiche actuellement l’image "jump".  
Le besoin est de remplacer cette image par "ramasser-fleurs", tout en l’affichant légèrement plus petite et centrée dans sa cellule.

---

## 2. Objectif

Afficher l’image "ramasser-fleurs" à la place de "jump", avec une taille légèrement réduite et un centrage correct dans la cellule.

---

## 3. Contexte

- Page concernée : `index.html`
- Étapes : ouvrir la page et observer la cellule contenant l’image "jump"
- Device : desktop (à confirmer)

---

## 4. Contraintes

- ❌ Ne pas modifier d’autres éléments visuels non liés
- ✅ Conserver une présentation cohérente avec le reste de la page

---

## 5. Hypothèses à vérifier

- H1 — L’image "jump" est référencée directement dans `index.html` → Confirmée (img `.jump-illustration`)
- H2 — La taille et l’alignement sont contrôlés par des styles CSS existants → Confirmée (classe `.jump-illustration` dans `assets/css/styles.css`)
- H3 — L’image "ramasser-fleurs" est déjà disponible dans les assets du projet → Confirmée (`assets/img/illustrations-site/ramasser-fleurs.webp`)

---

## 6. Périmètre

**Inclus :**
- Remplacement de la source d’image dans `index.html`
- Ajustement léger de la taille et du centrage de l’image dans sa cellule

**Exclus :**
- Refonte générale du layout
- Modifications d’autres images ou sections

---

## 7. Critères d’acceptation

- [ ] L’image affichée est "ramasser-fleurs"
- [ ] L’image est légèrement plus petite que l’actuelle
- [ ] L’image est centrée dans sa cellule
- [ ] Le comportement est correct sur desktop
- [ ] Le comportement est correct sur mobile
- [ ] Aucun effet de bord visuel
- [ ] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Analyse terminée | La source et les styles sont identifiés, l’asset cible est présent |

---

## 9. Références

- Fichiers concernés : `index.html`
- Tickets liés :
- Docs :

---

## 10. Conclusion (analyse)

L’image affichée provient d’un `<img>` `jump-illustration` dans `index.html` pointant vers `assets/img/illustrations-site/Jump.webp`.  
La taille et l’alignement sont contrôlés via la classe `.jump-illustration` dans `assets/css/styles.css`.  
L’asset cible `ramasser-fleurs.webp` est déjà présent dans `assets/img/illustrations-site/`.

---

## 11. Étape suivante

Créer un ticket FIX.
