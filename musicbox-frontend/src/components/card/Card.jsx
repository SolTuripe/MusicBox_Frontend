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
        <p>Genre: {genre}</p>
        <p>Format: {format}</p>
        <p>Album title: {title}</p>
        <p>Year: {year}</p>
        <button className="btnBuy">{`Buy for: ${price}€`}</button>
      </div>
    </div>
  );
};

export default Card;
