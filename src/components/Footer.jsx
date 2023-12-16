import React from "react";
import "../styles/App.css";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import playStore from "./../assets/img/pngwing-1.png";
import appStore from "./../assets/img/pngwing-1.png";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper-1">
        <div className="column-1">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="column-2">
          <h4>View Website in</h4>
          <ul>
            <li>
              <IoCheckmarkSharp />
            </li>
            <li>English</li>
          </ul>
        </div>
        <div className="column-3">
          <h4>Need Help?</h4>
          <ul>
            <li>View Help Center</li>
            <li>Share Feedback</li>
          </ul>
        </div>
        <div className="column-4">
          <h4>Connect with us</h4>
          <ul>
            <li>
              <FiFacebook />
            </li>
            <li>
              <FaXTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper-2">
        <div className="column-5">
          <ul>
            <li> &#169; 2323 STAR. All Rights Reserved.</li>
          </ul>
          <ul>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="column-6">
          <ul>
            <li>
              <img src={playStore} style={{ width: "100px" }} />
            </li>
            <li>
              <img src={appStore} style={{ width: "100px" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
