import * as fas from '@fortawesome/free-solid-svg-icons';
export async function get({ params }) {
    const { icon } = params;
    let svg = fas[icon];
    return {
        body: {
            svg: svg
        }
    }
}
