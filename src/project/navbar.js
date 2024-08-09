import { NavLink } from "react-router-dom";
import { RecipeContext } from "./navigator";
import { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { favDish } = useContext(RecipeContext);
  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "black",
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/home" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" style={linkStyle}>
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" style={linkStyle}>
              Registration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/location" style={linkStyle}>
              Location
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" style={linkStyle}>
              Menu
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Favourite" style={linkStyle}>
              favourite's {favDish.length}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/settings" style={linkStyle}>
              settings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;