<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('/api/menu-check.json');
        let data = await res.json();

        if (data) {
            return {
                props: data,
            };
        }
        return {
            status: 400,
            error: new Error("Could not load root category")
        };
    }
</script>
<script>
    export let categories;
</script>

{#each categories as cat, i}
    <h2>{cat.title}</h2>
    <ul>
        {#each cat.categories as subcat, i}
            <li><a href="/{subcat.slug}" >{subcat.title}</a></li>
        {/each}
    </ul>
{/each}

<a href="/datenschutz">datenschutz</a>
<a href="/impressum">impressum</a>
