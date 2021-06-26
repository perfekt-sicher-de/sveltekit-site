<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import stringResources from '../stringResources';
	onMount(() => {});
	async function gotoHome() {
		await goto('/');
		closeNav();
	}
	async function gotoImpressum() {
		await goto('/impressum');
		closeNav();
	}
	async function gotoDatenschutz() {
		await goto('/datenschutz');
		closeNav();
	}
	function openNav() {
		document.getElementById('myNav').style.width = '100%';
	}

	function closeNav() {
		document.getElementById('myNav').style.width = '0%';
	}
</script>

<div id="myNav" class="overlay">
	<h1 href="javascript:void(0)" class="closebtn" on:click={closeNav}>&times;</h1>
	<div class="overlay-content">
		<div class="columns m-4">
			<div class=" column is-half is-offset-3 p-4">
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
</div>
<span style="font-size:50px;cursor:pointer" class="p-4" on:click={openNav}>&#9776;</span>

<style>
	.navbar-item .button {
		border-color: var(--brandColor) !important;
		color: var(--brandColor) !important;
		background-color: transparent;
		width: -webkit-fill-available !important;
	}
	.navbar-item .button:hover {
		background-color: var(--brandColor) !important;
		color: var(--background) !important;
	}
	.overlay {
		height: 100%;
		width: 0;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.9);
		overflow-x: hidden;
		transition: 0.5s;
	}

	.overlay-content {
		position: relative;
		top: 25%;
		width: 100%;
		text-align: center;
		margin-top: 30px;
	}

	.overlay .closebtn:hover,
	.overlay .closebtn:focus {
		color: #f1f1f1;
	}

	.overlay .closebtn {
		position: absolute;
		right: 45px;
		font-size: 60px;
	}

	@media screen and (max-height: 450px) {
		.overlay .closebtn {
			font-size: 40px;
			right: 35px;
		}
	}
</style>
