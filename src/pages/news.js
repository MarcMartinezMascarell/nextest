import { useUser } from "@/hooks/useUser";

import news from "@/content/news.json";
import { useEffect } from "react";

export default function News() {
  const { session } = useUser();

  const verifyToken = async (token) => {
    await fetch("/api/verifySession", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        return data;
      })
  }

  useEffect(() => {
    if (session?.isLoggedIn) verifyToken(session.stoken);
  }, []);


  return (
    <>
      <h1>News</h1>
      <ul>
        {news.map((newsItem, index) => {
          if (newsItem.mustBeLoggedIn === false || session?.isLoggedIn )
            return (
              <li key={index}>
                <h2>{newsItem.title}</h2>
              </li>
            );
        })}
      </ul>
    </>
  );
}
