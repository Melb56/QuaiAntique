import React from 'react';
import "../../styles/_general.css";
import '../../styles/components/_hero.css'


const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <div className='hero-container'>
                    <div className='title-hero'><p>Le chef Etienne Le Brec vous invite au</p></div>
                    <h1>Quai Antique</h1>
                    <button className="btn">
                        <a href="/Reservation">Réserver</a>
                    </button>
                </div> 
            </div>
        </div>
    );
};

export default Hero;