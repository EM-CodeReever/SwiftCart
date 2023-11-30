<script lang="ts">
    import Navbar from '$components/Navbar.svelte';
    import type { PageData } from './$types';
    import { page } from '$app/stores';
    let productId = $page.params.productId;
    
    export let data: PageData;
</script>

<svelte:head>
    <title>{productId}</title>
</svelte:head>

<section class="min-h-screen w-full">
    <Navbar />
    {productId}
</section>