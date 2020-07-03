<script>
import Nav from '../compounds/Nav.svelte'
import Footer from '../compounds/Footer.svelte'
</script>

<Nav />

<main>
	<slot></slot>
</main>

<Footer />

<style>
:global(body) {
	font-family: Poppins, sans-serif;
}
</style>


