import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";



const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/",
    display: "About Us",
  },

  {
    path: "/services",
    display: "Services",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },

  {
    path: "/doctors",
    display: "Request an Appointment",
  }
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },

  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 px-14">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flew-wrap gap-[30px] ">
          <div>
            <img src={logo} alt="" />

            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} <br />
              All Right Reserved.
            </p>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I Want To
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
