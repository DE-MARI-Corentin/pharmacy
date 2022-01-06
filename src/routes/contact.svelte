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

<BandeauSeparateur texte="Numéros" />
<div class="flex items-center">
    <img src="images/phone.jpg" class="icon">
    <div>
        <strong>Ligne Fix : </strong><span>04.01.02.03.04</span>
        <strong>Ligne Mobile : </strong><span>06.01.02.03.04</span>
    </div>
</div>
<BandeauSeparateur texte="Adresse postale" />
<div class="flex items-center">
    <div>
        <strong>Rue : </strong><span>4 Rue du petit pois</span>
        <strong>Ville : </strong><span>Avignon - 84000</span>
    </div>
</div>
<BandeauSeparateur texte="Email" />
<div class="flex items-center">
    <img src="images/email.jpg" class="icon">
    <div>
        <strong>Coucou@coucou.com</strong>
    </div>
</div>
<div class="">

</div>

<svelte:head>
    <title>Nous contacter</title>
</svelte:head>

<style>
    .icon
    {
        height: 25px;
    }
</style>