# Proposition de PR — V26, Les chemins du désir

**Base :** main au commit `82c2eb7`.
**Branche :** v26.

## Résultat

La V26 remplace l’entrée par cartes par trois aventures interactives de neuf scènes, tirées au sort avec le premier joueur. Chaque récit contient 22 scènes possibles, deux décisions centrales, une décision de dénouement, des conséquences différées et quatre fins. Les embranchements donnent des défis réellement différents, sans rallonger le parcours.

- Le pouvoir change de mains : cadre ou surprise, audace ou confiance, puis inversion du guide narratif.
- Le secret que tu ignores : piste d’un souvenir ou du futur, exploration immédiate ou écho différé, puis réponse du partenaire.
- La soirée imprévisible : hasard ou intuition, sensation ou événement de fiction, puis réinterprétation de l’objet.

Les invitations sont non explicites, consenties et propres à chaque histoire. Les jeux de pouvoir et les gestes tendres sont facultatifs et désactivés par défaut. Refuser affiche une alternative dans la scène ; passer utilise sa sortie neutre, sans pénalité. Une conséquence dont la préparation a été passée ou remplacée s’adapte, sans réclamer un élément non préparé.

La V25 de main n’est pas modifiée. Une copie exacte est fournie pour reprendre les anciennes parties, avec des clés de sauvegarde séparées. Les chronos facultatifs, les animations réduites, l’installation et le hors connexion sont conservés. La mise à jour du cache sauvegarde avant rechargement.

## Architecture

Sources séparées pour les récits, le moteur pur, l’interface et le style ; index autonome généré et livré. Les versions de récit, l’historique rejoué, les conditions explicites et la sortie par défaut permettent d’ajouter des aventures et de détecter les états incohérents. Aucun contenu distant ou généré au lancement.

## Validation

- 41 472 parcours terminés explorés, incluant tous les choix et passages, les deux premiers joueurs et quatre configurations de préférences.
- 66 scènes et 12 fins accessibles, sans cycle, scène introuvable ou blocage.
- 2 208 états de reprise contrôlés, avec alternative testée pour chacun.
- Durée indicative de 710 secondes sur chaque chemin de neuf scènes ; aucun choix bloqué par un chrono.
- Vrais clics pour atteindre les 22 scènes et les quatre fins de chaque aventure.
- Choix discret, refus, alternatives, conséquence après préparation passée, reprise, expiration et relance du chrono, pause et passage depuis la pause.
- Ancienne PWA V25 mise à jour vers V26, V25 toujours reprenable sans modification des données, même hors connexion.
- Mise à jour V26, conservation exacte du chemin, démarrage avec index seul, stockage bloqué et sauvegardes invalides.
- Ordinateur et profils tactiles Pixel 7 / iPhone 13 dans Chromium. Inspection visuelle mobile de l’accueil, d’une scène et des préférences.

Safari iOS et téléphones physiques restent à confirmer ; l’émulation iPhone dans Chromium ne les remplace pas.

## Mise en ligne

Revue avant fusion. Envoyer tous les fichiers applicatifs ensemble, en particulier les pages de reprise, le manifeste, le worker et les deux emplacements d’icônes. Voir PUBLICATION.md. Ne pas activer de fusion automatique.
