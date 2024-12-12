import { Button } from "@mui/material";
import { BsArrowsFullscreen } from "react-icons/bs";
import ProductModal from "../ProductModal";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const ProductItem = (props) => {

    const context = useContext(MyContext);

    const viewProductDetails=(id)=>{
        context.setisOpenProductModal(true);

    }

    

    return (
        <>
            <div className={`productitem ${props.itemView}`}>
                <div className='imgwrapper'>
                <Link to="/product/01"><img src='https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=1440x0' className='w-100' /></Link>
                    <span className='badge bg-primary'>20%</span>
                    <div className='actions'>
                        <Button className="fullscreen" onClick={()=>viewProductDetails(1)}><BsArrowsFullscreen /></Button>
                    </div>
                </div>
                <div className='info'>
                    <h4>Pharmeasy Fish Oil 1000mg Soft Gelatin 60 Capsules</h4>
                    <span className='text-success'>In Stock</span>


                    <div className='d-flex price'>
                        <span className='oldprice'>₹300</span>
                        <span className='netprice text-danger ms-2'>₹200</span>
                    </div>
                </div>
            </div>

           

             {/* <ProductModal/>  */}
        </>
    )
}

export default ProductItem