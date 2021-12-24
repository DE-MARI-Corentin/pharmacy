<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import Logo from "$lib/pharma/Logo.svelte";

	import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    
    function dejaUnCompte(){goto(`/login`)}
    function inscription()
    {
        goto(`/`)
    }
</script>

<svelte:head>
	<title>Inscription</title>
</svelte:head>

<Logo />
<BandeauSeparateur texte="S'inscrire" />

<div class="flex justify-center my-4 form_center">
    <form >
        <div class="mb-2 radio_space input-big" style="text-align: center;">
            <span></span>
            <div><input type="radio" name="gender" value="m"> Homme</div>
            <div><input type="radio" name="gender" value="f"> Femme</div>
            <span></span>
        </div>
        <div class="mb-2">
            <input class="input-big" id="username" type="text" placeholder="Nom">
        </div>
        <div class="mb-2">
            <input class="input-big" id="username" type="text" placeholder="Prénom">
        </div>
        <div class="mb-2">
            <input class="input-big" id="username" type="text" placeholder="Email">
        </div>
        <div class="mb-2">
            <input class="input-big" id="password" type="password" placeholder="Mot de passe">
        </div>

        <div class="mb-8">
            <input type="checkbox" id="conditions" name="conditions" value="conditions"> J'ai lu les <a>conditions d'utilisation</a>
        </div>

        <div>
            <button on:click={inscription} class="btn-blue w100 mb-4">Inscription</button> 
            <br/>
            <button on:click={dejaUnCompte} class="btn-green w100">J'ai déjà un compte</button>
        </div>
    </form>
</div>

<style>

.form_center
{
    margin-top: 64px;
}

.radio_space
{
  display: flex;
  justify-content: space-between;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>