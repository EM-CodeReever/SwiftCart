
import type { PageServerLoad } from './$types';

export const load = (async () => {
    let dummyjson
    dummyjson = await fetch('https://dummyjson.com/products?limit=0').then(res => res.json())
    return {
        dummyjson
    };
}) satisfies PageServerLoad;