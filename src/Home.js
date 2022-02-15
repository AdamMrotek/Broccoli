import { useEffect, useState } from "react";
import RecipeList from "./RecipeList.js";
import RecipeCard from "./RecipeCard.js";
import useFetch from "./useFetch.js";

function Home({ groceriesList, removeFromGroceries }) {
  let { data, isLoading, error } = useFetch("http://localhost:8000/recepies");
  const [name, setName] = useState("adam");
  const handleClick = (e) => {
    let newName = name === "Adam" ? "zbigniew" : "Adam";
    setName(newName);
  };
  return (
    <div className="home">
      <h1>Review choosen recipes</h1>
      <button onClick={(e) => handleClick(e)}>Click Me!</button>
      {data && <RecipeList recepies={data} name={name} />}
      {isLoading && <p>Data is loading</p>}
      {error && <p>{error}</p>}
      {groceriesList && (
        <RecipeList
          recipes={groceriesList}
          removeFromGroceries={removeFromGroceries}
        />
      )}
    </div>
  );
}

export default Home;
