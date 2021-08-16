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

<section class="hero is-primary is-halfheight">
	<div class="hero-body">
		<div>
			<p class="title">
				{page.title}
			</p>
			<p class="subtitle">
				{page.subtitle}
			</p>
		</div>
	</div>
</section>


{#each rows as list}
	<div class="tile is-ancestor">
	{#each list as catId, i}
		<CategoryTile id={catId} />
	{/each}
	</div>
{/each}

<div class="notification is-info" in:fade>
	Diese Seite befindet sich im Aufbau, weiter Funktionen und Informationen folgen fast täglich.
</div>
