import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home.js";
import Dashboard from "../Components/Dashboard.js";
import Search from "../Components/Search.js";
import NotFound from "./NotFound.js";
import { db } from "../firebase-config.js";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { useCollection } from "../Hooks/useCollection.js";

function Main({ user, handlePopUp }) {
  const [recipeList, setRecipeList] = useState([]);
  const [userListId, setUserListId] = useState([]);

  const { documents, error } = useCollection("usersLists", [
    "userId",
    "==",
    `${user?.uid}`,
  ]);

  // FUNCTIONS CONTROLING recipeList
  useEffect(() => {
    const getRecipesCleanUp = async () => {
      if (!user) return;
      const colRef = collection(db, "usersLists");
      const q = query(colRef, where("userId", "==", user.uid));
      const snapFunction = onSnapshot(q, (data) => {
        const cleanData = data.docs[0]?.data();
        if (!cleanData) return;
        setRecipeList(cleanData.recipes);
        setUserListId(data.docs[0].id);
      });
      return snapFunction;
    };
    getRecipesCleanUp();
    handlePopUp();
    //returns cleanup funtion when react unmounts the object
    return () => {
      setRecipeList(null);
      getRecipesCleanUp();
    };
  }, [user, documents]);

  const addToGroceries = async (recepie) => {
    let userDoc = doc(db, "usersLists", userListId);
    let recipeExists =
      recipeList &&
      recipeList.length > 0 &&
      recipeList.some((e) => e.key === recepie.key);
    if (recipeExists) return;
    await updateDoc(userDoc, {
      recipes: [...recipeList, recepie],
    });
  };

  const removeFromGroceries = async (id) => {
    let userDoc = doc(db, "usersLists", userListId);
    await updateDoc(userDoc, {
      recipes: recipeList.filter((recipe) => recipe.key !== id),
    });
  };

  return (
    <Routes>
      <Route path="home" element={<Home handlePopUp={handlePopUp} />} />
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
              documents={documents}
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
