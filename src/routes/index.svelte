<script>
	import Navbar from '../components/Navbar.svelte';
	import { GetWebsiteSecurityScore } from '../requests/SecurityScanRequests';
	async function scanSite() {
		let url = document.getElementById('url').value;
		console.log(await GetWebsiteSecurityScore(url));
	}
</script>

<section class="hero is-fullheight">
	<div class="hero-head">
		<Navbar />
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<div class="column is-6 is-offset-3">
				<h1 class="title m-4">My Security Check</h1>
				<h2 class="subtitle m-4">Hier kann ich meine Domains kostenlos und gefahrlos überprüfen</h2>
				<div class="box">
					<div class="field is-grouped">
						<p class="control is-expanded">
							<input class="input" id="url" type="url" placeholder="www.your-site.de" />
						</p>
						<p class="control">
							<button class="button is-info is-outlined" on:click={scanSite}> Scan starten </button>
						</p>
					</div>
				</div>
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
