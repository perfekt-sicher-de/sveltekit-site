//import faker from "faker";

export async function get() {
    const team = [
        {
            name: 'Keywan Ghadami',
            avatar: `/keywan.png`,
        }
    ];


    return {
        body: team,
    };
}
