<script>
import { fly } from 'svelte/transition'
let navClick;
</script>

<div class="flex justify-center w-3/4 mx-auto py-4 relative">
    <img class="w-6 mr-4" src="icons/nav-button.svg" alt="" on:click={() => navClick = !navClick}>
    <h1 class="text-3xl font-bold text-secondary">Hosting<span class="text-primary">Solutions</span></h1>
</div>
{#if navClick}
    <div class="absolute top-0 h-screen bg-primary z-50" transition:fly={{ x: 0, duration: 600 }} style="width: 375px;">
        <p class="text-white text-3xl mt-6 ml-10 font-semibold cursor-pointer" on:click={() => navClick = !navClick }>X</p>
        <ul class="ml-10 mt-6">
            <li class="py-5 text-2xl text-white"><a href="/">Home</a></li>
            <li class="py-5 text-2xl text-white"><a href="/">About</a></li>
            <li class="py-5 text-2xl text-white"><a href="/">Pricing</a></li>
            <li class="py-5 text-2xl text-white"><a href="/">Contact</a></li>
        </ul>
    </div>
{/if}