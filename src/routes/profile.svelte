<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import stringResources from '../stringResources';
	let rangeValue = 15000;
	onMount(() => {
		let rangSlider = document.getElementById('rangeInput');
		rangSlider.addEventListener('input', (ev) => {
			rangeValue = ev.target.value;
		});
	});
	async function gotoNext() {
		await goto('/contact');
	}
</script>

<svelte:head>
	<title>{stringResources.profilePage.titleTag} - {stringResources.appName}</title>
</svelte:head>
<div class="columns" in:fade>
	<div class="column is-half is-offset-3">
		<h1 class="title m-4">{stringResources.profilePage.mainTitleLine}</h1>
		<h2 class="subtitle m-4">{stringResources.profilePage.mainSubtitle}</h2>
		<div class="box">
			<div class="range-slider">
				<input
					class="range-slider__range"
					id="rangeInput"
					step="500"
					type="range"
					min="1000"
					max="500000"
					value="15000"
				/>
				<span class="range-slider__value">{rangeValue} €</span>
			</div>
		</div>
		<h3>{stringResources.profilePage.afterRangeText}</h3>
		<br />
		<button class="button mt-4 is-success is-outlined is-small" on:click={gotoNext}>
			<span>{stringResources.profilePage.btnText}</span>
			<span class="icon is-medium">
				<i class="fas fa-check" />
			</span>
		</button>
	</div>
</div>

<style>
	.range-slider {
		margin: 60px 0 0 0%;
		width: 100%;
	}
	.range-slider__range {
		-webkit-appearance: none;
		width: calc(100% - (113px));
		height: 10px;
		border-radius: 5px;
		background: var(--backgroundLight);
		outline: none;
		padding: 0;
		margin: 0;
	}
	.range-slider__range::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--brandColor);
		cursor: pointer;
		-webkit-transition: background 0.15s ease-in-out;
		transition: background 0.15s ease-in-out;
	}
	
	.range-slider__range:focus::-webkit-slider-thumb {
		box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--brandColor);
	}

	.range-slider__value {
		display: inline-block;
		position: relative;
		width: 100px;
		color: var(--brandColor);
		line-height: 20px;
		text-align: center;
		border-radius: 3px;
		background: var(--backgroundLight);
		padding: 5px 10px;
		margin-left: 8px;
	}
	.range-slider__value:after {
		position: absolute;
		top: 8px;
		left: -7px;
		width: 0;
		height: 0;
		border-top: 7px solid transparent;
		border-right: 7px solid var(--backgroundLight);
		border-bottom: 7px solid transparent;
		content: '';
	}
</style>
