import { useState } from "react";
import { useHistory } from "react-router-dom";
import RecepieList from "./RecepieList.js";
import useFetch from "./useFetch.js";

function Create() {
  const [recipeList, setRecipeList] = useState(null);
  const [recipeName, setrecipeName] = useState("");
  const [cusine, setCusine] = useState();
  // const [data, isLoading, error] = useFetch()
  const handleSearch = async (e, recipeName, cusine) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${process.env.REACT_APP_Application_ID}&app_key=${process.env.REACT_APP_Application_Keys}`
    );
    const data = await response.json();
    console.log(data.hits[0]);
    setRecipeList(data.hits);

    console.log(e.target, recipeName, cusine);
  };
  return (
    <div className="create">
      <h2>Search</h2>
      <form
        action="#"
        onSubmit={(e) => {
          handleSearch(e, recipeName, cusine);
        }}
      >
        <label htmlFor="recipeName">recipeName</label>
        <input
          id="recipeName"
          type="text"
          required
          name="recipeName"
          value={recipeName}
          onChange={(e) => setrecipeName(e.target.value)}
        />
        <label htmlFor="cusine">Cusine</label>
        <select
          name="cusine"
          id="cusine"
          value={cusine}
          onChange={(e) => setCusine(e.target.value)}
        >
          <option id="author" value="italian">
            Italian
          </option>
          <option id="author" value="mexican">
            Mexican
          </option>
        </select>
        <button>Search</button>
      </form>
      {recipeList &&
        recipeList.map((recipe, i) => {
          console.log(recipe);
          return (
            <div>
              <img
                src={recipe.recipe.images.SMALL.url}
                alt={recipe.recipe.label}
              />
              <p key={i}>{recipe.recipe.label}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Create;
