---
name: proposer-commit
description: "Préparer un commit traçable sans le pousser ni l’exécuter"
---

# Références (source de vérité)
- Règles agent : `AGENT-RULES.md`
- Tickets : `files/tickets/`
- Logs : `files/logs/`

# But
Proposer un commit propre, lié à un ticket, **sans jamais le lancer**.

# Entrées requises
- ID du ticket (ex: FIX-UI-BG-001)

# Contraintes
- ❌ Ne pas lancer `git commit`
- ❌ Ne pas lancer `git push`
- ✅ Seulement préparer et demander validation

# Procédure
1) Lister les fichiers modifiés (`git status`)
2) Résumer les changements (diff logique, pas ligne par ligne)
3) Lire le ticket `files/tickets/<ID>.md`
4) Générer un message de commit :