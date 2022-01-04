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

    function gotoAnimaux(){
        goto("animaux");
    }
    onMount(async () => {
        user = Helper.getUser(document.cookie)
        img = user.image
        title = document.title
    })

</script>


<HeaderNavigation texte={title} profileImg={img} back="animaux"/>


<div class="flex flex2 md:items-center mb-6">

    <div class="flex">
        <div class="">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Nom
            </label>
        </div>
        <div class="">
            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                   id="inline-full-name" type="text" placeholder="Entrez son prenom">
        </div>
    </div>
    <div class="flex">
        <div class="">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Race
            </label>
        </div>
        <div class="">
            <SearchBar data={["Persan","Sacré de Birmanie" , "Chartreux","Siamois","Bengal","Siberien", "Rottweiler","Berger allemand","Golden Retriever","Labrador", "Carlin","Bouledogue" ,"Caniche","Yorkshire" , "Rat d'égout" , "Rat brun" ,"Rat noir",
            "Pur-sang", "Arabe", "Percheron","Frison", "Lapin tête de lion","Lapin bélier","Lapin angora nain","Lapin nain polonais", "Moineau domestique","Mésange","Rouge-gorge","Corneille noire","Pie bavarde","Merle noir","Étourneau sansonnet",
            "Moineau domestique","Mésange charbonnière","Mésange bleue","Rougequeue noir","Rougegorge familier","Pigeon biset","Pigeon ramier", "Moine de Saxe"]} value="Recherche"/>
        </div>
    </div>
    <div class="flex">
        <div class="">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Variété
            </label>
        </div>
        <div class="">
            <SearchBar data={["Chien","Chat","Rat", "Cochon d'Inde", "Hamster", "Chinchilla", "Dègue du Chili", "Gerbille", "Souris","Cheval", "Ane", "Chèvre naine", "Oiseau", "Lapin"]} value="Recherche"/>
        </div>
    </div>
    <div class="divide-y divide-dashed" >

    <div class="flex">
        <div class="">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Année de naissance
            </label>
        </div>
        <div class="">
            <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state">
                    {#each [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] as year}
                            <option>{year}</option>
                    {/each}


                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="">
        <label class="flex block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">Sexe de
            l'animal</label>
        <div class="flex">
            <label class="inline-flex items-center">
                <input type="radio" class="form-radio" name="accountType" value="male">
                <span class="ml-2">Male</span>
            </label>
            <label class="inline-flex items-center ml-6">
                <input type="radio" class="form-radio" name="accountType" value="female">
                <span class="ml-2">Femelle</span>
            </label>
        </div>
    </div>
    <div class="flex">
        <label class="flex items-center">
            <input type="checkbox" class="form-checkbox">
            <span class="ml-2">Puçeage</span>
        </label>
    </div>
</div>
</div>
<button class="btn-blue w100 mb-4" style="border-radius: 32px" on:click="{gotoAnimaux}">Valider</button>


<svelte:head>
    <title>Ajouter un animal</title>
</svelte:head>


<style>
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

    .card {
        position: relative;
        height: 200px;
        border-width: 2px;
        border-color: var(--pharma-card-x-border-color);
    }

    .warnimg {
        height: 20px;
    }

    .warning {
        width: 100%;
        font-size: 12px;
    }

    .icon {
        top: 32px;
        right: 32px;
        height: 70px;
        position: absolute;
    }

    h2 {
        font-size: x-large;
    }

</style>