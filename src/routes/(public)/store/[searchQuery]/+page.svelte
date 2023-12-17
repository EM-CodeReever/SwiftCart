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
        <div class="p-8 w-full overflow-auto" style="height: calc(100vh - 72px)">
            <div class="mx-auto w-full screen-512:max-w-lg md:max-w-3xl xl:max-w-5xl flex justify-between items-center">
                <span class="text-2xl font-semibold">Results for "{searchQuery}"</span>
                <label class="btn btn-rounded btn-primary screen-900:hidden flex space-x-3 items-center" for="drawer-left">
                    <span>Filter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>                      
                </label>
            </div>
            <div class="mt-6 w-full mx-auto screen-512:max-w-lg md:max-w-3xl  grid-cols-1 screen-512:grid-cols-2 grid md:grid-cols-3 xl:grid-cols-4 xl:max-w-5xl gap-8">
                {#each products as product, i}
                    <ProductCard product={product} />
                {/each}
            </div>
        </div>
        
    </section>

<input type="checkbox" id="drawer-left" class="drawer-toggle" />

<label class="overlay" for="drawer-left"></label>
<div class="drawer text-gray-300" data-theme="dark">
	<div class="drawer-content bg-[#132043] pt-10 flex flex-col h-full">
		<label for="drawer-left" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
		<div>
			<h2 class="text-xl font-medium">Filter</h2>
		</div>
		<div class="h-full flex flex-row justify-end items-end gap-2">
			<button class="btn btn-ghost">Cancel</button>
			<button class="btn btn-primary">Apply</button>
		</div>
	</div>
</div>
    
</section>
