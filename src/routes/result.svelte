<script>

	let isLoading = true;
	let showAlert = false;
	let score = 0;
	let url = '...';
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
			const urlParams = new URLSearchParams(window.location.search);
			url = urlParams.get('url');
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
		await goto('/contact');
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

		<section class="hero is-primary">
			<div class="hero-title m-4">
				<h1 class="title">{stringResources.resultPage.resultTitle}</h1>
			</div>
			<div class="hero-body">
				<p class="subtitle">
					{url}
				</p>
			</div>
		</section>
		{#if isLoading}
			<Loader />
		{:else}
			<div class="box">
				<div class="container" style="width:300px">
					<Speedometer

							value={score}
							segments={3}
							maxValue={100}
							height={200}
							segmentColors={["#f03e3e","#ffdd00","#30b32d"]}
							ringWidth={25}
							customSegmentStops={[0,40,70,100]}
							needleTransitionDuration={4000}
							needleTransition="easeElastic"
							labelFontSize={"10px"}
							valueTextFontSize={"10px"}


					/>
					<div class="field has-addons" in:fade>
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

				</div>

			</div>
		{/if}

	{/if}
<div class="box">
	<div>
		<h3>{stringResources.profilePage.afterRangeText}</h3>
		<br />
		<button class="button mt-4 is-success is-small" on:click={handleNext}>
			<span>{stringResources.profilePage.btnText}</span>
			<span class="icon is-medium">
				<i class="fas fa-check" />
			</span>
		</button>
	</div>
</div>

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
</style>
