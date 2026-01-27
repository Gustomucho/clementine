---
name: creer-ticket
description: "Créer un ticket d’analyse à partir du template du repo (sans coder)"
---

# Références (source de vérité)
- Règles agent : `AGENT-RULES.md`
- Template ticket : `files/tickets/TEMPLATE.md`

# But
Créer un nouveau ticket d’analyse en respectant strictement `AGENT-RULES.md`.

# Entrées requises
- ID (ex: UI-BG-001)
- Titre
- Contexte de repro (page + étapes + device)

# Procédure
1) Lire `AGENT-RULES.md`
2) Lire `files/tickets/TEMPLATE.md`
3) Créer `files/tickets/<ID>.md`
4) Remplir toutes les sections du template
5) Forcer `Statut: 🔍 En analyse`
6) Ne proposer **aucune solution**, aucun code
7) Afficher un résumé + “Next step : lancer l’analyse sans correction”