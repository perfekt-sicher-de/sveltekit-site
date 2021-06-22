<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import stringResources from '../stringResources';
	onMount(() => {
		document.querySelector('.navbar-burger').addEventListener('click', () => {
			document.querySelector('.navbar-burger').classList.toggle('is-active');
			document.getElementById('navbarMenu').classList.toggle('is-active');
		});
	});
	async function gotoHome() {
		await goto('/');
	}
	async function gotoImpressum() {
		await goto('/impressum');
	}
	async function gotoDatenschutz() {
		await goto('/datenschutz');
	}
</script>

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
					<button class="button is-outlined" on:click={gotoHome}>
						<span class="icon">
							<i class="fa fa-home" />
						</span>
						<span>{stringResources.menu.firtsBtnText}</span>
					</button>
				</span>
				<span class="navbar-item">
					<button class="button is-outlined" on:click={gotoImpressum}>
						<span class="icon">
							<i class="fas fa-info" />
						</span>
						<span>{stringResources.menu.secondBtnText}</span>
					</button>
				</span>
				<span class="navbar-item">
					<button class="button is-outlined" on:click={gotoDatenschutz}>
						<span class="icon">
							<i class="fas fa-lock" />
						</span>
						<span>{stringResources.menu.thirdBtnText}</span>
					</button>
				</span>
			</div>
		</div>
	</div>
</nav>

<style>
	.navbar-item .button {
		border-color: var(--brandColor) !important;
		color: var(--brandColor) !important;
		background-color: transparent;
	}
	.navbar-item .button:hover {
		background-color: var(--brandColor) !important;
		color: var(--background) !important;
	}
	.navbar-menu {
		background-color: transparent !important;
		box-shadow: none !important;
		padding: 0 !important;
	}
</style>
