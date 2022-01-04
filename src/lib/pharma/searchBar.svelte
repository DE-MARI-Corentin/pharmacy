<script>

	export let data = [];
    export let value = "Recherche";
    /* FILTERING object DATA BASED ON INPUT */	
    let filteredObject = [];
    // $: console.log(filteredCountries)	
    
    const filterObject = () => {
        let storageArr = []
        if (inputValue) {
            data.forEach(dataObject => {
                 if (dataObject.toLowerCase().startsWith(inputValue.toLowerCase())) {
                     storageArr = [...storageArr, makeMatchBold(dataObject)];
                 }
            });
        }
        filteredObject = storageArr;
    }	
    
    
    /* HANDLING THE INPUT */
    let searchInput; // use with bind:this to focus element
    let inputValue = "";
        
    $: if (!inputValue) {
        filteredObject = [];
        hiLiteIndex = null;
    }
    
    const clearInput = () => {
        inputValue = "";	
        searchInput.focus();
    }
    
    const setInputVal = (name) => {
        inputValue = removeBold(name);
        filteredObject = [];
        hiLiteIndex = null;
        document.querySelector('#country-input').focus();
    }	
    
    const submitValue = () => {
        if (inputValue) {
            console.log(`${inputValue} is submitted!`);
            setTimeout(clearInput, 1000);
        } else {
            alert("You didn't type anything.")
        }
    }
    
    const makeMatchBold = (str) => {
        let matched = str.substring(0, inputValue.length);
        let makeBold = `<strong>${matched}</strong>`;
        let boldedMatch = str.replace(matched, makeBold);
        return boldedMatch;
    }
    
    const removeBold = (str) =>  {
        //replace < and > all characters between
        return str.toString().replace(/<(.)*?>/g, "");
        // return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
    }	    
        
    
    /* NAVIGATING OVER THE LIST OF Object W HIGHLIGHTING */	
    let hiLiteIndex = null;
    //$: console.log(hiLiteIndex);	
    $: hiLitedObject = filteredObject[hiLiteIndex]; 	
        
    const navigateList = (e) => {
        if (e.key === "ArrowDown" && hiLiteIndex <= filteredObject.length-1) {
            hiLiteIndex === null ? hiLiteIndex = 0 : hiLiteIndex += 1
        } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
            hiLiteIndex === 0 ? hiLiteIndex = filteredObject.length-1 : hiLiteIndex -= 1
        } else if (e.key === "Enter") {
            setInputVal(filteredObject[hiLiteIndex]);
        } else {
            return;
        }
    } 
    </script>
    
    
    <svelte:window on:keydown={navigateList} />
    
    <form autocomplete="off" on:submit|preventDefault={submitValue}>
      <div class="autocomplete">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="country-input" 
            type="text" placeholder={value} bind:this={searchInput} bind:value={inputValue}  on:input={filterObject}>
      </div>
        
        <!-- FILTERED LIST OF Object -->
        {#if filteredObject.length > 0}
            <ul id="autocomplete-items-list">
                {#each filteredObject as country, i}
                  <li class="autocomplete-items" class:autocomplete-active="{i === hiLiteIndex}" on:click="{() => setInputVal(country)}">{removeBold(country)} </li>
                {/each}			
            </ul>
        {/if}
    </form>
    
<style>
    li.autocomplete-items {
        list-style: none;
      border-bottom: 1px solid #d4d4d4;
      z-index: 99;
      /*position the autocomplete items to be the same width as the container:*/
      top: 100%;
      left: 0;
      right: 0;
        padding: 10px;
      cursor: pointer;
      background-color: #fff;
    }
    
    li.autocomplete-items:hover {
      /*when hovering an item:*/
      background-color: #81921f;
        color: white;
    }
    
    li.autocomplete-items:active {
      /*when navigating through the items using the arrow keys:*/
      background-color: DodgerBlue !important;
      color: #ffffff;
    }	
        
    .autocomplete-active {
      /*when navigating through the items using the arrow keys:*/
      background-color: DodgerBlue !important;
      color: #ffffff;
    }
    div.autocomplete {
      /*the container must be positioned relative:*/
      position: relative;
      display: inline-block;
        width: 300px;
    }
    input {
      border: 1px solid transparent;
      background-color: #f1f1f1;
      padding: 10px;
      font-size: 16px;
        margin: 0;
    }
    input[type=text] {
      background-color: #f1f1f1;
      width: 100%;
    }
    input[type=submit] {
      background-color: DodgerBlue;
      color: #fff;
    }
        
    #autocomplete-items-list {
        position: relative;
        margin: 0;
        padding: 0;
        top: 0;
        width: 297px;
        border: 1px solid #ddd;
        background-color: #ddd;
    }	
    </style>	