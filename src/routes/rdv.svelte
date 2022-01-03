<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import BigButton from "$lib/pharma/BigButton.svelte";
    import AnimalCard from "$lib/pharma/AnimalCard.svelte";
    import Calendar from "$lib/pharma/Calendar.svelte";
    import { Helper } from "$lib/pharma/Helper.js";

    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import HeaderNavigation from "$lib/pharma/HeaderNavigation.svelte";
    
    var user = Helper.getDefaultUser()
    var img = null
    var title = ""

	onMount(async () => 
	{
        user = Helper.getUser(document.cookie)
        img = user.image
        title = document.title
    })
</script>

<svelte:head>
    <title>Rendez-Vous</title>
</svelte:head>

<HeaderNavigation texte={title} profileImg={img} back="profile" />
<Calendar />

<style>
</style>