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
                Über perfekt-sicher.de
            </p>
            <p class="subtitle">
                perfekt-sicher.de hilft Unternehmen die richtigen Sicherheitslösungen zu finden.<br>
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
            <div class="subtitle">
<h2>Wer steckt hinter perfekt-sicher.de? Und warum?</h2>
                <br>
                
                Schon währendem Studium hab ich damit begonnen Programme und Websiten zu erstellen.
                Mittlerweile berate Ich Agenturen und Firmen zu diversen E-Commerce und Sicherheits-Themen.
                Während alle E-Commerce/Sicherheits Themen über OXID eSalses abgedeckt werden können
                gibt es Webanwendungen, APIs und andere Sicherheits-Themen bei denen ich außerhalb meiner
                hauptberüflichen Tätigkeit unterstütze.

                <br>

                Mein Team:
            </div>
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
