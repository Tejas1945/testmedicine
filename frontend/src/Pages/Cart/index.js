import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import { ImBin } from "react-icons/im";
import { Button } from "@mui/material";

const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-0">Your Cart</h2>
                    <p>There are <b>3</b> products in your cart</p>
                    <div className="row">
                        <div className="col-md-9 pe-5">


                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead class="table-dark">
                                        <tr>
                                            <th width="35%">Cart Items</th>
                                            <th width="15%">Price</th>
                                            <th width="25%">Quantity</th>
                                            <th width="15%">Subtotal</th>
                                            <th width="10%">Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/01">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=1440x0" className="w-100" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Pharmeasy Fish Oil 1000mg Soft Gelatin 60 Capsules</h6>
                                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">₹200</td>
                                            <td width="25%"><QuantityBox /></td>
                                            <td width="15%">₹200</td>
                                            <td width="10%"><span className="remove"><ImBin /></span></td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/01">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=1440x0" className="w-100" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Pharmeasy Fish Oil 1000mg Soft Gelatin 60 Capsules</h6>
                                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">₹200</td>
                                            <td width="25%"><QuantityBox /></td>
                                            <td width="15%">₹200</td>
                                            <td width="10%"><span className="remove"><ImBin /></span></td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/01">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=1440x0" className="w-100" />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Pharmeasy Fish Oil 1000mg Soft Gelatin 60 Capsules</h6>
                                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">₹200</td>
                                            <td width="25%"><QuantityBox /></td>
                                            <td width="15%">₹200</td>
                                            <td width="10%"><span className="remove"><ImBin /></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border p-3 cartDetails">
                                <h4 >Billing amount</h4>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Subtotal</span>
                                    <span className="ms-auto">₹200</span>
                                </div>

                                <div className="d-flex align-items-center  mb-3">
                                    <span>Shipping fee</span>
                                    <span className="ms-auto "><b>Free</b></span>
                                </div>

                                <div className="d-flex align-items-center  mb-3">
                                    <span>Total</span>
                                    <span className="ms-auto text-danger fw-bold">₹200</span>
                                </div>
                                <br />
                                <Button className="btn-blue btn-lg btn-big  ">Pay Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
