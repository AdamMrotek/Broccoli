import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Home.js";
import Create from "../forms/Create.js";
import Dashboard from "./Dashboard.js";
import Search from "./Search.js";
import NotFound from "../NotFound.js";
import { db } from "../firebase-config.js";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  getDoc,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

function Main({ user }) {
  const [recipeList, setRecipeList] = useState([]);
  const [userListId, setUserListId] = useState([]);

  // FUNCTIONS CONTROLING recipeList
  useEffect(() => {
    const getRecipes = async () => {
      if (!user) return;
      const colRef = collection(db, "usersLists");
      const q = query(colRef, where("userId", "==", user.uid));

      const mySnapshot = await getDocs(q);
      if (mySnapshot.docs?.length < 1) {
        await addDoc(colRef, { userId: user.uid, recipes: [] });
      }
      onSnapshot(q, (data) => {
        const cleanData = data.docs[0]?.data();
        console.log("running on snap shot");
        console.log(recipeList);
        setRecipeList(cleanData.recipes);
        setUserListId(data.docs[0].id);
      });
    };
    getRecipes();
  }, [user]);

  const addToGroceries = async (recepie) => {
    let userDoc = doc(db, "usersLists", userListId);
    let recipeExists =
      recipeList && recipeList.some((e) => e.key === recepie.key);
    if (recipeExists) return;
    await updateDoc(userDoc, {
      recipes: [...recipeList, recepie],
    });
    console.log(recipeList);
  };

  const removeFromGroceries = async (id) => {
    let userDoc = doc(db, "usersLists", userListId);
    await updateDoc(userDoc, {
      recipes: recipeList.filter((recipe) => recipe.key !== id),
    });
  };

  return (
    <Routes>
      <Route path="home" element={<Home />} />
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
