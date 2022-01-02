<script context="module">
    export async function load({ fetch, url, params }) {
        let slug = params['page'];
        if (slug.indexOf('.') > 0){
            return undefined;
        }
        const res = await fetch('/api/page-' + slug + '.json');
        if(res.status != 200) {
            return undefined;
        }
        let data = await res.json();
        //console.log(data);
        return {
            props: data,
        };
    }
</script>
<script>
    export let page;
    //console.log(page);
    import { fade } from 'svelte/transition';
    import stringResources from '../stringResources';
</script>

<svelte:head>
    <title>{page.title} - {stringResources.appName}</title>
</svelte:head>

<div class="columns m-4" in:fade>
    <div class=" column is-10 is-offset-1 p-4">
        <article class="message">
            <div class="message-header">
				<span class="icon">
                    <!-- svelte:component this={page.icon} -->
				</span> {page.title}
            </div>
            <div class="message-body content has-text-left">
                {@html page.main}
            </div>
        </article>
    </div>
</div>
