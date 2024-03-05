import React from 'react';
import './dashboard.css';
import LogoMain from "../../assets/logos/logo_main.jpg";
import ProfilePic from "../../assets/logos/profile_logo.jpg";

const Dashboard = () => {
    return (
        <div className="container">

            {/* Aside Part starts from here  */}
            <aside>
                <div className="top">
                    <div className="logo">
                        <img src={LogoMain} alt="" className="company-logo" />
                        <div className="logo-text">
                            <h2>InnovateHub</h2>
                        </div>
                        <img src={ProfilePic} alt="" className="profile-logo" />

                        <div class="close" id="close-btn">
                            <i class="uil uil-multiply"></i>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Dashboard