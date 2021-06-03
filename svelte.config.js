import node from '@sveltejs/adapter-node';
const config = {
	kit: {
		adapter: node(),
		target: '#svelte'
	}
};

export default config;
