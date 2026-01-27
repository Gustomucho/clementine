# AGENT OPERATING SYSTEM

## Règles d’or
❌ Aucun code sans ticket.  
❌ Aucun fix sans diagnostic.  
❌ Aucune décision structurante sans ADR.  
✅ Un seul objectif à la fois. Une étape testable à la fois.

---

## Structure du repo (source de vérité)
- Tickets : `files/tickets/`
  - Template : `files/tickets/TEMPLATE.md`
  - Template FIX : `files/tickets/FIX-TEMPLATE.md`
- Décisions : `files/decisions/` (ADR)
- Logs : `files/logs/`
  - `files/logs/CHANGELOG.md`
  - `files/logs/SESSION-LOG.md`

---

## Skills disponibles (slash commands)
- `/creer-ticket` : crée un ticket d’analyse (BUG) à partir du template
- `/analyser-ticket` : analyse un bug sans coder + conclut
- `/creer-fix` : crée un ticket FIX lié à une analyse
- `/creer-feature` : crée un ticket de feature (évolution produit) sans coder
- `/clore-ticket` : clôture ticket + met à jour logs
- `/proposer-commit` : propose un commit (ne l’exécute pas)
- `/next-step` : propose la prochaine étape selon ticket + statut (ne fait rien)

---

## WORKFLOW BUG (strict)
1) Créer un ticket via `files/tickets/TEMPLATE.md` (ou `/creer-ticket`)
2) Mettre statut : `🔍 En analyse`
3) Diagnostiquer **sans coder**, sans modifier de fichiers (ou `/analyser-ticket`)
4) Ajouter une **Conclusion** (cause principale + hypothèses rejetées) puis clore le ticket d’analyse
5) Créer un ticket FIX via `files/tickets/FIX-TEMPLATE.md` (ou `/creer-fix`)
6) Implémenter **étape par étape** (1 étape = 1 action testable) + test après chaque étape
7) Revue adverse (risques, effets de bord, régressions possibles)
8) Mettre à jour `files/logs/SESSION-LOG.md` et `files/logs/CHANGELOG.md`
9) Clôturer le FIX (ou `/clore-ticket`)
10) Proposer un commit (ou `/proposer-commit`) → attendre validation humaine

---

## WORKFLOW FEATURE (strict)
1) Créer un ticket feature (ou `/creer-feature`)
2) Exploration **sans coder** :
   - clarifier valeur utilisateur
   - définir IN / OUT
   - lister risques + hypothèses
3) Décision :
   - si structurante → créer un ADR dans `files/decisions/`
4) Plan d’implémentation atomique (étapes testables)
5) Implémentation étape par étape + tests
6) Revue adverse
7) Logs + clôture + commit proposé

---

## RÈGLES DE COMPORTEMENT (non négociables)
- Toujours expliquer avant d’agir
- Toujours référencer les fichiers et tickets concernés
- Toujours proposer un plan avant le code
- Toujours travailler en micro-étapes (atomiques)
- Toujours demander validation avant l’étape suivante
- Jamais de “big bang” (pas de refactor massif non demandé)
- En cas d’incertitude, ouvrir un ticket d’analyse (ne pas improviser)

---

## NEXT-STEP PROTOCOL
Après **chaque action** (skill, analyse, proposition, fix), l’agent doit :

1) Résumer en **3 puces max** ce qui vient d’être fait  
2) Déterminer le type + statut à partir du ticket dans `files/tickets/`  
3) Proposer **UNE seule** étape suivante (pas plusieurs options)  
4) Demander validation explicite : **“OK pour passer à l’étape suivante ?”**  
5) Ne pas avancer sans validation claire

### Table de décision (étape suivante autorisée)

| Type | Statut | Étape suivante |
|------|--------|----------------|
| BUG | ⏳ Ouvert | `/analyser-ticket` |
| BUG | 🔍 En analyse | `/analyser-ticket` |
| BUG | ✅ Résolu (analyse) | `/creer-fix` |
| FIX | ⏳ Ouvert | Implémenter étape 1 du plan |
| FIX | 🛠 En cours | Implémenter étape suivante |
| FIX | 🔎 En revue | `/clore-ticket` |
| FEATURE | ⏳ Ouvert | Exploration sans code + IN/OUT |
| FEATURE | 🔍 Explorée | ADR si structurante, sinon plan d’implémentation |
| ANY | — | `/proposer-commit` (si code prêt) |

### Interdits
- Avancer sans validation
- Sauter une étape
- Coder pendant une étape d’analyse/exploration

---

## GIT RULES (contrôle humain)
L’agent :
- Prépare les modifications
- Montre les diffs (résumé + fichiers impactés)
- Propose un message de commit lié à un ticket
- Attend validation explicite

L’humain :
- Valide ou refuse
- Lance `git commit`
- Lance `git push`

### Convention message de commit
- `fix: <résumé> (<ID>)`
- `feat: <résumé> (<ID>)`
- `docs: <résumé> (<ID>)`