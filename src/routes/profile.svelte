<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import BigButton from "$lib/pharma/BigButton.svelte";
    import { Helper } from "$lib/pharma/Helper.js";

    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    
    var user = Helper.getDefaultUser()
    var bonquoi = new Date().getHours() > 16 ? "Bonsoir" : "Bonjour"

	onMount(async () => 
	{
        user = Helper.getUser(document.cookie)
        document.getElementById("page").style.display = "block"
    })

    function gotoAnimaux(){goto("animaux")}
    function gotoRDV(){goto("rdv")}

    function disconnect(){ document.cookie = "connected=false"; goto("/") }

</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>
<div id="page" style="display: none">

<div class="profile_container flex">
    <div class="profile_pic_container">
        <img src={user.image} class="profile_pic" alt="fail">
    </div>
    <div class="profile_info">
        <p>{user.prenom} {user.nom}</p>
        <p>{user.adresse}</p>
        <p>{user.tel}</p>
    </div>
</div>

<BandeauSeparateur texte="Menu Principal" />

<p class="my-4" style="text-align: center">{bonquoi} {user.prenom} !</p>

<div class="buttons-center">
    <div class="m-2"><BigButton action={gotoAnimaux} image="src/images/icon_paw.png" texte="Mes Animaux"/></div>
    <div class="m-2"><BigButton action={gotoRDV} image="src/images/icon_calendar.png" texte="Rendez-Vous"/></div>
    <div class="m-2"><BigButton image="src/images/icon_phone.png" texte="Contacter"/></div>
    <div class="m-2"><BigButton image="src/images/icon_cart.png" texte="Boutique"/></div>
</div>

<div class="backdiv m-2">
    <img on:click={disconnect} src="src/images/icon_back.png" width=25px>
</div>

</div>
<style>
    .backdiv
    {
        position: absolute;
        top: 0px;
        right: 0px;
    }

    .buttons-center
    {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .profile_container
    {
        height: 200px;
    }
    .profile_pic_container
    {
        width: 120px;
        height: 100%;
        margin-left: 20px;
        align-content: center;
        display: flex;
        flex-wrap: wrap;
    }
    .profile_pic
    {
        border-radius: 20px;
        border-width: 4px;
        border-color: var(--pharma-border-color-dark);
    }
    .profile_info
    {
        margin: auto;
        margin-left: 20px;
    }
</style>