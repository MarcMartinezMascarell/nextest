import { AuthContext } from "@/context/authContext";
import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const session = useLocalStorage("isLoggedIn", "false");
  const user = useLocalStorage("user", {});

  const logout = () => {
    setAuth({
        isLoggedIn: false,
        user: {},
        sToken: "",
    });
    session.setValue(false);
    user.setValue({});
  }

  const setUserSession = (isLoggedIn) => {
    setAuth({
      ...auth,
      isLoggedIn: isLoggedIn,
    });
    session.setValue(isLoggedIn);
  };

  const setUserInfo = (user, isLoggedIn, sToken) => {
    setAuth({
      user: user,
      isLoggedIn: isLoggedIn,
      sToken: sToken,
    });
    session.setValue(isLoggedIn);
    user.setValue(user);
  };

  return {
    auth,
    logout,
    setUserSession,
    setUserInfo,
  };
};