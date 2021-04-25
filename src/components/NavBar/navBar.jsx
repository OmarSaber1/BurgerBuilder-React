import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="continer-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <NavLink className="navbar-brand" to="/">
          <i className="fas fa-hamburger text-white"></i> Burger
        </NavLink>
        <NavLink className="navbar-brand" to="/contact">
          <i className="fas fa-hamburger text-white"></i> Contacts
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/contact">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
