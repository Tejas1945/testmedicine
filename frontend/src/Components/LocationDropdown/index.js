
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

import Dialog from '@mui/material/Dialog';

import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react';



const LocationDropdown = () => {
    const [isOpenModal, setisOpenModal] = useState(false);
    return (
        <>
            <Button className='locationDrop ' onClick={() => setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Select Pincode</span>
                    <span className='pin'>700059</span>
                </div>
                <span className=' ms-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setisOpenModal(false)} className='locationModel'>
                <h4 className='location mb-0'><b>Choose Your Location</b></h4>
                <Button className='close_' onClick={() => setisOpenModal(false)}><IoMdCloseCircle /></Button>
                <div className='headersearch w-100'>
                    <input type='text' placeholder='Enter pincode...' />
                    <Button><FaLocationCrosshairs /></Button>
                </div>

                <ul className='PincodeList mt-3'>
                    <li><Button>Select one option..</Button></li>
                    
                    <li><Button onClick={() => setisOpenModal(false)}>700001</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700002</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700003</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700004</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700005</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700006</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700007</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700008</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700009</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700010</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700011</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700012</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700013</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700014</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700015</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700016</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700017</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700019</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700020</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700021</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700022</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700023</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700024</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700025</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700026</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700027</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700028</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700029</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700030</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700031</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700032</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700033</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700034</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700035</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700036</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700037</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700038</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700039</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700040</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700041</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700042</Button></li>

                    
                    <li><Button onClick={() => setisOpenModal(false)}>700056</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700057</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700059</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700060</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700061</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700062</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700063</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700064</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700065</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700066</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700067</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700068</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700069</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700070</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700071</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700072</Button></li>

                    
                    <li><Button onClick={() => setisOpenModal(false)}>700137</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700140</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700141</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700143</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700146</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700147</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700150</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>700151</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>743318</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>743352</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>743377</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>743503</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>743609</Button></li>





                </ul>

            </Dialog>
        </>
    )

}
export default LocationDropdown;