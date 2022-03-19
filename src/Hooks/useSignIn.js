import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuthContext from "./useAuthContext.js";

export const useSignIn = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const navigation = useNavigate();
  const { dispatch } = useAuthContext();

  const signIn = async (email, password) => {
    //reseting states in case of rerun
    setError(null);
    setIsPending(true);

    try {
      // creating account
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (isCancelled) {
        return;
      }
      //chcecking if successful
      if (!res) {
        throw new Error("Could not complete signIn.");
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

  return { signIn, error, isPending };
};
