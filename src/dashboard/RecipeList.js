import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes, addToGroceries, removeFromGroceries }) {
  const [shortRecipes, setShortRecipes] = useState(null);
  useEffect(() => {
    const shortRep = recipes.map((recipe) => {
      let newInge = [];
      recipe.ingedients.forEach((ing, i) => {
        if (i > 1) {
          return;
        }
        let newIng = { food: "newfood oh no!" };
        newInge.push(newIng);
      });
      let newRecipe = { ...recipe };
      return {
        ...newRecipe,
        ingedients: newInge,
      };
    });
    setShortRecipes(shortRep);
  }, [recipes]);
  return (
    <div className="recipe-list">
      {shortRecipes &&
        recipes.map((recipe) => {
          return (
            <div className="recipeCard" key={recipe.key}>
              <div className="card-title">
                <h3 className="heading-tertiary">{recipe.lable}</h3>
              </div>
              <img
                className="recipeCard__image"
                src={recipe.image}
                alt={recipe.label}
              />
              <h3 className="heading-tertiary">Ingredients</h3>

              {/* ingredients */}
              {recipe.ingedients?.map((ingre, i) => {
                return (
                  <div className="recipeCard__ingredients" key={recipe.key + i}>
                    <p className="recipeCard__ingredients-item">{ingre.food}</p>
                  </div>
                );
              })}

              {addToGroceries && (
                <button
                  className="recipeCard__button"
                  onClick={() => addToGroceries(recipe)}
                >
                  Add to grocerie list
                </button>
              )}
              {removeFromGroceries && (
                <button
                  className="recipeCard__button"
                  onClick={() => removeFromGroceries(recipe.key)}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default RecipeList;
