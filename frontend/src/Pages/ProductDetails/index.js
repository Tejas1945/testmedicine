import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import { Button } from "@mui/material";
import RelatedProducts from "./RelatedProducts";


const ProductDetails = () => {

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 ps-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-9 ps-5 pe-5">
                            <h3 className="hd text-capitalize">Pharmeasy Fish Oil 1000mg Soft Gelatin 60 Capsules</h3>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light2 me-2 ">Brand :</span>
                                        <span>Apollo</span>

                                    </div>

                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                        <span className="text-light2 ms-2 cursor">1 Review</span>

                                    </div>

                                </li>
                            </ul>

                            <div class="d-flex info align-items-center mb-2">
                                <span class="oldprice lg me-2">₹300</span>
                                <span class="netprice text-danger lg">₹200</span>
                            </div>

                            <span className="badge bg-success">IN STOCK</span>

                            <p className="mt-2">Fish Oil is an essential health supplement that serves many benefits. Our everyday diet is often unable to provide us with the right quantities of all vital nutrients.</p>

                            <div className="d-flex info align-items-center mt-4">
                                <QuantityBox />
                                <Button className="btn-blue btn-lg btn-big btn-round ms-2">Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                    
                    <br />


                    <RelatedProducts title =" related products"/>
                    <RelatedProducts title ="Recently Viewed Products"/>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;