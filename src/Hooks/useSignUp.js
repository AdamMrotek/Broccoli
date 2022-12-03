import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuthContext from "./useAuthContext.js";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const useSignUp = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const navigation = useNavigate();
  const { dispatch } = useAuthContext();

  const register = async (email, password, confirmPassword, displayName) => {
    //reseting states in case of rerun
    setError(null);
    setIsPending(true);

    try {
      //chcecking if password are matching
      if (password && password !== confirmPassword) {
        throw new Error("Passwords need to match");
      }
      // creating account
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const docRef = await addDoc(collection(db, "usersLists"), {
        userId: auth.currentUser.uid,
        recipes: [],
      });
      if (isCancelled) {
        return;
      }
      //chcecking if successful
      if (!res) {
        throw new Error("Could not complete signup");
      }
      //updating displayed name
      await updateProfile(auth.currentUser, { displayName });
      if (isCancelled) {
        return;
      }
      //upadatinh state of the context user
      dispatch({ type: "LOGIN", payload: auth.currentUser });
      navigation("/main/dashboard");
    } catch (error) {
      if (isCancelled) {
        return;
      }
      setIsPending(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { register, error, isPending };
};
