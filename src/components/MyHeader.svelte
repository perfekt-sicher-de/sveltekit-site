<script>
	import {
		DropdownMenu,
		Navbar,
		DropdownToggle,
		NavbarBrand,
		NavbarToggler,
		NavItem,
		NavLink,
		DropdownItem
	} from "sveltestrap";
	import NavMenuItem from "./NavMenuItem.svelte";
	import IconUser from "./Icons/IconUser.svelte";
	import IconSearch from "./Icons/IconSearch.svelte";
	//export let category;
	export let categories;
	let isOpen = false;
	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<header>
	<Navbar class="horizont2" color="dark" dark expand="lg">
		<NavbarToggler on:click={() => (isOpen = !isOpen)} class="p-0 border-0" id="navbarSideCollapse" aria-label="Toggle navigation"></NavbarToggler>
		<Collapse {isOpen} navbar expand="lg" on:update={handleUpdate}>
			<Nav class="navbar-nav me-auto mb-2 mb-lg-0" navbar>
				{#each categories as cat, i}
					<SubNavMenu text="{cat.title}">
						{#each cat.categories as subcat, i}
							<li><DropdownItem href="/{subcat.slug}" >{subcat.title}</DropdownItem></li>
						{/each}
					</SubNavMenu>
				{/each}
				<NavMenuItem href="/datenschutz">Datenschutz</NavMenuItem>
				<NavMenuItem href="/impressum" >Impressum</NavMenuItem>
			</Nav>
		</Collapse>
		<div><IconUser></IconUser></div>
	</Navbar>
	<Navbar class="horizont" color="dark" dark expand="lg">
		<NavbarBrand href="/">	<img alt="logo" src="/logos/logo64.png" width="64" height="64">
			Perfekt Sicher</NavbarBrand>
		<form class="d-flex">
			<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
			<button class="btn btn-outline-primary" type="submit"><IconSearch></IconSearch></button>
		</form>
	</Navbar>
</header>
<!--

	<a class="button is-primary" href="/securityincident">
							<span class="icon">
								<IconSkullCrossbones />
							</span>
		<span>{stringResources.menu.underAttack}</span>
	</a>
-->
	<!--
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

	-->

