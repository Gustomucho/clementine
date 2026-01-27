# TICKET — UI-AUDIO-001 Bloc audio non centré et marge droite (index)

**Statut :** ✅ Résolu  
**Créé le :** 2026-01-27  
**Dernière mise à jour :** 2026-01-27  
**Responsable :** Codex

---

## 1. Problème / Besoin

Dans la section “Les Souvenirs Sonores” de `index.html`, le bloc audio (`article.service-block.service-podcast`) est aligné en haut de sa colonne et paraît trop étroit, avec une marge visible à droite.

---

## 2. Objectif

Centrer verticalement le bloc audio dans sa cellule et supprimer l’effet de marge à droite, tout en conservant le responsive et l’équilibre du layout.

---

## 3. Contexte

- Page : `index.html`
- Zone : section services, bloc `article.service-block.service-podcast`
- Observation : alignement vertical en haut + impression de marge à droite
- Support : desktop (d’après captures fournies)
- Captures : fournies dans la demande (deux images)

---

## 4. Contraintes

- ❌ Ne pas casser le responsive
- ❌ Ne pas déséquilibrer le layout global
- ✅ Conserver l’équilibre visuel de la section services

---

## 5. Hypothèses à vérifier

- H1 — Le conteneur de la colonne est en alignement “start” par défaut (grid/flex)
- H2 — Une largeur/max-width/padding crée l’impression de marge à droite
- H3 — Le bloc audio a une largeur fixe ou limitée dans le CSS

---

## 6. Périmètre

**Inclus :**
- `index.html`
- `assets/css/styles.css`

**Exclus :**
- Autres pages
- Contenu du player externe (iframe)

---

## 7. Critères d’acceptation

- [ ] Le bloc audio est centré verticalement dans sa cellule sur desktop
- [ ] Le bloc audio n’a plus d’impression de marge à droite sur desktop
- [ ] Le comportement est correct sur mobile
- [ ] Aucun effet de bord visuel
- [ ] Le test est reproductible

---

## 8. Décisions / Journal

| Date | Décision | Pourquoi |
|------|----------|----------|
|      |          |          |

---

## 9. Références

- Fichiers concernés : `index.html`, `assets/css/styles.css`
- Tickets liés :
- Docs :

---

## 10. Étape suivante

Créer un ticket FIX (`/creer-fix`).

---

## Conclusion

**Cause principale :** `.service-podcast` est contraint par `justify-self: start`, ce qui réduit visuellement la largeur occupée dans la colonne et crée une marge à droite.  
**Cause secondaire :** l’alignement vertical n’est pas défini, donc le bloc reste en haut de sa cellule.  
**Hypothèses rejetées :** largeur de l’iframe (déjà à 100%) et padding du wrapper (aucun padding pertinent).
