<script context="module">
    export async function load({ fetch, page }) {
        let slug = page.params['page'];
        if (slug.indexOf('.') > 0){
            return undefined;
        }
        const res = await fetch('/page-' + slug + '.json');
        if(res.status != 200) {
            return undefined;
        }
        let data = await res.json();

        return {
            props: data,
        };
    }
</script>
<script>
    export let page;
    import { fade } from 'svelte/transition';
    import stringResources from '../stringResources';

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
                    <svelte:component this={page.icon}/>
				</span> {page.title}
            </div>
            <div class="message-body content has-text-left">
                {@html page.html}
            </div>
        </article>
    </div>
</div>
