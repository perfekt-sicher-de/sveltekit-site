<script context="module">
    export async function load({ fetch, page }) {
        let slug = page.params['category'];
        const res = await fetch('/'+slug+'.json');
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
    import { goto } from '$app/navigation';
    import { fade } from 'svelte/transition';
    import { slide } from 'svelte/transition';
    import { onMount, tick } from 'svelte';
    export let category;
    export let products;
</script>

<svelte:head>
    <title>{category.title}</title>
</svelte:head>

<section class="hero is-primary is-halfheight">
    <div class="hero-body">
        <div>
            <p class="title">
                {category.title}
            </p>
            <p class="subtitle">
                {category.shortdesc}
            </p>
        </div>
    </div>
</section>


{#each products as product}
    <div class="tile is-ancestor" in:slide>
        <CategoryTile cat={product} />
    </div>
{/each}


