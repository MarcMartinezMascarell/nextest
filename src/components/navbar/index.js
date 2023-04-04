import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import NavbarUI from "./ui";

export default function Navbar() {
  const { getIsLoggedIn, getUsername, logout } = useUser();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    router.push("/login");
  };

  const loginUser = () => {
    router.push("/login");
  };

  return (
    <NavbarUI
      isLoggedIn={getIsLoggedIn()}
      username={getUsername()}
      logoutUser={logoutUser}
      loginUser={loginUser}
    />
  );
}
