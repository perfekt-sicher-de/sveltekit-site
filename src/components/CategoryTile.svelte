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
    function rand(min, max) {
        return parseInt(Math.random() * (max-min+1), 10) + min;
    }

    function get_random_color() {
        var h = rand(170, 191);
        var s = rand(30, 100);
        var l = rand(50, 70);
        return 'hsl(' + h + ',' + s + '%,' + l + '%)';
    }
    let color = Math.floor(Math.random() * 255);
    let background = get_random_color();

    import { goto } from '$app/navigation';
</script>
<div class="tile is-parent">
    <article class="tile is-child is-clickable box" style="background:{background}" on:click={()=>goto(exturl)}>
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
