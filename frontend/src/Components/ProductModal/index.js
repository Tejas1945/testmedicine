import { Button, Dialog, Rating } from "@mui/material";
import React, { useContext } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import Slider from "react-slick";

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import QuantityBox from "../QuantityBox";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";






const ProductModal = () => {

    

    const context = useContext(MyContext)

    var settings2 = {
        dots: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        infinite: false,
    };
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        infinite: false,
    };

  

    return (
        <><Dialog open={true} className="productmodal" onClose={() => context.setisOpenProductModal(false)}>
            <Button className='close_' onClick={() => context.setisOpenProductModal(false)} ><IoMdCloseCircle /></Button>
            <h4 className="mb-2 fw-bold">Pharmeasy Fish Oil 1000mg Soft Gelatin 60 Capsules</h4>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center me-4">
                    <span>Brands:</span>
                    <span className="ms-2"><b>Apollo</b></span>

                </div>

                <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />



            </div>
            <hr />

            <div className="row mt-2 productdetailsmodal">
                <div className="col-md-5">
                    <ProductZoom/>


                </div>
                <div className="col-md-7">
                    <div className="d-flex info align-items-center">
                        <span className="oldprice lg me-2">₹300</span>
                        <span className="netprice text-danger lg">₹200</span>
                    </div>
                    <span className="badge bg-success mt-2">IN STOCK</span>
                    <p className="mt-2">Fish Oil is an essential health supplement that serves many benefits. Our everyday diet is often unable to provide us with the right quantities of all vital nutrients. </p>

                    <div className="d-flex align-items-center">
                        <QuantityBox />

                    </div>
                    <Button className="btn-blue btn-lg btn-big btn-round mt-2">Add to cart</Button>
                </div>
            </div>
        </Dialog>
        </>

    )
}

export default ProductModal;