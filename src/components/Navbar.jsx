import React from "react";
import { useState } from "react";
import logo from "./../assets/logo.png";

// Navbar icons import
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { RiHome5Fill } from "react-icons/ri";
import { PiTelevisionSimple } from "react-icons/pi";
import { FiCreditCard } from "react-icons/fi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import "../styles/App.css"; // Style sheets
import { Link } from "react-router-dom";

const Navbar = () => {
  // Navbar Hover state
  const [touch, setTouch] = useState(false);

  return (
    <div className="nav-bar d-flex">
      <div className="d-flex flex-column">
        {/* Movie Logo and subscription button */}
        <Link to="/SignIn" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src={logo} style={{ width: "100px" }} />
            <a href="#">Subscribe &gt;</a>
          </div>
        </Link>

        <div className="navBar" onMouseEnter={() => setTouch(true)}>
          {/* Navbar Icons */}
          <div className="icons">
            <Link to="/SignIn">
              <div className="icon">
                <a href="">
                  <BiUserCircle />
                </a>
              </div>
            </Link>
            <Link to="/Search">
              <div className="icon">
                <a href="">
                  <BiSearch />
                </a>
              </div>
            </Link>
            <Link to="/">
              <div className="icon">
                <a href="">
                  <RiHome5Fill />
                </a>
              </div>
            </Link>
            <Link to="/shows">
              <div className="icon">
                <a href="">
                  <PiTelevisionSimple />
                </a>
              </div>
            </Link>
            <Link to="/movies">
              <div className="icon">
                <a href="">
                  <FiCreditCard />
                </a>
              </div>
            </Link>
            <div className="icon">
              <a href="">
                <MdOutlineSportsBaseball />
              </a>
            </div>
          </div>
        </div>
      </div>
      {touch && (
        // Navbar icon names on hover state
        <div className="text" onMouseLeave={() => setTouch(false)}>
          <Link to="/SignIn" style={{ textDecoration: "none" }}>
            <h4>User</h4>
          </Link>
          <Link to="/Search" style={{ textDecoration: "none" }}>
            <h4>Search</h4>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4>Home</h4>
          </Link>
          <Link to="/shows" style={{ textDecoration: "none" }}>
            <h4>Tv</h4>
          </Link>
          <Link to="/movies" style={{ textDecoration: "none" }}>
            <h4>Movies</h4>
          </Link>
          <h4>Sports</h4>
        </div>
      )}
    </div>
  );
};

export default Navbar;
