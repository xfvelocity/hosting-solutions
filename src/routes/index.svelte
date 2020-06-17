<script>
let services = [
  {
    title: 'High Performance',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate earum consectetur rerum iusto voluptas sapiente ut optio fugiat maiores! Ex sit neque in vero beatae cum porro assumenda at officiis',
    img: 'icons/rocket.svg',
    className: '768px:w-45% 768px:mx-0'
  },
    {
    title: 'Fully Redundant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate earum consectetur rerum iusto voluptas sapiente ut optio fugiat maiores! Ex sit neque in vero beatae cum porro assumenda at officiis',
    img: 'icons/cloud.svg',
    className: 'my-24 768px:w-45% 768px:mx-0'
  },
    {
    title: 'Secure Infrastructure',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate earum consectetur rerum iusto voluptas sapiente ut optio fugiat maiores! Ex sit neque in vero beatae cum porro assumenda at officiis',
    img: 'icons/shield.svg',
    className: '768px:w-full'
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
    name: 'Calire Fields',
    rating: [1,2],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro saepe quis veritatis tenetur sequi deserunt dicta'
  },
  {
    name: 'Ronnie Pickering',
    rating: [1,2,3,4],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro saepe quis veritatis tenetur sequi deserunt dicta'
  },
  {
    name: 'Ayden Moore',
    rating: [1,2,3,4],
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro saepe quis veritatis tenetur sequi deserunt dicta'
  }
]

import { onMount } from 'svelte';
import { fly } from 'svelte/transition';

let header;
let serviceOptions;
let packageOptions;
let redundant;
let reviewContainer;
let options = {
  threshold: 0.3
}

onMount(() => {
  header = true;
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
</svelte:head>

<section class="my-10 mb-20 h-full 768px:mt-20 768px:mb-40">
{#if header}
  <div class="w-4/5 mx-auto 768px:flex flex-wrap justify-between items-center">
    <img class="w-4/5 mx-auto my-8 768px:w-45% 768px:order-last" src="images/header-img.png" alt="" transition:fly={{ x: 300, duration: 500 }}>
    <div class="768px:w-45%" transition:fly={{ x: -300, delay: 150, duration: 500 }}>
      <h2 class="uppercase text-2xl text-primary font-bold mt-12">Hosting made simple</h2>
      <p class="text-secondary py-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolores ratione nam corporis suscipit ex eligendi amet, dolor omnis aspernatur consectetur, repellendus voluptas laborum tempora quo quam quod nobis accusantium.</p>
      <button class="bg-primary py-2 w-40 text-white text-lg rounded-md shadow-md font-semibold hover:opacity-75">Learn More</button>
    </div>
  </div>
  {/if}
</section>

<section class="services py-56 my-6 relative 768px:py-32" style="background-image: url('images/wave-tablet.png'); background-repeat: no-repeat; background-size: cover;">
  {#if serviceOptions}
    <div class="768px:w-4/5 768px:mx-auto 768px:flex flex-wrap justify-between items-center" transition:fly={{ y: 300, duration: 500}}>
      {#each services as service}
        <div class={`w-4/5 mx-auto ${service.className ? service.className : ''}`}>
          <div class="flex items-center">
            <img class="w-8 mr-3" src={service.img} alt="">
            <h3 class="text-2xl font-semibold text-white">{service.title}</h3>
          </div>
          <p class="py-5 text-white">{service.desc}</p>
          <a class="flex items-center text-bright-primary hover:opacity-75" href="/">Learn more <img class="ml-2 w-4" src="icons/arrow.svg" alt=""></a>
        </div>
      {/each}
    </div>
  {/if}
</section>

<section class="redundant w-4/5 mx-auto py-32 mb-24 768px:flex flex-wrap justify-between items-center">
  {#if redundant}
    <div class="768px:w-45%" transition:fly={{ x: -300, delay: 200, duration: 600 }}>
      <h2 class="text-2xl font-bold text-secondary">Redundant <span class="text-primary">Infrastructure</span></h2>
      <p class="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veniam atque neque vero. Vero odio, assumenda quaerat tempora sequi adipisci distinctio maiores in provident dignissimos animi, tempore excepturi illo perferendis!</p>
    </div>
    <img class="mt-16 768px:w-45%" src="images/about.svg" alt="" transition:fly={{ x: 300, duration: 600 }}>
  {/if}
</section>

<section class="packages bg-primary py-32 text-center">
  {#if packageOptions}
    <div class="w-4/5 mx-auto" transition:fly={{y: 200, duration: 500}}>
      <div class="w-4/5 mx-auto mb-12 text-white">
        <h3 class="text-2xl font-semibold">Choose a package</h3>
        <p class="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illo! Dolorem corporis enim sint nisi iure consectetur.</p>
      </div>
      <div class="768px:flex flex-wrap">
        {#each packages as item}
          <div class={`py-8 w-full mx-auto rounded-lg border-2 border-gray-600 mb-4 max-w-20rem ${item.main ? 'bg-white' : 'bg-duckegg'}`}  transition:fly={{ y: 300, duration: 500, delay: 300}}>
            <div class="w-4/5 mx-auto">
              <h3 class="text-2xl font-semibold text-secondary">{item.title}</h3>
              <p class="text-3xl my-2 font-semibold">{item.price}</p>
              <hr class="w-4/5 mx-auto">
              <ul class="py-6 w-4/5 mx-auto">
                {#each item.options as option}
                  <li class="flex items-center w-full mb-2"><img class="w-4 mr-2" src={option.access ? 'icons/tick.svg' : 'icons/cross.svg'} alt="">{option.name}</li>
                {/each}
              <button class="bg-primary py-2 w-32 text-white rounded-md shadow-md font-semibold my-6">Purchase</button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

<section class="reviews py-24" style="background-image: url('images/reviews-mobile.png');">
  {#if reviewContainer}
  <div class="w-4/5 mx-auto 768px:flex flex-wrap">
    <div>
      <div class="text-center" transition:fly={{ y: 200, duration: 500}}>
        <h2 class="text-2xl font-semibold">Customer Reviews</h2>
        <p class="py-3 w-3/4 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nemo ad corporis.</p>
      </div>
      <div class="my-16 768px:my-10 768px:flex flex-wrap justify-between">
        {#each reviews as review}
          <div class="bg-white rounded-lg border border-gray-400 my-16 mx-auto 768px:w-30% 768px:my-4" transition:fly={{ y: 200, duration: 500,delay: 300}}>
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
