<script>
    import { goto } from "$app/navigation";

    export let texte = "Non Définis";
    export let profileImg = null;
    export let back = "/";

    function gotoProfile(){ goto("profile") }
    function gotoBack(){ goto(back) }

</script>

<div class="w100 navbar">
    <div class="center"><h2>{texte}</h2></div>
    <div class="left"><button on:click="{gotoBack}" class="btn"><img src="images/icon_back2.png" style="filter: invert(1);"/></button></div>
    <div class="right"><button on:click="{gotoProfile}" class="btn"><img class="rnd" src={profileImg}/></button></div>
</div>

<div style="height: 48px"/>

<style>

.center
{
    text-align: center;
    padding: 8px 0;
}

.left
{
    position: absolute;
    top: 0px;
}
.right
{
    position: absolute;
    top: 0px;
    right: 0px;
}

.rnd
{
    border-radius: 20px;
}

.btn
{
    border-width: 0px;
    width: 50px;
}

.navbar
{
    position: fixed;
    top: 0px;
    z-index: 1;
    background-color: var(--pharma-headernav-background-color);
    color: white;
    height: 48px;
}

</style>