<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import BigButton from "$lib/pharma/BigButton.svelte";
    import AnimalCard from "$lib/pharma/AnimalCard.svelte";
    import { Helper } from "$lib/pharma/Helper.js";

    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import HeaderNavigation from "$lib/pharma/HeaderNavigation.svelte";
    
    var user = Helper.getDefaultUser()
    var img = null
    var title = ""
    function gotoNew(){
        goto("newAnimal");
    }
	onMount(async () => 
	{
        user = Helper.getUser(document.cookie)
        img = user.image
        title = document.title
    })
</script>


<HeaderNavigation texte={title} profileImg={img} back="profile" />

<div class="my-4 mx-4">

    <AnimalCard animal="{{nom: 'Floda', race: 'Berger Allemand', age: 7, image: 'images/icon_dog.png', sexe: 'f', type: 'chien'}}" warning="Veuillez prendre rendez-vous pour son rappel."/>
    <AnimalCard animal="{{nom: 'Raspoutine', race: 'Sibérien', age: 12, image: 'images/icon_cat.png', sexe: 'm', type: 'chat'}}"/>
    <AnimalCard animal="{{nom: 'Cléopâtre', race: 'Sphynx', age: 1, image: 'images/icon_cat.png', sexe: 'f', type: 'chat'}}"/>
    <AnimalCard animal="{{nom: 'Jeesus', race: 'Moine de Saxe', age: 1, image: 'images/icon_bird.png', sexe: 'f', type: 'pigeon'}}"/>

    <button class="btn-blue w100 mb-4" style="border-radius: 32px" on:click="{gotoNew}">Ajouter un Animal</button> 
</div>

<svelte:head>
	<title>Mes Animaux</title>
</svelte:head>