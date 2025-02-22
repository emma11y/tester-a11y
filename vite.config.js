import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/tester-a11y/', // Remplace par le nom de ton repo GitHub
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/pages', // Le dossier à copier
          dest: '', // Copie à la racine de /dist
        },
        {
          src: '404.html',
          dest: '',
        },
        {
          src: 'src/components',
          dest: '',
        },
        {
          src: 'src/assets/img',
          dest: 'src/assets/',
        },
        {
          src: 'src/assets/fonts',
          dest: 'src/assets/',
        },
      ],
    }),
  ],
});
