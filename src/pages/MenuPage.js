import React from "react";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header";
import HeroMenu from "../components/Hero/HeroMenu";
import Footer from "../components/Footer"
import Fleche from "../components/Fleche";

const MenuPage = () => {
  return (
    <div>
      <Header/>
      <HeroMenu/>
      <Menu/>
      <Fleche/>
      <Footer />
    </div>
  );
};

export default MenuPage;