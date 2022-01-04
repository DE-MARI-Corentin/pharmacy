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
    var animal = Helper.getDefaultAnimal()
    var years = 0
    var backgroundColor = "white";

    function gotoDetails(){
        goto("details")
    }
    function gotoBack(){
        goto("animaux")
    }

    onMount(async () => {
        animal = Helper.getAnimal(document.cookie)
        user = Helper.getUser(document.cookie)
        img = user.image
        title = document.title
        console.log(animal)
        years = 2022 - animal.ageAnimal
        if (animal.sexeAnimal === "m")
            backgroundColor = "var(--pharma-card-m-background-color)"
        else if (animal.sexeAnimal === "f")
            backgroundColor = "var(--pharma-card-f-background-color)"
    })




</script>


<HeaderNavigation texte={title} profileImg={img} back="details"/>
<div class="card mb-2" style="background-color: {backgroundColor}">

    <div class="mx-8 my-4">
        <h2>{animal.nomAnimal}</h2>
        <p>{animal.raceAnimal}</p>
        <br/>
        <p>{animal.ageAnimal} ans</p>
    </div>
    <img class="icon" src={animal.imageAnimal}/>
</div>
<BandeauSeparateur texte="Raison de la suppression" />

<div class="">
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!--
            Background overlay, show/hide based on modal state.
      
            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      
          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <!-- Heroicon name: outline/exclamation -->
              <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                L'animal est décédé ou vous n'êtes plus avec lui ?
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                    Etes-vous sûre de vouloir enlever {animal.nomAnimal} de votre liste ?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" on:click="{gotoBack}" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Oui
          </button>
          <button type="button" on:click="{gotoDetails}"class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Non
          </button>
        </div>
      </div>
    </div>
</div>
</div>

<svelte:head>
    <title>Supprimer l'animal</title>
</svelte:head>

<style>
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
    .icon2
    {
        top: 5px;
        right: 5px;
        height: 15px;
        position: absolute;
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