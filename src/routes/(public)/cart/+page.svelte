<script lang="ts">
    import Navbar from '$components/Navbar.svelte';
    import CheckoutIcon from '$components/svg/CheckoutIcon.svelte';
    import CouponIcon from '$components/svg/CouponIcon.svelte';
    import type { PageData } from "./$types";
    export let data: PageData;
    let { supabase, session } = data;
    $: ({ supabase, session } = data);
</script>

<svelte:head>
    <title>SwiftCart - Your Cart</title>
</svelte:head>

<section class="min-h-screen w-full bg-gray-300">
    <Navbar data={data} />
    <section class="w-full h-fit sm:flex-row flex flex-col lg:space-y-0 space-y-5 sm:space-x-10 p-5 sm:p-10 ">
        <div class="w-full  h-fit bg-white rounded-lg p-4">
            <span class="text-2xl font-semibold flex items-center justify-center sm:justify-between">
                <p class="flex flex-col text-center sm:text-left">Shopping Cart
                <span class="text-sm text-content2">({0} items)</span>
                </p>
                <span class="sm:flex space-x-3 items-center hidden lg:hidden">
                    <button class="btn btn-primary flex space-x-2">
                        <span>Coupon</span>
                        <CouponIcon />
                    </button>
                    <button class="btn btn-error flex space-x-2">
                        <span>Checkout</span>
                        <CheckoutIcon />
                    </button>
                    
                </span>
            </span>
            <div class="divider my-0 text-xs text-content2"></div>
            <div class="w-full min-w-2xl h-96 overflow-y-auto flex flex-col space-y-4">
                <!-- products go here -->

            </div>
        </div>
        <div class="w-full sm:max-w-sm xl:max-w-md h-fit flex sm:hidden bg-white rounded-lg p-4 lg:flex flex-col space-y-3">
            <span class="text-2xl font-semibold">Checkout Preview</span>
            <div class="divider my-0 text-xs text-content2"></div>
            <span class="flex justify-between">
                <p>Subtotal</p>
                <p class="font-semibold">$15,560.00</p>
            </span>
            <button class="btn btn-error flex space-x-2">
                <span>Proceed to checkout</span>
                <CheckoutIcon />
            </button>
            <button class="btn btn-primary flex space-x-2">
                <span>Apply Super Coupon</span>
                <CouponIcon />
            </button>
            
        </div>
    </section>
</section>