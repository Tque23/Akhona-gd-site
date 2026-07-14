// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // This ensures your URLs are generated without trailing slashes
  trailingSlash: 'never', 
});