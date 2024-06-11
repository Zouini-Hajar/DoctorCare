import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "",
    header: "Home",
  },
  {
    path: "/doctors",
    header: "Our Doctors",
  },
  {
    path: "/services",
    header: "Services",
  },
  {
    path: "/contact",
    header: "Contact",
  },
];

function Header() {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h3>DoctorCare</h3>
          </div>

          <div className="navigation"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
