# FIX — UI-SCROLL-001-FIX Effet de scroll dynamique par ancres

**Statut :** 🛠 En cours  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème (résumé du diagnostic)

Lien vers ticket d’analyse : `files/tickets/UI-SCROLL-001.md`

Les sections ciblées ne sont pas ancrables : le titre "Les souvenirs sonores" sur `index.html` et les titres "Concrètement, comment ça marche ?" sur `souvenirs-sonores.html` et `souvenirs-illustres.html` n'ont pas d'`id`.

---

## 2. Objectif

Permettre un scroll par ancres vers les sections ciblées sur les trois pages, sans modifier l'apparence ni la structure globale.

---

## 3. Contraintes

- ❌ Ne pas casser la navigation existante ni les liens internes
- ✅ Respecter la structure HTML existante et les styles en place
- ✅ Fonctionner sur mobile et desktop

---

## 4. Plan de correction (atomique)

1. Ajouter des `id` d'ancre sur les titres ciblés (index + pages souvenirs).
2. Mettre à jour les liens internes pour pointer vers ces `id`.
3. Vérifier le comportement de scroll sur desktop et mobile.

> ⚠️ Une étape = une action testable

---

## 5. Critères d’acceptation

- [ ] Le bug est corrigé
- [ ] Aucun effet de bord
- [ ] Fonctionne sur desktop
- [ ] Fonctionne sur mobile
- [ ] Tests validés
- [ ] Sur `index.html`, l'ancre scroll vers le titre "Les souvenirs sonores"
- [ ] Sur `souvenirs-sonores.html` et `souvenirs-illustres.html`, l'ancre scroll vers "Concrètement, comment ça marche ?"

---

## 6. Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Ajout des ancres et mise à jour du lien \"Découvrir\" | `index.html`, `souvenirs-sonores.html`, `souvenirs-illustres.html` | Permettre le scroll par ancres vers les sections ciblées |

---

## 7. Revue adverse

Points de vigilance :
- Le lien "Découvrir" ne pointe plus vers `#decouvrir`; vérifier qu'aucun usage implicite de `#decouvrir` n'était attendu.
- Les nouveaux `id` doivent rester uniques par page (ok ici) et ne pas entrer en conflit avec d'autres ancres.
- Tester le comportement du scroll sur mobile (barre d'adresse/offset) et desktop.

---

## 8. Décision finale

Solution retenue car elle s'appuie sur des ancres HTML natives, sans JS, et respecte les contraintes d'accessibilité et de simplicité.

---

## 9. Références

- Ticket analyse : `files/tickets/UI-SCROLL-001.md`
- Commits :
- Fichiers impactés : `index.html`, `souvenirs-sonores.html`, `souvenirs-illustres.html`, `files/decisions/ADR-UI-SCROLL-001.md`

---

## 10. Prochaine étape

Demander la validation du diff et proposer le message de commit.
