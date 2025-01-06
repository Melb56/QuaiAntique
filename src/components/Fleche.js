import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';  
import '../styles/components/_fleche.css'; 

const Fleche = () => {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);  
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  
    });
  };
    return (
        <div>
           {showButton && (
            <button className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp />
            </button>
      )} 
        </div>
    );
};

export default Fleche;