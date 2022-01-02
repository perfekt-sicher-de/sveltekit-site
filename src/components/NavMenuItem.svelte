<script>
    import {NavLink} from "sveltestrap";
    export let href;
    let className = '';
    export { className as class };
    export let active = false;
</script>
<NavItem><NavLink class={className} active={active} href="{href}"><slot></slot></NavLink></NavItem>
