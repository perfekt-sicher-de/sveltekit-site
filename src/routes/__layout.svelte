<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<section class="hero is-fullheight">
	<div class="hero-head">
		<Navbar />
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<div class="column is-6 is-offset-3">
				<slot />
			</div>
		</div>
	</div>
</section>
