import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import Footer from "./Footer.js";
import NotFound from "./NotFound.js";
import Search from "./Search.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecepieDetails from "./RecepieDetails.js";
import { useEffect, useState } from "react";

function App() {
  const [recipeList, setRecipeList] = useState([
    { lable: "test recepie", key: "dadfas742q" },
  ]);

  // FUNCTIONS CONTROLING recipeList
  function addToGroceries(recepie) {
    setRecipeList((recipeList) => recipeList.concat(recepie));
  }
  function removeFromGroceries(id) {
    setRecipeList((recipeList) =>
      recipeList.filter((recipe) => recipe.key !== id)
    );
  }
  /////////

  // FUNCTIONS CONTROLING groceriesList
  function countGroceries(list) {
    let newList = list.reduce((acc, item) => {
      let indexNum = acc.findIndex((e) => e.food === item.food);
      if (indexNum >= 0) {
        acc[indexNum].quantity = acc[indexNum].quantity + item.quantity;
        return acc;
      }
      return acc.concat(item);
    }, []);
    return newList;
  }
  function ingredientsExtractor(itemsList) {
    let list = [];
    itemsList.forEach((dish) => {
      dish.ingedients?.forEach((ingre) => {
        let newIngre = {
          food: ingre.food,
          quantity: ingre.quantity + " " + ingre.measure,
        };
        list.push(newIngre);
      });
    });
    return list;
  }
  function sortGroceries(list) {
    return list.sort((a, b) => a.food > b.food);
  }
  /////////

  useEffect(() => {
    let onlyGroceriesList = ingredientsExtractor(recipeList);
    let sumGroceries = countGroceries(onlyGroceriesList);
    let sortedGroceries = sortGroceries(sumGroceries);
    console.log(sortedGroceries);
  }, [recipeList]);

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
                groceriesList={recipeList}
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
