import React from 'react';
import ShopfiyLogo from '../../../assets/logos/shopify_logo.jpg';
import './brandName.css';

const ShopifyBrand = () => {
  return (
    <div className="brand-name-container">
        <img src={ShopfiyLogo} alt="" />
       <p>Shopify</p>
    </div>
  )
}

export default ShopifyBrand