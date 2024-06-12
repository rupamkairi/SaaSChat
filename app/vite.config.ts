import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

const config = loadEnv('', process.cwd(), 'VITE_');

export default defineConfig({
	server: {
		port: +config.VITE_PORT!
	},
	resolve: {
		alias: {
			$src: '/src'
		}
	},
	plugins: [sveltekit()]
});
