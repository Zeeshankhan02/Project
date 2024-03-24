import React, { useEffect, useState } from "react";
import "./Navbar-Newsitem.css";
import { NewsItem } from "./NewsItem";
import { Navbar } from "./Navbar";
import Footer from "./Footer";




function Home() {
  const [articles, setArticle] = useState([]);
  const[category,setCategory] = useState("general")

  useEffect(() => {
    let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=0c1597301f2e627054a8b2e9cf85c554`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, [category]);

  return (
    <>
    <Navbar setCategory={setCategory}/>
    {articles.map((news, index) => {
        if (news.title && news.description && news.image) {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
            />
          );
        } else {
          return null;
        }
      })}
      <Footer/>

    </>
  );
}
export default Home;
