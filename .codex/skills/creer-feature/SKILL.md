---
name: creer-feature
description: "Créer un ticket de fonctionnalité (évolution volontaire du produit)"
---

# Références (source de vérité)
- Règles agent : `AGENT-RULES.md`
- Template ticket : `files/tickets/TEMPLATE.md`

# But
Déclarer une nouvelle fonctionnalité ou amélioration **sans la confondre avec un bug**.

# Entrées requises
- ID (ex: FEAT-HERO-001)
- Titre
- Intention produit (pourquoi)
- Impact utilisateur

# Procédure
1) Lire `AGENT-RULES.md`
2) Lire `files/tickets/TEMPLATE.md`
3) Créer `files/tickets/<ID>.md`
4) Remplir les sections avec une orientation *produit* :
   - Problème → opportunité
   - Objectif → valeur utilisateur
5) Mettre `Statut: ⏳ Ouvert`
6) Ajouter une section :
   ```md
   ## Type
   Feature