import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
    return(
    <div className='headersearch ms-3 me-3'>
        <input type='text' placeholder='Search medicines & other products...' />
        <Button><IoSearchSharp /></Button>
    </div>
    )
}

export default SearchBox;