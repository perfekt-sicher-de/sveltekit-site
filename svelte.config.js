import nadapter from '@sveltejs/adapter-node';
import sadapter from '@sveltejs/adapter-static';
let adapter;
let spaMode = true;
if (spaMode) {
	adapter = sadapter({
		fallback: '200.html'
	});

}
else {
	adapter = nadapter({
		out: 'build'
	});
}
export default {
	kit: {
		adapter: adapter
	}
};