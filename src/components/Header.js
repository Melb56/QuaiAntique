import React from 'react';
import "../styles/components/_header.css";
import "../styles/_general.css";



const Header = () => {           

  return (

      <nav id="header" class="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="logo">Quai Antique</div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="/">Accueil</a>
              <a className="nav-link" href="/Galerie">Galerie</a>
              <a className="nav-link" href="/Menu">Menu</a>
              <a className="nav-link" href="/Reservation">Réservation</a>
            </div> 
          </div>   
        </div>
      </nav>
      

    

  )
}

export default Header
