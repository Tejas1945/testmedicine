import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const Sidebar = () => {
    const categories = [
        "Ayurvedic & Herbal Medicines",
        "Baby Care",
        "Home Care",
        "OTC",
        "Chocolate",
        "Pharma Medicines",
        "Medical Aids & Devices",
        "Sexual Wellness",
        "Nutritional Foods & Drinks",
        "Personal Care"
    ];

    return (
        <div className="sidebar">

            <div className="filterbox">
                <Typography variant="h6" className="sidebar-heading">
                    CATEGORIES
                </Typography>
                <div className="scroll">
                    <FormGroup>
                        {categories.map((category, index) => (
                            <FormControlLabel
                                key={index}
                                control={<Checkbox />}
                                label={category}
                            />
                        ))}
                    </FormGroup>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;