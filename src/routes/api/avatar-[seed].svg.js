
export async function get({params}) {
    const { seed } = params;
    const avatar = `https://avatars.dicebear.com/api/pixel-art/${seed}.svg`;
    const res = await fetch(avatar);
    const svg = await res.text();
    return {
        body: svg,
    };
}
