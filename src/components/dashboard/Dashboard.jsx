import React from 'react';
import './dashboard.css';
import LogoMain from "../../assets/logos/logo_main.jpg";
import ProfilePic from "../../assets/logos/profile_logo.jpg";
import Products from '../../scenes/folders/products/Products';
import TableActions from '../tableActions/TableActions';


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

                <div className="sidebar">



                    <a href="#design">
                        <i class="uil uil-edit sidebar-icons"></i>
                        Design Team
                        <span className="team-amount">x+1</span>
                    </a>




                    <a href="#marketing">
                        <i class="uil uil-megaphone sidebar-icons"></i>
                        Marketing Team
                        <span className="team-amount">x+2</span>
                    </a>




                    <a href="#development">
                        <i class="uil uil-brackets-curly sidebar-icons"></i>
                        Development Team
                        <span className="team-amount">x+3</span>
                    </a>




                    <a href="#createteam">
                        <i class="uil uil-focus-add sidebar-icons"></i>
                        Create a team
                    </a>


                    <a className='home' href="#home">
                        <i class="uil uil-create-dashboard"></i>
                        Dashboard Main
                    </a>



                    <div className="folders-title">
                        <span className='folders-span'>FOLDERS</span>
                        <i class="uil uil-plus folder-plus"></i>
                    </div>

              


                    <a className='folders' href="#products">
                        <i class="uil uil-folder sidebar-icons"></i>
                        Products
                        <i class="uil uil-angle-down dropdown-icon"></i>
                    </a>




                    <a className='folders' href="#sales">
                        <i class="uil uil-folder sidebar-icons"></i>
                        Sales
                        <i class="uil uil-angle-down dropdown-icon"></i>
                    </a>





                    <a className='folders' href="#design">
                        <i class="uil uil-folder sidebar-icons"></i>
                        Design
                        <i class="uil uil-angle-down dropdown-icon"></i>
                    </a>




                    <a className='folders' href="#office">
                        <i class="uil uil-folder sidebar-icons"></i>
                        Office
                        <i class="uil uil-angle-down dropdown-icon"></i>
                    </a>





                    <a className='folders' href="#legal">
                        <i class="uil uil-folder sidebar-icons"></i>
                        Legal
                        <i class="uil uil-angle-down dropdown-icon"></i>
                    </a>

              


                    <a href="#invites" className='invites'>
                        <i class="uil uil-user-plus sidebar-icons"></i>
                        Invite teammates
                    </a>




                    <a href="#help">
                        <i class="uil uil-question-circle sidebar-icons"></i>
                        Help and first steps
                    </a>




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
            </aside>



            <main className="content">
                <Products />

                <TableActions />
                
            </main>


          






        </div>
    )
}

export default Dashboard