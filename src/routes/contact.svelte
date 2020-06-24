<script>
import { fly } from 'svelte/transition';

let contact;
contact = true;
</script>

<svelte:head>
  <title>Hosting Solutions | Contact</title>
</svelte:head>

<section class="min-h-screen min-w-screen" style="background: url('/images/contact-bg.svg');">
    <div>
        {#if contact}
            <div class="text-center w-4/5 mx-auto my-6 768px:w-1/2" transition:fly={{ x: 300, duration: 500 }}>
                <h2 class="text-2xl font-semibold">Contact <span class="text-primary">Us</span></h2>
                <p class="w-4/5 mx-auto mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem facere totam cum..</p>
            </div>
            <div class="bg-white w-4/5 mx-auto my-8 flex flex-wrap py-8 justify-center shadow-md border-gray-300 border 768px:w-3/5 768px:mx-0" transition:fly={{ y: 300, duration: 500 }}>
                <form>
                    <div class="mb-3 flex justify-between items-center">
                        <label class="font-semibold" for="name">First Name</label>
                        <input class="ml-3 bg-gray-200 pl-3 py-1 rounded-sm w-48" name="name" type="text" placeholder="John">
                    </div>
                    <br>
                    <div class="mb-3 flex justify-between items-center">
                        <label class="font-semibold" for="name">Email Address</label>
                        <input class="ml-3 bg-gray-200 pl-3 py-1 rounded-sm w-48" name="email" type="text" placeholder="john@gmail.com">
                    </div>
                    <br>
                    <div class="mb-3 flex justify-between items-center">
                        <label class="font-semibold" for="subject">Subject</label>
                        <select class="mb-3 ml-3 bg-gray-200 pl-3 py-1 rounded-sm w-48" name="subject">
                            <option value="placeholder" selected disabled>Choose an option..</option>
                            <option value="support">Support</option>
                            <option value="payment">Payment</option>
                            <option value="membership">Membership</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <br>
                    <div class="mb-1 flex justify-between">
                        <label class="pt-1 font-semibold" for="message">Message</label>
                        <textarea class="mb-3 ml-3 bg-gray-200 pl-3 py-1 rounded-sm w-48 h-24" name="message" placeholder="How can we help?"></textarea>
                    </div>
                    <br>
                    <div class="flex justify-end">
                        <button class="bg-primary text-white py-2 w-32 rounded-sm hover:opacity-75" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        {/if}
        <div class="w-4/5 mx-auto py-3">
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
