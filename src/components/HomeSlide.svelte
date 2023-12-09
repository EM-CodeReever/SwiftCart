<script lang="ts">
export let name: string;
export let description: string = "";

</script>
<div class="max-w-3xl flex items-center space-x-5 mt-3">
    <span class="flex flex-col space-y-3  w-fit h-fit">
        <p class="text-lg sm:text-2xl font-bold text-left">{name}</p>
        <p class=" text-xs sm:text-sm max-w-sm flex text-left flex-grow">{description}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Some more content for the card escirption </p>
        <button class="btn btn-sm sm:btn-md w-fit">Shop now</button>
      </span>
      <div class="rounded-lg w-80 bg-gray-900 aspect-square sm:flex relative justify-center items-center">
        <p class="font-semibold text-gray-200">Product image here</p>
      </div>
</div>
