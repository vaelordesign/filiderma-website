# Contenu Elementor de la page 577 (site WordPress de test)

Deux instantanés de la méta `_elementor_data` de la page d'accueil du site de test
(https://charlesmartel2506-pyftz.wpcomstaging.com/, page 577), gardés ici parce que
le dépôt est la seule sauvegarde durable — les sessions Claude, elles, sont jetables.

| Fichier | Ce que c'est |
|---|---|
| `page577-avant-alignement-25aout.json` | L'état de la page **avant** le 25 août 2026. À réinjecter tel quel pour tout annuler. |
| `page577-en-ligne-25aout.json` | L'état **après** alignement, relu depuis la base après écriture. C'est exactement ce qui est en ligne. |

## Pourquoi cet alignement

La page WordPress avait divergé de la démo statique (`index.html`) : elle portait encore
plusieurs textes d'avant la refonte du 19 août 2026. Trente et une différences corrigées,
dont trois qui comptaient vraiment :

1. **Les cartes « 20 ans » et « 30 ans » étaient inversées** — la page disait « 20 ans :
   corriger » et « 30 ans : prévenir ». C'est l'erreur déjà relevée et corrigée dans la
   démo le 19 août, qui n'avait jamais été propagée ici. Remis dans le bon sens :
   **20 ans = prévenir, 30 ans = corriger**.
2. **La section de Dominique** : le titre était sur une seule ligne avec un tiret cadratin,
   la citation en exergue (« La beauté se cultive avec finesse… ») avait été fondue dans un
   paragraphe au lieu d'être un bloc à part, et la phrase « Jamais de plan générique :
   toujours une approche sur mesure » manquait.
3. **Le héros** : le paragraphe était la version longue d'avant la refonte, le sur-titre
   n'intégrait pas « sur rendez-vous », « naturelle » n'était pas en italique, et la note
   sous les boutons (retirée de la démo le 19 août) traînait encore.

Le reste : les quatre étiquettes de section en trop (la démo n'en garde que trois — héros,
traitements, contact), les tirets cadratins remplacés par des deux-points ou des points
(ménage fait dans la démo le 19 août), le bouton « Appeler pour réserver » redevenu
« Prendre rendez-vous » pointant vers `#contact`, et les cinq arguments de la section
« Pourquoi » qui avaient été tronqués.

## Deux ajouts de CSS dans le bloc HTML de fin de page

- `.fd-navlink` sur les cinq liens du menu : rétablit le trait terracotta de 1,5 px qui
  pousse depuis la gauche **sous** le lien au survol, comme `.fd-nav a::after` dans la
  démo. Cette règle neutralise aussi, sur ces liens-là, le reflet blanc générique
  `.elementor-button::after` qui balaie toute la hauteur du bouton — c'était lui qu'on
  voyait passer par-dessus le texte du menu.
- `.fd-portrait` sur la photo de Dominique : format 4/5, coins arrondis à 18 px, ombre
  portée et cadre décalé derrière, c'est-à-dire le traitement que `.fd-about__media`
  applique dans la démo. Sans ça, WordPress affichait la photo brute, sans cadre.

## Comment l'écriture a été faite, et ce qui a été vérifié

Écriture directe dans la méta `_elementor_data` de la page 577 par l'API REST
(connecteur WordPress.com), puis relecture et comparaison caractère par caractère
avec la référence :

- les **15 sections de contenu** (39 528 caractères) sont **identiques au caractère près** ;
- le **bloc `<style>`** du kit, qui porte les deux nouvelles règles `.fd-navlink` et
  `.fd-portrait`, est **identique au caractère près** ;
- un **seul écart sur 57 477 caractères** : une espace d'indentation en moins dans le
  bloc de commentaire de documentation en tête de `fond-anime.js` (ligne « Poser un
  élément vide dans la section à animer »). Aucun effet : c'est du texte à l'intérieur
  d'un `/* … */`.

Un brouillon jetable (page 614) a servi de banc d'essai pour valider la transmission
avant de toucher à la page publiée ; il a été mis à la corbeille ensuite.

## Retouche du même jour : héros condensé

Sur demande de Julien, le bloc de texte du héros a été resserré pour retrouver la
densité de la démo (`.fd-hero` / `.fd-hero__content`) :

- section : hauteur minimale 680 → 620 px, rembourrage 140/80 → 112/64 (92/48 sur mobile) ;
- sur-titre : interlettrage 3 px, marge basse 8 px (il se colle au titre) ;
- titre : interligne 1,1 → 1,06 em, interlettrage −0,5 px, marge basse 14 px ;
- paragraphe : largeur bridée à 570 px comme `.fd-hero__lead` (il casse en trois
  lignes courtes au lieu de s'étaler), interligne 1,6, marges 14/24.

Relu après écriture : identique à la cible au caractère près (sha256 concordant sur
57 926 caractères) — l'espace manquante de la veille dans le commentaire de
`fond-anime.js` reste telle quelle, toujours sans effet.

## Comment annuler

Réinjecter `page577-avant-alignement-25aout.json` dans la méta `_elementor_data` de la
page 577 (par l'API REST, en `context=edit`), ou l'importer dans Elementor.

## Rappel du piège de cache

Le rendu public ne se purge pas tout seul après une écriture REST : le site peut servir
l'ancienne version pendant un moment (observé jusqu'à ~1 h le 24 août). Pour forcer :
« Mettre à jour » dans l'éditeur Elementor, ou Elementor → Outils → Regenerate CSS &
flush cache.
