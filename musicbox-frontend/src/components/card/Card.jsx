import React from "react";
import "./card.css";

const Card = () => {
  return <div className="card-container">
    <div className="img-container">
      <img href="https://www.purina-latam.com/sites/g/files/auxxlc391/files/purina-brand-que-saber-de-los-gatitos-bebes.jpg">
      </img>
    </div>
    <div className="text-container">
      <p>Metallica</p>

      <li>Metal</li>
      <li>Disco de acetato</li>
      <li>Master of Puppets</li>
      <li>1986</li>
      <li>15</li>
    </div>
  </div>;
};

export default Card;
