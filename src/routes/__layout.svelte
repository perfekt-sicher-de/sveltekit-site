<script>
    import '../styles/app.scss';
    import stringResources from '../stringResources';
    import {Container} from "sveltestrap";
    export let categories;
    export let category;
</script>
<script context="module">
    export async function load({ fetch, page }) {
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

<MyHeader category={category} categories={categories}/>
<slot />
