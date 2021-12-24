<script>
	//import { faInfo, faLock, faHome, faExclamationCircle, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
	import stringResources from '../stringResources';
	import Navbar from '../components/bulma/Navbar.svelte';

	export let category;
	export let categories;
</script>
<Navbar>
	<a slot="brand" class="navbar-item" href="/">
			<span>
				<img alt="{stringResources.appName}" src="/logos/logo64.png" width="32" height="32">
			</span>
		<span>&nbsp; perfekt-sicher.de</span>
	</a>
	<div slot="navbar-start" class="navbar-start">
		{#each categories as cat, i}
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href="cat-{cat.slug}">
					{cat.title}
				</a>
				<div class="navbar-dropdown is-boxed">
					{#each cat.categories as subcat, i}
						<a class="navbar-item" href="cat-{subcat.slug}">
							{subcat.title}
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div slot="navbar-end" class="navbar-end">
		<div class="navbar-item">
			<div class="field is-grouped">
				<p class="control">
					<a class="button is-primary" href="/cat-securityincident">
							<span class="icon">
								<IconSkullCrossbones />
							</span>
						<span>{stringResources.menu.underAttack}</span>
					</a>
				</p>
			</div>
		</div>
	</div>
</Navbar>
