import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Create from "./Create.js";
import Dashboard from "./Dashboard.js";
import Search from "./Search.js";
import NotFound from "./NotFound.js";

function Main(user) {
  const [recipeList, setRecipeList] = useState([]);
  // FUNCTIONS CONTROLING recipeList
  function addToGroceries(recepie) {
    console.log("adding to recipeList", recipeList);
    setRecipeList((recipeList) => recipeList.concat(recepie));
  }
  function removeFromGroceries(id) {
    setRecipeList((recipeList) =>
      recipeList.filter((recipe) => recipe.key !== id)
    );
  }

  return (
    <Routes>
      <Route path="home" element={<Create />} />
      <Route path="" element={<Navigate to="dashboard" />} />
      <Route
        path="dashboard"
        element={
          <Dashboard
            groceriesList={recipeList}
            removeFromGroceries={removeFromGroceries}
          />
        }
      />
      <Route
        path="search"
        element={<Search addToGroceries={addToGroceries} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Main;
