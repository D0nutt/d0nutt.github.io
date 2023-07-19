function addIngredient() {
    const ingContainer = document.getElementById("ingredients-container");
    const placeholder = document.getElementById("ing-placeholder");
    if (placeholder) {
        placeholder.parentNode.removeChild(placeholder);
    }
    const ingText = document.getElementById("ingredient");
    const ingredient = document.createElement("div");
    ingredient.setAttribute("tabindex", "0");
    ingredient.setAttribute("aria-description", "Press space or click to remove ingredient");
    ingredient.addEventListener("click", function() { removeIngredient(ingredient, ingContainer) });
    ingredient.addEventListener("keypress", (e) => {
        if (e.code === "Space") {
            removeIngredient(ingredient, ingContainer);
        };
    });
    ingredient.innerHTML = ingText.value;
    ingContainer.appendChild(ingredient);
    ingText.value = "";
}

function elementFromHTML(htmlString) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = htmlString;
    return wrapper.firstElementChild;
}

function removeIngredient(ing, container) {
    ing.remove();
    if (container.childElementCount === 0) {
        const newP = elementFromHTML(`<p id="ing-placeholder" >Ingredients will appear here</p>`);
        container.appendChild(newP);
    };
}

document.getElementById("ingredient-button").addEventListener("click", () => {
    const ingName = document.getElementById("ingredient");
    if (ingName.value !== "") {
        addIngredient();
    } else {
        displayError("Ingredient name is blank");
    };
});

document.getElementById("ingredient").addEventListener("keypress", (e) => {
    const ingName = document.getElementById("ingredient");
    if (e.key === "Enter" && ingName.value !== "") {
        addIngredient();
    } else if (e.key === "Enter" && ingName.value === "") {
        displayError("Ingredient name is blank");
    };
});

function addInstruction() {
    const insContainer = document.getElementById("instructions-container");
    const placeholder = document.getElementById("ins-placeholder");
    if (placeholder) {
        placeholder.parentNode.removeChild(placeholder);
    }
    const insText = document.getElementById("instruction");
    const instruction = document.createElement("div");
    instruction.setAttribute("tabindex", "0");
    instruction.setAttribute("aria-description", "Press space or click to remove instruction");
    instruction.addEventListener("click", function() { removeInstruction(instruction, insContainer) });
    instruction.addEventListener("keypress", (e) => {
        if (e.code === "Space") {
            removeInstruction(instruction, insContainer);
        };
    });
    instruction.innerHTML = insText.value;
    insContainer.appendChild(instruction);
    insText.value = "";
}

function removeInstruction(ins, container) {
    ins.remove();
    if (container.childElementCount === 0) {
        const newP = elementFromHTML(`<p id="ins-placeholder" >Instructions will appear here</p>`);
        container.appendChild(newP);
    };
}

document.getElementById("instruction-button").addEventListener("click", () => {
    const insName = document.getElementById("instruction");
    if (insName.value !== "") {
        addInstruction();
    } else {
        displayError("Instruction is blank");
    };
});

document.getElementById("instruction").addEventListener("keypress", (e) => {
    const insName = document.getElementById("instruction");
    if (e.key === "Enter" && insName.value !== "") {
        addInstruction();
    } else if (e.key === "Enter" && insName.value === "") {
        displayError("Instruction is blank");
    };
});

function resetRecipe() {
    const ingCon = document.getElementById("ingredients-container");
    const insCon = document.getElementById("instructions-container");
    const recipeTitle = document.getElementById("recipe-name");
    const addIng = document.getElementById("ingredient");
    const addIns = document.getElementById("instruction");
    while (ingCon.firstChild) {
        ingCon.removeChild(ingCon.firstChild);
    };
    while (insCon.firstChild) {
        insCon.removeChild(insCon.firstChild);
    };
    if (ingCon.childElementCount === 0) {
        const newP = elementFromHTML(`<p id="ing-placeholder" >Ingredients will appear here</p>`);
        ingCon.appendChild(newP);
    };
    if (insCon.childElementCount === 0) {
        const newP = elementFromHTML(`<p id="ins-placeholder" >Instructions will appear here</p>`);
        insCon.appendChild(newP);
    };
    recipeTitle.value = "";
    addIng.value = "";
    addIns.value = "";
}

document.getElementById("reset-button").addEventListener("click", resetRecipe);

function gatherRecipe() {
    const recipeName = document.getElementById("recipe-name").value;
    const ingredientElements = document.getElementById("ingredients-container").getElementsByTagName("div");
    const ingredients = Array.from(ingredientElements).map(element => element.innerText);
    const instructionElements = document.getElementById("instructions-container").getElementsByTagName("div");
    const instructions = Array.from(instructionElements).map(element => element.innerText);
    const recipe = {
        title: recipeName,
        ingredients: ingredients,
        instructions: instructions
    };
    console.log(recipe);
    return recipe;
}
  
document.getElementById("save-button").addEventListener("click", function() { writeRecipeToFile(gatherRecipe()) });

function displayError(error) {
    const el = document.getElementById("error-message")
    el.innerHTML = error;
    el.dataset.open = "true";
    setTimeout(() => {
        el.dataset.open = false;
        el.innerHTML = "";
    }, 5000);
}