import { AuthContext } from "../Context/AuthContext.js";
import { useContext } from "react";

export default function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Cant useAutContext outfide the provider");
  }
  return context;
}
