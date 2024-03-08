import React from "react";
import "./Navbar-Newsitem.css";

export const NewsItem = ({ title, description, src, url }) => {
    
    const handleClick = () => {
            window.location.href = url;
    };
  
  return (
    <>
      <div className="news-item" onClick={handleClick}>
        <img src={src} alt="" />
        <h3>{title.slice(0, 50)}</h3>
        <p><b>Description:</b> {description.slice(0, 350) }</p>
        <a href={url}></a>
      </div>
    </>
  );
};
