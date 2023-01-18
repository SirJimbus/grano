import React from "react";
import { Link } from "react-router-dom";

export default function PagesNavbar() {
  return (
    <nav className="navbar">
      <div className="home-navbar">
        <div className="pages-navbar">
          <Link to="/salato" className="navbar-icons">
            🥖
          </Link>
          <Link to="/dolce" className="navbar-icons">
            🎂
          </Link>
          <Link to="/festa" className="navbar-icons">
            🎉
          </Link>
          <Link to="/bevande" className="navbar-icons">
            🍺
          </Link>
        </div>
        <Link to="/">🏠</Link>
      </div>
    </nav>
  );
}
