# TICKET — FEAT-GALERIE-001 Moderniser la galerie Graphisme & illustration

**Statut :** ⏳ Ouvert | 🔍 En analyse | 🛠 En cours | ✅ Résolu | 📦 Archivé  
**Créé le :** 2026-02-04  
**Dernière mise à jour :** 2026-02-04  
**Responsable :** Codex

---

## Type
Feature

---

## 1. Problème / Besoin

La grille d’images actuelle de la page "Graphisme & illustration" a un rendu daté et trop uniforme. Les ratios sont forcés, l’effet mosaïque est rigide, et le résultat ne reflète pas une galerie éditoriale moderne.

---

## 2. Objectif

Obtenir une galerie éditoriale 2026 : ratios assumés (portrait reste portrait, paysage reste paysage), masonry, respiration généreuse, parfois en plein bord, avec peu d’effets.

---

## 3. Contexte

- Page : `graphisme-illustrations.html`
- Styles de la galerie : inline `<style>` dans la page (classe `.mosaic-*`)
- Le site est statique, pas de CSS global souhaité pour cette évolution

---

## 4. Contraintes

- ❌ Ne pas déplacer les styles vers le CSS global
- ✅ Garder la lightbox fonctionnelle
- ✅ Garder les images existantes
- ✅ Prévoir et coder un rendu spécifique pour smartphone
- ✅ Rester léger (pas de lib externe)

---

## 5. Hypothèses à vérifier

- H1 — Le ratio forcé (`aspect-ratio` + `object-fit`) empêche un rendu éditorial
- H2 — Le mode grille uniforme ne permet pas l’effet masonry
- H3 — Le fond + shadow donnent un rendu trop “carte”, peu éditorial

---

## 6. Périmètre

**Inclus :**
- Refonte du layout de la galerie (`.mosaic`, `.mosaic-grid`, `.mosaic-item`)
- Regroupement par projet si nécessaire
- Ajustements responsive liés à la galerie

**Exclus :**
- Refonte du reste de la page
- Changement d’images
- Déplacement vers `assets/css/styles.css`

---

## 7. Critères d’acceptation

- [ ] Les ratios naturels sont respectés (portrait/paysage)
- [ ] La galerie a un rendu masonry avec respiration
- [ ] Certaines images peuvent apparaître en plein bord
- [ ] Le rendu est correct sur desktop et mobile
- [ ] Une version smartphone dédiée est définie et validée
- [ ] La lightbox fonctionne toujours
- [ ] Test visuel reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-02-04 | Garder les styles inline dans `graphisme-illustrations.html` | Demande explicite de ne pas passer par CSS global |

---

## 9. Références

- Fichiers concernés : `graphisme-illustrations.html`
- Tickets liés : —
- Docs : —

---

## 10. Étape suivante

Explorer sans coder les options de layout masonry + plein bord et proposer un plan d’implémentation.
