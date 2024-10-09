import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltekit(),

	kit: {
		alias: {
			$lib: './src/lib',

			$src: './src/'
			// $components: './src/components',
			// $constants: './src/constants',
			// $layouts: './src/layouts',
			// $routes: './src/routes',
			// $stores: './src/stores',
			// $utils: './src/utils'
		},
		adapter: adapter()
	}
};

export default config;
