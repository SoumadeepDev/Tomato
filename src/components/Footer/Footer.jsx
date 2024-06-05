import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            src={assets.logo2}
            alt=""
            style={{
              width: "300px",
              height: "100px",
              borderRadius: "10px",
              boxShadow:
                "0px 1px 10px rgba(0, 0, 0, 0.2), 0px 3px 10px rgba(0, 255, 0, 0.3)",
            }}
          />
          <p>
            Our mission is to make high-quality, delicious food accessible to
            everyone. We believe that good food shouldn't be a luxury, and we
            strive to provide an exceptional dining experience that exceeds
            expectations.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-7042254124</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
