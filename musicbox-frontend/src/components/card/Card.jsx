import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ artist, image, title, genre, year, format, price }) => {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <h1 className="artist">{artist}</h1>

      <div className="img-container">
        <button
          onClick={() =>
            navigate("show", {
              state: { artist, image, title, genre, year, format, price },
            })
          }
        >
          <img className="image" src={image} alt="" data-testid="image" />
        </button>
      </div>

      <div className="text-container">
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
