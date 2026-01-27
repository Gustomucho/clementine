# ADR — ADR-COPY-001 Refonte texte via source unique

**Date :** 2026-01-27  
**Statut :** Acceptée  
**Décideur(s) :**  
**Tickets liés :** FEAT-COPY-001

---

## 1. Contexte
Le site nécessite une refonte des textes pour clarifier le message, renforcer l’émotion et améliorer la hiérarchie visuelle.
Nous devons définir une méthode cohérente pour proposer les nouveaux textes sans toucher au code.

---

## 2. Objectifs
- Centraliser la refonte dans un fichier unique de référence
- Garantir la traçabilité page par page
- Éviter les pertes de contenu (si aucune nouvelle version n’est proposée, conserver l’existant)

---

## 3. Options considérées

### Option A — Refonte complète de toutes les pages
- Description : écrire une nouvelle version pour chaque section
- Avantages : cohérence maximale, ton unifié
- Inconvénients : effort plus long, risque de sur‑réécriture
- Risques : perte d’informations importantes, ton trop homogène

### Option B — Refonte partielle ciblée
- Description : proposer des versions seulement là où c’est nécessaire, sinon conserver le texte actuel
- Avantages : respect du contenu validé, effort maîtrisé
- Inconvénients : cohérence globale plus difficile à garantir
- Risques : différences de ton entre sections

### Option C — Approche hybride avec règles explicites
- Description : tout passe par `files/content/COPY-SOURCE.md`, chaque “À proposer” conserve l’existant ; les ajouts en gras sont conservés
- Avantages : clarté des règles, traçabilité, contrôle éditorial
- Inconvénients : nécessite une discipline stricte d’édition
- Risques : erreurs de copie si règles non respectées

---

## 4. Décision
Retenir l’option C.

---

## 5. Justification
Cette approche garantit une refonte contrôlée, page par page, tout en évitant de perdre le contenu déjà validé.
Elle correspond au besoin de clarifier le message sans modifier la structure ni forcer une réécriture complète.

---

## 6. Conséquences
### Positives
- Une source unique et traçable des textes
- Préservation des contenus valides
- Règles explicites pour la collaboratrice

### Négatives / Compromis
- Risque d’hétérogénéité de ton
- Effort de vérification supplémentaire

### Risques à surveiller
- Oublis de sections à réécrire
- Mauvaise interprétation du “À proposer”

---

## 7. Plan de suivi
- Appliquer les règles dans `files/content/COPY-SOURCE.md`
- Revue finale de cohérence entre pages
- Réévaluer après consolidation des textes

---

## 8. Historique
| Date | Changement | Pourquoi |
|------|-----------|----------|
|      |           |          |
