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
    function rand(min, max) {
        return parseInt(Math.random() * (max-min+1), 10) + min;
    }


    function get_random_color() {
        let h = rand(170, 191);
        let s = rand(30, 100);
        let l = rand(40, 40);
        let c1 = 'hsl(' + h + ',' + s + '%,' + l + '%)';
        let l2 = l - 8;
        let c2 = 'hsl(' + h + ',' + s + '%,' + l2 + '%)';
        return 'linear-gradient(-45deg, '+c2+', '+c1+',' +c2+')';
    }
    let color = Math.floor(Math.random() * 255);
    let background = get_random_color();

    import { goto } from '$app/navigation';
</script>
<div class="tile is-parent">
    <article class="tile is-child is-clickable box" style="background:{background}" on:click={()=>goto(exturl)}>
        {#if image}
            <figure class="title image is-4by3">
                <img alt="{title}" src="{image}">
            </figure>
        {:else}
            <p class="title" style="color:#fff;">{title}</p>
        {/if}
        <p class="subtitle" style="color:#fff;">{shortdesc}</p>
        <div class="">
            {#each attributes as attr}
                <div class="icon-text">
                    <span class="icon has-text-success">
                        <Icon icon="faCheckSquare"/>
                    </span>
                    <span style="color:#fff">{attr}</span>
                </div>
            {/each}
        </div>
    </article>
</div>
