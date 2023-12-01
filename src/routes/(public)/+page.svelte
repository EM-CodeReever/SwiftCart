<script lang="ts">
    import Navbar from "$components/Navbar.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    let { supabase, session } = data;
    $: ({ supabase, session } = data);
</script>

<svelte:head>
    <title>SwiftCart</title>
</svelte:head>
<section class="min-h-screen w-full">
    <Navbar data={data}/>
    <section class="h-96 w-full bg-gray-300 p-5">

    </section>
</section>