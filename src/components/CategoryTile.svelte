<script>
    export let cat;
    let id = cat.id;
    let title = id;
    let shortdesc = '';
    let exturl = cat.slug;
    let image = '';
    
    if (cat) {
        title = cat.title;
        shortdesc = cat.shortdesc;
        if (cat.exturl != undefined) {
            exturl = cat.exturl;
        }
        if (cat.image != undefined) {
            image = cat.image;
        }

    }
    import { goto } from '$app/navigation';
</script>
<div class="tile is-parent">
    <article class="tile is-child is-clickable box" style="" on:click={()=>goto(exturl)}>
        {#if image}
            <figure style="background: #005bcb;" class="title image is-4by3">
                <img alt="{title}" src="{image}">
            </figure>
        {:else}
            <p class="title">{title}</p>
        {/if}
        <p class="subtitle">{shortdesc}</p>

    </article>
</div>
