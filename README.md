# Démo accessibilité numérique

Ce site non accessible a été conçu pour les conférences en live-coding.

## Rappel

Selon [l'Observatoire du respect des obligations d'accessibilité](https://observatoire-access-num.aveuglesdefrance.org/), seulement moins de 5% des sites web sont accessibles pour les personnes handicapées.

Selon le rapport [WebAIM](https://webaim.org/projects/million/) (EN), il y a six erreurs d'accessibilité les plus courantes sur un site web. C'est pourquoi vous trouverez ces six cas pratiques sur ce site. Ils sont faciles à mettre en oeuvre que vous débutez ou non dans l'accessibilité numérique.

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
