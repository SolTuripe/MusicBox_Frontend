import React from "react";
import { useLocation } from "react-router-dom";
import "./show.css";

const Show = () => {
  const { state } = useLocation();

  const { artist, image, title, genre, year, format, price } = state;

  return (
    <div className="container-show">
      <div className="container-img">
        <img src={image} alt="" />
      </div>
      <div className="container-text">
        <div className="artist">
          <h1>{artist}</h1>
        </div>
        <p>
          <b>Genre:</b> {genre}
        </p>
        <p>
          <b>Format:</b> {format}
        </p>
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Year:</b> {year}
        </p>
        <button className="btnBuy">{`Buy for: ${price}€`}</button>
      </div>
    </div>
  );
};

export default Show;
