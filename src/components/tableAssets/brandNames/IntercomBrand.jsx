import React from 'react';
import IntercomLogo from '../../../assets/logos/intercom_logo.png';
import './brandName.css';

const IntercomBrand = () => {
  return (
    <div className="brand-name-container">
        <img src={IntercomLogo} alt="" />
       <p>Intercom</p>
    </div>
  )
}

export default IntercomBrand