import React, { useState } from "react";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import Footer from "./components/Footer";
import recipes from "./data/recipes";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <div className="container">
        <RecipeList
          recipes={recipes}
          handleRecipeSelect={handleRecipeSelect}
          selectedRecipe={selectedRecipe}
        />
        <RecipeDetails recipe={selectedRecipe} />
      </div>
      <Footer />
    </>
  );
};

export default App;
