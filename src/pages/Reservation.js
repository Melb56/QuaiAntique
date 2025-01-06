import React from 'react'
import Header from '../components/Header';
import ReservationForm from '../components/Réservation/ReservationForm';
import Footer from '../components/Footer';
import Fleche from '../components/Fleche';
import HeroResa from '../components/Hero/HeroResa'

const Reservation = () => {
  return (
    <div>
      <Header/>
      <HeroResa/>
      <ReservationForm/>
      <Fleche/>
      <Footer/>
    </div>
  )
}

export default Reservation;
