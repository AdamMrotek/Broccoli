import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import Footer from "./Footer.js";
import NotFound from "./NotFound.js";
import Search from "./Search.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecepieDetails from "./RecepieDetails.js";
import { useState } from "react";

function App() {
  const [groceriesList, setGroceriesList] = useState([
    { lable: "test recepie" },
  ]);
  function addToGroceries(recepie) {
    setGroceriesList((groceriesList) => groceriesList.concat(recepie));
  }
  function removeFromGroceries(id) {
    setGroceriesList((groceriesList) =>
      groceriesList.filter((recipe) => recipe.key !== id)
    );
  }
  console.log("+++++++++++++++++", groceriesList);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/">
              <Home
                groceriesList={groceriesList}
                removeFromGroceries={removeFromGroceries}
              />
            </Route>
            <Route exact path="/search">
              <Search addToGroceries={addToGroceries} />
            </Route>
            <Route path="/recepie/:id">
              <RecepieDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
