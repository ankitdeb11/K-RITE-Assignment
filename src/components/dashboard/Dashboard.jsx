import React, { useState } from 'react';
import './dashboard.css';
import LogoMain from "../../assets/logos/logo_main.jpg";
import ProfilePic from "../../assets/logos/profile_logo.jpg";
import Products from '../../scenes/folders/products/Products';
import TableActions from '../tableActions/TableActions';


const Dashboard = () => {


    //using useState hook to toggle between the sub-menu items and menu-items.
    const [isDropDownOpen, setDropDownOpen] = useState(false);

    
    const toggleDropDown = () => {
        setDropDownOpen(!isDropDownOpen);
    }



    return (
        <div className="container">

            {/* Aside Part for the Sidebar of the Dashboard starts from here  */}

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

                <div className="sidebar">

                    {/* Menu Items start from here  */}


                    <div className="menu">
                        <div className="item">
                            <a href="#design">
                                <i class="uil uil-edit sidebar-icons"></i>
                                Design Team
                                <span className="team-amount">x+1</span>
                            </a>
                        </div>


                        <div className="item">
                            <a href="#marketing">
                                <i class="uil uil-megaphone sidebar-icons"></i>
                                Marketing Team
                                <span className="team-amount">x+2</span>
                            </a>


                        </div>


                        <div className="item">
                            <a href="#development">
                                <i class="uil uil-brackets-curly sidebar-icons"></i>
                                Development Team
                                <span className="team-amount">x+3</span>
                            </a>


                        </div>




                        <div className="item">
                            <a href="#createteam">
                                <i class="uil uil-focus-add sidebar-icons"></i>
                                Create a team
                            </a>

                        </div>




                        <div className="folders-title">
                            <span className='folders-span'>FOLDERS</span>
                            <i class="uil uil-plus folder-plus"></i>
                        </div>


                        <div className="item">
                            <a href="#products" onClick={toggleDropDown}>
                                <i class="uil uil-folder sidebar-icons"></i>
                                Products
                                <i className={`uil uil-angle-${isDropDownOpen ? 'up' : 'down'} dropdown-icon`}></i>
                            </a>

                            {/* Drop down menu items 01 */}

                            {/* Sub Menu Starts from here  */}
                            <div className={`sub-menu ${isDropDownOpen ? 'open' : 'closed'}`}>

                                <a href="#roadmap" className="sub-item">
                                    <i class="uil uil-grip-horizontal-line sub-item-icon"></i>
                                    Roadmap
                                </a>

                                <a href="#feedback" className="sub-item">
                                    <i class="uil uil-grip-horizontal-line sub-item-icon"></i>
                                    Feedback
                                </a>

                                <a href="#Performance" className="sub-item">
                                    <i class="uil uil-grip-horizontal-line sub-item-icon"></i>
                                    Performance
                                </a>

                                <a href="#team" className="sub-item">
                                    <i class="uil uil-grip-horizontal-line sub-item-icon"></i>
                                    Team
                                </a>

                                <a href="#analytics" className="sub-item">
                                    <i class="uil uil-grip-horizontal-line sub-item-icon"></i>
                                    Analytics
                                </a>

                                <a href="#addNew" className="sub-item">
                                    <i class="uil uil-plus"></i>
                                    Add new sub
                                </a>
                            </div>

                        </div>


                        <div className="item">
                            <a className='folders' href="#sales">
                                <i class="uil uil-folder sidebar-icons"></i>
                                Sales
                                <i class="uil uil-angle-down dropdown-icon"></i>
                            </a>


                        </div>

                        <div className="item">
                            <a className='folders' href="#design">
                                <i class="uil uil-folder sidebar-icons"></i>
                                Design
                                <i class="uil uil-angle-down dropdown-icon"></i>
                            </a>


                        </div>

                        <div className="item">
                            <a className='folders' href="#office">
                                <i class="uil uil-folder sidebar-icons"></i>
                                Office
                                <i class="uil uil-angle-down dropdown-icon"></i>
                            </a>
                        </div>

                        <div className="item">
                            <a className='folders legal' href="#legal">
                                <i class="uil uil-folder sidebar-icons"></i>
                                Legal
                                <i class="uil uil-angle-down dropdown-icon"></i>
                            </a>


                        </div>

                        <div className="essentials">

                            <div className="item teams">
                                <a href="#invites" className='invites'>
                                    <i class="uil uil-user-plus sidebar-icons"></i>
                                    Invite teammates
                                </a>
                            </div>


                            <div className="item">
                                <a href="#help">
                                    <i class="uil uil-question-circle sidebar-icons"></i>
                                    Help and first steps
                                </a>

                            </div>

                            <div className="item">
                                <a href="#billing" className='billing'>
                                    <div className="days-left">
                                        7
                                    </div>
                                    days left on trial
                                    <button className="add-billing">
                                        Add billing
                                    </button>
                                </a>


                            </div>
                        </div>



                    </div>


                </div>



            </aside>



            <main className="content">

                {/* implemented one page of the Project for oe of the elements from the Sidebar of Dashboard */}

                <Products />

                {/* table actions refer to the actions that can be implmented to the structure of the contents of the table  */}
                <TableActions />

            </main>









        </div>
    )
}

export default Dashboard