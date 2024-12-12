import Sidebar from "../../Components/Sidebar";
import Button from '@mui/material/Button';
import { BsFillGridFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import ProductItem from "../../Components/ProductItem";
import { useState } from "react";

import Pagination from '@mui/material/Pagination';


const Listing = () => {

    const [productView, setProductView] = useState('four');

    return (
        <>
            <section className="product_listing_page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />

                        <div className="content_right">
                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center btnWrapper">
                                    <Button className={productView==='one' && 'act'} onClick={() => setProductView('one')}><TiThMenu /></Button>
                                    <Button className={productView==='two' && 'act'} onClick={() => setProductView('two')}><BsFillGridFill /></Button>
                                    <Button className={productView==='three' && 'act'} onClick={() => setProductView('three')}><BsFillGrid3X3GapFill /></Button>
                                    <Button className={productView==='four' && 'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                                </div>



                            </div>

                            <div className="productListing">
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />

                            </div>


                            <div className="d-flex align-items-center justify-content-center mt-5">

                                <Pagination count={10} color="primary" size="large"/>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;