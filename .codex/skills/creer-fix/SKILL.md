---
name: creer-fix
description: "Créer un ticket FIX lié à un ticket d’analyse (sans coder)"
---

# Références (source de vérité)
- Règles agent : `AGENT-RULES.md`
- Template fix : `files/tickets/FIX-TEMPLATE.md`

# But
Créer un ticket de correction (FIX) à partir d’un diagnostic validé.

# Entrées requises
- ID analyse (ex: UI-BG-001)
- ID fix (ex: FIX-UI-BG-001)
- Cause principale (copiée depuis la conclusion du ticket analyse)

# Procédure
1) Lire `AGENT-RULES.md`
2) Lire `files/tickets/FIX-TEMPLATE.md`
3) Créer `files/tickets/<ID-fix>.md`
4) Lier explicitement au ticket d’analyse
5) Pré-remplir Plan (étapes atomiques) + critères d’acceptation
6) Mettre `Statut: ⏳ Ouvert`
7) Ne coder **rien** à cette étape