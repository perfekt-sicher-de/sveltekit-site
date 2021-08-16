<script>
    export let id;
    import categories from '../categories';

    let title = id;
    let subtitle = '';
    let exturl = id;
    let image = '';
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    if (categories[id]) {
        title = categories[id].title;
        subtitle = categories[id].subtitle;
        if (categories[id].exturl != undefined) {
            exturl = categories[id].exturl;
        }
        if (categories[id].image != undefined) {
            image = categories[id].image;
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
        <p class="subtitle">{subtitle}</p>

    </article>
</div>
