import { defineConfig, presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
	rules: [],
	shortcuts: {},
	presets: [
		presetUno(),
		presetAttributify(),
	],
	transformers: [
		transformerVariantGroup(),
		transformerDirectives(),
	],
	theme: {},
});
