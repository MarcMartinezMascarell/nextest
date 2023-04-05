import { AuthContext } from "@/context/authContext";
import { useContext } from "react";

export const useUser = () => {
  const { session, setSession } = useContext(AuthContext);

  const logout = () => {
    setSession({
      isLoggedIn: false,
      user: {},
      sToken: "",
    })
  }

  const setUserSession = (isLoggedIn) => {
    setSession({
      ...session,
      isLoggedIn: isLoggedIn,
    })
  };

  const setUserInfo = (user, isLoggedIn, sToken) => {
    setSession({
      ...session,
      user: user,
      isLoggedIn: isLoggedIn,
      sToken: sToken,
    })
  };

  return {
    session,
    logout,
    setUserSession,
    setUserInfo,
  };
};