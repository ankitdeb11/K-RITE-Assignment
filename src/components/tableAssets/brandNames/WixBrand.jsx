import React from 'react';
import WixLogo from '../../../assets/logos/wix_logo.jpg';
import './brandName.css';

const WixBrand = () => {
  return (
    <div className="brand-name-container">
        <img src={WixLogo} alt="" />
       <p>Wix</p>
    </div>
  )
}

export default WixBrand