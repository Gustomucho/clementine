# ADR — UI-SCROLL-001 Ancres de scroll par IDs
Date: 2026-01-27
Statut: Acceptée

## Contexte
Le ticket `files/tickets/UI-SCROLL-001.md` demande un scroll dynamique vers des sections précises. Les titres ciblés n'ont pas d'`id`, donc aucune ancre stable n'existe pour le scroll.

## Options
1. Ajouter des `id` d'ancres directement sur les titres ciblés et créer/ajuster les liens internes.
2. Ajouter un script JS pour intercepter les clics et scroller via sélecteurs sans `id`.
3. Utiliser des ancres existantes uniquement (`#decouvrir`) et repositionner le contenu via CSS.

## Décision
Choisir l'option 1 : ajouter des `id` d'ancres sur les titres ciblés et mettre à jour les liens internes.

## Conséquences
- ✅ Solution simple, native HTML, sans JS.
- ✅ Compatible mobile/desktop et accessible.
- ❌ Nécessite d'ajuster des liens vers les nouvelles ancres.
