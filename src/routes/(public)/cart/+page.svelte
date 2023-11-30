<script lang="ts">
    import Navbar from '$components/Navbar.svelte';
    import CheckoutIcon from '$components/svg/CheckoutIcon.svelte';
    import CouponIcon from '$components/svg/CouponIcon.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<svelte:head>
    <title>SwiftCart - Your Cart</title>
</svelte:head>

<section class="min-h-screen w-full bg-gray-200">
    <Navbar />
    <section class="w-full h-fit flex space-x-10 p-10 ">
        <div class="w-full h-fit max-w-7xl bg-white rounded-lg p-4">
            <span class="text-3xl font-semibold">Shopping Cart</span>
            <div class="divider my-2 text-xs text-content2"></div>
            <div class="w-full h-96 overflow-y-auto flex flex-col space-y-4">
                <!-- products go here -->

            </div>
        </div>
        <div class="w-full h-fit bg-white rounded-lg max-w-sm p-4 flex flex-col space-y-3">
            <span class="text-3xl font-semibold">Checkout Preview</span>
            <div class="divider my-2 text-xs text-content2"></div>
            <span class="flex justify-between">
                <p>Subtotal</p>
                <p class="font-semibold">$15,560.00</p>
            </span>
            <button class="btn btn-error flex space-x-2">
                <span>Proceed to checkout</span>
                <CheckoutIcon />
            </button>
            <button class="btn flex space-x-2">
                <span>Apply Super Coupon</span>
                <CouponIcon />
            </button>
            
        </div>
    </section>
</section>