import React from "react";
import "./card.css";

const Card = ({ artist, image, title, genre, year, format, price, test }) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img className="image" src={image} alt="" />
      </div>
      <div className="text-container">
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
          <b>Album title:</b> {title}
        </p>
        <p>
          <b>Year:</b> {year}
        </p>
        <button className="btnBuy">{`Buy for: ${price}€`}</button>
      </div>
    </div>
  );
};

export default Card;
