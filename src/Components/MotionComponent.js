import { motion } from "framer-motion";
import "./MotionComponent.css";
import { useEffect, useState } from "react";
import DishCard from "./DishCard.js";
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

export default function MotionComponent({
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
    <motion.ul variants={container} initial="hidden" animate="visible">
      {shortRecipes &&
        recipes.map((recipe, i) => (
          <motion.li key={i} variants={item}>
            <DishCard
              key={"dish" + i + Date.now()}
              recipe={recipe}
              addToGroceries={addToGroceries}
              removeFromGroceries={removeFromGroceries}
            ></DishCard>
          </motion.li>
        ))}
    </motion.ul>
  );
}
