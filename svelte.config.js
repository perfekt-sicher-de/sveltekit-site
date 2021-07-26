import path from 'path';
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

}
else {
	adapter = nadapter({
		out: 'build'
	});
}
export default {
	kit: {
		adapter: adapter,
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
				}
			},
			optimizeDeps: {
				exclude: ['svelte-speedometer']
			}
		}
	}
};
