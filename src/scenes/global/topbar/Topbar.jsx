import React from 'react';
import './topbar.css';

const Topbar = ({title}) => {
    return (
        <div className="topbar-container">

            <div className="top-start">
                <div className="top-page-name">
                    {title}
                </div>

                <div className="top-icons-container">
                    <div className="search-container">
                        <i class="uil uil-search"></i>
                        <input type="text" placeholder='Search for..' className='search-bar' />
                    </div>



                    <a href="#messages" className="top-icons">
                        <i class="uil uil-envelope-star"></i>
                    </a>
                    <a href="#settings" className="top-icons">
                    <i class="uil uil-setting"></i>
                    </a>

                </div>
            </div>



            {/* All the filters icons will be starting from here  */}

            <div className="top-end">
                <div className="top-filters">
                    <a href="#brands" className="top-icons">
                        <i class="uil uil-store"></i>
                        All brands
                        <i class="uil uil-angle-down"></i>
                    </a>
                    <a href="#desk" className="top-icons">
                        Desk
                        <i class="uil uil-angle-down"></i>
                    </a>
                    <a href="#tags" className="top-icons">
                        Tags
                        <i class="uil uil-angle-down"></i>
                    </a>
                    <a href="#sort" className="top-icons">
                        <i class="uil uil-sort"></i>
                        Sort

                    </a>
                    <a href="#filter" className="top-icons">
                        <i class="uil uil-filter"></i>
                        Filter
                    </a>
                </div>


                <div className="top-actions">
                    <a href="#meetings" className="top-icons">
                        <i class="uil uil-focus-add"></i>
                        Meeting
                    </a>
                    <a href="#share" className="top-icons">
                        <i class="uil uil-import"></i>
                        Import/Export
                    </a>
                </div>

            </div>


        </div>
    )
}

export default Topbar