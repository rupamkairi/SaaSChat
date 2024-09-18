import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		rollupOptions: {
			external: [
				'$src/constants/apis',
				'$src/constants/contents',
				'$src/utils/api-helpers/api-fetch'
			]
		},
		lib: {
			entry: resolve(__dirname, 'src/packages/widget/index.ts'),
			name: 'Widget',
			fileName: 'index'
		},
		outDir: 'dist/widget'
	},
	plugins: [svelte()]
});
