<script>
import { fly } from 'svelte/transition'
let screenWidth;
let mobile;
let navClick;
let featuresDropDown;
</script>
<svelte:window bind:innerWidth={screenWidth} />
<div class="relative z-50 bg-duckegg">
    <div class={`flex justify-between items-center w-4/5 mx-auto py-4 768px:flex-wrap 768px:py-4 1024px:max-w-48rem ${navClick ? 'border-b border-gray-300' : ''}`}>
        <h1 class="text-3xl font-bold text-secondary 768px:mt-4">Hosting<span class="text-primary">Solutions</span></h1>
        <img class="w-6 h-6 cursor-pointer 768px:hidden" src="icons/nav-button.svg" alt="" on:click={() => navClick = !navClick}>
        <div class="hidden 768px:inline-flex items-center">
            <a class="mr-3 font-semibold text-primary 768px:mt-4" href="/">Home</a>
            <a class="mr-3 font-semibold hover:text-primary 768px:mt-4" href="/">Features</a>
            {#if featuresDropDown}
                <ul class="pl-2">
                    <li class="py-2 text-white" on:click={() => featuresDropDown = !featuresDropDown }><a class="cursor-default" href="/">Web Hosting</a></li>
                    <li class="py-2 text-white" on:click={() => featuresDropDown = !featuresDropDown }><a class="cursor-default" href="/">SSL Certificates</a></li>
                    <li class="py-2 text-white" on:click={() => featuresDropDown = !featuresDropDown }><a class="cursor-default" href="/">Domain Services</a></li>
                    <li class="py-2 text-white" on:click={() => featuresDropDown = !featuresDropDown }><a class="cursor-default" href="/">Email Hosting</a></li>
                </ul>
            {/if}

            <a class="mr-3 font-semibold cursor-default 768px:mt-4" href="/">About</a>
            <a class="mr-3 font-semibold text-primary 768px:mt-4" href="/contact">Contact</a>
            <a class="mr-3 font-semibold cursor-default 768px:mt-4" href="/">Blog</a>
        </div>
    </div>
</div>
{#if navClick}
    <div class="absolute bg-primary z-40 w-screen border-b- border-gray-700 shadow-md" transition:fly={{ y: -200, duration: 500 }}>
        <ul class="w-4/5 mx-auto py-4 pb-8">
            <li class="py-2 text-bright-primary" on:click={() => navClick = !navClick }><a href="/">Home</a></li>
            <li class="py-2 text-white hover:text-bright-primary" on:click={() => featuresDropDown = !featuresDropDown }><a class="flex items-center" href="/">Features <img class="w-2 ml-2" src="icons/down-arrow.svg" alt=""></a></li>
            {#if featuresDropDown}
                <ul class="pl-2">
                    <li class="py-2 text-white" on:click={() => navClick = !navClick }><a class="cursor-default" href="/">Web Hosting</a></li>
                    <li class="py-2 text-white" on:click={() => navClick = !navClick }><a class="cursor-default" href="/">SSL Certificates</a></li>
                    <li class="py-2 text-white" on:click={() => navClick = !navClick }><a class="cursor-default" href="/">Domain Services</a></li>
                    <li class="py-2 text-white" on:click={() => navClick = !navClick }><a class="cursor-default" href="/">Email Hosting</a></li>
                </ul>
            {/if}
            <li class="py-2 text-white" on:click={() => navClick = !navClick }><a class="cursor-default" href="/">About</a></li>
            <li class="py-2 text-bright-primary" on:click={() => navClick = !navClick }><a href="/contact">Contact</a></li>
            <li class="py-2 text-white" on:click={() => navClick = !navClick }><a class="cursor-default" href="/contact">Blog</a></li>
        </ul>
    </div>
{/if}