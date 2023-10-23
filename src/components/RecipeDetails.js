import React from "react";
import PropTypes from "prop-types";

const RecipeDetails = ({ recipe }) => {
  const { name, imageURL, originalURL, ingredients, steps } = recipe ?? {};

  return (
    <div className="content__recipe">
      {recipe ? (
        <>
          <h2 className="content__recipe__title">{name}</h2>
          {originalURL && (
            <h5>
              Source:{" "}
              <a href={originalURL} target="_blank" rel="noreferrer noopener">
                {originalURL}
              </a>
            </h5>
          )}
          <img src={imageURL} alt={name} width={400} height={300} />
          <div className="content__recipe__ingredients">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map(({ name, type, quantity }, index) => (
                <li key={index}>
                  <b>{quantity}</b> {name}, {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="content__recipe__steps">
            <h3>Steps</h3>
            <ol>
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h4 className="message">Please select a recipe from the list</h4>
      )}
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeDetails;
