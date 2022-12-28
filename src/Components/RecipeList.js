import { useEffect, useState } from "react";
import DishCard from "./DishCard.js";
import "./RecipeList.css";
import { motion, AnimatePresence } from "framer-motion";
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
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function RecipeList({
  recipes,
  addToGroceries,
  removeFromGroceries,
}) {
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
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      layout
      className="recipe-list"
    >
      <AnimatePresence>
        {recipes.map((recipe, i) => {
          return (
            <motion.li
              layout
              key={recipe.key}
              variants={item}
              className="recipe-list__item"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <DishCard
                recipe={recipe}
                addToGroceries={addToGroceries}
                removeFromGroceries={removeFromGroceries}
              ></DishCard>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
}
