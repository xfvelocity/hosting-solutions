<script>
let services = [
  {
    title: 'High Performance',
    desc: 'Our cutting-edge cloud technology guarantees super-fast page loading speed for your website. That keeps visitors happy and helps your Google ranking too.',
    img: 'icons/rocket.svg',
    className: '768px:w-45% 768px:mx-0 1024px:w-30%'
  },
    {
    title: 'Fully Redundant',
    desc: 'Our cloud platform offers a 99.99% uptime guarantee with full hardware and network redundancy to keep your services online.',
    img: 'icons/cloud.svg',
    className: 'my-16 768px:w-45% 768px:mx-0 1024px:w-30%'
  },
    {
    title: 'Secure Infrastructure',
    desc: 'All datacenters are Tier certified and provide advanced fire and intrusion protection combined with enterprise hardware.',
    img: 'icons/shield.svg',
    className: '768px:w-full 1024px:w-30% 1024px:mx-0'
  }
]

let packages = [
  {
    title: 'Basic',
    price: '£15.00',
    options: [
      {
        access: true, name: 'Up to 1GB Storage'
      },
      {
        access: true, name: 'Websites: 1'
      },
      {
        access: true, name: 'Free Domains: 1'
      },
      {
        access: false, name: 'Wordpress Ready'
      },
      {
        access: false, name: 'Free SSL'
      }
    ]
  },
  {
    title: 'Advanced',
    price: '£30.00',
    main: true,
    options: [
      {
        access: true, name: 'Up to 4GB Storage'
      },
      {
        access: true, name: 'Websites: 3'
      },
      {
        access: true, name: 'Free Domains: 3'
      },
      {
        access: true, name: 'Wordpress Ready'
      },
      {
        access: false, name: 'Free SSL'
      }
    ]
  },
  {
    title: 'Ultimate',
    price: '£45.00',
    options: [
      {
        access: true, name: 'Unlimited Storage'
      },
      {
        access: true, name: 'Websites: 8'
      },
      {
        access: true, name: 'Free Domains: 8'
      },
      {
        access: true, name: 'Wordpress Ready'
      },
      {
        access: true, name: 'Free SSL'
      }
    ]
  }
]

let reviews = [
  {
    name: 'Claire Fields',
    rating: [1,2,3,4,5],
    desc: 'My customers didn\'t experience a single outage since I moved my services over to HostingSolutions.'
  },
  {
    name: 'Ronnie Pickering',
    rating: [1,2,3,4],
    desc: 'HostingSolutions provided me with an enterprise custom server solution when my business was rapidly growing.'
  },
  {
    name: 'Ayden Moore',
    rating: [1,2,3,4],
    desc: 'By switching to HostingSolutions\'s DNS system we significantly decreased our worldwide website latency.'
  }
]

import { onMount } from 'svelte';
import { fly, fade } from 'svelte/transition';

let header;
header = true;
let serviceOptions = true;
let packageOptions = true;
let redundant = true;
let reviewContainer = true;
let options = {
  threshold: 0.3
}

onMount(() => {
  
  let child = document.querySelectorAll('section');
  
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.target.classList.contains('services')) {
        serviceOptions = true;
      }
      if(entry.isIntersecting && entry.target.classList.contains('redundant')) {
        redundant = true;
      }
      if(entry.isIntersecting && entry.target.classList.contains('packages')) {
        packageOptions = true;
      }
      if(entry.isIntersecting && entry.target.classList.contains('reviews')) {
        reviewContainer = true;
      }
    })
  }, options)

  child.forEach(item => {
    observer.observe(item)
  })  
})
</script>

<svelte:head>
  <title>Hosting Solutions | Home</title>
  <meta name="description" content="Hosting Solutions, the simplest solution for hosting your web server.">
</svelte:head>

<section class="mt-20 mb-10 h-full 768px:mt-20 768px:mb-40">
{#if header}
  <div class="w-4/5 text-center mx-auto 768px:flex flex-wrap justify-between items-center 768px:text-left 1024px:max-w-48rem">
    <img class="w-4/5 mx-auto my-8 768px:w-45% 768px:order-last" src="images/header-img.png" alt="" transition:fly={{ x: 300, duration: 500 }}>
    <div class="mx-auto 768px:w-45%" transition:fly={{ x: -300, delay: 150, duration: 500 }}>
      <h2 class="uppercase text-3xl text-primary font-bold mt-12">Hosting made simple</h2>
      <p class="text-secondary mt-4 mb-2">Our Linux based website hosting guarantees lightning-fast loading speeds, unbeatable reliability and state-of-the-art security.</p>
      <p class="text-secondary mb-10"> Add that to our easy-to-use control panel and expert telephone support, and it’s easy to see why we host 1 in 5 of the UK’s active websites. In fact, we have more than 20 years’ experience in helping British businesses succeed online..</p>
      <button class="bg-primary py-2 w-40 text-white text-lg rounded-md shadow-md font-semibold hover:opacity-75">Learn More</button>
    </div>
  </div>
  {/if}
</section>

<section class="services py-20 mt-32 relative bg-primary 768px:py-32">
  {#if serviceOptions}
    <div class="768px:w-4/5 768px:mx-auto 768px:flex flex-wrap justify-between items-center 1024px:max-w-48rem" transition:fly={{ y: 300, duration: 500}}>
      {#each services as service}
        <div class={`w-4/5 mx-auto text-center 768px:text-left ${service.className ? service.className : ''}`}>
          <div class="flex items-center justify-center 768px:justify-start">
            <img class="w-8 mr-3" src={service.img} alt="">
            <h3 class="text-2xl font-semibold text-white">{service.title}</h3>
          </div>
          <p class="py-5 text-white w-10/12 mx-auto 768px:mx-0">{service.desc}</p>
          <a class="flex justify-center items-center text-bright-primary hover:opacity-75 768px:justify-start" href="/">Learn more <img class="ml-2 w-4" src="icons/arrow.svg" alt=""></a>
        </div>
      {/each}
    </div>
  {/if}
</section>

<section class="redundant w-4/5 mx-auto py-32 mb-24 text-center 768px:text-left 768px:flex flex-wrap justify-between items-center 1024px:max-w-48rem">
  {#if redundant}
    <div class="768px:w-45%" transition:fly={{ x: -300, delay: 200, duration: 600 }}>
      <h2 class="text-2xl font-bold text-secondary">Redundant <span class="text-primary">Infrastructure</span></h2>
      <p class="py-4">We use load balancing which means your website is hosted on multiple servers. If anything unexpected happens, we simply switch to another server so your site stays online. Our expert team are on-hand through our live chat and telephone support. We also have a range of extensive step-by-step articles to guide you.</p>
    </div>
    <img class="mt-16 768px:w-45%" src="images/about.svg" alt="" transition:fly={{ x: 300, duration: 600 }}>
  {/if}
</section>

<section class="packages bg-primary py-32 text-center">
  {#if packageOptions}
    <div class="w-4/5 mx-auto 1024px:max-w-48rem" >
      <div class="w-4/5 mx-auto mb-12 text-white 1024px:mb-20" transition:fly={{x: -300, duration: 500}}>
        <h3 class="text-2xl font-semibold">Choose a package</h3>
        <p class="py-3">So, that’s everything you need to start a successful online journey. What are you waiting for?</p>
      </div>
      <div class="768px:flex flex-wrap justify-between items-center">
        {#each packages as item}
          <div class={`py-6 w-full mx-auto rounded-lg shadow border border-gray-600 mb-4 max-w-20rem 1024px:w-1/3 1024px:mx-0 ${item.main ? 'bg-white z-50 1024px:absolute 1024px:py-12' : 'bg-duckegg 1024px:relative'}`} style={item.main ? 'left: 39vw;' : ''} transition:fly={{ y: 300, duration: 400, delay: 200}}>
            <div class="w-4/5 mx-auto">
              <h3 class="text-2xl font-semibold text-secondary">{item.title}</h3>
              <p class="text-3xl my-2 font-semibold">{item.price}</p>
              <hr class="w-4/5 mx-auto">
              <ul class="py-6 w-4/5 mx-auto">
                {#each item.options as option}
                  <li class="flex items-center w-full mb-2"><img class="w-4 mr-2" src={option.access ? 'icons/tick.svg' : 'icons/cross.svg'} alt="">{option.name}</li>
                {/each}
              <button class="bg-primary py-2 w-32 text-white rounded-md shadow-md font-semibold my-6 hover:opacity-75">Purchase</button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

<section class="reviews py-24" style="background-image: url('images/reviews.svg'); background-repeat: no-repeat; background-size: cover;">
  {#if reviewContainer}
  <div class="w-4/5 mx-auto 768px:flex flex-wrap 1024px:max-w-48rem">
    <div>
      <div class="text-center" transition:fly={{ x: 300, duration: 500}}>
        <h2 class="text-2xl font-semibold">Customer Reviews</h2>
        <p class="py-3 w-3/4 mx-auto">We've helped thousands of clients with our professional, custom server solutions.</p>
      </div>
      <div class="my-16 768px:my-10 768px:flex flex-wrap justify-between">
        {#each reviews as review}
          <div class="bg-white rounded-lg border border-gray-400 my-16 mx-auto 768px:w-30% 768px:my-4" transition:fly={{ y: 300, duration: 500, delay: 200}}>
            <div class="flex justify-center items-center mb-5 bg-primary py-3">
              {#each review.rating as _, i}
                <img class="w-6 mx-1" src="icons/star.svg" alt="">
              {/each}
            </div>
            <div class="w-10/12 mx-auto py-3 pb-5">
              <h4 class="font-semibold text-primary text-lg">{review.name}</h4>
              <p class="py-2">{review.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  {/if}
</section>