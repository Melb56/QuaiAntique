import React from "react";
import Photo from "./Photo";
import { photos } from "../../data/photos";
import "../../styles/components/_galerie.css";

const Gallery = () => {
  return (
    <div >
      <div className="gallery">
        {photos.map((photo) => (
          <Photo key={photo.id} url={photo.url} title={photo.title} />
        ))}
      </div>
      <div className="button">
        <button className="btn">
          <a href="/Reservation">Réserver</a>
        </button>
      </div>
    </div>

    

    
  );
};

export default Gallery;