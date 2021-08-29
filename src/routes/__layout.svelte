<script>
	import '../styles/app.scss';
	import stringResources from '../stringResources';
	import Navbar from '../components/Navbar.svelte';
    export let categories;
    export let category;
</script>

<script context="module">
    export async function load({ fetch, page }) {
        const res = await fetch('/$.json');
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



<Navbar category={category} categories={categories}/>
<div class="container">
    <section class="m-4"></section>
    <slot />
</div>
