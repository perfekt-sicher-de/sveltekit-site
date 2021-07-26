<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import stringResources from '../stringResources';
	import { PostContactQuery } from '../requests/ContactRequests';
	import Loader from '$components/Loader.svelte';
	let showSuccessNotification = false;
	let isLoading = false;
	async function gotoHome() {
		await goto('/');
	}
	async function handleSubmit() {
		isLoading = true;
		let data = {
			email: document.getElementById('email').value,
			vorname: document.getElementById('vorname').value,
			nachname: document.getElementById('nachname').value,
			firma: document.getElementById('firma').value,
			rolle: document.getElementById('rolle').value,
			checkbox: document.getElementById('checkbox').checked
		};
		await PostContactQuery(data);
		isLoading = false;
		showSuccessNotification = true;
	}
</script>

<svelte:head>
	<title>{stringResources.contactPage.titleTag} - {stringResources.appName}</title>
</svelte:head>
{#if isLoading}
	<Loader />
{:else} 
	{#if showSuccessNotification}
		<div class="columns m-4" >
			<div class=" column is-half is-offset-3 p-4">
				<div class="notification is-success" in:fade>
					<button class="delete" on:click={gotoHome} />
					{stringResources.contactPage.successMsg}
				</div>
			</div>
		</div>
	{:else}
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
								<input
									class="input"
									type="text"
									id="firma"
									name="firma"
									placeholder="Firma"
									required
								/>
							</div>
						</div>
						<div class="field">
							<div class="control">
								<input
									class="input"
									type="text"
									id="rolle"
									name="rolle"
									placeholder="Rolle"
									required
								/>
							</div>
						</div>
						<div class="field">
							<label class="checkbox">
								<input type="checkbox" id="checkbox" name="checkbox" />
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
	{/if}
{/if}

<style>
	input:focus {
		border-color: var(--brandColor) !important;
	}
	.title {
		color: var(--textDark);
	}
</style>
