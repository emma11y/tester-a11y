# Comment tester l'accessibilité d'un site internet ?

Ce site non accessible a été conçu pour les conférences en live-coding.

## Abstract

Selon [l'Observatoire du respect des obligations d'accessibilité](https://observatoire-access-num.aveuglesdefrance.org/), seulement moins de 5% des sites web sont accessibles pour les personnes handicapées.
Dans cette conférence, nous explorons les six erreurs d'accessibilité les plus courantes sur un site web. Afin de les corriger, je vous présenterai des conseils simples à mettre en pratique en HTML et un peu de CSS.
Je vous expliquerai aussi comment effectuer un test avec un lecteur d'écran et le clavier afin de vérifier si sa page web est accessible.

[Accéder au site non accessible](https://emma11y.github.io/tester-a11y/)

## Forker le projet

N'hésitez pas à forker le projet pour tester et corriger vous-même les défauts d'accessibilité.

## Lancer le projet en local

Lancez `npm run dev` pour un serveur de développement. Naviguez jusqu'à `http://localhost:5173/tester-a11y/`. L'application sera automatiquement rechargée si vous modifiez l'un des fichiers sources.

## Pour builder le projet

Lancer `npm run build` pour construire le projet. Les artefacts de construction seront stockés dans le répertoire `dist/`.

## Pour tester l'accessibilité du projet

Lancez `axe http://localhost:5173/tester-a11y/` ou `pa11y http://localhost:5173/tester-a11y/` sur chaque page :

- http://localhost:5173/tester-a11y/cas-pratique-1
- http://localhost:5173/tester-a11y/cas-pratique-2
- http://localhost:5173/tester-a11y/cas-pratique-3
- http://localhost:5173/tester-a11y/cas-pratique-4
- http://localhost:5173/tester-a11y/cas-pratique-5
- http://localhost:5173/tester-a11y/cas-pratique-6
