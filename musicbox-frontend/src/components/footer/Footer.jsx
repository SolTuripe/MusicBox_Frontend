import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="Container">
      <div class="text">
        <p> © 2022 MusicBox, Inc. All rights reserved </p>
      </div>
      <div className="social-media">
        <a href="https://facebook.com/" target="blank">
          <BsFacebook />
        </a>
        <a href="https://instagram.com/" target="blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/" target="blank">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};
export default Footer;
