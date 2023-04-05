import { useUser } from "@/hooks/useUser";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const { storedValue, setValue} = useLocalStorage("session", {
    isLoggedIn: false,
    user: null,
    stoken: null,
  });

  return (
    <AuthContext.Provider value={{ session: storedValue,  setSession: setValue}}>
      {children}
    </AuthContext.Provider>
  );
}
