document.addEventListener("DOMContentLoaded", function () {
  const recipeForm = document.getElementById("recipe-form");
  const recipeNameInput = document.getElementById("recipe-name");
  const recipeDescriptionInput = document.getElementById("recipe-description");
  const addRecipeButton = document.getElementById("add-recipe");
  const recipeList = document.getElementById("recipe-list");

  addRecipeButton.addEventListener("click", function () {
      const name = recipeNameInput.value;
      const description = recipeDescriptionInput.value;

      if (name && description) {
          const li = document.createElement("li");
          li.innerHTML = `<h3>${name}</h3><p>${description}</p>`;
          recipeList.appendChild(li);

      
          recipeNameInput.value = "";
          recipeDescriptionInput.value = "";
      }
  });
});
