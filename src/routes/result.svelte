<script context="module">
	export async function load({ page }) {
		let url = page.query.get('url');
		return {
			props: {
				url: url
			}
		};
	}
</script>

<script>
	export let url;
	let isLoading = true;
	let showAlert = false;
	let score = 0;
	import { onMount, tick } from 'svelte';
	import stringResources from '../stringResources';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import Speedometer from "svelte-speedometer";

	import Loader from '../components/Loader.svelte';
	import { GetWebsiteSecurityScore } from '../requests/SecurityScanRequests';
	onMount(async () => {
		await GetResults();
	});

	async function GetResults() {
		try {
			let response = await GetWebsiteSecurityScore(url);
			if (response == null || !response.hasOwnProperty("score")) {
				throw 'No data found';
			}
			isLoading = false;
			score = response.score;
			await tick();
		} catch (error) {
			isLoading = false;
			await tick();
			showAlert = true;
		}
	}
	async function handleNext() {
		await goto('/profile');
	}
	async function handleBack() {
		await goto('/analysis');
	}
	async function goBack() {
		await goto('/');
	}
</script>

<svelte:head>
	<title>{stringResources.resultPage.titleTag} - {url} - {stringResources.appName}</title>
</svelte:head>

{#if isLoading}
	<Loader />
{:else}
	{#if showAlert}
		<div class="columns m-4">
			<div class=" column is-half is-offset-3 p-4">
				<div class="notification is-danger" in:fade>
					<button class="delete" on:click={goBack} />
					{stringResources.resultPage.noDataError}
				</div>
			</div>
		</div>
	{:else}
		<h1 class="title m-4" in:fade>{stringResources.resultPage.resultTitle}</h1>
		<h2 class="subtitle m-4" in:fade>{url}</h2>
		<Speedometer
				value={score}
				segments={3}
				maxValue={100}
				height={200}
				segmentColors={["#f03e3e","#ffdd00","#30b32d"]}
		/>
		<div class="field has-addons columns is-8" in:fade>
			<p class="control">
				<button class="button is-small" style="background-color:#F03E3E;color:white;">
					<span>{stringResources.resultPage.badTagText}</span>
				</button>
			</p>
			<p class="control">
				<button class="button is-small" style="background-color:#FFDD00;">
					<span>{stringResources.resultPage.normalTagText}</span>
				</button>
			</p>
			<p class="control">
				<button class="button is-small" style="background-color:#30B32D;color:white;">
					<span>{stringResources.resultPage.goodTagText}</span>
				</button>
			</p>
		</div>
		<br />
		<button class="button m-4 is-success is-outlined is-small" in:fade on:click={handleNext}>
			<span> {stringResources.resultPage.profileBtnText}</span>
			<span class="icon is-medium">
				<i class="fas fa-check" />
			</span>
		</button>
		<button class="button m-4 is-danger is-outlined is-small" in:fade on:click={handleBack}>
			<span> {stringResources.resultPage.backBtnText}</span>
			<span class="icon is-medium">
				<i class="fas fa-times" />
			</span>
		</button>
	{/if}
{/if}

<style>
	.has-addons {
		justify-content: center !important;
	}
	.control .button {
		border: none;
	}
	.control .button:hover {
		border: none;
	}
	h2 {
		color: var(--brandColor);
	}
	.title {
		color: var(--textDark);
	}
</style>
