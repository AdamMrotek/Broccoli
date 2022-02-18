import { useEffect, useState } from "react";
import RecipeList from "./RecipeList.js";
import { Link } from "react-router-dom";
import GroceriesList from "./GroceriesList.js";
import { db } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

function Dashboard({ user, removeFromGroceries, recipeList }) {
  return (
    <div className="home">
      <h1>Review choosen recipes</h1>
      {recipeList.length === 0 && (
        <Link to="/main/search">Find your recipes!</Link>
      )}
      {recipeList && (
        <RecipeList
          recipes={recipeList}
          removeFromGroceries={removeFromGroceries}
        />
      )}
      <GroceriesList recipeList={recipeList} />
    </div>
  );
}

export default Dashboard;
