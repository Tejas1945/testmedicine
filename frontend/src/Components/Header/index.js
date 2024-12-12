import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import LocationDropdown from '../LocationDropdown';
import Button from '@mui/material/Button';

import { FiUser } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import SearchBox from './SearchBox';
import Navigation from './Navigation';

const Header = () => {
    return (
        <>
            <div className="headerWrapper ">
                <div className="top-strip bg-aqua">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Eat well, stay fit, die anyway—but at least you'll look good doing it!</p>

                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={logo} alt='Logo' /></Link>

                            </div>

                            <div className='col-sm-10 d-flex allign-items-center part2 '>
                                <LocationDropdown />

                                <SearchBox/>

                                <div className='d-flex allign-items-center part3 ms-auto'>
                                <Link to="/signIn"><Button className='user me-3'><FiUser /></Button></Link>
                                    <div className='cartTab ms-auto d-flex align-items-center'>
                                        <div className='position-relative ms-2'>
                                        <Link to="/cart"><Button className='cart ms-4'><FaCartPlus /></Button></Link>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Navigation/>                
            </div>
        </>
    )
}

export default Header;