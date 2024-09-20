import antfu from '@antfu/eslint-config';

export default antfu({
	stylistic: {
		semi: true,
		quotes: 'single',
		indent: 'tab',
	},
	astro: true,
	unocss: true,
});
