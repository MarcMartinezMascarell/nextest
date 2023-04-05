import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";

import { WelcomeLoading } from "@/components/welcome";
const Welcome = dynamic(() => import("../components/welcome"), {
  loading: () => <WelcomeLoading />,
  ssr: false,
});

export default function Dashboard() {
  const { session, logout } = useUser();
  const router = useRouter();

  //If user is not logged in, redirect to login page with useEffect
  useEffect(() => {
    if (!session?.isLoggedIn) {
      router.push("/login");
    }
  }, [session]);

  const logoutUser = () => {
    logout();
    router.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Welcome username={session.user?.name} />
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
