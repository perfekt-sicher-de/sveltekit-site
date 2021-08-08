<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import categories from '../categories';
	export let id;
	let page = categories[id];
	let rows = [];
	let i = 0;
	for (let catId in categories) {
		let cat = categories[catId];
		if (cat['parents']) {
			let parents = cat['parents'];
			if (parents.indexOf(id) !== -1) {
				if (i % 4 == 0) {
					let list = [];
					rows.push(list);
				}
				i++;
				rows[rows.length - 1].push(catId);
			}
		}
	}
</script>

<svelte:head>
	<title>{page.title} - {page.subtitle}</title>
</svelte:head>

<div in:fade>
	<h1 class="title m-4">{page.title}</h1>
	<h2 class="subtitle m-4">{page.subtitle}</h2>
	<div class="notification is-danger" in:fade>
		Diese Seite befindet sich im Aufbau, in Kürze stelle ich hier mehr Funktionen und Informationen für SIe bereit
	</div>
	{#each rows as list}
		<div class="tile is-ancestor">
		{#each list as catId, i}
			<CategoryTile id={catId} />
		{/each}
		</div>
	{/each}
</div>

