<script>
    import {DropdownMenu, DropdownToggle} from "sveltestrap";
    export let text="";
    let className = '';
    export { className as class };
    export let isOpen = false;
</script>
<Dropdown bind:isOpen={isOpen} nav inNavBar>
    <DropdownToggle nav caret class="{className}">{text}</DropdownToggle>
    <DropdownMenu>
        <slot></slot>
    </DropdownMenu>
</Dropdown>
