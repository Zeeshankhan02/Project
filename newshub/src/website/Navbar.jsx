import React, { useState } from 'react';
import "./Home.css";
import HomeSpinner from './HomeSpinner/HomeSpinner';

export const Navbar = ({ setCategory }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = (category) => {
    setLoading(true); 
    setCategory(category);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo"></div>
        <div className="navitems">
          <ul>
            <li>
              <div className='nav-link' onClick={() => handleClick("general")}>Home</div>
            </li>
            <li>
              <div className='nav-link' onClick={() => handleClick("sports")}>Sports</div>
            </li>
            <li>
              <div className='nav-link' onClick={() => handleClick("technology")}>Technology</div>
            </li>
            <li>
              <div className='nav-link' onClick={() => handleClick("politics")}>Politics</div>
            </li>
          </ul>
        </div>
      </div>
      {loading && <HomeSpinner ></HomeSpinner>}
    </div>
  );
};
