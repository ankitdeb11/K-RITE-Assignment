import React from 'react';
import './tableActions.css';

const TableActions = () => {
    return (
        <div className='actions-section'>


            <div className="actions-container">
                <div className="selected action">
                    <span className="count"></span>
                    selected
                </div>
                <div className="archives action">
                    <i class="uil uil-archive"></i>
                    Archive
                </div>
                <div className="selected action delete">
                    <i class="uil uil-trash"></i>
                    Delete
                </div>
                <div className="selected action">
                    More
                    <i class="uil uil-angle-down"></i>
                </div>
            </div>


        </div>
    )
}

export default TableActions