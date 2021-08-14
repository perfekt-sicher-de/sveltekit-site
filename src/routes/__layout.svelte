<script>
	import '../app.css';
	import 'bulma/css/bulma.css';
	import stringResources from '../stringResources';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<div class="container">
<slot />
</div>
	
