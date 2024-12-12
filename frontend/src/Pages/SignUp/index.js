import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import logo from '../../assets/images/logo.png';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {

    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);

    }, []);
    return (
        <section className="section signInPage">
            <div class="shape-bottom"> <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"> <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> </svg></div>
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img src={logo} alt="Logo" className="img-fluid" />
                    </div>




                    <form className="mt-3">
                        <h2 className="mb-3">Sign Up</h2>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField label="Name" required type="text" variant="standard" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField label="Phone No." required type="text" variant="standard" className="w-100" />
                                </div>

                            </div>
                        </div>

                        <div className="form-group">
                            <TextField id="standard-basic" label="Email" required type="email" variant="standard" className="w-100" />
                        </div>


                        <div className="form-group">
                            <TextField id="standard-basic" label="Password" required type="password" variant="standard" className="w-100" />
                        </div>

                        <a className="border-effect cursor txt">Forgot Password?</a>

                        <div className="d-flex align-items-center mt-3 mb-3 ">
                            <Button className="btn-blue col btn-lg btn-big ">Sign Up</Button>
                            <Link to="/"><Button className="btn-lg btn-big col ms-3" variant="outlined" onClick={() => context.setisHeaderFooterShow(true)}>Cancel</Button></Link>
                        </div>



                        <p>Already Registered?<Link to="/signIn" className="border-effect">Sign In</Link></p>
                        <h6 className="mt-3 text-center fw-bold">Or continue with Social Account</h6>

                        <ul className="list list-inline mt-3 mb-3 socials text-center ">
                            <li className="list-inline-item ">
                                <Link to="#"><Button><FcGoogle /></Button></Link>
                            </li>



                        </ul>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp;