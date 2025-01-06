import React from 'react';
import Gallery from '../components/Galerie/Gallery';
import Header from '../components/Header';
import HeroGalerie from '../components/Hero/HeroGalerie'
import Footer from '../components/Footer'
import '../styles/components/_galerie.css';
import Fleche from "../components/Fleche";


const Galerie = () => {
  return (
    <div>
      <Header/>
      <HeroGalerie/>
      <Gallery/>
      <Fleche/>
      <Footer />
    </div>
  )
}

export default Galerie;
