<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import stringResources from '../stringResources';

	async function gotoHome() {
		await goto('/');
	}
	async function handleSubmit(event) {
		const fd = new FormData(event.target);
		console.log(fd);
		await gotoHome();
	}
</script>

<svelte:head>
	<title>{stringResources.contactPage.titleTag} - {stringResources.appName}</title>
</svelte:head>
<div class="columns" in:fade>
	<div class="column is-half is-offset-3">
		<h3 class="title has-text-black">{stringResources.contactPage.mainTitle}</h3>

		<div class="box">
			<form on:submit|preventDefault={handleSubmit}>
				<div class="field">
					<div class="control">
						<input
							class="input"
							type="email"
							id="email"
							name="email"
							placeholder="myemail@abc.de"
							required
						/>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input
							class="input"
							type="text"
							id="vorname"
							name="vorname"
							placeholder="Vorname"
							required
						/>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input
							class="input"
							type="text"
							id="nachname"
							name="nachname"
							placeholder="Nachname"
							required
						/>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input class="input" type="text" id="firma" name="firma" placeholder="Firma" required />
					</div>
				</div>
				<div class="field">
					<div class="control">
						<input class="input" type="text" id="rolle" name="rolle" placeholder="Rolle" required />
					</div>
				</div>
				<div class="field">
					<label class="checkbox">
						<input type="checkbox" />
						{stringResources.contactPage.checkBoxText}
					</label>
				</div>
				<button class="button is-block is-fullwidth" type="submit">
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
