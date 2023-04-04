import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { useUser } from "@/hooks/useUser";

export default function Dashboard() {
  const { authContext } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    //if (localStorage.getItem("isLoggedIn") != "true") router.push("/login");
    if(authContext.isLoggedIn != "true") router.push("/login")
  }, [authContext]);

  const { getUsername } = useUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {getUsername()}</h2>
    </div>
  );
}
