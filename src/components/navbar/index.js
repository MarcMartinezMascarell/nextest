import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NavbarUI from "./ui";

export default function Navbar() {
  const { auth, logout } = useUser();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    router.push("/login");
  };

  const loginUser = () => {
    router.push("/login");
  };

  if(!auth) return null; 

  return (
    <NavbarUI
      isLoggedIn={auth?.isLoggedIn}
      user={auth?.user}
      logoutUser={logoutUser}
      loginUser={loginUser}
    />
  );
}
