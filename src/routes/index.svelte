<script>
	import { onMount } from 'svelte';
	import Loader from '../components/Loader.svelte';
	onMount(async () => {});
</script>

<section class="hero is-fullheight">
	<div class="hero-head">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<span class="navbar-burger burger" data-target="navbarMenu">
						<span />
						<span />
						<span />
					</span>
				</div>
				<div id="navbarMenu" class="navbar-menu">
					<div class="navbar-end">
						<span class="navbar-item">
							<a class="button is-info is-outlined" href="#">
								<span class="icon">
									<i class="fa fa-home" />
								</span>
								<span>Home</span>
							</a>
						</span>
						<span class="navbar-item">
							<a class="button is-link is-outlined" href="#">
								<span class="icon">
									<i class="fa fa-superpowers" />
								</span>
								<span>About Us</span>
							</a>
						</span>
						
					</div>
				</div>
			</div>
		</nav>
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<div class="column is-6 is-offset-3">
				<h1 class="title m-4">My Security Check</h1>
				<h2 class="subtitle m-4">Hier kann ich meine Domains kostenlos und gefahrlos überprüfen</h2>
				<div class="box">
					<div class="field is-grouped">
						<p class="control is-expanded">
							<input class="input" type="url" placeholder="www.your-site.de" />
						</p>
						<p class="control">
							<a class="button is-info"> Scan starten </a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
