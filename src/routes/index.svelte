<script>
	import { goto } from '$app/navigation';
	import stringResources from '../stringResources';
	async function scanSite() {
		let url = document.getElementById('url').value;
		url = 'www.check24.de';
		await goto(`/result?url=${url}`);
	}
</script>

<svelte:head>
	<title>{stringResources.indexPage.titleTag} - {stringResources.appName}</title>
</svelte:head>
<h1 class="title m-4">{stringResources.appName}</h1>
<h2 class="subtitle m-4">{stringResources.indexPage.homeTagLine}</h2>
<div class="columns m-4">
<div class=" column is-half is-offset-3 box p-4">
	<div class="field is-grouped">
		<p class="control is-expanded">
			<input
				class="input"
				id="url"
				type="url"
				placeholder={stringResources.indexPage.scanInputPlaceHolder}
			/>
		</p>
		<p class="control">
			<button class="button is-info is-outlined" on:click={scanSite}>
				{stringResources.indexPage.scanStartBtnText}
			</button>
		</p>
	</div>
</div>
</div>
<style>
	.control .button {
		border-color: var(--brandColor) !important;
		color: var(--brandColor) !important;
	}
	.control .button:hover {
		background-color: var(--brandColor) !important;
		color: var(--background) !important;
	}
	input {
		background-color: var(--backgroundLight) !important;
	}
	input:focus {
		border-color: var(--brandColor) !important;
	}
	input::placeholder {
		color: var(--textLight);
	}
	.title {
		color: var(--textDark);
	}
	.subtitle {
		color: var(--textLight);
	}
</style>
