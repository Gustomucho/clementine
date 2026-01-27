---
name: analyser-ticket
description: "Analyser un ticket sans coder et produire un diagnostic traçable"
---

# Références (source de vérité)
- Règles agent : `AGENT-RULES.md`
- Ticket analyse : `files/tickets/<ID>.md`

# But
Diagnostiquer la cause d’un bug **sans modifier le code**.

# Entrées requises
- ID du ticket (ex: UI-BG-001)

# Contraintes (strictes)
- ❌ Ne modifier aucun fichier
- ❌ Ne proposer aucune correction
- ❌ Ne générer aucun code
- ✅ Seulement observer, inspecter, expliquer

# Procédure
1) Lire le ticket `files/tickets/<ID>.md`
2) Lister ce qui est observable (UI, CSS, DOM, logs, comportement)
3) Vérifier chaque hypothèse une par une
4) Écarter celles qui sont fausses (preuve)
5) Identifier la cause principale
6) Rédiger dans le ticket une section :
   ```md
   ## Analyse (sans correction)
   Observations:
   - …
   Hypothèses rejetées:
   - …
   Conclusion:
   Cause principale: …