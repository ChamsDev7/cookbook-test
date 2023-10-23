import React from "react";
import PropTypes from "prop-types";

const RecipeList = ({ recipes, handleRecipeSelect, selectedRecipe }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Recipe Book</h3>
      <ul className="sidebar__list">
        {recipes.map((recipe, index) => (
          <li
            className={`sidebar__item ${
              selectedRecipe === recipe ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleRecipeSelect(recipe)}
          >
            <img
              src={recipe.imageURL}
              alt={recipe.name}
              width={100}
              height={100}
            />
            <span>{recipe.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array,
  handleRecipeSelect: PropTypes.func,
  selectedRecipe: PropTypes.object,
};

export default RecipeList;
