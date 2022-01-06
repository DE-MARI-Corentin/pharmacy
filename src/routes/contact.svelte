<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import BigButton from "$lib/pharma/BigButton.svelte";
    import AnimalCard from "$lib/pharma/AnimalCard.svelte";
    import {Helper} from "$lib/pharma/Helper.js";

    import {goto} from '$app/navigation';
    import {onMount} from 'svelte';
    import HeaderNavigation from "$lib/pharma/HeaderNavigation.svelte";
    import SearchBar from "$lib/pharma/searchBar.svelte";
    import { children } from "svelte/internal";

    var user = Helper.getDefaultUser()
    var img = null
    var title = ""

    function gotoDetails(){
        goto("details")
    }


    onMount(async () => {
        user = Helper.getUser(document.cookie)
        img = user.image
        title = document.title
    })




</script>


<HeaderNavigation texte={title} profileImg={img} back="profile"/>

<div class="flex flex2 md:items-center mb-6">
<BandeauSeparateur texte="Numéros" />
<div class="flex items-center">
    <img src="images/phone.png" class="icon">
    <div>
        <strong>Ligne Fix : </strong><span>04.01.02.03.04</span><br>
        <strong>Ligne Mobile : </strong><span>06.01.02.03.04</span>
    </div>
</div>
<BandeauSeparateur texte="Adresse postale" />
<div class="flex items-center">
    <div>
        <strong>Rue : </strong><span>4 Rue du petit pois</span><br>
        <strong>Ville : </strong><span>Avignon - 84000</span>
    </div>
</div>
<BandeauSeparateur texte="Email" />
<div class="flex items-center">
    <img src="images/email.png" class="icon">
    <div>
        <strong> contact@cliniquevernet.com</strong>
    </div>
</div>
<div class="">

</div>
</div>

<svelte:head>
    <title>Nous contacter</title>
</svelte:head>

<style>
    .icon
    {
        height: 30px;
        margin-right: 15px;
    }
    .flex2 {
        display: flex;
        margin-bottom: 2em;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        margin-top: 4em;
    }
    .flex {
        display: flex;
        margin-bottom: 2em;
        justify-content: space-evenly;
    }
</style>