---
name: next-step
description: "Proposer l’étape suivante du workflow à partir de l’état d’un ticket"
---

# Références (source de vérité)
- Règles agent : `AGENT-RULES.md`
- Tickets : `files/tickets/`

# But
Guider l’utilisateur dans le bon enchaînement d’étapes, sans coder ni modifier de fichiers.

# Entrées requises
- ID du ticket (ex: UI-BG-001, FIX-UI-BG-001, FEAT-HERO-001)

# Contraintes
- ❌ Ne pas coder
- ❌ Ne pas modifier de fichiers
- ✅ Lire uniquement

# Procédure
1) Lire `files/tickets/<ID>.md`
2) Identifier :
   - Type (BUG / FIX / FEATURE)
   - Statut
3) Appliquer la **Table de décision** de `AGENT-RULES.md`
4) Proposer UNE seule étape suivante
5) Afficher :
   - Résumé (3 puces max)
   - Étape proposée
   - Question : “OK pour exécuter cette étape ?”