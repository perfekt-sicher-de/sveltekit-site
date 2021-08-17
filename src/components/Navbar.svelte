<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faInfo, faLock, faHome, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
	import stringResources from '../stringResources';

	let opened = false;

	function handleClick(event) {
		const target = event.target;
		if (target.tagName === 'A') {
			opened = false;
		}
	}
</script>

<div class="navbar">
	<div class="sidebar" class:opened>
		<button class="close-btn" on:click={() => (opened = false)}>&times;</button>
		<div class="overlay-content" on:click={handleClick}>
			<a href="/" class="navitem button m-4 is-block">
				<span class="icon">
					<Fa icon={faHome} />
				</span>
				<span>{stringResources.menu.firtsBtnText}</span>
			</a>
			<a href="/impressum" class="navitem button m-4 is-block">
				<span class="icon">
					<Fa icon={faInfo} />
				</span>
				<span>{stringResources.menu.secondBtnText}</span>
			</a>
			<a href="/datenschutz" class="navitem button m-4 is-block">
				<span class="icon">
					<Fa icon={faLock} />
				</span>
				<span>{stringResources.menu.thirdBtnText}</span>
			</a>
			<a href="/securityincident" class="navitem button m-4 under-attack-mobile">
				<span class="icon">
					<Fa icon={faExclamationCircle} />
				</span>
				<span>{stringResources.menu.underAttack}</span>
			</a>
		</div>
	</div>

	<button class="open-btn" on:click={() => (opened = true)}>&#9776;</button>

	<a href="/securityincident" class="under-attack under-attack-desktop">
		{stringResources.menu.underAttack}
	</a>
</div>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		background-color: inherit !important;
	}
	.under-attack {
		background: var(--brandColorShift) !important;

		color: white;
		height: 1.5rem;
		width: 6rem;
		border-radius: 0.02rem;
		border: none;
		outline: none;
		font-size: 0.7rem;
		cursor: pointer;
	}
	.under-attack:hover {
		background: var(--brandColor) !important;
	}
	.under-attack-mobile {
		display: none;
	}
	.under-attack-desktop {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 900px) {
		.under-attack-desktop {
			display: none;
		}
		.under-attack-mobile {
			display: block;
		}
	}
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: max(300px, min(25vw, 350px));
		background: rgba(22, 22, 22, 0.8);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		transform: translateX(-100%);
		transition: transform 0.2s ease-out;
	}
	.sidebar.opened {
		transform: translateX(0);
	}
	.close-btn {
		margin-right: 1rem;
		color: white;
		border: none;
		outline: none;
		background: transparent;
		font-size: 2rem;
	}
	.open-btn {
		color: black;
		border: none;
		outline: none;
		background: transparent;
		font-size: 1.25rem;
	}
	.overlay-content {
		width: 100%;
	}
	.navitem {
		color: var(--brandColor) !important;
		background-color: transparent;
		border: none;
		transition: all 250ms;
		text-align: left;
	}
	.navitem span {
		pointer-events: none;
	}
	.navitem:hover {
		color: var(--background) !important;
	}
	button {
		cursor: pointer;
	}
</style>
