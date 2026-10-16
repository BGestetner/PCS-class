const recipeDiv = document.querySelector('#recipe');
const instructionsDiv  = document.querySelector('#instructions');
const recipeChooser = document.querySelector('#recipe-list');
const recipeNameElem = document.querySelector('#recipe-name');
const recipePictureElem = document.querySelector('#recipe-picture');
const recipeIngredientsElem = document.querySelector('#ingredients-list');
const recipeInstructionsElem = document.querySelector('#recipe-instructions');

recipeChooser.addEventListener('change', async (event) => {
    recipeIngredientsElem.textContent = '';//that way ingredients don't pile up
    instructionsDiv.style.display = 'none';
    recipeDiv.style.display = 'none';
    console.log(`Data changed to ${event.target.value}`);

    try {
        //getting recipe name from index
        const r = await fetch('recipeIndex.json');
        if (!r.ok) {
            throw new Error(`${r.status} - ${r.statusText}`);
        }
        const t = await r.json();
        console.log(t);
        recipeNameElem.textContent = t[event.target.value].recipeName;
        
        //pulling up recipe file
        const r2 = await fetch(t[event.target.value].url);
        if (!r2.ok) {
            throw new Error(`${r2.status} - ${r2.statusText}`);
        }
        const t2 = await r2.json();
        console.log(t2);

        //pull out info to populate elements
        recipePictureElem.src = `${t2.picture}`;
        t2.ingredients.forEach((e) => {
            // recipeIngredientsElem.appendChild(document.createTextNode(`${e} \n`));
            const newDiv = document.createElement('div');
            newDiv.textContent = e;
            recipeIngredientsElem.appendChild(newDiv);
        });
        recipeInstructionsElem.textContent = t2.instructions;
       

    } catch (e) {
        console.error('oops', e);
        //todo:message box
    }

   
    recipeDiv.style.display = 'block';
});

