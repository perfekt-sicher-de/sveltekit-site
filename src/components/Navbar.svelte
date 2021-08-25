<script>
	import Fa from 'svelte-fa/src/fa.svelte';

	import { faInfo, faLock, faHome, faExclamationCircle, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
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

<nav class="navbar is-transparent">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<span class="icon">
				<Fa icon={faLock} />
			</span><span>my-security-check.com</span>
		</a>
		<div id="burger" class="navbar-burger" data-target="navbar"  on:click={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

	<div class="navbar-menu" id="navbar">
		<div class="navbar-start">
			<a href="/impressum" class="navbar-item">
				<span class="icon">
					<Fa icon={faInfo} />
				</span>
				<span>
					{stringResources.menu.secondBtnText}
				</span>
			</a>
			<a href="/datenschutz" class="navbar-item">
				<span class="icon">
					<Fa icon={faLock} />
				</span>
				<span>
					{stringResources.menu.thirdBtnText}
				</span>
			</a>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link" href="{category.slug}">
					{category.title}
				</a>
				<div class="navbar-dropdown is-boxed">
					{#each categories as cat, i}
						<a class="navbar-item" href="{cat.slug}">
							{cat.title}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="field is-grouped">
					<p class="control">
						<a class="button is-primary" href="/securityincident">
							<span class="icon">
								<Fa icon={faSkullCrossbones} />
							</span>
							<span>{stringResources.menu.underAttack}</span>
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</nav>

