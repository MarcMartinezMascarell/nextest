import { useUser } from "@/hooks/useUser";

import news from "@/content/news.json";

export default function News() {
  const { auth } = useUser();

  console.log(auth);

  return (
    <>
      <h1>News</h1>
      <ul>
        {news.map((newsItem, index) => {
          if (newsItem.mustBeLoggedIn === false || auth?.isLoggedIn)
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
