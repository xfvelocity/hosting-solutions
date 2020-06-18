<script>
import { fly } from 'svelte/transition'
let navClick;
</script>

<div class="flex justify-center w-4/5 mx-auto py-4 relative 768px:flex-wrap 768px:justify-between 768px:py-4 1024px:max-w-48rem">
    <img class="w-6 mr-4 cursor-pointer 768px:hidden" src="icons/nav-button.svg" alt="" on:click={() => navClick = !navClick}>
    <h1 class="text-3xl font-bold text-secondary 768px:mt-4">Hosting<span class="text-primary">Solutions</span></h1>
    <div class="hidden 768px:inline-flex items-center">
        <a class="mr-3 font-semibold 768px:mt-4 hover:text-primary" href="/">Home</a>
        <a class="mr-3 font-semibold 768px:mt-4 hover:text-primary" href="/">About</a>
        <a class="mr-3 font-semibold 768px:mt-4 hover:text-primary" href="/">Pricing</a>
        <a class="mr-3 font-semibold 768px:mt-4 hover:text-primary" href="/">Contact</a>
    </div>
</div>
{#if navClick}
    <div class="absolute top-0 h-screen bg-primary z-50" transition:fly={{ x: -200, duration: 500 }} style="width: 375px;">
        <p class="text-white text-3xl mt-6 ml-10 font-semibold cursor-pointer" on:click={() => navClick = !navClick }>X</p>
        <ul class="ml-10 mt-6">
            <li class="py-5 text-2xl text-white hover:text-gray-400"><a href="/">Home</a></li>
            <li class="py-5 text-2xl text-white hover:text-gray-400"><a href="/">About</a></li>
            <li class="py-5 text-2xl text-white hover:text-gray-400"><a href="/">Pricing</a></li>
            <li class="py-5 text-2xl text-white hover:text-gray-400"><a href="/">Contact</a></li>
        </ul>
    </div>
{/if}