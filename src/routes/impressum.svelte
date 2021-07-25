<script>
	import { fade } from 'svelte/transition';
	import stringResources from '../stringResources';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faInfo } from '@fortawesome/free-solid-svg-icons'

</script>

<svelte:head>
	<title>{stringResources.impressumPage.titleTag} - {stringResources.appName}</title>
</svelte:head>

<div class="columns m-4" in:fade>
	<div class="column is-10 is-offset-1 p-4">
		<article class="message">
			<div class="message-header">
				<span class="icon">
					<Fa icon={faInfo} />
					<!--i class="fas fa-info" /-->
				</span>Impressum
			</div>
			<div class="message-body content has-text-left">
				<h1>Über Sicherheit für Unternehmen</h1>
				<p>Sicherheit für Unternehmen ist eine Seite von Keywan Ghadami.</p>
				<h2>Angaben gemäß § 5 TMG:</h2>
				<p><strong>Keywan Ghadami</strong></p>
				<p>
					Bodenlei 83, 79112 Freiburg i. Br.<br />Keine Umsatzsteuer-Identifikationsnummer und kein
					Eintrag ins Handelsregister.<br />Kontakt: keywan.ghadami@gmail.com
				</p>
			</div>
		</article>
	</div>
</div>

<style>
	.message{
		word-break: break-all;
	}
	.message-body {
		background-color: var(--background) !important;
		color: var(--brandColor) !important;
	}
	.message-header {
		background-color: var(--brandColor) !important;
	}
</style>
