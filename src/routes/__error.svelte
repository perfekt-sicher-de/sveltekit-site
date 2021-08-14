<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: `Error Status: ${status}`,
                message: `${error.message}`
            }
        };
    }
</script>

<script>
    export let title;
    export let message;
</script>

<div class="container">
    <div class="notification is-danger">
        <h1 class="title">{title}</h1>
        <p>{message}</p>
    </div>
</div>
