// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import { sass } from 'svelte-preprocess-sass';

export default {
	plugins: [
		svelte({
			preprocess: {
				style: sass()
			}
		})
	]
};
