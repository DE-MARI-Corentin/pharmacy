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

<BandeauSeparateur texte="Adresse postale" />

<BandeauSeparateur texte="Email" />

<div class="">

</div>

<svelte:head>
    <title>Nous contacter</title>
</svelte:head>