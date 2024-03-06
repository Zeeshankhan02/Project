import React, { useEffect, useState } from "react";
import "./Home.css";
import { NewsItem } from "./NewsItem";
import { Navbar } from "./Navbar";

function Home() {
  const [articles, setArticle] = useState([]);
  const[category,setCategory] = useState("general")

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4b4cbd000adf4c49a6bf8c2bb1c2336e`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, [category]);

  return (
    <>
    <Navbar setCategory={setCategory}/>
    {articles.map((news, index) => {
        if (news.title && news.description && news.urlToImage) {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        } else {
          return null;
        }
      })}

    </>
  );
}
export default Home;
