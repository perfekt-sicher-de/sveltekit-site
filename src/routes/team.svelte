<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('/api/team.json');

        if (res.ok) return { props: { users: await res.json() } };
        return {
            status: res.status,
            error: new Error(await res.text())
        };
    }
</script>

<script>
    export let users;
</script>

<section class="hero is-primary is-halfheight">
    <div class="hero-body">
        <div>
            <p class="title">
                Über my-security-check.com
            </p>
            <p class="subtitle">
                my-security-check.com soll Unternehmen helfen die richtigen und allumfassenden Sicherheitslösungen zu finden,
                und das so gut, so einfach, so komfortabel, sicher und so umweltschonend wie möglich.<br>
                Gleichtzeit soll es kostenfrei sein und bleiben und leicht zu pflegen sein.<br>
                Erfüllen wie diese Anforderung nicht, dann schreiben Sie uns nichts hilft uns mehr zu wachsen als Kritik.
            </p>
        </div>
    </div>
</section>

<section class="hero is-secondary is-halfheight">
    <div class="hero-body">
        <div>
            <p class="title">
                Über Keywan Ghadami
            </p>
            <p class="subtitle">
                Wer steckt hinter my-security-check.com? Und warum?<br>
                Software-Entwickler ist mehr als nur mein Beruf, ich habe schon vor dem Studium damit begonnen
                kleine Programme und Websiten zu erstellen. Viele Kollegen, Arbeitgeber und Kunden
                schätzen meine Arbeit als Entwickler und technical Lead.<br>
                Für mich persönlich reicht es nicht mehr, nur das zu tun was gerade bezahlt werden kann.
                Ich möchte als Entwicklen die zukunft gestalten, die Art wie Websiten erstellt werden und das machen was
                ausergewöhnlich ist.<br>
                Mein Team:
            </p>
        </div>
    </div>
</section>

<div class="main">
    {#each users as { avatar, name, about }}

        <div class="box">
            <img src={avatar} alt={name} />
            <div style="text-align: center; justify-content: center; width:100%">
                <h2 class="headline">{name}</h2>
            </div>
        </div>

    {/each}
</div>

<style>
    .main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .box {
        width: 10em;
        padding: 0.25rem;
        margin: 1.5rem;
        box-shadow: 4px 5px 11px 2px lightgray;
    }
    .box:hover {
        box-shadow: 4px 5px 11px 10px lightgray;
    }
    img {
        width: 15rem;
        object-fit: contain;
    }
</style>
