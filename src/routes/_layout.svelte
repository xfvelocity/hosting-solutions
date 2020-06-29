<script>
import Nav from '../compounds/Nav.svelte'
import Footer from '../compounds/Footer.svelte'
</script>

<div class="bg-darkest-primary">
	<div class="max-w-64rem mx-auto bg-duckegg overflow-x-hidden">
		  <div class="theme-switch">
    		<div class="switch"></div>
  		</div>
		<!-- <div class="bg-primary text-center py-4">
			<a href="https://alex-long.co.uk/hostingsolutions/v1/hosting.html" class="text-white text-lg underline text-bright-primary">Click here to visit v1.0</a>
		</div> -->
		<Nav />

		<main>
			<slot></slot>
		</main>

		<Footer />
	</div>
</div>

<style>
.theme-switch {
  --background: #FFF;
  --text: #000;
  color: var(--text);
  width: 70px;
  height: 30px;
  background: var(--highlight);
  border-radius: 50px;
  position: relative;
}

.switch {
 background: white;
 width: 24px;
 height: 24px;
 background: var(--background);
 border-radius: 100%;
 position: absolute;
 top: 3px;
 left: 4px;
 transition: 0.5s all ease;
}
</style>


