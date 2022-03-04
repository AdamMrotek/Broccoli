import { useState } from "react";
import RecipeList from "./RecipeList.js";
import "./Search.css";
import InputOption from "./Forms/InputOption.js";

function Search(props) {
  const [searchList, setSearchList] = useState(null);
  const [recipeName, setrecipeName] = useState("");
  const [cusine, setCusine] = useState();
  let cusines = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian",
  ];

  console.log(searchList?.length);
  const handleSearch = async (e, recipeName, cusine) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${process.env.REACT_APP_Application_ID}&app_key=${process.env.REACT_APP_Application_Keys}&cuisineType=${cusine}`
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
    console.log(newData.length);
    setSearchList(newData);
  };
  return (
    <>
      <form
        className="search-form"
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
          {cusines.map((cusine) => {
            return (
              <InputOption key={cusine} id={"author"} valueOfOption={cusine} />
            );
          })}
        </select>
        <button className="btn margin-medium">Search</button>
        {searchList?.length === 0 && (
          <h1 className="search-form__no-results">
            Couldn't find any results!
          </h1>
        )}
      </form>
      {searchList && searchList.length > 0 && (
        <div className="search-results">
          <h2>Search Results:</h2>

          <RecipeList
            recipes={searchList}
            addToGroceries={props.addToGroceries}
          />
        </div>
      )}
    </>
  );
}

export default Search;
