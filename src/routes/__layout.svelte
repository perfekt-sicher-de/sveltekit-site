<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.css'
	import Navbar from '../components/Navbar.svelte';
</script>

<section class="hero is-fullheight">
	<div class="hero-head">
		<Navbar />
	</div>
	<div class="hero-body">
		<div class="container has-text-centered">
			<slot />
		</div>
	</div>
</section>
