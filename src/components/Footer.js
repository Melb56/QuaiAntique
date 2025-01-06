import React from 'react';
import "../styles/components/_footer.css";
import "../styles/_general.css";


const Footer = () => {
  return (
    <div className='footer'>

      <div className='info'>
        <h3>Horaires</h3>
        <div className='contact'>
          <p>Du mercredi au dimanche : <br/> 12h-14h / 18h-23h</p>
        </div>
      </div>

      <div className='info'>
        <h3>Adresse</h3>
        <div className='contact'>
          <p>Quai Antique <br/>
            10 rue des Restaurants<br/>
            44444, Ville
            04 44 44 44 44</p>
        </div>
      </div>
        
      <div>
        <h3>Contact</h3>
        <div className='contact'>
          <p>contact@quaiantique.com</p>
          <img src="/img/instagram.png" alt="" />
        </div>

       
      </div>
        
      
      


    </div>
  )
}

export default Footer
