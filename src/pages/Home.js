import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Fleche from "../components/Fleche";
import "../styles/pages/_home.css";
import "../styles/_general.css";


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div id="presentation">
        <div className="section">
          <h2>Bienvenue au Quai Antique</h2>
          <div className="item">
            <div className="img">
                <img src="img/Devanture.jpg" alt="restaurant" />
            </div>
            <div className="text">
              <p>
                Bienvenue au Restaurant Quai Antique, un havre de paix culinaire
                où chaque plat raconte une histoire. Niché au cœur d'un cadre
                historique dans la ville de Chambéry, notre restaurant offre une
                expérience gastronomique inoubliable, alliant tradition et
                innovation.
              </p>
            </div>
          </div>
          <div className="button">
            <button className="btn">
              <a href="/Menu">Nos Menus</a>
            </button>
          </div>
        </div>

        <div className="section-product">
          <h2>Des produits frais</h2>
          <div className="item product">
          <div className="img">
              <img src="img/Plat1.jpg" alt="Produits frais" />
            </div>
            <div className="text">
              <p>
                Le Quai Antique se distingue par son engagement envers la
                qualité et l'authenticité, en mettant à l'honneur des plats
                élaborés avec soin à partir de produits frais de saison et
                produit localement.
              </p>
            </div>
          </div>
          <div className="button">
            <button className="btn" >
              <a href="/Galerie">Voir la galerie</a>
            </button>
          </div>
        </div>
        <div className="section">
          <h2>Réservation en ligne</h2>
          <div className="item">
          <div className="img">
              <img src="img/Plat3.jpg" alt="Réservation" />
            </div>
            <div className="text">
              <p>
                Vous pouvez réserver une table directement sur ce site. Il
                suffit de cliquer sur le bouton ci-dessous.
              </p>
            </div>
          </div>
          <div className="button">
            <button className="btn">
              <a href="/Reservation">Réserver</a>
            </button>
          </div>
        </div>
      </div>

      <Fleche/>

      <Footer />
    </div>
  );
};

export default Home;
