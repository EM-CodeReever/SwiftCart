<script lang="ts">
    import { goto } from "$app/navigation";
    import type { LayoutServerData } from "../routes/$types";
    import type { PageData } from "../routes/(public)/$types";
    import AutocompleteInput from "./AutocompleteInput.svelte";
    import ShoppingCart from "./svg/ShoppingCart.svelte";
    import SwiftCartLogo from "./svg/SwiftCartLogo.svelte";
    import UserIcon from "./svg/UserIcon.svelte";
    
    
    export let data: PageData;
    let { supabase, session, customer,tempFirstName } = data;
    $: ({ supabase, session, customer, tempFirstName } = data);

    

    let userSignedIn = session != null
    $: userSignedIn = session != null

    let customerSignedIn = customer != null
    $: customerSignedIn = customer != null
    
    
  if(customer) {
    console.log("Customer: ", customer)
    userSignedIn = true
  }else if(session?.user){
    console.log("No Profile: ", session?.user)
    userSignedIn = true
  }else{
    console.log("No User")
    userSignedIn = false
  }

    function signOut() {
      supabase.auth.signOut().then(() => {
        goto("/")
      })
      
    }
</script>

<div class="navbar p-2 shadow-none bg-[#1F4172]">
	<div class="navbar-start w-fit">
		<a href="/" class="hover:bg-[#00000032] p-2 flex space-x-2 rounded-lg text-gray-200 font-bold text-2xl items-center">
      <SwiftCartLogo />
      <span>SwiftCart</span>
    </a>
	</div>
	<div class="navbar-center px-5 w-full">
		<span class="flex-grow max-w-2xl hidden md:flex">
      <!-- <input class="" placeholder="Search..." /> -->
      <AutocompleteInput products={data.dummyjson.products} classNames="input input-block bg-[#00000032] border-transparent text-gray-200 placeholder:text-sm rounded-r-none">
        <button class="btn bg-[#00000032] rounded-l-none hover:btn-error">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>      
        </button>
        </AutocompleteInput>
      
    </span>

	</div>
	<div class="navbar-end w-fit">
		<div class="dropdown dropdown-hover z-30">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label tabindex="0" class="flex space-x-1 items-center hover:bg-[#00000032] -mr-1 sm:mr-0 p-1 sm:p-2 rounded-lg cursor-pointer">
        <UserIcon />
        <span class="hidden flex-col items-start sm:flex text-gray-200">
          <p class="text-sm -mt-1 font-semibold">Account</p>
          {#if userSignedIn && customerSignedIn}
          <p class="text-sm">Hello, {customer?.first_name}</p>
          {:else if userSignedIn}
          <p class="text-sm">Hello, {tempFirstName}</p>
          {:else}
          <p class="text-sm">Sign in</p>
          {/if}
        </span>
      </label>
      <div class="dropdown-menu my-1.5 w-fit dropdown-menu-bottom-left">
        {#if !userSignedIn}
        <div class="w-48">
          <a href="/login" class="dropdown-item text-sm">Sign in</a>
          <a href="/register" tabindex="-1" class="dropdown-item text-sm">Create an account</a>
        </div>
        {:else}
        <div class="grid grid-cols-2 w-96">
          <span class="col-span-1 flex-col">
            <button class="dropdown-item text-sm font-bold">Account Settings</button>
            <button tabindex="-1" class="dropdown-item text-sm font-bold" on:click={()=>{
              signOut()
            }}>Logout</button>
          </span>
          <span class="col-span-1 flex flex-col">
            <a href="/" class="dropdown-item text-sm">Purchase History</a>
            <a href="/" tabindex="-1" class="dropdown-item text-sm">Coupons</a>
            <a href="/" tabindex="-1" class="dropdown-item text-sm">Wishlist</a>
          </span>
        </div>
        {/if}
      </div>
    </div>
		<div class="dropdown dropdown-hover">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="flex items-center hover:bg-[#00000032] p-1 sm:p-2 rounded-lg cursor-pointer ">
        <ShoppingCart />
        <span class="hidden flex-col items-center justify-around text-gray-200 sm:flex">
          <p class="text-sm font-bold">3</p>
          <p class="text-sm -mt-2">cart</p>
        </span>
      </label>
      <div class="dropdown-menu my-2 w-48 dropdown-menu-bottom-left">
        <span class="flex flex-col space-y-2">
          <p class="px-2 text-sm font-semibold -mb-2">3 items</p>
          <p class="px-2 text-sm">Cart total: $1430</p>
          <button class="btn btn-error mt-1" on:click={()=>{
            goto("/cart")
          }}>View Cart</button>
        </span>
      </div>
    </div>
	</div>
</div>
<!-- <hr class="border-gray-600"> -->
<div class="py-2 justify-center items-center px-3 sm:px-8 bg-[#1F4172] flex md:hidden">
  <span class="flex-grow flex">
    <AutocompleteInput products={data.dummyjson.products} classNames="input input-sm input-block bg-[#00000032] border-transparent text-gray-200 placeholder:text-sm rounded-r-none">
      <button class="btn btn-sm bg-[#00000032] rounded-l-none hover:btn-error">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>      
      </button>
      </AutocompleteInput>
  </span>
</div>




