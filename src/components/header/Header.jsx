import React from 'react';
import './header.css';

const Header = ({ title, subtitle }) => {
    return (
        <div className="header-container">
            <h1 className="header-title">
                {title}
            </h1>

            <h2>
                {subtitle}
            </h2>
        </div>
    )
}

export default Header