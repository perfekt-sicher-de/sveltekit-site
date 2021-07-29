<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import categories from '../categories';
	import Category from '$components/Category.svelte';
	let antivirus = categories['antivirus'];
</script>

<svelte:head>
	<title>{antivirus.title} - {antivirus.subtitle}</title>
</svelte:head>

<div in:fade>
	<h1 class="title m-4">{antivirus.title}</h1>
	<h2 class="subtitle m-4">{antivirus.subtitle}</h2>
	<div class="tile is-ancestor">
		<Category id="av_sophos"/>
		<Category id="av_kaspersky"/>
		<Category id="av_norton"/>
		<Category id="av_avira"/>
	</div>
	<div class="tile is-ancestor">
		<Category id="av_mcafee"/>
		<Category id="av_scanguard"/>
		<Category id="av_avast"/>
		<Category id="av_eset"/>
	</div>
	<div class="tile is-ancestor">
		<Category id="av_bitdefender"/>
		<Category id="av_avg"/>
	</div>
</div>

