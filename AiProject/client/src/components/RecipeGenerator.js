import React, { useState } from "react";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [dietaryRestriction, setDietaryRestriction] = useState("none");
  const [recipe, setRecipe] = useState("");

  const createRecipe = async () => {
    try {
      const res = await fetch(
        `http://localhost:5454/recipe-creator?ingredients=${ingredients}&dietaryRestriction=${dietaryRestriction}&cuisine=${cuisine}`
      );
      const data = await res.text();
      setRecipe(data);
    } catch (error) {
      console.error("Error generating recipe: ", error);
    }
  };

  return (
    <div className="">
      <h2>Create a Recipe</h2>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter Ingredients (comma separated)"
      />
      <input
        type="text"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Enter cuisine type"
      />
      <input
        type="text"
        value={dietaryRestriction}
        onChange={(e) => setDietaryRestriction(e.target.value)}
        placeholder="Enter dietary Restrictions"
      />
      <button onClick={createRecipe}>Create Recipe</button>
      <div className="output">
        <pre className="recipe-text">{recipe}</pre>
      </div>
    </div>
  );
};

export default RecipeGenerator;
