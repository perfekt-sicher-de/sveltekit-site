import path from 'path';
import autoImport from 'vite-plugin-autoimport';
//import { minifyHtml } from 'vite-plugin-html';
import nadapter from '@sveltejs/adapter-node';
import sadapter from '@sveltejs/adapter-static';

let adapter;
let spaMode = true;
if (spaMode) {
	adapter = sadapter({
		pages: 'build',
		assets: 'build',
		fallback: null
	});
} else {
	adapter = nadapter({
		out: 'build'
	});
}
export default {
	kit: {
		adapter: adapter,
		vite: {
			plugins: [
				autoImport({
					components: ['./src/components']
				})
				//				minifyHtml() -> it does somehow not work
			],
			build: {
				rollupOptions: {
					treeshake: true
				}
			},
			resolve: {
				alias: {
					$components: path.resolve('./src/components')
				}
			},
			optimizeDeps: {
				exclude: ['better-sqlite3, svelte-speedometer']
			},
			define: {
				'process.env': process.env,
				'process.versions': process.versions
			}
		}
	}
};
