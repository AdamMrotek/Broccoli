import { useEffect, useState } from "react";
import DishCard from "./DishCard.js";
import "./RecipeList.css";

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
      {console.log(recipes)}
      {shortRecipes &&
        recipes.map((recipe, i) => {
          return (
            <div key={"dish" + i + Date.now()}>
              <DishCard
                recipe={recipe}
                addToGroceries={addToGroceries}
                removeFromGroceries={removeFromGroceries}
              ></DishCard>
            </div>
          );
        })}
    </div>
  );
}

export default RecipeList;
