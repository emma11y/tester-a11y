import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/', // Remplace par le nom de ton repo GitHub
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/pages', // Le dossier à copier
          dest: '', // Copie à la racine de /dist
        },
        {
          src: 'src/components', // Le dossier à copier
          dest: '', // Copie à la racine de /dist
        },
      ],
    }),
  ],
});
