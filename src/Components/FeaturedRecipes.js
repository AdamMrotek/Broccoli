import "./FeaturedRecipes.css";
import React from "react";
import recipes from "./featuredRecipesSource.js";
import InfiniteCarousel from "./InfiniteCarousel.js";
import DishCard from "./DishCard.js";

export default function FeaturedRecipes({ handlePopUp }) {
  return (
    <div className="featured">
      <h2 className="heading-secondary">Featured Recipes</h2>
      {/* <RecipeList recipes={recipes} /> */}
      <div className="featured__carousel">
        <InfiniteCarousel>
          {recipes.map((recipe, i) => {
            return <DishCard key={i} recipe={recipe}></DishCard>;
          })}
        </InfiniteCarousel>
      </div>
    </div>
  );
}
