import { useEffect, useState } from "react";
import RecipeList from "./RecipeList.js";
import { Link } from "react-router-dom";
import GroceriesList from "./GroceriesList.js";
import UserResources from "./UserResources.js";

function Dashboard({ removeFromGroceries, recipeList }) {
  return (
    <div>
      <h1 className=" margin-medium">Review choosen recipes</h1>
      {recipeList?.length < 1 && (
        <Link to="/main/search">Find your recipes!</Link>
      )}
      {recipeList && (
        <RecipeList
          recipes={recipeList}
          removeFromGroceries={removeFromGroceries}
        />
      )}
      {recipeList?.length >= 1 && <GroceriesList recipeList={recipeList} />}
      <UserResources />
    </div>
  );
}

export default Dashboard;
