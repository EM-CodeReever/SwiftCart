<script lang="ts">
    import Navbar from "$components/Navbar.svelte";
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import type { PageData } from "./$types";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import HomeSlide from "$components/HomeSlide.svelte";
    import AutocompleteInput from "$components/AutocompleteInput.svelte";
    import CategoryCard from "$components/ProductCard.svelte";
    export let data: PageData;
    let { supabase, session } = data;
    $: ({ supabase, session } = data);
    

</script>

<svelte:head>
    <title>SwiftCart</title>
</svelte:head>
<section class="min-h-screen w-full bg-white">
    <Navbar data={data}/>
    <Splide options={ {
        rewind  : true,
        pauseOnHover: false,
        gap     : '1rem',
        autoplay: true,
        arrows  : true,
        height  : 'calc(100vh - 95px)',
        // width   : '100%',
      } } hasTrack={ false } class="from-[#1F4172] to-[#F1B4BB] bg-gradient-to-b  p-1 w-full">
        <div style="position: relative">
          <SplideTrack>
              <SplideSlide class="flex justify-center items-center md:space-x-10 px-10 lg:px-20 xl:px-36 py-5" >
                  <HomeSlide name="Lorem Ipsum"/>
              </SplideSlide>
              <SplideSlide class="flex justify-center items-center md:space-x-10 px-10 lg:px-20 xl:px-36 py-5" >
                <HomeSlide name="Lorem Ipsum 2"/>
            </SplideSlide>
            <SplideSlide class="flex justify-center items-center md:space-x-10 px-10 lg:px-20 xl:px-36 py-5" >
              <HomeSlide name="Lorem Ipsum 3"/>
          </SplideSlide>

              
          </SplideTrack>
        </div>
        <div class="splide__progress mt-3">
          <div class="splide__progress__bar">
          </div>
        </div>
        <button class="splide__toggle hidden" type="button">
          <span class="splide__toggle__play">Play</span>
          <span class="splide__toggle__pause">Pause</span>
        </button>
      </Splide>
      <div>
        
        <!-- <div class="bg-none">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mx-auto py-10 flex flex-col items-center">
              <h2 class="text-2xl lg:text-3xl font-semibold text-gray-800 mb-5">Categories</h2>
              <div class="mt-6 w-full home-grid-3:max-w-lg md:max-w-4xl home-grid-1:max-w-none grid-cols-1 home-grid-3:grid-cols-2 grid md:grid-cols-3 home-grid-1:grid-cols-4 gap-8">
              
          </div>
          </div>
      </div>
      </div> -->
</section>

<style>
    .splide__progress__bar{
      background-color: #000;
    }
  </style>