<script>
	import '../styles/app.scss';
	import stringResources from '../stringResources';
	import Header from '../components/Header.svelte';
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

<div class="container">
    <Header category={category} categories={categories}/>
    <section class="m-4"></section>
    <slot />
    <footer>
        <Navbar>
            <div slot="navbar-start" class="navbar-start">
                <a href="/impressum" class="navbar-item">
                        <span class="icon">
                            <IconInfo />
                        </span>
                    <span>
                            {stringResources.menu.secondBtnText}
                        </span>
                </a>
                <a href="/datenschutz" class="navbar-item">
                        <span class="icon">
                            <IconLock />
                        </span>
                    <span>
                            {stringResources.menu.thirdBtnText}
                        </span>
                </a>
                <a href="/team" class="navbar-item">
                        <span class="icon">
                            <IconBuilding />
                        </span>
                    <span>
                            Über uns
                    </span>
                </a>
            </div>
        </Navbar>
    </footer>
</div>
