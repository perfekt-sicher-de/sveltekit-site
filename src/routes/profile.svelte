<script context="module">
	export const prerender = true;
	export async function load({ page }) {
		let url = page.query.get('url');
		return {
			props: {
				url: url
			}
		};
	}
</script>

<script>
	import { onMount, tick } from 'svelte';
	import { goto } from '$app/navigation';
	let rangeValue = 0;
	onMount(() => {
		let rangSlider = document.getElementById('rangeInput');
		rangeValue = rangSlider.value;
		rangSlider.addEventListener('input', (ev) => {
			rangeValue = ev.target.value;
		});
	});
	async function gotoNext() {
		await goto('/contact');
	}
</script>

<h1 class="title m-4">Absichern und weiter Testen lassen durch Profies</h1>
<h2 class="subtitle m-4">
	Jährliches Sicherheits Budget für diese Website (empfohlen sind 10% des gesamt Budgets)
</h2>
<div class="box">
	<div class="range-slider">
		<input class="range-slider__range" id="rangeInput" step="500" type="range" value="15000" min="10000" max="50000" />
		<span class="range-slider__value">{rangeValue}</span>
	</div>
</div>
<h3>
	Empfohlen sind 10% des gesamt Budgets. Je nach Ausgangslage und Budget wird Ihr Angebot
	verschiedene Komponenten beinhalten wie z.B. Firewalls, Pen-Tests und Programmmier und
	Konfigurations Leistungen
</h3>
<br />
<button class="button m-4 is-success is-outlined is-large" on:click={gotoNext}>
	<span>Jetzt unverbindliches Angebot fordern</span>
	<span class="icon is-medium">
		<i class="fas fa-check" />
	</span>
</button>

<style>
	.title {
		color: var(--textDark);
	}
	.subtitle {
		color: var(--textLight);
	}
	.range-slider {
		margin: 60px 0 0 0%;
	}

	.range-slider {
		width: 100%;
	}

	.range-slider__range {
		-webkit-appearance: none;
		width: calc(100% - (73px));
		height: 10px;
		border-radius: 5px;
		background: #d7dcdf;
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
		background: #2c3e50;
		cursor: pointer;
		-webkit-transition: background 0.15s ease-in-out;
		transition: background 0.15s ease-in-out;
	}
	.range-slider__range::-webkit-slider-thumb:hover {
		background: #1abc9c;
	}
	.range-slider__range:active::-webkit-slider-thumb {
		background: #1abc9c;
	}
	.range-slider__range::-moz-range-thumb {
		width: 20px;
		height: 20px;
		border: 0;
		border-radius: 50%;
		background: #2c3e50;
		cursor: pointer;
		-moz-transition: background 0.15s ease-in-out;
		transition: background 0.15s ease-in-out;
	}
	.range-slider__range::-moz-range-thumb:hover {
		background: #1abc9c;
	}
	.range-slider__range:active::-moz-range-thumb {
		background: #1abc9c;
	}
	.range-slider__range:focus::-webkit-slider-thumb {
		box-shadow: 0 0 0 3px #fff, 0 0 0 6px #1abc9c;
	}

	.range-slider__value {
		display: inline-block;
		position: relative;
		width: 60px;
		color: #fff;
		line-height: 20px;
		text-align: center;
		border-radius: 3px;
		background: #2c3e50;
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
		border-right: 7px solid #2c3e50;
		border-bottom: 7px solid transparent;
		content: '';
	}

	::-moz-range-track {
		background: #d7dcdf;
		border: 0;
	}

	input::-moz-focus-inner,
	input::-moz-focus-outer {
		border: 0;
	}
</style>
