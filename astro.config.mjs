// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://therealodds.com',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ko', 'ja', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});