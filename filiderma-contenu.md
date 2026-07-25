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

Ce positionnement est repris dans la section « Notre approche » du site (3 cartes : 20 ans / 30 ans / 40 ans — chiffres ronds choisis par Dominique, ajustés depuis les valeurs initiales 18/25/40 tirées de l'enregistrement audio).

## Formation de Dominique Filion

Le site indique qu'elle est **infirmière clinicienne**, formée par des formateurs reconnus en médecine esthétique pour l'injection de neuromodulateurs, d'agents de comblement et de biostimulants. **Aucun nom d'établissement ou de formateur spécifique n'a été fourni** — à ajouter si Dominique souhaite le mentionner (ça renforce la crédibilité).

## Photos utilisées (toutes à remplacer par les vraies)

Toutes les images sont des **photos libres de droits (Unsplash)**, choisies comme placeholders, stockées dans `images/` :

| Fichier | Usage sur le site | À remplacer par |
|---|---|---|
| `dominique-placeholder.jpg` | Photo de Dominique (section À propos) | Vraie photo de Dominique Filion |
| `hero-clinique.jpg` | Image de fond de la section d'accueil | Photo de la vraie clinique, si disponible |
| `avant-apres-1.jpg`, `-2.jpg`, `-3.jpg` | Section « Avant / Après » — curseur interactif | Vraies photos avant/après de clientes de FiliDerma, **avec leur consentement explicite** |
| `services-deco.jpg` | Réserve (non utilisée pour l'instant) | — |

**Important — pourquoi ce ne sont pas de vraies photos avant/après** : présenter les résultats d'une autre clinique comme s'il s'agissait de ceux de Dominique serait trompeur pour les clientes et poserait un problème de droits d'auteur / vie privée envers les vraies patientes photographiées. Chaque carte « avant/après » utilise donc **la même image des deux côtés**, avec un ruban « Exemple » bien visible — le curseur fonctionne déjà, il suffit de remplacer les fichiers images quand les vraies photos seront disponibles (garder les mêmes noms de fichiers, ou mettre à jour les chemins `src` dans `index.html`).

## Structure technique du site

- `index.html` — structure de toutes les sections
- `css/styles.css` — habillage visuel (palette crème / charbon / terracotta)
- `js/script.js` — menu mobile, animations au défilement, curseur avant/après
- `images/` — toutes les photos

Site statique autonome (HTML/CSS/JS), sans base de données ni back-end — les modifications de texte, photos ou couleurs se font directement dans ces fichiers. Julien s'occupe des modifications sur demande de Dominique.

## Emplacement des fichiers et sauvegardes

- **Dossier local** : `C:\Users\charl\OneDrive\Bureau\Siteweb\Dominique\` — synchronisé automatiquement dans OneDrive (donc déjà sauvegardé dans le cloud Microsoft, indépendamment de tout compte Claude).
- **Dépôt GitHub** (source de vérité, sauvegarde + historique complet) : https://github.com/charlesmartel2506/filiderma-website — compte GitHub `charlesmartel2506`.
- **Site en ligne (GitHub Pages)** : https://charlesmartel2506.github.io/filiderma-website/ — gratuit, pas de facturation liée au trafic (seules des limites très généreuses, ~100 Go/mois, très loin d'être atteintes par un site de clinique). Risque de fermeture par GitHub quasi nul (seulement en cas d'abus/violation de leurs conditions).
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

## À faire / en attente

- [ ] Vraie photo de Dominique Filion
- [ ] Vraies photos avant/après (avec consentement des clientes)
- [ ] Confirmer la liste des services complémentaires
- [ ] Confirmer les détails de formation (établissement, formateurs) si Dominique veut les mentionner
- [ ] Vrais témoignages de clientes
- [ ] Nom de domaine officiel — en attente, pas urgent (voir section « Nom de domaine » ci-dessus)
