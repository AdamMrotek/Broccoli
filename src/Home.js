import { useEffect, useState } from "react";
import RecepieList from "./RecepieList.js";
import useFetch from "./useFetch.js";

function Home() {
  let { data, isLoading, error } = useFetch("http://localhost:8000/recepies");
  const [name, setName] = useState("adam");
  const handleClick = (e) => {
    let newName = name === "Adam" ? "zbigniew" : "Adam";
    setName(newName);
  };

  return (
    <div className="home">
      <h1>Welcome! Start looking for inspirations</h1>
      <button onClick={(e) => handleClick(e)}>Click Me!</button>
      {data && <RecepieList recepies={data} name={name} />}
      {isLoading && <p>Data is loading</p>}
      {error && <p>Data is loading</p>}
    </div>
  );
}

export default Home;
