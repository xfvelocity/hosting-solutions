<script>
import { fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>Hosting Solutions | Contact</title>
</svelte:head>

<section class="min-h-screen min-w-screen" style="background: url('/images/contact-bg.svg');">
    <div class="text-center w-4/5 mx-auto my-6 768px:w-1/2" transition:fly={{ x: 300, duration: 500 }}>
        <h2 class="text-2xl font-semibold">Contact <span class="text-primary">Us</span></h2>
        <p class="w-4/5 mx-auto mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facere totam.</p>
    </div>
    <div class="1024px:flex items-center 1024px:w-4/5 1024px:mx-auto">
        <div class="rounded-sm bg-white w-4/5 mx-auto my-8 flex flex-wrap py-8 justify-center shadow-md border-gray-300 border 768px:max-w-32rem" transition:fly={{ y: 300, duration: 500 }}>
            <form class="w-full">
                <div class="mb-3 flex flex-wrap items-center w-10/12 mx-auto 1024px:w-3/4">
                    <label class="font-semibold mb-2 w-full" for="name">First Name</label>
                    <input class="bg-gray-200 pl-3 py-1 rounded-sm w-full" name="name" type="text" placeholder="John">
                </div>
                <br>
                <div class="mb-3 flex flex-wrap items-center w-10/12 mx-auto 1024px:w-3/4">
                    <label class="font-semibold w-full mb-2" for="name">Email Address</label>
                    <input class="bg-gray-200 pl-3 py-1 rounded-sm w-full" name="email" type="text" placeholder="john@gmail.com">
                </div>
                <br>
                <div class="mb-3 flex flex-wrap items-center w-10/12 mx-auto 1024px:w-3/4">
                    <label class="font-semibold w-full mb-2" for="subject">Subject</label>
                    <select class="bg-gray-200 pl-3 py-1 rounded-sm w-full" name="subject">
                        <option value="placeholder" selected disabled>Choose an option..</option>
                        <option value="support">Support</option>
                        <option value="payment">Payment</option>
                        <option value="membership">Membership</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <br>
                <div class="mb-1 flex flex-wrap w-10/12 mx-auto 1024px:w-3/4">
                    <label class="pt-1 font-semibold w-full mb-2" for="message">Message</label>
                    <textarea class="mb-3 bg-gray-200 pl-3 py-1 rounded-sm w-full h-24" name="message" placeholder="How can we help?"></textarea>
                </div>
                <br>
                <div class="flex justify-end w-10/12 mx-auto 1024px:w-3/4">
                    <button class="bg-primary text-white py-2 w-32 rounded-sm hover:opacity-75" type="submit">Submit</button>
                </div>
            </form>
        </div>
        <div class="w-4/5 mx-auto py-3 768px:max-w-32rem 1024px:ml-10 1024px:max-w-none 1024px:w-auto">
            <div>
                <h3 class="text-white mb-1">Email</h3>
                <a class="text-bright-primary hover:opacity-75" href="mailto:contact@hostingsolutions.com">contact@hostingsolutions.com</a>
            </div>
            <div class="mt-5">
                <h3 class="text-white mb-1">Phone</h3>
                <a class="text-bright-primary hover:opacity-75" href="tel:+441234567890">+44 1234 567890</a>
            </div>
        </div>
    </div>
</section>
