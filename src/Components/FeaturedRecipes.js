import "./FeaturedRecipes.css";
import React from "react";
import PrimaryButton from "./Buttons/Buttons.js";
import recipes from "./featuredRecipesSource.js";
import RecipeList from "./RecipeList.js";
import MotionComponent from "./MotionComponent.js";

export default function OurMission({ handlePopUp }) {
  return (
    <div className="featured">
      <h2 className="heading-secondary">Featured Recipes</h2>
      <RecipeList recipes={recipes} />
    </div>
  );
}
