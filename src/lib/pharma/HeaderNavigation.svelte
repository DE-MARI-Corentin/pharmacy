<script>
    export let texte = "Non Définis";
</script>

<div class="w100 navbar">
    <div class="center"><h2>{texte}</h2></div>
    <div class="left"><button></button></div>
</div>

<style>

.center
{
    position: relative;
    width: 100%;
    text-align: center;
}

.left
{
    position: absolute;
    top: 0px;
}

.navbar
{
    background-color: var(--pharma-headernav-background-color);
    color: white;
    height: 48px;
}

</style>