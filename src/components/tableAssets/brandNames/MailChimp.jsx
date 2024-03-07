import React from 'react';
import MailChimpLogo from '../../../assets/logos/mail_chimp_logo.png';
import './brandName.css';

const MailChimp = () => {
  return (
    <div className="brand-name-container">
        <img src={MailChimpLogo} alt="" />
       <p>MailChimp</p>
    </div>
  )
}

export default MailChimp