import React from 'react';
import DisneyLogo from '../../../assets/logos/disney_logo.png';
import './brandName.css';

const DisneyBrand = () => {
  return (
    <div className="brand-name-container">
        <img src={DisneyLogo} alt="" />
       <p>Disney</p>
    </div>
  )
}

export default DisneyBrand