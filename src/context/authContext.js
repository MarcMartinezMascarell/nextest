import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authContext, setAuthContext] = useState({
    isLoggedIn: "false",
    user: null,
    stoken: null,
  });

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      {children}
    </AuthContext.Provider>
  );
}
