import React from "react";
import "../../styles/components/_galerie.css";

const Photo = ({ url, title }) => {
  return (
    <div className="photo">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Photo;