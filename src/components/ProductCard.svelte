<script lang="ts">
    import type { DJ_Product } from "$lib";
    export let product: DJ_Product;
</script>

<div class="relative flex justify-center items-center flex-col ">
    <div
        class="relative w-764md:w-56 lg:w-60 bg-trasnparent rounded-lg overflow-hidden hover:opacity-75 cursor-pointer aspect-square"
    >
    <span>
        <div class="absolute inset-0 bg-gradient-to-b from-[#00000032] to-transparent"></div>
        <div class="absolute top-2 right-2 badge badge-error text-gray-100">$ {product.price}</div>
        {#if product.discountPercentage > 30}
        <div class="absolute top-2 right-16 badge badge-warning text-gray-800">{product.discountPercentage}% OFF!</div>
        {/if}
    </span>
        <img
            alt="{product.title}"
            src="{product.thumbnail}"
            class="w-full h-full object-center object-cover aspect-auto"
        />
    </div>
    <h3 class="mt-3 font-medium text-sm  text-gray-800 link-underline-hover">
        <a href="/"> {product.title}</a>
        
    </h3>
</div>
