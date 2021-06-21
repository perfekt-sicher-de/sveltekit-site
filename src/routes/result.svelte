<script context="module">
	export const prerender = false;
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
	import { onMount, tick } from 'svelte';
	import stringResources from '../stringResources';
	import { goto } from '$app/navigation';
	import Loader from '../components/Loader.svelte';
	import { GetWebsiteSecurityScore } from '../requests/SecurityScanRequests';
	onMount(async () => {
		await GetResults();
	});
	async function GetResults() {
		let response = await GetWebsiteSecurityScore(url);
		isLoading = false;
		await createGaugeWidget(response.score);
	}
	async function createGaugeWidget(score) {
		await tick();
		var opts = {
			angle: 0,
			lineWidth: 0.2,
			radiusScale: 1,
			pointer: {
				length: 0.6,
				strokeWidth: 0.035,
				color: '#000000'
			},
			limitMax: false, // If false, max value increases automatically if value > maxValue
			limitMin: false, // If true, the min value of the gauge will be fixed
			colorStart: '#6F6EA0', // Colors
			colorStop: '#C0C0DB', // just experiment with them
			strokeColor: '#EEEEEE', // to see which ones work best for you
			generateGradient: true,
			highDpiSupport: true, // High resolution support,
			staticLabels: {
				font: '10px sans-serif', // Specifies font
				labels: [0, 40, 70, 100, score], // Print labels at these values
				color: '#000000', // Optional: Label text color
				fractionDigits: 0 // Optional: Numerical precision. 0=round off.
			},
			staticZones: [
				{ strokeStyle: '#F03E3E', min: 0, max: 40 },
				{ strokeStyle: '#FFDD00', min: 40, max: 70 },
				{ strokeStyle: '#30B32D', min: 70, max: 100 }
			]
		};
		var target = document.getElementById('scanMeter');
		var gauge = new Gauge(target).setOptions(opts);
		gauge.maxValue = 100;
		gauge.setMinValue(0);
		gauge.animationSpeed = 32;
		gauge.set(score);
	}
	async function handleNext() {
		await goto('/profile');
	}
	async function handleBack() {
		await goto('/analysis');
	}
</script>

<svelte:head>
	<title>{stringResources.resultPage.titleTag} - {url} - {stringResources.appName}</title>
</svelte:head>
{#if isLoading}
	<Loader />
{:else}
	<h1 class="title m-4">{stringResources.resultPage.resultTitle}</h1>
	<h2 class="subtitle m-4">{url}</h2>
	<canvas id="scanMeter" class="m-4" />
	<div class="field has-addons columns is-8">
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
	<button class="button m-4 is-success is-outlined is-small" on:click={handleNext}>
		<span> {stringResources.resultPage.profileBtnText}</span>
		<span class="icon is-medium">
			<i class="fas fa-check" />
		</span>
	</button>
	<button class="button m-4 is-danger is-outlined is-small" on:click={handleBack}>
		<span> {stringResources.resultPage.backBtnText}</span>
		<span class="icon is-medium">
			<i class="fas fa-times" />
		</span>
	</button>
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
