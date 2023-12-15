<script lang="ts">
    import Navbar from '$components/Navbar.svelte';
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    import { invalidateAll } from '$app/navigation';
    let searchQuery = $page.params.searchQuery;
    $: searchQuery = $page.params.searchQuery;
    export let data: PageData;
</script>



<section class="min-h-screen w-full flex flex-col bg-gray-100">
    <Navbar data={data} />
    <section class="w-full h-full flex-grow flex ">
        <div class="w-72 min-w-max h-full bg-green-400" style="height: calc(100vh - 74px)">
            
        </div>
        <div class="p-8 w-full">
            <span class="text-2xl font-semibold">Results for "{searchQuery}"</span>
            <div class="flex flex-col pt-8 space-y-5">
                <div class="bg-gray-500 animate-pulse rounded h-56 w-full">

                </div>
                <div class="bg-gray-300 rounded h-56 w-full">

                </div>
                <div class="bg-gray-300 rounded h-56 w-full">

                </div>
                <div class="bg-gray-300 rounded h-56 w-full">

                </div>
                <div class="bg-gray-300 rounded h-56 w-full">

                </div>
            </div>
        </div>
        
    </section>
    
</section>
