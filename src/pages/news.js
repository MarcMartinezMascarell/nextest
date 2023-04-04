import { useUser } from "@/hooks/useUser";

import news from "@/content/news.json";

export default function News() {
  const { getIsLoggedIn } = useUser();

  return (
    <>
      <h1>News</h1>
      <ul>
        {news.map((newsItem, index) => {
          if (newsItem.mustBeLoggedIn === false || getIsLoggedIn())
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