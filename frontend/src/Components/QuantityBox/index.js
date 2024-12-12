import { Button } from "@mui/material";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";


const QuantityBox = () => {

    const[inputVal,setInputVal] =useState(0);

    const minus=()=>{
        if(inputVal>0){
            setInputVal(inputVal-1)
            }

    }
    const plus=()=>{
        setInputVal(inputVal+1)
        
    }

    return (
        <div className="quantitydrop d-flex align-items-center">
            <Button onClick={minus}><FaMinus /></Button>
            <input type="text" value={inputVal} />
            <Button onClick={plus}><FaPlus /></Button>
        </div>
    )

}

export default QuantityBox;