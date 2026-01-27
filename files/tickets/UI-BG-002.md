# TICKET — UI-BG-002 Fond d’écran avec bandes blanches sur les côtés

**Statut :** 🔍 En analyse  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Le fond d’écran ne remplit pas toute la largeur de l’écran. Des bandes blanches
apparaissent sur les côtés selon la taille du viewport.

---

## 2. Objectif

Comprendre pourquoi le fond n’occupe pas toute la largeur et identifier les
conditions qui déclenchent l’apparition des bandes latérales.

---

## 3. Contexte

- Observé sur la page d’accueil (fond papier).
- Apparition variable selon la largeur de l’écran.
- Capture fournie par l’utilisateur (dans la conversation).

---

## 4. Contraintes

- ❌ Ne pas modifier le rendu sans diagnostic validé
- ✅ Conserver l’aspect “papier” du fond
- ✅ Comportement cohérent desktop + mobile

---

## 5. Hypothèses à vérifier

- H1 — Background appliqué sur un parent contraint (container) plutôt que sur body
- H2 — Propriété `background-size` inadaptée (contain/auto) laissant des marges
- H3 — `background-repeat` limité (ex. seulement en Y) sur un motif trop étroit
- H4 — `max-width` / `padding` global qui réduit la zone peinte
- H5 — Media queries modifiant le fond selon la largeur

---

## 6. Périmètre

**Inclus :**
- Règles CSS de fond (body/html, sections globales)
- Variations desktop/tablette/mobile

**Exclus :**
- Refonte de la texture ou création d’un nouveau fond

---

## 7. Critères d’acceptation

- [ ] Le fond couvre toute la largeur sur desktop
- [ ] Le fond couvre toute la largeur sur mobile
- [ ] Aucune bande blanche visible en conditions normales
- [ ] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Diagnostic initial (sans correction) | Identifier les règles responsables des bandes latérales |

---

## 9. Diagnostic (observations)

1) Éléments responsables
- `body` porte l’image de fond (pas de wrapper limitant la largeur).

2) Règles CSS impliquées
- `assets/css/styles.css` : `background-image`, `background-position: center top`,
  `background-repeat: repeat-y`, `background-size: auto` sur `body`.

3) Comportement observé selon tailles d’écran
- Sur viewport large, la texture ne couvre pas la largeur.
- L’image est centrée et répétée uniquement en Y, donc la couleur de fond
  apparaît sur les côtés.

4) Hypothèse principale + secondaires
- Principale : image trop étroite + `repeat-y` seulement, donc pas de tuilage en X.
- Secondaires : absence de `background-size` couvrant la largeur ; sections avec
  background opaque pouvant donner l’illusion de coupure.

5) Risques si correction sans diagnostic complet
- Étirement/aliasing si on force un cover.
- Jointures visibles si on force une répétition X avec une texture non “tileable”.

---

## 9. Références

- Fichiers concernés : `assets/css/styles.css`
- Tickets liés : —
- Docs : `files/AGENT-RULES.md`

---

## 10. Étape suivante

Lancer le diagnostic (inspection CSS + comportement selon tailles d’écran) et
documenter les causes possibles sans appliquer de correction.
