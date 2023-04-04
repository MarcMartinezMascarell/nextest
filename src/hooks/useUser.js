import { AuthContext } from "@/context/authContext";
import { useContext, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const { authContext, setAuthContext } = useContext(AuthContext);
  const session = useLocalStorage("isLoggedIn", "false");
  const name = useLocalStorage("name", "");

  useEffect(() => {
    const isLoggedIn = session.storedValue;
    if (isLoggedIn != undefined) {
      setAuthContext({
        ...authContext,
        username: name.storedValue,
        isLoggedIn: isLoggedIn,
      })
    }
  }, []);

  const getUsername = () => {
    return authContext.username;
  };

  const getIsLoggedIn = () => {
    return authContext.isLoggedIn === "true";
  };

  const getSToken = () => {
    return authContext.sToken;
  };

  const logout = () => {
    setAuthContext({
        username: "",
        isLoggedIn: "false",
        sToken: "",
    });
    session.setValue("false");
  }

  const setUserSession = (isLoggedIn) => {
    setAuthContext({
      ...authContext,
      isLoggedIn: isLoggedIn,
    });
    session.setValue(isLoggedIn);
  };

  const setUserInfo = (username, isLoggedIn, sToken) => {
    setAuthContext({
      username: username,
      isLoggedIn: isLoggedIn,
      sToken: sToken,
    });
    session.setValue(isLoggedIn);
  };

  return {
    getUsername,
    getIsLoggedIn,
    getSToken,
    logout,
    setUserSession,
    setUserInfo,
  };
};
