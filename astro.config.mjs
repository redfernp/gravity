import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gravitysnowsports.co.uk',
  integrations: [tailwind()],
});
