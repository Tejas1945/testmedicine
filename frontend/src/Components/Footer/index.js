
import { AiFillMedicineBox } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topinfo row">
                    <div className="col d-flex align items center">
                        <span><AiFillMedicineBox/></span>
                        <span className="ms-2">genuine medicine</span>
                    </div>
                    <div className="col d-flex align items center">
                        <span><FaShippingFast/></span>
                        <span className="ms-2">Delivery on time</span>
                    </div>
                    <div className="col d-flex align items center">
                        <span><RiMoneyRupeeCircleFill/></span>
                        <span className="ms-2">best price on the market</span>
                    </div>
                </div>

                <div className="row mt-4 linkswrap">
                    <div className="col">
                        <h5>Wellness Products</h5>
                        <ul>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Wellness Products</h5>
                        <ul>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Wellness Products</h5>
                        <ul>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Wellness Products</h5>
                        <ul>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Wellness Products</h5>
                        <ul>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            <li><Link to="#">about</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;