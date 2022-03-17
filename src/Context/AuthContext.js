import { onAuthStateChanged } from "firebase/auth";
import { createContext, useReducer, useEffect } from "react";
import { auth } from "../firebase-config.js";

export const AuthContext = createContext();
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  //initial state, authIsready is used to delay the render of interface
  //to prevent gliching and jumping interface
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
    unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
