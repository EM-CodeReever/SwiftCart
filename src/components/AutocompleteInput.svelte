<script lang="ts">
    import { browser } from "$app/environment";
    import { goto, invalidateAll } from "$app/navigation";
    import type { DJ_Product } from "$lib";
    import { fade } from "svelte/transition";
    export let classNames = "";
    export let products: DJ_Product[];
    let productNames = products.map((product) => product.title);
    let value = "";

    /* HANDLING THE INPUT */
let searchInput: HTMLInputElement; // use with bind:this to focus element
let inputValue = "";
let closeList = false;
let filteredItems = [""];
let hiLiteIndex:number | null;

const filterItems = () => {
	let storageArr = <any>[]
	if (inputValue) {
		productNames.forEach(item => {
			 if (item.toLowerCase().startsWith(inputValue.toLowerCase())) {
				 storageArr = [...storageArr, item];
			 }
		});
	}
	filteredItems = storageArr;
}	
	
$: if (!inputValue) {
	filteredItems = [];
}

$: if (inputValue != "") {
    closeList = false;
}

const clearInput = () => {
	inputValue = "";	
	searchInput.focus();
}
	
const setInputVal = (itemName:string) => {
	inputValue = itemName;
	filteredItems = [];
	searchInput.focus();
    // goto(`/store/${inputValue}`);
}	

const submitValue = () => {
	if (inputValue) {
		console.log(`${inputValue} is submitted!`);
        // invalidateAll();
		goto(`/store/${inputValue}`);
	}
}


if(browser){
    document.addEventListener("click", (e) => {
    if (e.target !== searchInput) {
        closeList = true;
    }else{
        closeList = false;
    }
});
}

</script>

  <form autocomplete="off" class="z-10 w-full" on:submit|preventDefault={submitValue}>
    <div class="autocomplete relative flex">
      <input id="autocomplete-input" class="{classNames}" 
                       type="text" 
                       placeholder="Search our store" 
                       on:focus={()=>{closeList = false}}
                       bind:this={searchInput}
                       bind:value={inputValue} 
                       on:input={filterItems}>

                       {#if filteredItems.length > 0 && inputValue && !closeList}
                       <ul class="bg-gray-800 text-gray-200 rounded-lg w-full select-none absolute top-11" id="autocomplete-items-list z-10" transition:fade={{duration:100}}>
                           {#each filteredItems as item, i}
                           <!-- svelte-ignore a11y-click-events-have-key-events -->
                           <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                           <li class="p-2 cursor-pointer hover:bg-red-400" on:click={()=>{
                            // searchInput.focus();
                            setInputVal(item);
                           }}>{item}</li>
                           {/each}			
                       </ul>
                   {/if}
                   <slot/>
    </div>
  </form>

