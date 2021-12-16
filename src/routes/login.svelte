<script>
    import BandeauSeparateur from "$lib/pharma/BandeauSeparateur.svelte";
    import Logo from "$lib/pharma/Logo.svelte";
</script>

<Logo />
<BandeauSeparateur text="Se Connecter" />

<div class="flex justify-center my-4 form_center">
    <form >
        <div class="mb-2">
            <input class="input-connect" id="username" type="text" placeholder="Email">
        </div>
        <div class="mb-2">
            <input class="input-connect" id="password" type="password" placeholder="Mot de passe">
        </div>

        <div class="mpo mb-8">
            <a href="/">Mot de passe oublié ?</a>
        </div>

        <div>
            <button class="btn-blue w100 mb-4">Connexion</button> 
            <br/>
            <button class="btn-green w100">Je n'ai pas de compte</button>
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