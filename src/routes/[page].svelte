<script context="module">
    export async function load({ fetch, page }) {
        let slug = page.params['page'];
        if (slug.indexOf('.') > 0){
            return undefined;
        }
        const res = await fetch('/page-' + slug + '.json');
        let data = await res.json();
        if (data.error) {
            return {
                status: 404,
                error: new Error(data.error),
            };
        }

        return {
            props: data,
        };
    }
</script>
<script>
    export let page;
    import { fade } from 'svelte/transition';
    import stringResources from '../stringResources';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faLock } from '@fortawesome/free-solid-svg-icons';
    import SvelteMarkdown from 'svelte-markdown';

    const options = {
        mangle: false
    }
</script>

<svelte:head>
    <title>{page.title} - {stringResources.appName}</title>
</svelte:head>

<div class="columns m-4" in:fade>
    <div class=" column is-10 is-offset-1 p-4">
        <article class="message">
            <div class="message-header">
				<span class="icon">
					<Fa icon={faLock} />
				</span> {page.title}
            </div>
            <div class="message-body content has-text-left">
                <SvelteMarkdown source={page.main} {options} />
            </div>
        </article>
    </div>
</div>
