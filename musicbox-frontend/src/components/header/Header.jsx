import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <BiSearchAlt className="Header-Iconsearch" />
      <h1 className="Header-Text">MUSIC</h1>
      <Link href="#" to="/">
        <img
          className="Logo"
          src="https://drive.google.com/uc?export=download&id=1mXVIqn2LbsCzIOlZMlxkOTl_lrybI-CC"
          alt="Cassette"
        />
      </Link>
      <h1 className="Header-Text"> BOX</h1>
      <AiOutlineShoppingCart className="Header-Icons" />
    </div>
  );
};

export default Header;
