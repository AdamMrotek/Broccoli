import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Create from "./Create.js";
import Dashboard from "./Dashboard.js";
import Search from "./Search.js";
import NotFound from "./NotFound.js";
import { db } from "./firebase-config.js";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

function Main({ user }) {
  const [recipeList, setRecipeList] = useState([]);
  const [userListId, setuserListId] = useState([]);

  // FUNCTIONS CONTROLING recipeList
  useEffect(() => {
    const getRecipes = async () => {
      if (!user) return;
      const colRef = collection(db, "usersLists");
      const q = query(colRef, where("userId", "==", user.uid));
      onSnapshot(q, (data) => {
        const cleanData = data.docs[0]?.data();
        console.log("running on snap shot");
        console.log(recipeList);
        setRecipeList(cleanData.recipes);
        setuserListId(cleanData.userId);
      });
    };
    getRecipes();
  }, [user]);

  const addToGroceries = async (recepie) => {
    let userDoc = doc(db, "usersLists", "A7eayjImr5IIHXz5cz2U");
    let recipeExists = recipeList.some((e) => e.key === recepie.key);
    if (recipeExists) return;
    await updateDoc(userDoc, {
      recipes: [...recipeList, recepie],
    });
    console.log(recipeList);
    // console.log(userDoc);
    // const newField = { recipes: recipeList };
    // console.log(newField);
    // await updateDoc(userDoc, newField);
    // setRecipeList((recipeList) => recipeList.concat(recepie));
  };

  const removeFromGroceries = async (id) => {
    let userDoc = doc(db, "usersLists", "A7eayjImr5IIHXz5cz2U");
    await updateDoc(userDoc, {
      recipes: recipeList.filter((recipe) => recipe.key !== id),
    });
    // setRecipeList((recipeList) =>
    //   recipeList.filter((recipe) => recipe.key !== id)
  };

  return (
    <Routes>
      <Route path="home" element={<Create />} />
      <Route
        path=""
        element={user ? <Navigate to="dashboard" /> : <Navigate to="home" />}
      />
      <Route
        path="dashboard"
        element={
          user ? (
            <Dashboard
              user={user}
              recipeList={recipeList}
              removeFromGroceries={removeFromGroceries}
            />
          ) : (
            <Navigate to="/main" />
          )
        }
      />
      <Route
        path="search"
        element={
          user ? (
            <Search addToGroceries={addToGroceries} />
          ) : (
            <Navigate to="/main" />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Main;
