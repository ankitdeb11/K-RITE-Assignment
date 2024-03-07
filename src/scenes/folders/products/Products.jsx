import React from 'react';
import './products.css';
import { mockDataProducts } from "../../../data/mockDataProducts";
import { DataGrid } from '@mui/x-data-grid';
import Topbar from '../../global/topbar/Topbar';
import WixBrand from '../../../components/tableAssets/brandNames/WixBrand';
import ShopifyBrand from '../../../components/tableAssets/brandNames/ShopifyBrand';
import MailChimp from '../../../components/tableAssets/brandNames/MailChimp';
import PayPalBrand from '../../../components/tableAssets/brandNames/PayPalBrand';
import DisneyBrand from '../../../components/tableAssets/brandNames/DisneyBrand';
import IntercomBrand from '../../../components/tableAssets/brandNames/IntercomBrand';
import AutomationCategory from '../../../components/tableAssets/categories/AutomationCategory';
import EcommerceCategory from '../../../components/tableAssets/categories/EcommerceCategory';
import MobileCategory from '../../../components/tableAssets/categories/MobileCategory';
import MarketplaceCategory from '../../../components/tableAssets/categories/MarketplaceCategory';
import B2BCategory from '../../../components/tableAssets/categories/B2BCategory';
import TechnologyCategory from '../../../components/tableAssets/categories/TechnologyCategory';
import DigitalTransformation from '../../../components/tableAssets/tags/DigitalTransformation';
import OnlineShopping from '../../../components/tableAssets/tags/OnlineShopping';
import TechInnovation from '../../../components/tableAssets/tags/TechInnovation';
import BuySellOnline from '../../../components/tableAssets/tags/BuySellOnline';
import BusinessPartnerships from '../../../components/tableAssets/tags/BusinessPartnerships';
import SmartFinance from '../../../components/tableAssets/tags/SmartFinance';




const Products = () => {


    const columns = [

        {
            field: "brandName",
            headerName: "Brand",
            cellClassName: "name-column--cell",
            renderCell: ({ row: { brandName } }) => {
                return (
                    <div className="brand-container">
                        {brandName === "Wix" && <WixBrand />}
                        {brandName === "Shopify" && <ShopifyBrand />}
                        {brandName === "MailChimp" && <MailChimp />}
                        {brandName === "PayPal" && <PayPalBrand />}
                        {brandName === "Disney" && <DisneyBrand />}
                        {brandName === "Intercom" && <IntercomBrand />}
                    </div>
                )
            }
        },
        {
            field: "description", flex: 1,
            headerName: "Description"
        },
        {
            field: "membersCount",
            headerName: "Members",
            type: "number",
            headerAlign: "left",
            align: "left",
            cellClassName: "members-column--cell"
        },
        {
            field: "categories",
            headerName: "Categories",
            cellClassName: "categories-column--cell",
            renderCell: ({ row: { categories } }) => {
                return (
                    <div className="category-container">
                        {categories === "Automation" && <AutomationCategory />}
                        {categories === "Ecommerce" && <EcommerceCategory />}
                        {categories === "Mobile" && <MobileCategory />}
                        {categories === "Marketplace" && <MarketplaceCategory />}
                        {categories === "B2B" && <B2BCategory />}
                        {categories === "Technology" && <TechnologyCategory />}
                    </div>
                )
            }
        },
        {
            field: "tags",
            headerName: "Tags",
            flex: 0.5,
            cellClassName: "tags-column--cell",
            renderCell: ({ row: { tags } }) => {
                return (
                    <div className="tags-container">
                        {tags === "#DigitalTransformation" && <DigitalTransformation />}
                        {tags === "#OnlineShopping" && <OnlineShopping />}
                        {tags === "#TechInnovation" && <TechInnovation /> }
                        {tags === "#BuySellOnline" && <BuySellOnline />}
                        {tags === "#BusinessPartnerships" && <BusinessPartnerships />}
                        {tags === "#SmartFinance" && <SmartFinance />}
                    </div>
                )
            }
        },
        {
            field: "nextMeetingETA",
            headerName: "Next meeting",
            cellClassName: "meeting-column--cell",
            
        },

    ]


    return (
        <div className="table-container">

            <Topbar title="Products" />

            <div className="data-grid-container"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        border: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        border: "none",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        border: "none"

                    },
                }}

            >

                <DataGrid
                    checkboxSelection
                    rows={mockDataProducts}
                    columns={columns}
                />
            </div>


        </div>


    )
}

export default Products;