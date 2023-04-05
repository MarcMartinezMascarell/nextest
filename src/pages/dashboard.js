import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { useUser } from "@/hooks/useUser";


export default function Dashboard() {
  const { auth } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log(auth);
    //if (localStorage.getItem("isLoggedIn") != "true") router.push("/login");
    if(!auth.isLoggedIn) router.push("/login")
    
  }, [auth]);


  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {auth.user?.name}</h2>
    </div>
  );
}
