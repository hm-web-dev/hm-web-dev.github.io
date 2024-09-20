import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		unocss({
			injectReset: true,
		}),
		mdx(),
		sitemap(),
	],
	experimental: {
		contentIntellisense: true,
	},
});
