# FIX — UI-TYPO-002 Doubler la taille des textes en Clementigre

**Statut :** 🛠 En cours  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème (résumé du diagnostic)

Lien vers ticket d’analyse : `files/tickets/UI-TYPO-002.md`

Les tailles des titres/sous-titres en Clementigre doivent être doublées. Les
tailles actuelles sont définies dans `.h1`, `.h2`, `.hero-title` et `.snap-h2`,
avec une variante responsive pour `.snap-h2`.

---

## 2. Objectif

Doubler les tailles des textes en Clementigre tout en conservant un rendu
cohérent sur desktop et mobile.

---

## 3. Contraintes

- ❌ Ne pas changer la typo du corps de texte
- ✅ Conserver les styles existants
- ✅ Adapter les tailles responsive si nécessaire

---

## 4. Plan de correction (atomique)

1. Mettre à jour les tailles de `.h1`, `.h2`, `.hero-title`, `.snap-h2`.
2. Ajuster les tailles dans les breakpoints si besoin.
3. Vérifier les débordements dans les sections clés (hero/services).

> ⚠️ Une étape = une action testable

---

## 5. Critères d’acceptation

- [ ] Les textes Clementigre sont x2 plus grands
- [ ] Aucun débordement critique
- [ ] Rendu correct desktop/mobile

---

## 6. Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Doublement des tailles Clementigre | `assets/css/styles.css` | Respecter la demande de x2 |

---

## 7. Revue adverse

Résumé des critiques / risques détectés après implémentation.

---

## 8. Décision finale

Doublement des tailles sur les sélecteurs de titres Clementigre pour un
changement simple et cohérent.

---

## 9. Références

- Ticket analyse : `files/tickets/UI-TYPO-002.md`
- Commits : —
- Fichiers impactés : `assets/css/styles.css`

---

## 10. Prochaine étape

Valider le rendu sur mobile après doublement des tailles.
