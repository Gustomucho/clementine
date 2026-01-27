# FIX — UI-LAYOUT-001-FIX Ajustements layout index (mobile/desktop)

**Statut :** 🛠 En cours  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème (résumé du diagnostic)

Lien vers ticket d’analyse : `files/tickets/UI-LAYOUT-001.md`

La section `.services-layout-inner` passe déjà en une colonne sur mobile (`@media (max-width: 980px)`), mais l'alignement du lecteur audio est forcé à droite via `.service-podcast { justify-self: end; }`.

---

## 2. Objectif

Assurer le passage en colonne unique sur mobile (si un breakpoint plus strict est nécessaire) et aligner le lecteur audio à gauche sur desktop.

---

## 3. Contraintes

- ❌ Ne pas casser le layout desktop existant hors du lecteur audio
- ✅ Respecter la structure HTML et les styles actuels autant que possible
- ✅ Conserver un rendu propre sur mobile et desktop

---

## 4. Plan de correction (atomique)

1. Confirmer le breakpoint mobile visé et ajuster si besoin la règle de colonne unique.
2. Modifier l'alignement du lecteur audio pour l'aligner à gauche en desktop.
3. Vérifier l'affichage sur mobile et desktop.

> ⚠️ Une étape = une action testable

---

## 5. Critères d’acceptation

- [ ] Le bug est corrigé
- [ ] Aucun effet de bord
- [ ] Fonctionne sur desktop
- [ ] Fonctionne sur mobile
- [ ] Tests validés
- [ ] Sur mobile, la section 2 colononnes s'affiche en une seule colonne
- [ ] Sur desktop, le lecteur audio est aligné à gauche dans sa cellule

---

## 6. Implémentation (journal)

| Date | Action | Fichiers | Pourquoi |
|------|--------|----------|----------|
| 2026-01-27 | Ajustement layout mobile + alignement lecteur audio | `assets/css/styles.css` | Forcer 1 colonne sur mobile et aligner le lecteur audio à gauche |

---

## 7. Revue adverse

Points de vigilance :
- Le reset de `grid-column` sur mobile peut modifier l'ordre visuel; vérifier que l'ordre reste cohérent.
- Le changement `justify-self: start` peut déplacer le lecteur audio sur desktop; vérifier l'alignement avec le texte de la colonne.
- Tester sur plusieurs largeurs autour de 980px pour éviter des effets de saut.

---

## 8. Décision finale

Solution retenue car elle corrige le layout mobile sans toucher au HTML et aligne le lecteur audio à gauche comme demandé.

---

## 9. Références

- Ticket analyse : `files/tickets/UI-LAYOUT-001.md`
- Commits :
- Fichiers impactés : `assets/css/styles.css`, `files/decisions/ADR-UI-LAYOUT-001.md`

---

## 10. Prochaine étape

Demander la validation du diff et proposer le message de commit.
