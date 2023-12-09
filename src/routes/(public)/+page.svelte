<script lang="ts">
    import Navbar from "$components/Navbar.svelte";
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
    import type { PageData } from "./$types";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import HomeSlide from "$components/HomeSlide.svelte";
    import AutocompleteInput from "$components/AutocompleteInput.svelte";
    export let data: PageData;
    let { supabase, session } = data;
    $: ({ supabase, session } = data);
    

</script>

<svelte:head>
    <title>SwiftCart</title>
</svelte:head>
<section class="min-h-screen w-full">
    <Navbar data={data}/>
    <Splide options={ {
        rewind  : true,
        pauseOnHover: false,
        gap     : '1rem',
        autoplay: true,
        arrows  : true,
        height  : 'fit-content',
        // width   : '100%',
      } } hasTrack={ false } class="bg-[#f31260] p-1 w-full">
        <div style="position: relative">
          <SplideTrack>
              <SplideSlide class="flex justify-center items-center md:space-x-10 px-10 lg:px-20 xl:px-36 py-10" >
                  <HomeSlide name="Lorem Ipsum"/>
              </SplideSlide>
              <SplideSlide class="flex justify-center items-center md:space-x-10 px-10 lg:px-20 xl:px-36 py-10" >
                <HomeSlide name="Lorem Ipsum 2"/>
            </SplideSlide>
            <SplideSlide class="flex justify-center items-center md:space-x-10 px-10 lg:px-20 xl:px-36 py-10" >
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
</section>

<style>
    .splide__progress__bar{
      background-color: #000;
    }
  </style>