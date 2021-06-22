<script>
	import { fade } from 'svelte/transition';
	import stringResources from '../stringResources';
</script>

<svelte:head>
	<title>{stringResources.datenPage.titleTag} - {stringResources.appName}</title>
</svelte:head>

<div class="columns m-4" in:fade>
	<div class=" column is-half is-offset-3 p-4">
		<article class="message">
			<div class="message-header">
				<span class="icon">
					<i class="fas fa-lock" />
				</span>
			</div>
			<div class="message-body">
				{stringResources.datenPage.mainText}
			</div>
		</article>
	</div>
</div>

<style>
	.message-body {
		background-color: var(--background) !important;
		color: var(--brandColor) !important;
	}
	.message-header {
		background-color: var(--brandColor) !important;
	}
</style>
