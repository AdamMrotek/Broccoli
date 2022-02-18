import { useState } from "react";
import RecipeList from "./RecipeList.js";

function Search(props) {
  const [searchList, setSearchList] = useState(null);
  const [recipeName, setrecipeName] = useState("");
  const [cusine, setCusine] = useState();
  // const [data, isLoading, error] = useFetch()
  const handleSearch = async (e, recipeName, cusine) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${process.env.REACT_APP_Application_ID}&app_key=${process.env.REACT_APP_Application_Keys}`
    );
    const data = await response.json();
    let newData = data.hits.map((recipe) => {
      return {
        lable: recipe.recipe.label,
        image: recipe.recipe.images.SMALL.url,
        ingedients: recipe.recipe.ingredients,
        key: recipe.recipe.uri.split("recipe_")[1],
      };
    });
    console.log(data);
    console.log(newData);
    setSearchList(newData);
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
      {searchList && (
        <RecipeList
          recipes={searchList}
          addToGroceries={props.addToGroceries}
        />
      )}
    </div>
  );
}

export default Search;
