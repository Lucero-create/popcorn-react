import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav__container">
        <img className="logo" src="./assets-folder/MovieLogo.png" alt="" />
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
