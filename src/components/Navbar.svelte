<script lang="ts">

</script>

<nav class="flex h-16 w-full items-center justify-between bg-gray-800 px-5 absolute top-0">
    <div>
        <a href="/">
            <img src="https://via.placeholder.com/150" alt="logo" class="h-10 w-10">
        </a>
    </div>
    
    <div class="flex justify-center items-center">
        <ul class="flex font-semibold text-sm">
            <li class="px-4 py-2">
                <a href="/" class="text-base-100 hover:underline hover:text-gray-300">Home</a>
            </li>
            <li class="px-4 py-2">
                <a href="/about" class="text-base-100 hover:underline hover:text-gray-300">About</a>
            </li>
            <li class="px-4 py-2">
                <a href="/contact" class="text-base-100 hover:underline hover:text-gray-300">Contact</a>
            </li>
            <li class="px-4 py-2">
                <a href="/store" class="text-base-100 hover:underline hover:text-gray-300">Store</a>
            </li>
            <li class="px-4 py-2">
                <a href="/categories" class="text-base-100 hover:underline hover:text-gray-300">Categories</a>
            </li>
            <li class="px-4 py-2">
                <a href="/login" class="text-base-100 hover:underline hover:text-gray-300">Login</a>
            </li>
            <li class="px-4 py-2">
                <a href="/register" class="text-base-100 hover:underline hover:text-gray-300">Register</a>
            </li>

        </ul>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span class="badge badge-sm indicator-item">2</span>
            </div>
          </div>
          <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">2 Items</span>
              <span class="text-info">Subtotal: $9,999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end ml-3">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full ring-1 bg-white">
              <img alt="Tailwind CSS Navbar component" src="https://robohash.org/ipsum" />
            </div>
          </div>
          <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
</nav>