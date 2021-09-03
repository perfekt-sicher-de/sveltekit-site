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

<section class="hero is-primary is-halfheight">
	<div class="hero-title m-4">
		<h1 class="title">{stringResources.appName}</h1>
	</div>
	<div class="hero-body">
		<div>
			<p class="title">
				{stringResources.indexPage.aboutText}
			</p>
			<p class="subtitle">
				Keywan Ghadami
			</p>
		</div>
	</div>
</section>
<!--
<section class="hero is-secondary">
	<div class="hero-body">
		<h2 class="title">{stringResources.indexPage.scanHeadline}</h2>
		<progress class="progress is-small is-primary" max="100">15%</progress>
		<h2 class="subtitle">{stringResources.indexPage.scanText}</h2>
		<div class="columns">
			<div class="column is-10">
			<input
					class="input mt-2"
					id="url"
					type="url"
					placeholder={stringResources.indexPage.scanInputPlaceHolder}
			/>
			</div>
			<div class="column is-2">
			<button class="button m-2 is-4 is-primary" on:click={scanSite}>
				{stringResources.indexPage.scanStartBtnText}
			</button>
			</div>
		</div>
	</div>
</section>
-->

<svelte:head>
	<title>{stringResources.appName} - {stringResources.indexPage.title}</title>
</svelte:head>
