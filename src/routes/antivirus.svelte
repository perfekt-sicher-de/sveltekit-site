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
	<h1 class="title m-4">Anti Virus{stringResources.appName}</h1>
	<h2 class="subtitle m-4">{stringResources.indexPage.homeTagLine}</h2>
	<div class="subtitle m-4">
		{stringResources.indexPage.aboutText}
	</div>
	<div class="columns m-4">
		<div class="column is-half is-offset-3 box p-4">
			<div class="columns p-2">
				<input
					class="input mt-2 mb-2"
					id="url"
					type="url"
					placeholder={stringResources.indexPage.scanInputPlaceHolder}
				/>
				<button class="button m-2 is-outlined is-4" on:click={scanSite}>
					{stringResources.indexPage.scanStartBtnText}
				</button>
			</div>
		</div>
	</div>
	<div class="tile is-ancestor">
		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">Antivirus</p>
				<p class="subtitle">Maleware und Spam Schutz</p>

			</article>
		</div>
		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">Firewall</p>
				<p class="subtitle"></p>
			</article>
		</div>
		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">WAF</p>
				<p class="subtitle">Web Application Firewall</p>
			</article>
		</div>
		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">DAST</p>
				<p class="subtitle">Dynamic Application Security Testing</p>

			</article>
		</div>

	</div>
	<div class="tile is-ancestor">
		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">Hands-On</p>
				<p class="subtitle">Hardening und absichern</p>
			</article>
		</div>

		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">Sec-Dev</p>
				<p class="subtitle">Entwicklung von sicheren Anwendungen</p>
			</article>
		</div>
		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">SIEM</p>
				<p class="subtitle">Security Incident Event Managment</p>
			</article>
		</div>
		<div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">PEN-Test</p>
				<p class="subtitle">Security Checks nach Maß</p>
			</article>
		</div>
	</div>
</div>
<style>

</style>

