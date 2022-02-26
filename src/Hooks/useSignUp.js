import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuthContext from "./useAuthContext.js";

export const useSignUp = () => {
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

      //chcecking if successful
      if (!res) {
        throw new Error("Could not complete signup");
      }

      //updating displayed name
      await updateProfile(auth.currentUser, { displayName });

      //upadatinh state of the context user
      dispatch({ type: "LOGIN", payload: auth.currentUser });
      navigation("/main/dashboard");
    } catch (error) {
      setIsPending(false);
      setError(error.message);
    }
  };
  console.log(error);
  return { register, error, isPending };
};
