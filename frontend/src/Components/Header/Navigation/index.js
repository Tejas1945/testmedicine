import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { LiaBlogSolid } from "react-icons/lia";
import { useState } from 'react';


const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>
                        <div className='cartWrapper'>
                            <Button className='allCatTab align-items-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                <span className='tab me-2'><IoIosMenu /></span>
                                <span class="text">ALL CATEGORIES</span>
                                <span className='drop ms-2'><FaAngleDown /></span>
                            </Button>
                            <div className={`sidebarNav ${isopenSidebarVal === true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Elderly Care</Button></Link></li>
                                    <li><Link to="/"><Button>Elderly Care</Button></Link></li>
                                    <li><Link to="/"><Button>Elderly Care</Button></Link></li>
                                    <li><Link to="/"><Button>Elderly Care</Button></Link></li>
                                    <li><Link to="/"><Button>Elderly Care</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list-inline-item'>
                            <li className='list-inline-item'><Link to="/"><IoHome />&nbsp; Home</Link></li>
                            <li className='list-inline-item'><Link to="/cat/01"><GiMedicines />&nbsp;Medicine</Link></li>
                            <li className='list-inline-item'>
                                <Link to="/"><FaHandHoldingHeart />&nbsp;Wellness</Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Elderly Care</Button></Link>
                                    <Link to="/"><Button>Homeopathy Care</Button></Link>
                                    <Link to="/"><Button>Personal Care</Button></Link>
                                    <Link to="/"><Button>Health Care Devices</Button></Link>
                                    <Link to="/"><Button>Skin Care</Button></Link>
                                    <Link to="/"><Button>Mother and Baby Care</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><FaRegFaceKissWinkHeart />&nbsp;Beauty</Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Grooming</Button></Link>
                                    <Link to="/"><Button>Make Up</Button></Link>
                                    <Link to="/"><Button>Grooming</Button></Link>
                                    <Link to="/"><Button>Fragrances</Button></Link>
                                    <Link to="/"><Button>Hair</Button></Link>
                                    <Link to="/"><Button>Mother and Baby Care</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><BiSolidOffer />&nbsp;Offer Zone</Link> </li>
                            <li className='list-inline-item'>
                                <Link to="/"><LiaBlogSolid />&nbsp;Health Blogs</Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Women's Health</Button></Link>
                                    <Link to="/"><Button>Men's Health</Button></Link>
                                    <Link to="/"><Button>Child Care</Button></Link>
                                    <Link to="/"><Button>Mental Health</Button></Link>
                                    <Link to="/"><Button>News</Button></Link>
                                    <Link to="/"><Button>Strories</Button></Link>
                                    <Link to="/"><Button>Health Club</Button></Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navigation;