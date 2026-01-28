# TICKET — UI-SPACING-001 Uniformisation des marges verticales et horizontales

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Les marges verticales et horizontales ne sont pas uniformisées entre les pages, ce qui nuit à la cohérence visuelle globale.

---

## 2. Objectif

Uniformiser les marges verticales et horizontales sur l’ensemble du site de manière propre et scalable, tout en conservant la lisibilité et le responsive.

---

## 3. Contexte

- Où le problème apparaît : toutes les pages du site
- Dans quelles conditions : navigation standard
- Sur quels écrans / navigateurs : desktop et mobile

---

## 4. Contraintes

- ❌ Ne pas casser le responsive
- ✅ Conserver la lisibilité
- ✅ Mise à jour scalable (centralisée)

---

## 5. Hypothèses à vérifier

- H1 — Les marges sont définies de manière ponctuelle et non cohérente
- H2 — Une échelle de spacing centralisée suffit à harmoniser les pages
- H3 — Des exceptions locales resteront nécessaires pour le hero et certains blocs

---

## 6. Périmètre

**Inclus :**
- Uniformisation des marges verticales/horizontales sur toutes les pages

**Exclus :**
- Changements de contenu éditorial
- Refactor structurel des layouts

---

## 7. Critères d’acceptation

- [ ] Le comportement est correct sur desktop
- [ ] Le comportement est correct sur mobile
- [ ] Marges verticales uniformisées
- [ ] Marges horizontales uniformisées
- [ ] Aucun effet de bord visuel
- [ ] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
|      |          |          |

---

## 9. Références

- Fichiers concernés : `assets/css/styles.css`, pages HTML
- Tickets liés :
- Docs :

---

## 10. Étape suivante

Créer un ticket FIX (`/creer-fix`).

---

## Conclusion

**Cause principale :** les marges et paddings sont définis localement dans de nombreux composants (ex. `.section`, `.page-header`, `.cta-row`, `.hero-snap`, `.services-layout`, overrides par page), ce qui crée des écarts non uniformes.  
**Cause secondaire :** absence d’échelle de spacing centralisée (tokens) et de règles globales unifiées pour les espacements verticaux/horizontaux.  
**Hypothèses rejetées :** un unique réglage global serait suffisant sans exceptions (faux : le hero et certains blocs nécessitent des exceptions ciblées).
