import Link from "next/link"

export default function NavbarUI({ isLoggedIn, user, logoutUser, loginUser }) {
  return (
    <nav style={{ display: "flex", gap: "20px", alignItems:"center", justifyContent:"space-between", width:"100%", marginBottom:"40px", padding:"10px 20px", backgroundColor:"grey" }}>
      <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/news">News</Link>
        
      </div>
      <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
      <Link href={`/${user?.username}`}>{user?.name}</Link>
        <button
          style={{ cursor: "pointer", padding: "5px 10px" }}
          onClick={isLoggedIn ? logoutUser : loginUser}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}
