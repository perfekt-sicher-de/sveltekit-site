<script>
    export let cat;
    let id = cat.id;
    let title = id;
    let shortdesc = '';
    let exturl = cat.slug;
    let image = '';
    let attributes = [];
    if (cat) {
        title = cat.title;
        shortdesc = cat.shortdesc;
        if (cat.exturl != undefined) {
            exturl = cat.exturl;
        }
        if (cat.image != undefined) {
            image = cat.image;
        }
        if (cat.variants) {
            for (let variant of cat.variants)
            attributes = cat.variants[0].features;
        }
    }

    import { goto } from '$app/navigation';

</script>

<svelte:options accessors={true}/>
    <article>
        {#if image}
            <figure class="title image is-4by3">
                <img alt="{title}" src="{image}">
            </figure>
        {:else}
            <p class="title">{title}</p>
        {/if}
        <p class="subtitle">{shortdesc}</p>
        <div class="">
            {#each attributes as attr}
                <div class="icon-text">
                    <span class="icon has-text-success">
                        <IconCheckSquare/>
                    </span>
                    <span>{attr}</span>
                </div>
            {/each}
        </div>
        <a href="{exturl}" on:click={()=>goto(exturl)}>zum Hersteller</a>
    </article>

