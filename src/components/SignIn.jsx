import React, { useState } from "react";
import "../styles/App.css";
import { IoCloseOutline } from "react-icons/io5";
import logo from "./../assets/logo.png";
import signIn from "./../assets/img/signin.jpg";
import { FaCheck } from "react-icons/fa6";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

// Subscription plans
const planList = [
  {
    type: "Super",
    cost: "899",
    duration: "Year",
  },
  {
    type: "Premium",
    cost: "1499",
    duration: "Year",
  },
  {
    type: "Premium",
    cost: "299",
    duration: "Month",
  },
];

function SignIn() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Back to the home page
  const handleCancelClick = () => {
    navigate("/");
  };

  const handleBoxClick = (index, item) => {
    setActiveIndex(index);
  };

  return (
    <div className="container-fluid wrapper">
      {/* Header nav */}
      <div className="header d-flex justify-content-between">
        {/* Logo and cancel button */}
        <div className="content-1">
          <IoCloseOutline className="cross" onClick={handleCancelClick} />
          <img src={logo} style={{ width: "150px" }} />
        </div>

        {/* Language dropdown button */}
        <div className="content-2">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item text-light" href="#">
                  Hindi
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Tamil
                </a>
              </li>
              <li>
                <a className="dropdown-item text-light" href="#">
                  Telugu
                </a>
              </li>
            </ul>
          </div>

          {/* Login button */}
          <button className="btn">Login</button>
        </div>
      </div>

      {/* Aside image */}
      <div className="main col-12 mt-4 d-flex">
        <div
          className="img col-5"
          style={{
            background: `linear-gradient(to right,  #0f1014d6, #0f1014),url(${signIn})`,
            objectFit: "cover",
          }}
        >
          <h2>
            Subscribe now and start <br /> streaming
          </h2>
        </div>

        {/* Subscription details table */}
        <div className="aside col-7 ps-5">
          <div className="tabel">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "45%" }}>&nbsp;</th>
                  <th
                    style={{
                      width: "15%",
                      textAlign: "center",
                      backgroundColor: "#20232d",
                      color: "#FFCC75",
                    }}
                  >
                    Super
                  </th>
                  <th
                    style={{
                      width: "15%",
                      textAlign: "center",
                      color: "#707a94",
                    }}
                  >
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>All Content</span>
                    <span className="sub">
                      Movies, Live Sports, TV, Specials
                    </span>
                  </td>
                  <td>
                    <FaCheck className="correct" />
                  </td>
                  <td>
                    <FaCheck className="correct" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Watch on TV or Laptop</span>
                  </td>
                  <td>
                    <FaCheck className="correct" />
                  </td>
                  <td>
                    <FaCheck className="correct" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Ads free movies and shows(except sports)</span>
                  </td>
                  <td>
                    <IoCloseOutline className="wrong" />
                  </td>
                  <td>
                    <FaCheck className="correct" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>No of devices that can be logged in</span>
                  </td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <span>Max video quality</span>
                  </td>
                  <td>
                    Full HD <br /> 1080p
                  </td>
                  <td>
                    4k <br /> 2160p
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Max audio quality</span>
                    <span className="sub">
                      Atoms available on selected titles only
                    </span>
                  </td>
                  <td>Dolby Atmos</td>
                  <td>Dolby Atmos</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Subscription select options */}
          <div className="details">
            <div className="plans col-12 d-flex">
              {planList.map((item, index) => (
                <div
                  className={`col-3 box ${
                    index === activeIndex ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleBoxClick(index)}
                >
                  <p className="type">{item.type}</p>
                  <span className="d-flex">
                    <p>{item.cost}</p>
                    <span className="mini align-self-end pb-1">
                      /{item.duration}
                    </span>
                  </span>
                  <div className="select">
                    <FaCheck />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 pt-4 button">
              <button className="col-11 btn">Continue</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
