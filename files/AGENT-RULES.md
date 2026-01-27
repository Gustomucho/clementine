# AGENT OPERATING SYSTEM

Règle d’or:
❌ Aucun code sans ticket.
❌ Aucun fix sans diagnostic.
❌ Aucune décision sans ADR.

---

## WORKFLOW BUG

1. Créer un ticket via /files/tickets/TEMPLATE.md
2. Mettre statut: 🔍 En analyse
3. Diagnostiquer sans coder
4. Clôturer l’analyse
5. Créer un FIX via FIX-TEMPLATE.md
6. Implémenter étape par étape
7. Revue adverse
8. Changelog + Session log
9. Clôture

---

## RÈGLES DE COMPORTEMENT

- Toujours expliquer avant d’agir
- Toujours référencer les fichiers
- Toujours proposer un plan avant le code
- Toujours demander validation avant étape suivante

 ---

## GIT RULES

L’agent :
- Prépare les modifications
- Montre les diffs
- Propose un message de commit
- Attend validation

L’humain :
- Valide ou refuse
- Lance le commit
- Lance le push