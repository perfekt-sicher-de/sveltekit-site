<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import stringResources from '../stringResources';
	let showAlert = false;
	async function scanSite() {
		let url = document.getElementById('url').value;
		if (url == null || url == '') {
			showAlert = true;
			return;
		}
		await goto(`/result?url=${url}`);
	}
</script>

{#if showAlert}
	<div class="notification is-danger" in:fade>
		<button class="delete" on:click={() => (showAlert = false)} />
		{stringResources.indexPage.urlMissingMsg}
	</div>
{/if}

<section class="hero is-primary">
	<div class="hero-title m-4">
		<h1 class="title">{stringResources.appName}</h1>
	</div>
	<div class="hero-body">
		<p class="subtitle">
			{stringResources.indexPage.aboutText}
		</p>
	</div>
</section>

<section class="hero is-secondary m-4">
	<div class="hero-body">
		<h2 class="title">{stringResources.indexPage.scanHeadline}</h2>
		<progress class="progress is-small is-primary" max="100">15%</progress>
		<h2 class="subtitle">{stringResources.indexPage.scanText}</h2>
		<div class="columns">
			<input
					class="input mt-2"
					id="url"
					type="url"
					placeholder={stringResources.indexPage.scanInputPlaceHolder}
			/>
			<button class="button m-2 is-outlined is-4" on:click={scanSite}>
				{stringResources.indexPage.scanStartBtnText}
			</button>
		</div>
	</div>
</section>

<div class="container">
	<CategoryPage id="root"/>
</div>
<svelte:head>
	<title>{stringResources.appName} - {stringResources.indexPage.title}</title>
</svelte:head>
