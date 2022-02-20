import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <ul className="menu">
          <li className="menu-items">
            <Link to="/">Adisha</Link>
          </li>
          <li className="menu-items right">
            <Link to="/">Streams</Link>
          </li>

          <li className="menu-items right ">
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
