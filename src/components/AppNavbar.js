import React from "react";

function AppNavbar() {
  return (
    <Navbar>
      <NavItem icon="🍞" href="#grid" />
      <NavItem icon="❔" href="#redirect-main" />
      <NavItem icon="📍" href="#map" />
      <NavTitle title="Granò - Buono come il pane." />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href={props.href} className="icon-button">
        {props.icon}
      </a>
    </li>
  );
}

function NavTitle(props) {
  return (
    <div className="title-div">
      <h1 className="nav-title">{props.title}</h1>
    </div>
  );
}

export default AppNavbar;
