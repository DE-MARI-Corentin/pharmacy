<script>
    export let animal = 
    {
        sexe: null,
        image: "src/images/icon_dog.png",
        nom: "Inconnu",
        race: "Race Inconnue",
        age: 0,
    };

    export let warning = null

    let backgroundColor = "white";
    let age = !isNaN(animal.age) && animal.age > 0 ? animal.age + " " + (animal.age > 1 ? "ans" : "an") : "Inconnu"

    if(animal.sexe == "m")
        backgroundColor = "var(--pharma-card-m-background-color)"
    else if(animal.sexe == "f")
        backgroundColor = "var(--pharma-card-f-background-color)"
        
</script>

<div class="card my-2" style="background-color: {backgroundColor}">

    <div class="mx-8 my-4">
        <h2>{animal.nom}</h2>
        <p>{animal.race}</p>
        <br/>
        <p>{age}</p>
    </div>
    <img class="icon" src={animal.image}/>
    {#if warning}
        <div class="warning mx-2 flex">
            <img class="warnimg" src="src/images/icon_warning.png"/>
            <p class="mx-2">{warning}</p>
        </div>
    {/if}
</div>

<style>

    .card
    {
        position: relative;
        border-radius: 12px;
        height: 200px;
        border-width: 2px;
        border-color: var(--pharma-card-x-border-color);
    }

    .warnimg
    {
        height: 28px;
    }

    .warning
    {
        width: 100%;
        font-size: large;
    }

    .icon
    {
        top: 32px;
        right: 32px;
        height: 120px;
        position: absolute;
    }

    h2
    {
        font-size: x-large;
    }

</style>