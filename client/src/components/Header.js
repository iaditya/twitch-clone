import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <ul className="menu">
          <li className="menu-items">
            <Link to="/">Adisha</Link>
          </li>
          <li className="menu-items">
            <Link to="/">Streams</Link>
          </li>
          <li className="menu-items right ">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
