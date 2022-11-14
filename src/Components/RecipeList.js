import { useEffect, useState } from "react";
import DishCard from "./DishCard.js";
import "./RecipeList.css";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

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
    <motion.div
      className="recipe-list"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {shortRecipes &&
        recipes.map((recipe, i) => {
          return (
            <motion.div>
              <DishCard
                key={"dish" + i + Date.now()}
                recipe={recipe}
                addToGroceries={addToGroceries}
                removeFromGroceries={removeFromGroceries}
              ></DishCard>
            </motion.div>
          );
        })}
    </motion.div>
  );
}

export default RecipeList;
