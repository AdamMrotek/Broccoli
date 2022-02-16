import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import Footer from "./Footer.js";
import NotFound from "./NotFound.js";
import Search from "./Search.js";
import { db, auth } from "./firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import UserForm from "./UserForm.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecepieDetails from "./RecepieDetails.js";
import { useEffect, useState } from "react";

function App() {
  const [recipeList, setRecipeList] = useState([
    { lable: "test recepie", key: "dadfas742q" },
  ]);
  const [recipes, setuRecipes] = useState([]);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const RecipesCollectionRef = collection(db, "recipes");
  useEffect(() => {
    const getRecipes = async () => {
      console.log("hello");
      const data = await getDocs(RecipesCollectionRef);
      let newRecipes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setuRecipes(newRecipes);
    };
    getRecipes();
  }, []);
  // Controlling Auth
  const register = async (e, email, password) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async (e, email, password) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  //

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
  }, [recipeList]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <UserForm formFunction={register} name={"register"} />
        <UserForm formFunction={login} name={"log in"} />
        <p>Currently logged in {user?.email}</p>
        {user && <button onClick={logout}>sign Out</button>}
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
