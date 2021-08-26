<script>
    export let icon;
    import Fa from 'svelte-fa/src/fa.svelte';

    import * as fas from '@fortawesome/free-solid-svg-icons';
    let svg = fas[icon];
</script>

<Fa icon={svg}/>
