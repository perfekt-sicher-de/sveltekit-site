<script>
    export let id;
    import categories from '../categories';
    let title = categories[id].title;
    let subtitle = categories[id].subtitle;
    import { goto } from '$app/navigation';
</script>
<div class="tile is-parent">
    <article class="tile is-child box" on:click={()=>goto(id)}>
        <p class="title">{title}</p>
        <p class="subtitle">{subtitle}</p>
    </article>
</div>
