import React from 'react';
import './products.css';
import { mockDataProducts } from "../../../data/mockDataProducts";
import Header from '../../../components/header/Header';
import { DataGrid } from '@mui/x-data-grid';
import Topbar from '../../global/topbar/Topbar';




const Products = () => {


    const columns = [
        { field: "id", headerName: "ID" },
        { field: "brandName", headerName: "Brand", cellClassName: "name-column--cell" },
        { field: "description", flex: 1, headerName: "Description" },
        { field: "membersCount", headerName: "Members", type: "number", headerAlign: "left", align: "left", },
        { field: "categories", headerName: "Categories" },
        { field: "tags", headerName: "Tags" },
        { field: "nextMeetingETA", headerName: "Next meeting" },

    ]


    return (
        <div className="table-container">

            <Topbar title="Products"/>

            {/* <Header title="Products" subtitle="Managing the Products" />     */}
            <div className="data-grid-container">
                <DataGrid

                    rows={mockDataProducts}
                    columns={columns}


                />
            </div>


        </div>

    )
}

export default Products;