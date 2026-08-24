# FiliDerma — Contenu du site web

Fiche de référence du contenu du site (`index.html`). À tenir à jour si le texte change.

## Identité

- **Nom de la clinique** : FiliDerma
- **Praticienne** : Dominique Filion, **infirmière-injectrice**
- **Ville** : Laval, Québec
- **Adresse** : non affichée sur le site — demande explicite de la cliente, seule la ville (Laval, Québec) est indiquée
- **Téléphone / prise de rendez-vous** : (514) 212-9791
- **Fonctionnement** : sur rendez-vous uniquement, aucun accès sans rendez-vous — la cliente appelle et Dominique se rend disponible.

## Services (confirmés par Dominique, enregistrement audio du 22 juillet 2026)

1. **Neuromodulateurs** (relaxants musculaires) — détendent les muscles responsables des rides d'expression, usage esthétique. Pas de mention de marque (ex. Botox®) sur le site, à la demande de la cliente. Usage thérapeutique (migraines, bruxisme, hyperhidrose) aussi mentionné sur le site depuis la demande du 22 juillet 2026.
2. **Agents de comblement** (acide hyaluronique) — redonnent du volume, redessinent les lèvres, restaurent les contours du visage.
3. **Biostimulants** — stimulent la production naturelle de collagène pour une fermeté progressive.
4. **PRP** (plasma riche en plaquettes) — régénération cutanée à partir du propre sang de la cliente.
5. **Microneedling** — micro-perforations contrôlées pour stimuler le renouvellement de la peau (texture, cicatrices, éclat).

Tout est orienté vers la **prévention du vieillissement de la peau**.

### Usage thérapeutique des neuromodulateurs

Dominique a précisé que les neuromodulateurs ont aussi un usage thérapeutique (migraines, bruxisme, hyperhidrose), en plus de l'usage esthétique. D'abord gardé hors du site (demande initiale du 22 juillet 2026), puis ajouté à la carte « Neuromodulateurs » sur demande explicite le même jour.

### Services complémentaires affichés (À CONFIRMER avec Dominique)

Le site affiche aussi une liste générique de soins courants en médico-esthétique (skin boosters, hydratation, harmonisation du visage, etc.) en attendant de savoir precisément ce que Dominique offre en plus. Section clairement marquée « Liste indicative » dans le code (`fd-other-services` dans `index.html`). **À remplacer dès que l'information est confirmée.**

## Philosophie / positionnement (issu de l'enregistrement audio)

- Le vieillissement se prévient, il ne se subit pas.
- Certaines clientes commencent une approche **préventive dès la vingtaine**.
- D'autres souhaitent **corriger un détail précis dès la trentaine**.
- **Âge moyen de la clientèle : la quarantaine.**

Ce positionnement est repris dans la section « Notre approche » du site (frise reliée : 20 ans / 30 ans / 40 ans — chiffres ronds choisis par Dominique, ajustés depuis les valeurs initiales 18/25/40 tirées de l'enregistrement audio). ⚠️ Corrigé le 19 août 2026 : les cartes 20 ans et 30 ans étaient **inversées** par rapport à cette fiche (le site disait « corriger dès 20 ans, prévenir dès 30 ans ») — remis dans le bon sens : **20 ans = prévenir, 30 ans = corriger**.

## Formation de Dominique Filion

Le site indique qu'elle est **infirmière clinicienne**, formée par des formateurs reconnus en médecine esthétique pour l'injection de neuromodulateurs, d'agents de comblement et de biostimulants. **Aucun nom d'établissement ou de formateur spécifique n'a été fourni** — à ajouter si Dominique souhaite le mentionner (ça renforce la crédibilité).

## Photos utilisées

Depuis le **24 août 2026**, deux vraies photos remplacent les placeholders :

| Fichier | Usage sur le site | Statut |
|---|---|---|
| `dominique-filion.jpg` | Photo de Dominique (section À propos) | **Vraie photo**, fournie par Julien, sur **fond studio crème** (demande de Dominique du 24 août 2026 : remplacer l'arrière-plan d'origine). Méthode : détourage fait par Julien dans Canva (outil « supprimer l'arrière-plan »), masque extrait par double export noir/blanc (le plan Canva gratuit bloque l'export PNG transparent), appliqué à la photo originale haute résolution, posé sur un dégradé crème (#f7f1ea→#e5d2bf, palette du site), recadrée 640×800 tête-épaules pour exclure le logo d'un ancien employeur sur sa tenue. Script reproductible : `composer-fond2.js` (scratchpad de session). Photo source : `IMG_1464.JPEG` ; détourage Canva : design sans titre du 24 août. |
| `resultat-1-avant.jpg` / `resultat-1-apres.jpg` | Section « Avant / Après » — curseur interactif | **Vrai résultat** (comblement des lèvres), avec le consentement de la cliente d'après Julien. Obtenue à partir d'une seule photo composite (avant en haut, après en bas) fournie par Julien, séparée en deux fichiers. Qualité source modeste (image compressée/basse résolution) — à remplacer par une version plus nette si Dominique en fournit une meilleure un jour. |
| `hero-clinique.jpg`, `ambiance-soin.jpg` | Fond du héros, bandeau avant les traitements | Toujours des photos génériques (libres de droits), à remplacer si Dominique fournit ses propres photos de clinique. |
| `services-deco.jpg`, `ambiance-repos.jpg` | Réserve (non utilisées actuellement) | — |

**Rappel du principe qui a guidé ce choix (toujours valable pour toute future photo)** : ne jamais présenter les résultats d'une autre clinique comme s'il s'agissait de ceux de Dominique — trompeur pour les clientes et risque de droits d'auteur / vie privée envers de vraies patientes d'ailleurs. Les deux photos ci-dessus sont acceptées parce qu'elles sont les vraies, fournies directement par Julien pour ce site.

## Structure technique du site

- `index.html` — structure de toutes les sections
- `css/styles.css` — habillage visuel (palette crème / charbon / terracotta)
- `js/script.js` — menu mobile, animations au défilement, curseur avant/après
- `images/` — toutes les photos

Site statique autonome (HTML/CSS/JS), sans base de données ni back-end — les modifications de texte, photos ou couleurs se font directement dans ces fichiers. Julien s'occupe des modifications sur demande de Dominique.

## Emplacement des fichiers et sauvegardes

- **Dossier local** : `C:\Users\charl\OneDrive\Bureau\Siteweb\Dominique\` — synchronisé automatiquement dans OneDrive (donc déjà sauvegardé dans le cloud Microsoft, indépendamment de tout compte Claude).
- **Dépôt GitHub** (source de vérité, sauvegarde + historique complet) : https://github.com/vaelordesign/filiderma-website — compte GitHub `vaelordesign` (renommé depuis `charlesmartel2506` le 19 août 2026 — même compte, mêmes dépôts, mais l'ancienne URL `charlesmartel2506.github.io` ne fonctionne plus, GitHub Pages ne redirige pas automatiquement).
- **Site en ligne (GitHub Pages)** : https://vaelordesign.github.io/filiderma-website/ — gratuit, pas de facturation liée au trafic (seules des limites très généreuses, ~100 Go/mois, très loin d'être atteintes par un site de clinique). Risque de fermeture par GitHub quasi nul (seulement en cas d'abus/violation de leurs conditions).
- **Aperçu local pour tester avant publication** : config `filiderma` dans `.claude/launch.json` (à la racine de `Bureau/Typing/`) → lance `npx http-server` sur le port 8420.

### Comment publier une modification (rappel pour Claude, futures sessions)

```
cd "C:\Users\charl\OneDrive\Bureau\Siteweb\Dominique"
git add -A
git commit -m "description du changement"
git push
```
Le site en ligne se met à jour automatiquement (1-2 minutes) après le `push` — pas d'étape manuelle supplémentaire sur GitHub.

### Nom de domaine

Pas encore de domaine officiel (ex. `filiderma.ca`) — décision prise le 24 juillet 2026 d'attendre que le contenu soit finalisé avec Dominique avant d'en acheter un. Quand ce sera fait : ~15-20$/an chez un registraire (Namecheap, Google Domains, etc.), pointé en DNS vers le GitHub Pages actuel — aucune reconstruction nécessaire, le site reste exactement où il est.

## Historique des décisions (chronologie, session du 22-24 juillet 2026)

1. **22 juillet** — Demande initiale de Julien : site pour Dominique Filion (FiliDerma), basé sur transcription audio d'un enregistrement de Dominique.
2. Clarifié avec Julien : édition future du site se fait par **fichiers HTML/CSS que Claude modifie sur demande** (pas d'interface visuelle type Wix/Elementor, pas de formulaire d'admin) — voir [[feedback-clarify-scope-before-building]] en mémoire, leçon tirée du projet Sicléo.
3. Clarifié sur les photos avant/après : **pas de vraies photos d'autres cliniques** présentées comme celles de Dominique (trompeur + droits d'auteur/vie privée) → images stock désaturées avec badge « Photos à venir » à la place.
4. Site construit : hero, à propos, philosophie (âges), traitements, avant/après (curseur interactif), témoignages placeholder, contact — inspiré de vicpark.com et stationlmtl.com mais original.
5. **24 juillet** — Ajout de la transcription audio réelle (Laval, neuromodulateurs/comblement/biostimulants, philosophie prévention 18-25-40 ans initiale).
6. **24 juillet** — Publication sur GitHub Pages (dépôt `filiderma-website` créé, Pages activé).
7. **24 juillet** — Discussion hébergement : confirmé que GitHub Pages est gratuit sans facturation au trafic ; décision d'attendre avant d'acheter un domaine.
8. **24 juillet** — Série de corrections de contenu demandées par Julien (relayant les demandes de Dominique) :
   - Retrait de la mention « (dont Botox®) »
   - Retrait de l'adresse exacte (seule la ville Laval, Québec reste affichée) — demande explicite de la cliente
   - Tranches d'âge changées de 18/25/40 ans à **20/30/40 ans**
   - Ajout des traitements **PRP** et **Microneedling**
   - Usage thérapeutique des neuromodulateurs (migraines, bruxisme, hyperhidrose) : d'abord exclu du site sur demande, puis **ajouté** sur demande inverse le même jour
9. **24 juillet** — Julien prévoit de créer un nouveau compte Claude ; confirmé que rien (fichiers, dépôt GitHub, site en ligne) n'est lié au compte Claude — tout reste accessible tant que c'est le même ordinateur (OneDrive) et le même compte GitHub.

## Refonte visuelle du 19 août 2026 (amélioration profonde, identité conservée)

Demande de Julien : « retravaille le site en utilisant bien les skills installés »
(`design-taste-frontend` + `animations-elementor`). Choix validé par Julien : amélioration
profonde en gardant l'identité crème/terracotta ; le gabarit Elementor sera régénéré
**après** validation du nouveau look. Ce qui a changé :

- **Typographie et espacements montés d'un cran** : titres plus grands (Cormorant),
  respiration des sections en `clamp(88px…150px)`, corps en Jost 300, italique de la même
  famille pour l'emphase (« naturelle » dans le héros).
- **Héros resserré** : « Sur rendez-vous » intégré au sur-titre (souligné d'un trait
  terracotta), note sous les boutons supprimée, titre garanti sur 2 lignes au bureau.
- **« Notre approche » devient une frise reliée** (ligne + points terracotta, comptage
  animé des âges 0→20/30/40) au lieu de 3 cartes identiques. **Contenu 20/30 ans remis
  dans le bon sens** (voir ⚠️ plus haut).
- **Traitements hiérarchisés** : 2 grandes cartes « piliers » (neuromodulateurs,
  comblement) + 3 cartes standard, léger dégradé blush sur les piliers.
- **« Pourquoi FiliDerma » en liste éditoriale numérotée** (01-05, filets fins) au lieu
  de cartes.
- **Témoignage vedette** : première citation en grande carte sombre avec « décoratif,
  les deux autres empilées à droite.
- **Kit animations niveau 2 injecté** (bloc avant `</body>`) : cascade 85 ms sur héros,
  bandeau de confiance, frise, traitements, avant/après, pourquoi, témoignages, pilules ;
  compteurs d'âges ; reflet sur les boutons fantômes ; soulèvement des témoignages.
  Piège trouvé et corrigé (reporté dans le skill) : libérer l'animation à `animationend`,
  sinon son remplissage `both` bloque les survols.
- **Ménage des tics** : tirets cadratins remplacés (parenthèses/deux-points), étiquettes
  de section réduites à 3 (héros, traitements, contact), balises `og:` ajoutées au `<head>`,
  `:focus-visible` et `scroll-margin-top` ajoutés.
- **Vérifié via Playwright** (le navigateur intégré hérite du `prefers-reduced-motion`
  de Windows) : compteurs qui montent, cascade mesurée, survol -6 px, zéro débordement
  horizontal à 1440 et 393 px sur toutes les sections, console propre (seul le favicon
  404 préexistant).
- **Section Témoignages RETIRÉE le même jour, sur demande de Julien** (les trois avis
  étaient des exemples fictifs). Lien de navigation retiré aussi, CSS et références du
  kit nettoyés. À recréer le jour où de vrais témoignages de clientes existeront
  (l'ancre s'appelait `#temoignages`).
- **Deuxième bande d'ambiance RETIRÉE aussi, sur demande de Julien** (photo
  `ambiance-repos.jpg` + « On prend le temps... » avant le contact). La première bande
  (« Un visage n'est pas une tendance... », avant les traitements) reste. Le fichier
  image reste dans `images/` au cas où.

## Conversion WordPress / Elementor (démarrée 12 août, mise à jour 24 août 2026)

- Gabarit : `C:\Users\charl\OneDrive\Bureau\Typing\filiderma-elementor-template\` — voir son `INSTRUCTIONS.txt` pour la marche à suivre complète et l'historique détaillé.
- Plugin : `C:\Users\charl\OneDrive\Bureau\Typing\filiderma-wordpress-plugin\` (v1.1.0) — deux shortcodes : `[filiderma_traitements]` (fiches ajoutables par Dominique) et `[filiderma_avant_apres]` (curseur animé identique à la démo, ajouté le 24 août 2026).
- **24 août 2026** : le gabarit a été mis à jour pour utiliser les mêmes vraies photos que la démo (Dominique + avant/après lèvres), et pour rester identique à la démo statique (retrait de Témoignages et de la deuxième bande d'ambiance dans le gabarit, qui traînaient encore alors qu'ils avaient été retirés de la démo le 19 août).
- Pas encore testé sur un vrai WordPress cette fois-ci (outils de prévisualisation locale en panne pendant la session) — à faire par Julien : installer/mettre à jour le plugin, réimporter le gabarit, vérifier en ligne.

## À faire / en attente

- [x] Vraie photo de Dominique Filion — ajoutée le 24 août 2026
- [x] Vraie photo avant/après — une première ajoutée le 24 août 2026 (comblement des lèvres) ; d'autres pourront être ajoutées de la même façon plus tard
- [ ] Confirmer la liste des services complémentaires
- [ ] Confirmer les détails de formation (établissement, formateurs) si Dominique veut les mentionner
- [ ] Vrais témoignages de clientes — la section a été retirée du site le 19 août 2026 (exemples fictifs) ; la recréer quand il y en aura des vrais
- [ ] Nom de domaine officiel — en attente, pas urgent (voir section « Nom de domaine » ci-dessus)
