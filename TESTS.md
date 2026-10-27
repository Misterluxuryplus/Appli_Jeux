# Rapport de validation V26

Base : V25 GitHub `82c2eb7`. Branche : `v26`. Les contrôles portent sur les fichiers livrés et l’index autonome généré.

## Moteur narratif

Commande : `node tests/graph.cjs`.

| Aventure | Scènes possibles atteintes | Fins atteintes | Parcours terminés | États de reprise contrôlés |
| --- | ---: | ---: | ---: | ---: |
| Le pouvoir change de mains | 22 | 4 | 13 824 | 736 |
| Le secret que tu ignores | 22 | 4 | 13 824 | 736 |
| La soirée imprévisible | 22 | 4 | 13 824 | 736 |
| Total | 66 | 12 | 41 472 | 2 208 |

Les parcours incluent tous les choix, toutes les sorties de passage, les deux premiers joueurs et les quatre configurations d’options. Chaque état de reprise est aussi testé avec l’alternative active.

Contrôles : neuf scènes par chemin, stades croissants, aucune destination absente, aucun cycle, aucune fin inaccessible, initiative alternée, états mémorisés et repères de texte résolus, deux embranchements centraux distincts, conséquences après préparation passée ou remplacée, refus des historiques et temps incohérents. Les trois histoires et les deux premiers joueurs sont atteints par le tirage testé.

Chaque chemin possède 710 secondes de chronos indicatifs. L’expiration ne fait pas avancer le récit et aucune décision n’attend le chrono.

## Interface réelle

Commande : `node tests/ui.cjs` avec Chromium.

- Clics réels sur sept combinaisons de décisions par aventure : les 22 scènes et quatre fins de chacune sont atteintes.
- Choix discret masqué avant ouverture, masqué après rechargement et conservé après validation.
- Refus du défi, alternative mémorisée, passage depuis la pause et conséquence adaptée si sa préparation a été passée.
- Chrono démarré, arrêté, repris, arrivé à zéro sans transition, relancé puis repris après rechargement en pause.
- Préférences persistées et figées dans la partie, sans modifier une aventure en cours.
- Reprise exacte du chemin, reprise du dénouement, sauvegarde invalide ignorée, nouveau départ toujours possible.
- Démarrage effectif avec seulement index.html servi.
- Ancienne PWA V25 installée dans le test, création de sauvegarde, mise à jour vers V26, données V25 inchangées et reprise V25 dans son écran dédié, y compris hors connexion.
- Mise à jour V26 avec conservation exacte du chemin et reprise hors connexion sous `/Appli_Jeux/`.
- Ordinateur à 1280 px, profil tactile Pixel 7 et profil tactile iPhone 13 : boutons, choix, neuf scènes, dénouement, reprise et hors connexion.
- Stockage local bloqué : message explicite, jeu toujours accessible.
- Aucun événement d’erreur JavaScript dans les parcours contrôlés.

## Fichiers et visuel

- Index généré conforme aux sources : `node scripts/build.cjs --check`.
- Syntaxe vérifiée pour les sources et le worker.
- Copie V25 comparée octet pour octet à GitHub.
- Accueil, scène et préférences inspectés visuellement à 390 px : texte lisible, commandes accessibles, identité rose/violette/noire conservée.
- Manifestes, pages et icônes présents pour le cache ; navigation V25/V26 distinguée.

## Limites

Les profils Android/iPhone utilisent Chromium et des taps réels émulés. Ils ne remplacent pas des appareils physiques. Safari iOS et l’installation réelle sur les téléphones restent à confirmer avant une publication définitive.

Aucune action de publication ou de fusion n’est exécutée par les tests.
