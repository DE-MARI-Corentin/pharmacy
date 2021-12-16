<script lang="ts">
	import Navbar from '$lib/header/Navbar.svelte'
	import Sidebar from '$lib/header/Sidebar.svelte'
	import Main from '$lib/header/Main.svelte'
	import '../app.css';
	let open = false
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open}/>
<Main/>

<main>
	<div class="max-w-4xl mx-auto py-8">
		<slot />
	</div>
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
