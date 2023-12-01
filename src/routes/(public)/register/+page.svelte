<script lang="ts">
    import DotWaveLoader from "$components/DotWaveLoader.svelte";
    import SwiftCartLogo from "$components/svg/SwiftCartLogo.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    let { supabase, session } = data;
    $: ({ supabase, session } = data);

</script>

<svelte:head>
    <title>SwiftCart</title>
</svelte:head>
<section class="min-h-screen w-full flex flex-col items-center">
    <div class="w-full bg-gray-700 text-2xl text-gray-200 font-semibold h-fit p-2 flex justify-center items-center">
        <a href="/" class="hover:bg-[#00000032] p-2 flex space-x-2 rounded-lg text-gray-200 font-bold text-2xl items-center">
            <SwiftCartLogo />
            <span>SwiftCart</span>
          </a>
    </div>
    <form class="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary mt-10 p-5">
        <div class="flex w-full flex-col gap-2">
            <div class="flex flex-col items-center space-y-3">
                <h1 class="text-3xl font-semibold">Register</h1>
                <p class="text-sm">Sign up for a <span class="text-error">SwiftCart</span> account and start shopping</p>
            </div>
            <div class="divider my-6 text-xs text-content2"></div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 form-group">
				<div class="form-field">
					<label class="form-label text-black" for="firstname">Firstname</label>
					<input class="input input-solid" placeholder="Firstname" type="text" id="firstname" />
				</div>

				<div class="form-field">
					<label class="form-label" for="lastname">Lastname</label>
					<input class="input input-solid" placeholder="Lastname" type="text" id="lastname" />
				</div>
			</div>
            <div class="w-full form-field">
				<label class="form-label" for="email">Email</label>
				<input class="input input-solid max-w-full" placeholder="Email" type="text" id="email" />
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div class="form-field">
					<label class="form-label" for="email">Password</label>
					<input class="input input-solid" placeholder="Email address" type="text" id="password" />
				</div>

				<div class="form-field">
					<label class="form-label" for="phone">Confrim Password</label>
					<input class="input input-solid" placeholder="Phone Number" type="text" id="confirm_password" />
				</div>
			</div>
            <div class="form-field pt-5">
                <div class="form-control justify-between">
                    <button type="button" class="btn btn-error w-full flex space-x-3">
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
</section>