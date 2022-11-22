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
    console.log("canceled is", isCancelled);
    setError(null);
    setIsPending(true);
    console.log("loggin out");
    try {
      // creating account
      await signOut(auth);
      console.log("loggin out", auth);
      //checking if unmounted
      if (isCancelled) {
        console.log("dispaching isCancelled");
        return;
      }
      //upadatinh state of the context user
      console.log("dispaching logout");
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
    return () => {
      console.log("setting is canceled to", isCancelled);
    };
  }, [isCancelled]);
  // useEffect(() => {
  //   return () => {
  //     console.log("setting is canceled to true");
  //     setIsCancelled(true);
  //   };
  // }, []);

  return { logout, error, isPending };
};
