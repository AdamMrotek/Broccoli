import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";
import useAuthContext from "./useAuthContext.js";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const navigation = useNavigate();
  const { dispatch } = useAuthContext();

  const logout = async () => {
    //reseting states in case of rerun
    setError(null);
    setIsPending(true);
    console.log("loggin out");
    try {
      // creating account
      await signOut(auth);

      //checking if unmounted
      if (isCancelled) {
        return;
      }
      //upadatinh state of the context user
      dispatch({ type: "LOGOUT" });
      navigation("/");
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

  return { logout, error, isPending };
};
