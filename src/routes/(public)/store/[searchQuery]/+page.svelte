<script lang="ts">
    import Navbar from '$components/Navbar.svelte';
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    import type { DJ_Product } from '$lib';
    import { invalidateAll } from '$app/navigation';
    import ProductCard from '$components/ProductCard.svelte';
    let searchQuery = $page.params.searchQuery;
    $: searchQuery = $page.params.searchQuery;
    
    export let data: PageData;
    let products: DJ_Product[] = data.dummyjson.products.filter((product:any) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    $: products  = data.dummyjson.products.filter((product:any) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    
    
</script>

<svelte:head>
    <title>SwiftCart - {searchQuery} </title>
</svelte:head>

<section class="min-h-screen w-full flex flex-col bg-gray-100">
    <Navbar data={data} />
    <section class="w-full h-full flex-grow flex ">
        <div class="w-72 hidden screen-900:flex bg-[#132043]" style="height: calc(100vh - 72px)">
            
        </div>
        <div class="p-8 w-full">
            <div class="mx-auto w-full screen-512:max-w-lg md:max-w-3xl xl:max-w-5xl flex justify-between items-center">
                <span class="text-2xl font-semibold">Results for "{searchQuery}"</span>
                <button class="btn btn-primary screen-900:hidden">Filter</button>
            </div>
            <div class="mt-6 w-full mx-auto screen-512:max-w-lg md:max-w-3xl  grid-cols-1 screen-512:grid-cols-2 grid md:grid-cols-3 xl:grid-cols-4 xl:max-w-5xl gap-8">
                {#each products as product, i}
                    <ProductCard product={product} />
                {/each}
            </div>
        </div>
        
    </section>
    
</section>
