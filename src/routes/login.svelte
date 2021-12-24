<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import Logo from "$lib/pharma/Logo.svelte";

    import { goto } from '$app/navigation';
    
    function pasDeCompte(){goto(`/register`)}
    function connect()
    {
        document.cookie = "connected=true"
        document.cookie = "nom=PAIN"
        document.cookie = "prenom=Harold"
        document.cookie = "tel=0666887799"
        document.cookie = "adresse=8 Rue du CERI, 84130"
        goto("/profile")
    }
</script>

<svelte:head>
	<title>Connexion</title>
</svelte:head>

<Logo />
<BandeauSeparateur texte="Se Connecter" />

<div class="flex justify-center my-4 form_center">
    <form >
        <div class="mb-2">
            <input class="input-big" id="username" type="text" placeholder="Email">
        </div>
        <div class="mb-2">
            <input class="input-big" id="password" type="password" placeholder="Mot de passe">
        </div>

        <div class="mpo mb-8">
            <a href="/">Mot de passe oublié ?</a>
        </div>

        <div>
            <button on:click={connect} class="btn-blue w100 mb-4">Connexion</button> 
            <br/>
            <button on:click={pasDeCompte} class="btn-green w100">Je n'ai pas de compte</button>
        </div>
    </form>
</div>

<style>

.form_center
{
    margin-top: 64px;
}

.mpo
{
    text-align: right;
    width: 100%;
    font-size: medium;
}
</style>