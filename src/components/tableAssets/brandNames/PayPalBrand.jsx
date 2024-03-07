import React from 'react';
import PayPalLogo from '../../../assets/logos/paypal_logo.png';
import './brandName.css';

const PayPalBrand = () => {
  return (
    <div className="brand-name-container">
        <img src={PayPalLogo} alt="" />
       <p>PayPal</p>
    </div>
  )
}

export default PayPalBrand