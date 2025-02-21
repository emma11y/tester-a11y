import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/tester-a11y/', // Remplace par le nom de ton repo GitHub
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/components', // Le dossier à copier
          dest: '', // Copie à la racine de /dist
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        accueil: 'src/pages/accueil.html',
        'cas-pratique-1': 'src/pages/cas-pratique-1.html',
        'cas-pratique-2': 'src/pages/cas-pratique-1.html',
        'cas-pratique-3': 'src/pages/cas-pratique-1.html',
        'cas-pratique-4': 'src/pages/cas-pratique-1.html',
        'cas-pratique-5': 'src/pages/cas-pratique-1.html',
        'cas-pratique-6': 'src/pages/cas-pratique-1.html',
        'ci-cd': 'src/pages/ci-cd.html',
        bonus: 'src/pages/bonus.html',
        ressources: 'src/pages/ressources.html',
        'a-propos': 'src/pages/a-propos.html',
        erreur: 'src/pages/erreur.html',
      },
    },
  },
});
