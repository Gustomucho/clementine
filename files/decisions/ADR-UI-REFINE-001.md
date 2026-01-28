# ADR — ADR-UI-REFINE-001 Harmonisation UI par ajustements ciblés

**Date :** 2026-01-27  
**Statut :** Acceptée  
**Décideur(s) :**  
**Tickets liés :** FEAT-UI-REFINE-001

---

## 1. Contexte
Nous devons harmoniser les espacements et la hiérarchie visuelle sur plusieurs pages sans refonte globale.
Le besoin est d’améliorer la lisibilité et la cohérence tout en gardant l’équilibre du layout existant.

---

## 2. Objectifs
- Améliorer la lisibilité et la hiérarchie perçue
- Préserver le responsive et l’équilibre visuel
- Limiter le scope à des ajustements ciblés par page

---

## 3. Options considérées

### Option A — Ajustements globaux CSS
- Description : modifier des styles globaux pour harmoniser en une seule passe
- Avantages : cohérence générale rapide
- Inconvénients : risque d’effets de bord
- Risques : régressions sur pages non ciblées

### Option B — Ajustements ciblés par page (tickets séparés)
- Description : petites corrections locales par page et par zone
- Avantages : contrôle fin, tests indépendants
- Inconvénients : cohérence inter-pages à surveiller
- Risques : hétérogénéité si non harmonisé

### Option C — Refactor UI global
- Description : refonte des layouts et de la hiérarchie
- Avantages : cohérence maximale
- Inconvénients : scope trop large
- Risques : dépassement de périmètre et délais

---

## 4. Décision
Retenir l’option B.

---

## 5. Justification
Les tickets par page permettent des ajustements testables et maîtrisés sans casser le responsive ni la structure existante.
Cette approche respecte le périmètre et les contraintes de la feature.

---

## 6. Conséquences
### Positives
- Corrections localisées et traçables
- Réduction des risques d’effets de bord

### Négatives / Compromis
- Nécessite une vérification finale de cohérence globale

### Risques à surveiller
- Divergences de style entre pages
- Empilement de micro-ajustements difficiles à suivre

---

## 7. Plan de suivi
- Avancer page par page selon les tickets IMPL
- Revue finale globale (desktop + mobile)
- Réévaluation après intégration de tous les tickets

---

## 8. Historique
| Date | Changement | Pourquoi |
|------|-----------|----------|
|      |           |          |
