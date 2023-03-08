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
  const [nextPage, setNextPage] = useState([]);

  const handelCheckboxChange = (e, chceckBoxSetter) => {
    const target = e.target;
    const value = target.checked ? true : false;
    const name = target.name;
    if (value) {
      chceckBoxSetter((healthChoices) => {
        return [...healthChoices, name];
      });
    } else {
      chceckBoxSetter((healthChoices) => {
        return healthChoices.filter((healthChoice) => healthChoice !== name);
      });
    }
  };

  const createAPIquerry = () => {
    let querry = recipeName;
    let cusineQuerry =
      cusine.toLowerCase() === "any" ? "" : "&cuisineType=" + cusine;
    let mealTypeQuerry =
      mealType.toLowerCase() === "any" ? "" : "&mealType=" + mealType;
    let healthQuerry =
      healthChoices.length > 0
        ? healthChoices
            .map((choice) => {
              return "&health=" + choice;
            })
            .join("")
        : "";

    return `https://api.edamam.com/api/recipes/v2?type=public&q=${querry}&app_id=${process.env.REACT_APP_Application_ID}&app_key=${process.env.REACT_APP_Application_Keys}${cusineQuerry}${mealTypeQuerry}${healthQuerry}`;
  };

  const handleSearchResultsEdamam = (data, setSearchResults) => {
    let newData = data.hits.map((recipe) => {
      return {
        lable: recipe.recipe.label,
        image: recipe.recipe.images.REGULAR.url,
        ingedients: recipe.recipe.ingredients,
        key: recipe.recipe.uri.split("recipe_")[1],
      };
    });
    setSearchResults(newData);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiQuerry = createAPIquerry();
    const response = await fetch(apiQuerry, { cache: "force-cache" });
    const data = await response.json();
    //chcecking nextPage next?.href makes sure there is next before reading href
    data._links.next?.href
      ? setNextPage([apiQuerry, data._links.next.href])
      : setNextPage([apiQuerry, null]);
    // updating state of the current list and creating objects to render
    handleSearchResultsEdamam(data, setSearchList);
  };

  const goToNextPage = async () => {
    //feching last element of nextPage array
    const response = await fetch(nextPage[nextPage.length - 1]);
    const data = await response.json();
    //chceking if next page has link to next page
    data._links.next?.href
      ? setNextPage((nextPage) => nextPage.concat(data._links.next.href))
      : setNextPage((nextPage) => nextPage.concat(null));
    // updating state of the current list and creating objects to render
    handleSearchResultsEdamam(data, setSearchList);
  };
  const goToPreviousPage = async () => {
    //feching url saved in history of nextPage
    const response = await fetch(nextPage[nextPage.length - 3]);
    const data = await response.json();
    // updating state of the current list and creating objects to render
    handleSearchResultsEdamam(data, setSearchList);

    //setting prevoius page as current so the next link can work
    setNextPage((nextPage) => nextPage.slice(0, nextPage.length - 1));
  };

  return (
    <>
      <div className="search-form">
        <h2 className="margin-medium heading-secondary  ">Add new recipes</h2>
        <form
          className="q"
          action="#"
          onSubmit={(e) => {
            handleSearch(e, recipeName, cusine);
          }}
        >
          <div className="search-form__fields__text-search">
            <input
              id="recipeName"
              type="text"
              required
              name="recipeName"
              value={recipeName}
              placeholder=" "
              onChange={(e) => setrecipeName(e.target.value)}
            />
            <label htmlFor="recipeName">Recipe Name or Ingredients</label>
            <button className="btn">Search</button>
          </div>
          <div className="search-form__fields__options">
            <div className="search-filter">
              <label htmlFor="cusine">Cusine</label>
              <select
                name="cusine"
                id="cusine"
                value={cusine}
                onChange={(e) => setCusine(e.target.value)}
              >
                {cusines.map((cusine) => {
                  return (
                    <InputOption
                      key={cusine}
                      id={"author"}
                      valueOfOption={cusine}
                    />
                  );
                })}
              </select>
            </div>
            <div className="search-filter">
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
            </div>
            <div className="search-form__chcekboxes">
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
            </div>
          </div>

          {searchList?.length === 0 && (
            <h2 className="search-form__no-results">
              Couldn't find any results!
            </h2>
          )}
        </form>
      </div>

      {searchList && searchList.length > 0 && (
        <div className="search-results">
          <div className="navigation-buttons">
            {nextPage.length > 2 && (
              <button
                className="btn search-form_pagination-btn search-form_pagination-btn--previous"
                onClick={(e) => goToPreviousPage()}
              >
                Previous Page
              </button>
            )}
            {nextPage[nextPage.length - 1] && (
              <button
                className="btn search-form_pagination-btn search-form_pagination-btn--next"
                onClick={(e) => goToNextPage()}
              >
                Next Page
              </button>
            )}
          </div>

          <RecipeList
            recipes={searchList}
            addToGroceries={props.addToGroceries}
          />
          <div className="navigation-buttons">
            {nextPage.length > 2 && (
              <button
                className="btn search-form_pagination-btn search-form_pagination-btn--previous"
                onClick={(e) => goToPreviousPage()}
              >
                Previous Page
              </button>
            )}
            {nextPage[nextPage.length - 1] && (
              <button
                className="btn search-form_pagination-btn search-form_pagination-btn--next"
                onClick={(e) => goToNextPage()}
              >
                Next Page
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
