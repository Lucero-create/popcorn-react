import React from "react";
import MovieLogo from "./assets-folder/MovieLogo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav__container">
        <div className="logo-container">
    
        <img src={MovieLogo} alt="" />
        </div>

        <div className="off-screen-menu">
          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/" className="nav__link">Home</Link>
            </li>

            <li className="nav__list">
              <Link to="/" className="nav__link">Find a Movie</Link>
            </li>

            
            
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
