import { Link } from "react-router-dom";

function RecipeList({ recipes, addToGroceries, removeFromGroceries }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => {
        return (
          <div className="recipeCard" key={recipe.key}>
            <img
              className="recipeCard__image"
              src={recipe.image}
              alt={recipe.label}
            />
            <h3>{recipe.lable}</h3>

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
