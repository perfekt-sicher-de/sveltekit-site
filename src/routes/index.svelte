<script>
	import Navbar from '../components/Navbar.svelte';
	import { onMount, tick } from 'svelte';
	import { GetWebsiteSecurityScore } from '../requests/SecurityScanRequests';
	let showForm = true;
	let showReport = false;

	async function scanSite() {
		let url = document.getElementById('url').value;
		await GetWebsiteSecurityScore(url);
		await createGaugeWidget(49);
	}
	async function createGaugeWidget(score) {
		showForm = false;
		showReport = true;
		await tick();
		var opts = {
			angle: 0, // The span of the gauge arc
			lineWidth: 0.2, // The line thickness
			radiusScale: 1, // Relative radius
			pointer: {
				length: 0.6, // // Relative to gauge radius
				strokeWidth: 0.035, // The thickness
				color: '#000000' // Fill color
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
</script>

<section class="hero is-fullheight">
	<div class="hero-head">
		<Navbar />
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<div class="column is-6 is-offset-3">
				{#if showForm}
					<h1 class="title m-4">My Security Check</h1>
					<h2 class="subtitle m-4">
						Hier kann ich meine Domains kostenlos und gefahrlos überprüfen
					</h2>
					<div class="box">
						<div class="field is-grouped">
							<p class="control is-expanded">
								<input class="input" id="url" type="url" placeholder="www.your-site.de" />
							</p>
							<p class="control">
								<button class="button is-info is-outlined" on:click={scanSite}>
									Scan starten
								</button>
							</p>
						</div>
					</div>
				{/if}
				{#if showReport}
					<canvas id="scanMeter" class="m-4" />
					<br />
					<button class="button m-4 is-success is-outlined is-large">
						<span> Absichern und weiter Testen lassen durch Profies</span>
						<span class="icon is-medium">
							<i class="fas fa-check" />
						</span>
					</button>
					<button class="button m-4 is-danger is-outlined is-large">
						<span> Kostenlos selber weiter 
							Testen</span>
						<span class="icon is-medium">
							<i class="fas fa-times" />
						</span>
					</button>
				{/if}
			</div>
		</div>
	</div>
</section>

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
