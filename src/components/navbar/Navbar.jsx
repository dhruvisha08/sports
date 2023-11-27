import React from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container  my-4">
      <div>
        <NavLink
          to="/introduction"
          key="introduction"
          className="quick-link"
          activeClassName="active"
          title="One Nation"
        >
          <img src={logo} alt="One Nation" className="navbar-logo" />
        </NavLink>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/new-arrivals"
            key="new-arrivals"
            className="quick-link"
            activeClassName="active"
            title="New"
          >
            New
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            key="shoes"
            className="quick-link"
            activeClassName="active"
            title="Shoes"
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/active-wear"
            key="active-wear"
            className="quick-link"
            activeClassName="active"
            title="Active Wear"
          >
            Active Wear
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            key="about-us"
            className="quick-link"
            activeClassName="active"
            title="About Us"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            key="contact-us"
            className="quick-link"
            activeClassName="active"
            title="Contact Us"
          >
            Contact Us
          </NavLink>
        </li>

        <li>
          <CgShoppingCart />
        </li>
        <li>
          <AiOutlineHeart />
        </li>
        <li>
          <FiUser />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
