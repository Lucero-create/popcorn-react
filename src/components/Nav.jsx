import React from "react";
import MovieLogo from "./assets-folder/MovieLogo.png";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav__container">
        <div className="logo-container">
    
        <img src={MovieLogo} alt="" />
        </div>

        <div className="off-screen-menu">
          <ul className="nav__links">
            <li>Home</li>
            <li>Find your Movie</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
