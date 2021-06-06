<script>
	import { onMount } from 'svelte';
	let theme = 'light';
	onMount(async () => {
		let thValue = localStorage.getItem('theme');
		if (thValue) {
			theme = thValue;
		}
		implementTheme();
	});

	function implementTheme() {
		let r = document.querySelector(':root');
		if (theme == 'dark') {
			r.style.setProperty('--brandColor', 'hsl(123, 84%, 29%)');
			r.style.setProperty('--textDark', 'hsl(0, 0%, 100%)');
			r.style.setProperty('--textLight', 'hsl(0, 16%, 84%)');
			r.style.setProperty('--background', 'hsl(0, 0%, 0%)');
			r.style.setProperty('--backgroundLight', 'hsl(0, 4%, 14%)');
		} else {
			r.style.setProperty('--brandColor', 'hsl(187, 95%, 40%)');
			r.style.setProperty('--textDark', 'hsl(0, 0%, 0%)');
			r.style.setProperty('--textLight', 'hsl(0, 4%, 20%)');
			r.style.setProperty('--background', 'hsl(0, 0%, 100%)');
			r.style.setProperty('--backgroundLight', 'hsl(0, 0%, 90%)');
		}
	}
	function changeTheme() {
		if (theme == 'dark') {
			theme = 'light';
		} else {
			theme = 'dark';
		}
		localStorage.setItem('theme', theme);
		implementTheme();
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
					<button class="button is-outlined">
						<span class="icon">
							<i class="fa fa-home" />
						</span>
						<span>Home</span>
					</button>
				</span>
				<span class="navbar-item">
					<button class="button is-outlined">
						<span class="icon">
							<i class="fa fa-superpowers" />
						</span>
						<span>About Us</span>
					</button>
				</span>
				<span class="navbar-item">
					<button class="button is-outlined" on:click={changeTheme}>
						<span class="icon">
							<i class="fa fa-adjust" />
						</span>
						<span>Theme</span>
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
</style>
