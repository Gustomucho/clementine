# ADR — UI-LAYOUT-001 Ajustements layout index
Date: 2026-01-27
Statut: Acceptée

## Contexte
Le ticket `files/tickets/UI-LAYOUT-001.md` demande de forcer l'affichage en une colonne sur mobile et d'aligner le lecteur audio à gauche sur desktop dans la section services de `index.html`.

## Options
1. Ajuster uniquement le CSS : renforcer le breakpoint mobile et changer l'alignement de `.service-podcast`.
2. Modifier le HTML (wrapper supplémentaire) et ajuster le CSS.
3. Ajouter un script JS pour appliquer des classes selon le viewport.

## Décision
Choisir l'option 1 : ajuster le CSS existant avec un breakpoint mobile explicite et aligner le lecteur audio via `justify-self: start`.

## Conséquences
- ✅ Solution simple, sans JS ni modification HTML.
- ✅ Limite les risques de régression.
- ❌ Peut nécessiter un ajustement fin des breakpoints si le layout varie selon les devices.
