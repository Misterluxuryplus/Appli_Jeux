# Envoyer V26 et publier après revue

La version est préparée sur `v26`, depuis `main` au commit `82c2eb7`. Main et le site publié restent inchangés jusqu’à votre décision de fusion.

## Importer la branche fournie

Depuis votre dépôt local disposant de l’authentification GitHub, adapter le chemin :

```powershell
git fetch "CHEMIN\Sylvain-Steph-V26.bundle" refs/heads/v26:refs/heads/v26
git switch v26
git push -u origin v26
```

Ou créer une copie séparée :

```powershell
git clone -b v26 "CHEMIN\Sylvain-Steph-V26.bundle" Appli_Jeux-V26
cd Appli_Jeux-V26
git remote set-url origin https://github.com/Misterluxuryplus/Appli_Jeux.git
git push -u origin v26
```

## Ouvrir la PR

Sur GitHub, créer une pull request avec **base main**, **compare v26**, puis reprendre le titre et la description de PR-V26.md. Ne pas activer de fusion automatique. Vérifier l’application sur vos appareils, puis fusionner manuellement seulement après votre revue.

[Documentation GitHub — créer une pull request](https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

## Fichiers à publier ensemble

L’index autonome est déjà généré : aucune compilation n’est nécessaire pour GitHub Pages si vous utilisez les fichiers livrés. Si vous modifiez les sources, lancer `npm run build` puis les tests avant de publier.

Fichiers applicatifs : index.html, sw.js, manifest.webmanifest, classique.html, v25.html, icon-192.png, icon-512.png et le dossier icons/. Les fichiers sources, tests et documents peuvent rester dans le dépôt.

Ne pas déposer le ZIP lui-même comme site et ne pas transférer seulement l’index : le jeu démarrera, mais le cache et la reprise V25 hors connexion ont besoin des autres fichiers.

Si GitHub Pages utilise main et le dossier racine comme source, une fusion vers main déclenchera sa publication. Sinon conserver le workflow Pages déjà configuré. Contrôler le déploiement dans les Actions du dépôt.

[Documentation GitHub — source de publication Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Applications installées

Revenir en ligne et ouvrir l’application. Le bouton de mise à jour sauvegarde puis active le cache V26. Une ancienne sauvegarde reste disponible depuis le lien de reprise V25. Une aventure V26 reprend en pause, sur le même chemin.

Ne pas effacer les données du site pour mettre à jour : les sauvegardes y sont conservées. L’installation réelle et les mises à jour sur Safari iOS et Android physiques restent à confirmer avant publication définitive.
