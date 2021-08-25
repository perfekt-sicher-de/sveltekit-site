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
    import Saos from "saos";
    import { fade } from 'svelte/transition';
    import { slide } from 'svelte/transition';
    import { onMount, tick } from 'svelte';
    export let category;
    export let categories;
    export let products;

    let animation = [
        "from-left 1s cubic-bezier(0.32, 0.4, 0.64, 0.92) both",
        "from-right 2s cubic-bezier(0.32, 0.4, 0.64, 0.92) both",
        "from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both",
        "from-right 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both",
        "from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"
    ];

</script>

<svelte:head>
    <title>{category.title}</title>
</svelte:head>

<style>
    @keyframes -global-from-left {
        0% {
            transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
            opacity: 1;
        }
        100% {
            transform: rotateX(0deg) translateX(0) skewX(0deg);
            opacity: 1;
        }
    }
    @keyframes -global-from-right {
        0% {
            transform: rotateX(50deg) translateX(200vw) skewX(-50deg);
            opacity: 1;
        }
        100% {
            transform: rotateX(0deg) translateX(0) skewX(0deg);
            opacity: 1;
        }
    }
</style>

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


{#each categories as subCategory, i  (subCategory.id)}

    <Saos animation={animation[i%5]}>
        <div class="tile is-ancestor">
            <CategoryTile cat={subCategory} />
        </div>
    </Saos>
{/each}

{#each products as product, i  (product.id)}

    <Saos animation={animation[i%5]}>
        <div class="tile is-ancestor" >
            <CategoryTile cat={product}/>
        </div>
    </Saos>
{/each}

