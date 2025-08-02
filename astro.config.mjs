// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://honestlyharshita.com',
  integrations: [tailwind(), react()],
  server: {
    port: 3000,
    host: true
  }
});
