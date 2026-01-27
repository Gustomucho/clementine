---
name: clore-ticket
description: "Clôturer un ticket (analyse ou FIX) avec traçabilité complète"
---

# Références (source de vérité)
- Règles agent : `AGENT-RULES.md`
- Tickets : `files/tickets/`
- Logs : `files/logs/`

# But
Standardiser la clôture d’un ticket en assurant la mémoire du projet.

# Entrées requises
- ID du ticket à clôturer (ex: UI-BG-001 ou FIX-UI-BG-001)

# Procédure
1) Lire le ticket `files/tickets/<ID>.md`
2) Vérifier que :
   - tous les critères d’acceptation sont cochés
   - une conclusion est présente
3) Mettre `Statut: ✅ Résolu`
4) Ajouter dans le ticket :

```md
## Clôture
Résumé:
- Ce qui a été appris
- Ce qui a été fait
- Ce qui reste à faire

Date de clôture: YYYY-MM-DD