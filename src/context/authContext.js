import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const session = useLocalStorage("isLoggedIn", "false");
  const user = useLocalStorage("user", {});
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    user: {},
    stoken: null,
  });

  useEffect(() => {
    setAuth({
      isLoggedIn: (session.storedValue === "true" ? true : false),
      user: user.storedValue,
    });
  }, [session.storedValue, user.storedValue]);


  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
