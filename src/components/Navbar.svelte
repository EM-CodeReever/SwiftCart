<script lang="ts">
    import ShoppingCart from "./svg/ShoppingCart.svelte";
    import UserIcon from "./svg/UserIcon.svelte";

    let userSignedIn = false;


</script>

<div class="navbar p-2 shadow-none bg-gray-300">
	<div class="navbar-start">
		<a class=" hover:bg-gray-100 p-2 rounded-lg font-bold text-xl">SwiftCart</a>
	</div>
	<div class="navbar-center w-full">
		<span class="flex flex-grow">
      <input class="input input-sm  input-block input-solid placeholder:text-sm rounded-r-none" placeholder="Search..." />
      <button class="btn btn-sm btn-error rounded-l-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>      
      </button>
    </span>
	</div>
	<div class="navbar-end">
		
		<div class="dropdown dropdown-hover">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label tabindex="0" class="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
        <UserIcon />
        <span class="hidden flex-col items-start sm:flex">
          <p class="text-sm">Hello, sign in</p>
          <p class="text-sm -mt-1 font-semibold">Account</p>
        </span>
      </label>
      <div class="dropdown-menu my-2 w-fit dropdown-menu-bottom-left">
        {#if !userSignedIn}
        <div class="w-48">
          <a href="/login" class="dropdown-item text-sm">Sign in</a>
          <a href="/register" tabindex="-1" class="dropdown-item text-sm">Create an account</a>
        </div>
        {:else}
        <div class="grid grid-cols-2 w-96">
          <span class="col-span-1 flex-col">
            <a class="dropdown-item text-sm font-bold">Account Settings</a>
            <a tabindex="-1" class="dropdown-item text-sm font-bold">Logout</a>
          </span>
          <span class="col-span-1 flex flex-col">
            <a class="dropdown-item text-sm">Purchase History</a>
            <a tabindex="-1" class="dropdown-item text-sm">Coupons</a>
            <a tabindex="-1" class="dropdown-item text-sm">Wishlist</a>
          </span>
        </div>
        {/if}
      </div>
    </div>
		<div class="dropdown dropdown-hover">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="flex items-center hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
        <ShoppingCart />
        <span class="flex flex-col items-center justify-around">
          <p class="text-sm font-bold">3</p>
          <p class="text-sm -mt-2">cart</p>
        </span>
      </label>
      <div class="dropdown-menu my-2 w-48 dropdown-menu-bottom-left">
        <span class="flex flex-col space-y-2">
          <p class="px-2 text-sm font-semibold -mb-2">3 items</p>
          <p class="px-2 text-sm">Cart total: $1430</p>
          <button class="btn btn-primary mt-1">View Cart</button>
        </span>
      </div>
    </div>
	</div>
</div>
<hr class="border-gray-100">
<div class="navbar shadow-none p-1 bg-gray-300">
  <div class="navbar-center space-x-2">
    <a href="" class="nav-item text-sm hover:bg-gray-100 py-1 px-2 rounded-lg font-semibold">Deals</a>
    <a href="" class="nav-item text-sm hover:bg-gray-100 py-1 px-2 rounded-lg font-semibold">Popular</a>
    <div class="dropdown dropdown-hover">
      <label tabindex="0" class="nav-item text-sm flex items-center space-x-1 hover:bg-gray-100 py-1 px-2 rounded-lg">
        <p class="font-semibold">Categories</p> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </label>
      <div class="mt-2 dropdown-menu dropdown-menu-bottom-right ">
        <a class="dropdown-item text-sm">Category 1</a>
        <a tabindex="-1" class="dropdown-item text-sm">Category 2</a>
        <a tabindex="-1" class="dropdown-item text-sm">Category 3</a>
        <a tabindex="-1" class="dropdown-item text-sm">Category 4</a>
        <a tabindex="-1" class="dropdown-item text-sm">Category 5</a>
      </div>
    </div>
  </div>
</div>




