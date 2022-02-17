import { useEffect, useState } from "react";
import RecipeList from "./RecipeList.js";
import { Link } from "react-router-dom";

function Dashboard({ groceriesList, removeFromGroceries }) {
  return (
    <div className="home">
      <h1>Review choosen recipes</h1>
      {groceriesList.length === 0 && (
        <Link to="/main/search">Find your recipes!</Link>
      )}
      {groceriesList && (
        <RecipeList
          recipes={groceriesList}
          removeFromGroceries={removeFromGroceries}
        />
      )}
    </div>
  );
}

export default Dashboard;
