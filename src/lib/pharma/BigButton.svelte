<script>
    export let image = null;
    export let texte = null;
    export let action = function(){return null};
</script>

<button on:click={action()}>
    <div class="img-center"><img src={image}></div>
    <b>{texte}</b>
</button>

<style>

    .img-center
    {
        display: flex;
        justify-content: center;
    }

    img
    {
        height: 85px;
        margin-bottom: 5px;
    }

    button
    {
        background-color: var(--pharma-button2-background-color);
        border-color: var(--pharma-button2-border-color);
        border-radius: 30px;
        border-width: 3px;
        width: 150px;
        height: 150px;
        color: white;
        font-size: large;
    }

</style>