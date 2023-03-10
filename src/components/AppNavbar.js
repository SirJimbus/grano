import React from "react";

function AppNavbar() {
  return (
    <Navbar>
      <NavItem icon="๐" href="#grid" />
      <NavItem icon="โ" href="#redirect-main" />
      <NavItem icon="๐" href="#map" />
      <NavTitle title="Granรฒ - Buono come il pane." />
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
