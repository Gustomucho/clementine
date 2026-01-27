# TICKET — UI-SCROLL-001 Effet de scroll dynamique par ancres

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

La navigation par ancres ne déclenche pas de scroll dynamique guidant l'utilisateur d'une section clé à l'autre. Sur `index.html`, le scroll devrait amener directement au titre "souvenir sonore". Sur `souvenirs-sonores.html` et `souvenirs-illustres.html`, une ancre doit amener à la section "comment ca marche".

---

## 2. Objectif

Permettre un défilement dynamique entre sections via ancres, avec un comportement de scroll clair et reproductible sur desktop et mobile.

---

## 3. Contexte

- Pages concernées : `index.html`, `souvenirs-sonores.html`, `souvenirs-illustres.html`
- Sections ciblées : titre "souvenir sonore" (index) et section "comment ca marche" (souvenirs)
- Effet attendu : l'ancre déclenche un scroll vers la section cible

---

## 4. Contraintes

- ❌ Ne pas casser la navigation existante ni les liens internes
- ✅ Respecter la structure HTML existante et les styles en place
- ✅ Doit fonctionner sur mobile et desktop

---

## 5. Hypothèses à vérifier

- H1 — Les ancres n'existent pas ou ne ciblent pas les bons IDs
- H2 — Le comportement de scroll est intercepté par un style ou un script existant
- H3 — La section cible n'a pas de repère stable (id, data-attribute)

---

## 6. Périmètre

**Inclus :**
- Ajout/ajustement des ancres et IDs nécessaires
- Ajustements CSS/JS si nécessaires pour l'effet de scroll

**Exclus :**
- Refactor global de navigation
- Changements visuels hors de l'effet de scroll

---

## 7. Critères d’acceptation

- [ ] Le comportement est correct sur desktop
- [ ] Le comportement est correct sur mobile
- [ ] Aucun effet de bord visuel
- [ ] Le test est reproductible
- [ ] Sur `index.html`, l'ancre scroll vers le titre "souvenir sonore"
- [ ] Sur `souvenirs-sonores.html` et `souvenirs-illustres.html`, l'ancre scroll vers "comment ca marche"

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Ticket créé | Formaliser la demande d'effet de scroll par ancres |
| 2026-01-27 | Diagnostic | Les sections ciblées n'ont pas d'`id` d'ancre : `index.html` a un `#decouvrir` mais le titre \"Les souvenirs sonores\" n'est pas ciblable, et les titres \"Concrètement, comment ça marche ?\" dans `souvenirs-sonores.html` et `souvenirs-illustres.html` n'ont pas d'`id` |
| 2026-01-27 | Analyse clôturée | Prêt pour création du ticket FIX |

---

## 9. Références

- Fichiers concernés : `index.html`, `souvenirs-sonores.html`, `souvenirs-illustres.html`, `assets/css/styles.css`
- Tickets liés :
- Docs :

---

## 10. Étape suivante

Créer le ticket FIX et définir le plan de correction.
