import React from "react";
import "./show.css";

const Show = () => {
  return (
    <div className="container-show">
      <div className="container-img">
        <img src={require("../../assets/img/retrato.jpeg")} alt="" />
      </div>
      <div className="container-text">
        <div className="artist">
          <h1>Metallica</h1>
        </div>
        <p>Nombre de album</p>
        <p>Año</p>
        <p>Genero</p>
        <p>Formato</p>
        <p>Precio</p>
      </div>
    </div>
  );
};

export default Show;
