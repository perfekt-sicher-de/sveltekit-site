<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import stringResources from '../stringResources';

	async function gotoNext() {
		await goto('/contact');
	}
</script>

<svelte:head>
	<title>{stringResources.contactPage.titleTag} - {stringResources.appName}</title>
</svelte:head>
<div class="columns" in:fade>
	<div class="column is-half is-offset-3">
		<h3 class="title has-text-black">{stringResources.contactPage.mainTitle}</h3>

		<div class="box">
			<form>
				<div class="field">
					<div class="control">
						<input class="input" type="email" placeholder="myemail@abc.de" />
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input class="input" type="text" placeholder="Vorname" />
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input class="input" type="text" placeholder="Nachname" />
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input class="input" type="text" placeholder="Firma" />
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input class="input" type="text" placeholder="Rolle" />
					</div>
				</div>
				<div class="field">
					<label class="checkbox">
						<input type="checkbox" />
						{stringResources.contactPage.checkBoxText}
					</label>
				</div>
				<button class="button is-block is-fullwidth">
					{stringResources.contactPage.btnText}
				</button>
			</form>
		</div>
	</div>
</div>

<style>
	.button {
		border-color: var(--brandColor) !important;
		color: var(--brandColor) !important;
	}
	.button:hover {
		background-color: var(--brandColor) !important;
		color: var(--background) !important;
	}
	input:focus {
		border-color: var(--brandColor) !important;
	}
	.title {
		color: var(--textDark);
	}
</style>
