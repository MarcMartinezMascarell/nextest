import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const NavbarUI = dynamic(() => import("./ui"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Navbar() {
  const { session, logout } = useUser();
  const router = useRouter();

  const logoutUser = () => {
    logout();
    router.push("/login");
  };

  const loginUser = () => {
    router.push("/login");
  };

  if(!session) return null; 

  return (
    <NavbarUI
      isLoggedIn={session?.isLoggedIn}
      user={session?.user}
      logoutUser={logoutUser}
      loginUser={loginUser}
    />
  );
}
