import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./menu.css";

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
       <>
       <div className="mobile-navbar">
        <div className="mobile-logo"></div>
        <div  id='burger' onClick={toggle}>
            <FontAwesomeIcon icon={faBars} className='j'/>
            <div className={`mobile-navitems ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <div className='mobile-nav-link' onClick={() => handleClick("sports")}>Sports</div>
                    </li>
                    <li>
                        <div className='mobile-nav-link' onClick={() => handleClick("technology")}>Technology</div>
                    </li>
                    <li>
                        <div className='mobile-nav-link' onClick={() => handleClick("politics")} id='two'>Politics</div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
       </>
    );
}

export default Menu;
