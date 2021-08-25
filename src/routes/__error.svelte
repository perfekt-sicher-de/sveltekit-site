<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: `Error Status: ${status}`,
                message: `${error.message}`,
                stack: `${error.stack}`
            }
        };
    }
</script>

<script>
    export let title;
    export let stack;
    export let message;
</script>

<div class="container">
    <div class="notification is-danger">
        <h1 class="title">{title}</h1>
        <p>{message}</p>
        <pre>{stack}</pre>
    </div>
</div>
