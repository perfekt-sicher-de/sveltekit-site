<script>
	//import { faInfo, faLock, faHome, faExclamationCircle, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
	import stringResources from '../stringResources';

	let opened = false;

	export let category;
	export let categories;

	function handleClick(event) {
		let burgerIcon = document.getElementById('burger');
		let dropMenu = document.getElementById('navbar');
		burgerIcon.classList.toggle('is-active');
		dropMenu.classList.toggle('is-active');
	}
</script>

<nav class="navbar">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<span>
				<img alt="{stringResources.appName}" src="/logos/logo64.png" width="32" height="32">
			</span>
			<span>&nbsp; perfekt-sicher.de</span>
		</a>
		<div id="burger" class="navbar-burger" data-target="navbar"  on:click={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

	<div class="navbar-menu" id="navbar">
		<div class="navbar-start">
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

		<div class="navbar-end">
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
	</div>
</nav>

