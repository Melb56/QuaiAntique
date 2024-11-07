import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
       <Header/>

      <div id="presentation">
        <div className="about">
          <h2>Bienvenue au Quai Antique</h2>
          <p>Bienvenue au Restaurant Quai Antique, un havre de paix culinaire où chaque plat raconte une histoire. Niché au cœur d'un cadre historique dans la ville de Chambéry, notre restaurant offre une expérience gastronomique inoubliable, alliant tradition et innovation.</p>
          <img src="" alt="restaurant" />
          {/*<a href="#"className="btn">Nos Menus</a>*/}
        </div>
        <div className="product">
          <h2>Des produits frais</h2>
          <p>Le Quai Antique se distingue par son engagement envers la qualité et l'authenticité, en mettant à l'honneur des plats élaborés avec soin à partir de produits frais de saison et produit localement.</p>
          <img src="" alt="Produits frais" />
          {/*<a href="#" className="btn">Voir la galerie</a> */}
        </div>
        <div className="book">
          <h2>Réservation en ligne</h2>
          <p>Vous pouvez réserver une table directement sur ce site. Il suffit de cliquer sur le bouton ci-dessous.</p>
          <img src="" alt="Réservation"/>
          {/*<a href="#" className="btn">Réserver</a> */}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home;
