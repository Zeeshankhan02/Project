import React, { useState } from "react";
import "./Navbar-Newsitem.css";
import HomeSpinner from "./HomeSpinner/HomeSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ setCategory }) => {
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClick = (category) => {
    setLoading(true);
    setCategory(category);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo"></div>
        <div id="burger" onClick={toggle}>
          <FontAwesomeIcon icon={faBars} className="j" />
          <div className={`mobile-navitems ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <div
                  className="mobile-nav-link"
                  onClick={() => handleClick("sports")}
                >
                  Sports
                </div>
              </li>
              <li>
                <div
                  className="mobile-nav-link"
                  onClick={() => handleClick("technology")}
                >
                  Technology
                </div>
              </li>
              <li>
                <div
                  className="mobile-nav-link"
                  onClick={() => handleClick("politics")}
                >
                  Politics
                </div>
              </li>
              <li>
                <div className="mobile-nav-link" id="two" onClick={handleLogout}>
                  Log Out
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="navitems">
          <ul>
            <li>
              <div className="nav-link" onClick={() => handleClick("general")}>
                Home
              </div>
            </li>
            <li>
              <div className="nav-link" onClick={() => handleClick("sports")}>
                Sports
              </div>
            </li>
            <li>
              <div
                className="nav-link"
                onClick={() => handleClick("technology")}
              >
                Technology
              </div>
            </li>
            <li>
              <div className="nav-link" onClick={() => handleClick("politics")}>
                Politics
              </div>
            </li>
          </ul>
        </div>
      </div>
      {loading && <HomeSpinner></HomeSpinner>}
    </div>
  );
};
