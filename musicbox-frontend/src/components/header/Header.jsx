import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./header.modules.css";

const Header = () => {
  return (
    <div className="Header">
      <BiSearchAlt className="Header-Icons" />
      <h1 className="Header-Text">MUSIC</h1>
      <img
        src="https://drive.google.com/uc?export=download&id=1mXVIqn2LbsCzIOlZMlxkOTl_lrybI-CC"
        alt="Cassette"
      />
      <h1 className="Header-Text">BOX</h1>
      <AiOutlineShoppingCart className="Header-Icons" />
    </div>
  );
};

export default Header;
