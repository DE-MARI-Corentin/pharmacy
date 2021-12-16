<script lang="ts">
	import '../app.css';
	let open = false
</script>

<!--
<Sidebar bind:open />
<Navbar bind:sidebar={open}/>
<Main/>
-->

<main>
	<slot />
</main>

<!--
<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
-->