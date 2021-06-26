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

<svelte:head>
	<title>{stringResources.indexPage.titleTag} - {stringResources.appName}</title>
</svelte:head>

{#if showAlert}
	<div class="notification is-danger" in:fade>
		<button class="delete" on:click={() => (showAlert = false)} />
		{stringResources.indexPage.urlMissingMsg}
	</div>
{/if}

<div in:fade>
	<h1 class="title m-4">{stringResources.appName}</h1>
	<h2 class="subtitle m-4">{stringResources.indexPage.homeTagLine}</h2>
	<div class="columns m-4">
		<div class=" column is-half is-offset-3 box p-4">
			<div class="columns p-2">
				<input
					class="input mt-2 mb-2"
					id="url"
					type="url"
					value="www.check24.de"
					placeholder={stringResources.indexPage.scanInputPlaceHolder}
				/>
				<button class="button m-2 is-outlined is-4" on:click={scanSite}>
					{stringResources.indexPage.scanStartBtnText}
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.button {
		border-color: var(--brandColor) !important;
		color: var(--brandColor) !important;
	}
	.button:hover {
		background-color: var(--brandColor) !important;
		color: var(--background) !important;
	}
	input:focus {
		border-color: var(--brandColor) !important;
	}
	.title {
		color: var(--textDark);
	}
	.subtitle {
		color: var(--textLight);
	}
</style>
