<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import BigButton from "$lib/pharma/BigButton.svelte";
    import { Helper } from "$lib/pharma/Helper.js";

    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
import HeaderNavigation from "$lib/pharma/HeaderNavigation.svelte";
    
    var user = Helper.getDefaultUser()

	onMount(async () => 
	{
        user = Helper.getUser(document.cookie)
    })
</script>

<HeaderNavigation />

<svelte:head>
	<title>Mes Animaux</title>
</svelte:head>
