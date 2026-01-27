# TICKET — UI-LAYOUT-001 Ajustements layout index (mobile/desktop)

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Sur la page `index.html`, en version mobile, la section en deux colonnes ne se replie pas en une seule colonne. En version desktop, le lecteur audio présent n'est pas aligné à gauche dans sa cellule.

---

## 2. Objectif

Assurer que la section en deux colonnes s'affiche en une colonne sur mobile, et que le lecteur audio soit aligné à gauche dans sa cellule sur desktop.

---

## 3. Contexte

- Page concernée : `index.html`
- Problèmes observés : layout mobile sur la section 2 colonnes, alignement du lecteur audio en desktop
- Impact : lisibilité et cohérence du layout selon le viewport

---

## 4. Contraintes

- ❌ Ne pas casser le layout desktop existant hors du lecteur audio
- ✅ Respecter la structure HTML et les styles actuels autant que possible
- ✅ Conserver un rendu propre sur mobile et desktop

---

## 5. Hypothèses à vérifier

- H1 — La grille/les colonnes ne basculent pas en colonne unique à cause d'un breakpoint manquant
- H2 — Un alignement par défaut (flex/grid) centre le lecteur audio
- H3 — Le lecteur audio est dans un conteneur avec align-items/justify-content contraignants

---

## 6. Périmètre

**Inclus :**
- Ajustements CSS responsive pour la section 2 colonnes
- Ajustement d'alignement du lecteur audio en desktop

**Exclus :**
- Refactor complet de la grille ou des composants
- Modifications visuelles non nécessaires à ces deux points

---

## 7. Critères d’acceptation

- [ ] Le comportement est correct sur desktop
- [ ] Le comportement est correct sur mobile
- [ ] Aucun effet de bord visuel
- [ ] Le test est reproductible
- [ ] Sur mobile, la section 2 colononnes s'affiche en une seule colonne
- [ ] Sur desktop, le lecteur audio est aligné à gauche dans sa cellule

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Ticket créé | Formaliser la demande d'ajustements layout |
| 2026-01-27 | Diagnostic | La grille `.services-layout-inner` passe déjà en 1 colonne à `@media (max-width: 980px)`; l'alignement du lecteur audio est forcé par `.service-podcast { justify-self: end; }` |
| 2026-01-27 | Analyse clôturée | Prêt pour création du ticket FIX |

---

## 9. Références

- Fichiers concernés : `index.html`, `assets/css/styles.css`
- Tickets liés :
- Docs :

---

## 10. Étape suivante

Créer le ticket FIX et définir le plan de correction.
