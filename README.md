# Sylvain & Steph V26 — Les chemins du désir

Première version jouable d’un jeu narratif pour couple adulte, préparée sur `v26` depuis la dernière V25 GitHub `82c2eb7`. Aucun changement direct de main, aucune fusion ni publication automatique.

## Jouer

Pour un aperçu local : `node scripts/serve.cjs`, puis ouvrir http://127.0.0.1:8766/. Le serveur n’expose que les fichiers applicatifs et écoute uniquement sur cet ordinateur.

Lancer une aventure tire au sort l’un des trois récits et le premier joueur. L’initiative alterne à chaque scène. Chaque parcours comprend exactement neuf scènes, avec un total indicatif de 710 secondes de chronos, soit environ douze minutes hors temps de lecture. Prendre le temps de lire et décider donne une séance d’environ 10 à 15 minutes ; passer peut la raccourcir. Rien ne force à attendre la fin d’un chrono.

Les aventures proposent de la complicité, des confidences facultatives, des sensations et une proximité non explicite. Elles ne réutilisent pas le catalogue de défis V25 pour donner l’illusion d’histoires différentes. Chaque récit possède ses propres invitations et alternatives.

| Aventure | Première décision | Deuxième décision | Retour différé |
| --- | --- | --- | --- |
| Le pouvoir change de mains | Poser un cadre ou confier la surprise | Audace ou confiance | Inversion du guide et retour du pacte |
| Le secret que tu ignores | Piste d’un souvenir ou d’un souhait futur, choisie discrètement | Explorer maintenant ou laisser mûrir l’écho | La piste revient sous une forme dépendant des deux décisions |
| La soirée imprévisible | Hasard du partenaire ou intuition | Observation sensorielle ou événement fictif | L’autre réinterprète le rôle de l’objet |

Une troisième décision permet de suivre les conséquences du chemin ou de conclure librement. Chaque aventure contient 22 scènes possibles, dont quatre dénouements. On n’en traverse que neuf par partie. Voir `NARRATION.md` pour les embranchements exacts et les fins, et `TESTS.md` pour le rapport de validation.

## Choix et préférences

Les options Jeux de pouvoir consentis et Proximité et gestes tendres sont désactivées par défaut. Les trois histoires restent jouables sans elles : les scènes concernées affichent automatiquement une alternative autorisée. Les préférences sont figées pour chaque aventure ; les modifier à l’accueil concerne la prochaine partie.

Refuser le défi affiche une alternative dans la même scène. Passer la scène prend sa sortie neutre, sans score ni pénalité. Ces sorties ne rallongent pas le parcours et ne bloquent aucune fin. Les propositions se font toujours avec l’accord des deux joueurs.

Les accessoires réels sont facultatifs et ordinaires ; ils sont regardés, décrits ou tenus dans la main. Les aventures ne proposent ni blessure volontaire, ni restriction respiratoire, ni contrainte physique, ni usage dangereux d’accessoires ou d’aliments. Aucun aliment n’est nécessaire.

Le choix discret est une mise en scène sur un téléphone partagé : les options ne sont affichées qu’après une action du joueur, puis sont masquées au changement de scène, à la pause et à la reprise. Ce dispositif n’est pas un coffre-fort. Aucune confidence personnelle n’est saisie ; seules les décisions de récit sont enregistrées localement.

## Sauvegardes et V25 conservée

La V26 utilise `sylvain-steph-v26`, distinct des clés V25/V24/V23. Elle conserve le récit tiré, le premier joueur, les décisions, les conséquences, la scène, l’alternative choisie, les préférences et le chrono. La reprise rejoue l’historique pour vérifier la cohérence du chemin, puis revient en pause avec le chrono arrêté.

`v25.html` est la copie exacte, octet pour octet, de l’index de main au commit de référence. Si une ancienne sauvegarde existe, un lien de l’accueil ouvre sa reprise dans `classique.html`, avec un bouton de retour aux aventures. Les données anciennes ne sont ni converties ni effacées. Cette reprise fonctionne aussi hors connexion après la première mise en cache. La V25 sur main reste inchangée.

Les chronos sont basés sur une échéance monotone. Pause, arrière-plan, passage de scène et accueil arrêtent le chrono courant. Le zéro ne déclenche pas de scène automatique ; Relancer redémarre seulement le chrono. Un stockage indisponible est signalé sans bloquer le jeu.

## PWA et GitHub Pages

Le moteur et les scénarios sont intégrés dans `index.html` livré : aucun fichier JavaScript externe n’est requis pour démarrer. Le manifeste garde l’identifiant d’application existant. Le cache `v26-1` contient les trois histoires, la reprise V25, le manifeste et les icônes. Les routes de navigation distinguent l’accueil V26, l’écran de reprise et le fichier V25.

La mise à jour attend le bouton de l’utilisateur, sauvegarde la partie puis active le nouveau cache et recharge. Ne pas effacer les données du site pour mettre à jour : elles contiennent les parties. Les chemins relatifs sont testés sous `/Appli_Jeux/`.

Android : Installer lorsque le navigateur le propose. iPhone : Safari → Partager → Sur l’écran d’accueil. Attendre le message de disponibilité hors connexion après une ouverture en ligne.

## Sources et extension

- `src/stories.js` : contenus, choix, conditions, conséquences et fins. Aucun contenu distant ou généré au lancement.
- `src/core.js` : moteur de transitions, tirage, alternance, mise en forme et validation des sauvegardes.
- `src/app.js` : boutons, scènes, confidentialité discrète, chronos, sauvegarde et PWA.
- `src/style.css`, `src/template.html` : interface et mise en page mobile.
- `scripts/build.cjs` : génère l’index autonome ; le fichier généré est déjà fourni.

Après une modification des sources : `npm run build`. `npm run check` vérifie que l’index correspond aux sources. Une nouvelle histoire peut être ajoutée via `makeAdventure` ou avec un graphe conforme au schéma du moteur. Voir `ARCHITECTURE.md`. Modifier les destinations ou le sens des choix d’un récit nécessite une migration ou une nouvelle version du récit pour préserver les sauvegardes.

## Tests

```sh
npm install
npx playwright install chromium
npm test
```

`tests/graph.cjs` explore 41 472 parcours terminés : tous les choix et passages, deux premiers joueurs et quatre configurations de préférences. Il atteint les 66 scènes, les 12 fins et valide 2 208 états de reprise, chacun également testé avec une alternative. Il contrôle l’alternance, les neuf étapes, la durée, les sorties, les états corrompus, le tirage et la conservation exacte de V25.

`tests/ui.cjs` utilise de vrais clics et taps : toutes les scènes et fins, boutons, refus, choix discret, reprise, chronos, états invalides, démarrage avec index seul, ancienne PWA V25 remplacée, V25 toujours reprenable, mise à jour V26 et hors connexion.

Validation exécutée dans Chromium sur ordinateur et profils tactiles Pixel 7 et iPhone 13. Accueil, scène et préférences inspectés visuellement à 390 px. Le profil iPhone ne remplace pas Safari iOS réel ; les appareils physiques restent à vérifier. Pour tester avec WebKit sur une machine compatible : installer WebKit et lancer le test avec `WEBKIT=1`.

## Revue et publication

Voir `PR-V26.md` pour la description préparée et `PUBLICATION.md` pour l’envoi de la branche puis GitHub Pages. Aucun mécanisme de fusion automatique n’est ajouté.
