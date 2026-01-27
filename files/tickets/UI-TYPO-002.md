# TICKET — UI-TYPO-002 Doubler la taille des textes en Clementigre

**Statut :** 🔍 En analyse  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Les textes qui utilisent la typographie “Clementigre” doivent être deux fois
plus grands.

---

## 2. Objectif

Augmenter x2 la taille des titres/sous-titres en Clementigre sans impacter les
autres textes ni casser la hiérarchie visuelle.

---

## 3. Contexte

- Typo “Clementigre” appliquée via `--font-title`.
- Sections concernées : titres et sous-titres (h1/h2/hero/snap).

---

## 4. Contraintes

- ❌ Ne pas changer la typo du corps de texte
- ✅ Conserver les styles et la structure existants
- ✅ Responsive desktop + mobile

---

## 5. Hypothèses à vérifier

- H1 — Les tailles sont centralisées (classes `.h1`, `.h2`, `.hero-title`, `.snap-h2`)
- H2 — Les variations responsive nécessitent un ajustement séparé
- H3 — Doubler la taille ne casse pas les layouts existants

---

## 6. Périmètre

**Inclus :**
- Ajustement des tailles de titres/sous-titres en Clementigre

**Exclus :**
- Changement de police
- Ajustement des textes body

---

## 7. Critères d’acceptation

- [ ] Les textes en Clementigre sont x2 plus grands
- [ ] Aucun débordement critique dans les sections clés
- [ ] Rendu correct desktop/mobile

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-01-27 | Diagnostic initial (sans correction) | Identifier les tailles à doubler |

---

## 9. Diagnostic (observations)

1) Points de contrôle (tailles actuelles)
- `.h1` : `font-size: clamp(40px, 5.2vw, 80px)`
- `.h2` : `font-size: 40px`
- `.hero-title` : `font-size: clamp(40px, 5.2vw, 80px)`
- `.snap-h2` : `font-size: 40px` (desktop), `32px` à `max-width: 980px`

2) Emplacements
- `assets/css/styles.css` définit ces tailles dans la section Typographies et
  dans la section Accueil.

3) Risques si correction sans diagnostic complet
- Débordements de grille (services/hero) et collisions avec images.
- Ajustements responsive nécessaires si tailles doublées.

---

## 9. Références

- Fichiers concernés : `assets/css/styles.css`
- Tickets liés : `files/tickets/UI-TYPO-001.md`
- Docs : `files/AGENT-RULES.md`

---

## 10. Étape suivante

Diagnostiquer précisément les classes et tailles à doubler avant toute
correction.
