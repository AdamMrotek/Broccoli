import { useState } from "react";
import { ApiLibraryEdamam } from "../API/EdamamAPI/ApiLibraryEdamam.js";
//react components
import RecipeList from "./RecipeList.js";
import "./Search.css";
import InputOption from "./Forms/InputOption.js";
import ChcekboxInput from "./Forms/ChcekboxInput.js";

function Search(props) {
  //imports specific to EDAMAM API
  const cusines = ApiLibraryEdamam.cusines;
  const mealTypes = ApiLibraryEdamam.mealType;
  const health = ApiLibraryEdamam.health;

  //Seach inputs
  const [recipeName, setrecipeName] = useState("");
  const [cusine, setCusine] = useState("any");
  const [mealType, setMealType] = useState("any");
  const [healthChoices, setHeathChoices] = useState([]);
  // Search resutl list
  const [searchList, setSearchList] = useState(null);

  const handelCheckboxChange = (e, chceckBoxSetter) => {
    const target = e.target;
    const value = target.checked ? true : false;
    const name = target.name;
    console.log(value);
    if (value) {
      setHeathChoices((healthChoices) => {
        return [...healthChoices, name];
      });
    } else {
      setHeathChoices((healthChoices) => {
        return healthChoices.filter((healthChoice) => healthChoice !== name);
      });
    }
    console.log(healthChoices);
  };

  const createAPIquerry = () => {
    let querry = recipeName;
    let cusineQuerry = cusine === "any" ? "" : "&cuisineType=" + cusine;
    let mealTypeQuerry = mealType === "any" ? "" : "&mealType=" + mealType;
    let heathQuerry =
      healthChoices.length > 0
        ? healthChoices
            .map((choice) => {
              return "&health=" + choice;
            })
            .join("")
        : "";
    console.log(heathQuerry);
    return `https://api.edamam.com/api/recipes/v2?type=public&q=${querry}&app_id=${process.env.REACT_APP_Application_ID}&app_key=${process.env.REACT_APP_Application_Keys}${cusineQuerry}${mealTypeQuerry}${heathQuerry}`;
  };

  const handleSearch = async (e, recipeName, cusine) => {
    e.preventDefault();
    const apiQuerry = createAPIquerry();
    const response = await fetch(apiQuerry);
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
        <label htmlFor="recipeName">Recipe Name or Ingredient</label>
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
        <label htmlFor="meal">Meal type</label>
        <select
          name="meal"
          id="meal"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          {mealTypes.map((mealType) => {
            return (
              <InputOption
                key={mealType}
                id={"meal"}
                valueOfOption={mealType}
              />
            );
          })}
        </select>
        {health.map((healthOption) => {
          return (
            <ChcekboxInput
              key={healthOption}
              value={healthOption}
              handleChange={handelCheckboxChange}
              setCheckBoxes={setHeathChoices}
            />
          );
        })}
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
