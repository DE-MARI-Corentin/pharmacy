<script>
	import login from "./login.svelte";
	import Logo from "$lib/pharma/Logo.svelte";
    import { Helper } from "$lib/pharma/Helper.js";
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';


	onMount(async () => 
	{
		if(document.cookie == '')
		{
			goto("login")
			return
		}
		var c = Helper.parseCookie(document.cookie)
		if("connected" in c && c["connected"] == "true")
			goto("profile")
		else
			goto("login")
	});
</script>

<svelte:head>
	<title>Redirection..</title>
</svelte:head>