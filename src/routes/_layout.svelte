<script>
import Nav from '../compounds/Nav.svelte'
import Footer from '../compounds/Footer.svelte'
</script>

<div style="background: #001f23">
	<div style="max-width: 1024px; margin: 0 auto; background: #F2FFFE; overflow-x: hidden;">
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


