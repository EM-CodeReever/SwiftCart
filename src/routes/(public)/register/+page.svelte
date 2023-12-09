<script lang="ts">
    import { enhance } from "$app/forms";
    import DotWaveLoader from "$components/DotWaveLoader.svelte";
    import SwiftCartLogo from "$components/svg/SwiftCartLogo.svelte";
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
    import type { PageData } from "./$types";
    export let data: PageData;
    import { superForm } from 'sveltekit-superforms/client';
    import { fade } from "svelte/transition";
    import { goto } from "$app/navigation";
    const { form, errors, constraints } = superForm(data.form);
    let { supabase, session } = data;
    $: ({ supabase, session } = data);
    
    let submissionSuccessful = false;
    

</script>

<svelte:head>
    <title>SwiftCart</title>
</svelte:head>
<SuperDebug data={$form} />
<section class="min-h-screen w-full flex flex-col items-center">
    <div class="w-full bg-gray-700 text-2xl text-gray-200 font-semibold h-fit p-2 flex justify-center items-center">
        <button on:click={()=>{goto("/",{invalidateAll:true})}} class="hover:bg-[#00000032] p-2 flex space-x-2 rounded-lg text-gray-200 font-bold text-2xl items-center">
            <SwiftCartLogo />
            <span>SwiftCart</span>
          </button>
    </div>
    {#if !submissionSuccessful}
    <form class="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary mt-10 shadow-md p-5" method="post" action="?/register" out:fade={{duration:500}} use:enhance={()=>{
        return async ({ result, update }) => {
         console.log(result.type);
         
             if(result.type === 'success') {
                 const { data, error } = await supabase.auth.signUp({
                     email: $form.email,
                     password: $form.password
                 })
                 if(error) {
                     console.log(error);
                 } else {
                    submissionSuccessful = true;
                 }
             }else if(result.type === 'failure') {
                 if(result.data?.errors){
                     $errors = result.data.errors;
                 }
             }
        }
     }}>
         <div class="flex w-full flex-col gap-2">
             <div class="flex flex-col items-center space-y-3 mb-3">
                 <h1 class="text-3xl font-semibold">Register</h1>
                 <p class="text-sm">Sign up for a <span class="text-error">SwiftCart</span> account and start shopping</p>
             </div>
             <button type="button" class="btn gap-2 bg-gray-5">
                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 48 48" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                     <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                     <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                     <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                     <path
                         fill="#1976D2"
                         d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
               c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                     ></path>
                 </svg>
                 <span>Sign up with google</span>
             </button>
             <div class="divider  text-xs text-content2">or</div>
             <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 form-group">
                 <div class="form-field">
                     <label class="form-label" for="firstname">Firstname</label>
                     <input class="input input-solid input-block" placeholder="John" type="text" name="firstName" id="firstname" {...$constraints.firstName} aria-invalid={$errors.firstName ? 'true' : undefined} bind:value={$form.firstName}/>
                     {#if $errors.firstName}<label for="firstName" class="form-label text-xs text-error">{$errors.firstName}</label>{/if}
                 </div>
 
                 <div class="form-field">
                     <label class="form-label" for="lastName">Lastname</label>
                     <input class="input input-solid input-block" placeholder="Doe" type="text" name="lastName" id="lastname" {...$constraints.lastName} aria-invalid={$errors.lastName ? 'true' : undefined} bind:value={$form.lastName}/>
                     {#if $errors.lastName}<label for="firstName" class="form-label text-xs text-error">{$errors.lastName}</label>{/if}
                 </div>
             </div>
             <div class="w-full form-field">
                 <label class="form-label" for="email">Email</label>
                 <input class="input input-solid max-w-full" placeholder="johndoe@examplecom" type="email" name="email" id="email" {...$constraints.email} aria-invalid={$errors.email ? 'true' : undefined} bind:value={$form.email}/>
                 {#if $errors.firstName}<label for="firstName" class="form-label text-xs text-error">{$errors.firstName}</label>{/if}
             </div>
 
             <div class="form-field">
                <label class="form-label" for="email">Password</label>
                <input class="input input-solid input-block"  type="password" name="password" id="password" {...$constraints.password} aria-invalid={$errors.password ? 'true' : undefined} bind:value={$form.password}/>
                {#if $errors.password}<label for="firstName" class="form-label text-xs text-error">{$errors.password}</label>{/if}
            </div>

             <div class="form-field pt-5">
                 <div class="form-control justify-between">
                     <button class="btn btn-error w-full flex space-x-3">
                         <span>Continue</span>
                         <!-- <DotWaveLoader /> -->
                     </button>
                 </div>
             </div>
     
             <div class="form-field">
                 <div class="form-control">
                     <a href="/login" class="link link-underline-hover link-primary text-sm">Already have an account? Sign In</a>
                 </div>
             </div>
     </form>
    {/if}
    {#if submissionSuccessful}
    <div class="mx-auto my-auto text-gray-800 mt-36 flex space-y-5 w-full items-center max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary shadow-md p-5" in:fade={{delay:500,duration:500}}>
        <span class="flex items-center justify-between max-w-fit space-x-1 p-2 rounded-xl bg-slate-300">
            <SwiftCartLogo />
            <p class="text-2xl font-bold">SwiftCart</p>
        </span>
        <p class="text-center text-gray-800">Please check your email for a verification link</p>
        <p class="text-center text-gray-800">You can close this tab after successful verification</p>
        <p class="text-center text-gray-800 text-sm italic">This is currently disabled becuase sending automated emails uses up precious resources... <br> <button class="mt-3 btn btn-sm btn-error" on:click={()=>{goto("/",{invalidateAll:true})}}>Go To Homepage</button></p>
    </div>
    {/if}
</section>