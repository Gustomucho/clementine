# FIX — FIX-UI-SPACING-001 Uniformiser les marges globales

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème (résumé du diagnostic)

Lien vers ticket d’analyse : `UI-SPACING-001`

Les marges et paddings sont définis localement dans de nombreux composants, sans échelle centralisée, ce qui crée des écarts non uniformes entre pages.

---

## 2. Objectif

Mettre en place une échelle de spacing centralisée et harmoniser les marges verticales/horizontales sur tout le site, en conservant des exceptions ciblées (hero, blocs spécifiques).

---

## 3. Contraintes

- ❌ Ne pas casser le responsive
- ✅ Conserver la lisibilité
- ✅ Préserver des exceptions nécessaires (hero, blocs spécifiques)

---

## 4. Plan de correction (atomique)

1. Définir une échelle de spacing (tokens) dans `:root`
2. Appliquer cette échelle aux sections globales (`.section`, `.page-header`, `.text`, `.cta-row`)
3. Identifier et conserver les exceptions nécessaires (hero, services, pages spécifiques)
4. Vérifier desktop + mobile (aucun effet de bord)

> ⚠️ Une étape = une action testable

---

## 5. Critères d’acceptation

- [x] Marges verticales et horizontales uniformisées
- [x] Lisibilité conservée
- [x] Exceptions documentées et justifiées
- [x] Responsive intact (desktop + mobile)
- [x] Aucun effet de bord visuel
- [x] Tests validés

---

## 6. Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Ajout tokens spacing | `assets/css/styles.css` | Centraliser l’échelle |
| 2026-01-27 | Application tokens aux blocs globaux | `assets/css/styles.css` | Harmoniser marges |
| 2026-01-27 | Harmonisation sans exceptions (hero/services/pages) | `assets/css/styles.css`, `graphisme-illustrations.html`, `contact.html` | Uniformiser partout |

---

## Exceptions documentées

- Aucune exception conservée : tous les espacements sont alignés sur l’échelle standard.

---

## 7. Revue adverse

Risques restants : l’uniformisation stricte peut rendre certaines sections moins dynamiques (hero, services).

---

## 8. Décision finale

Solution retenue car elle apporte une cohérence globale et reste réversible si besoin.

---

## 9. Références

- Ticket analyse : `UI-SPACING-001`
- Commits :
- Fichiers impactés : `assets/css/styles.css`, pages HTML

---

## 10. Prochaine étape

Proposer un commit traçable.

---

## Clôture
Résumé:
- Ce qui a été appris : une échelle de spacing centralisée simplifie la cohérence globale.
- Ce qui a été fait : tokens ajoutés, marges globales alignées, exceptions supprimées.
- Ce qui reste à faire : rien, hors validation finale du commit.

Date de clôture: 2026-01-27
