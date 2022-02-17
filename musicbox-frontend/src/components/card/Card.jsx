import React from "react";
import "./card.css";

const Card = ({artist, image, title, genre, year, format, price}) => {
  return <div className="card-container">
    <div className="img-container">
      <img src={image}>
      </img>
    </div>
    <div className="text-container">
      <h1>{artist}</h1>
      <li>{genre}</li>
      <li> {format}</li>
      <li>{title}</li>
      <li>{year}</li>
      <li>{price}</li>
    </div>
  </div>;
};

export default Card;
