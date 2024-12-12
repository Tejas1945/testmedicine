
import Button from '@mui/material/Button';
import HomeBanner from "../../Components/HomeBanner";
import { IoIosArrowRoundForward } from "react-icons/io";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../../Components/ProductItem';
import Homecat from '../../Components/Homecat';

import banner from '../../assets/images/banner.png'




const Home = () => {

    var productslider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <>
            <HomeBanner />

            <Homecat/>

            

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className=" mb-0 newlaunchtext">new launches</h3>
                                <p className="text-light1">Grab the new launches...</p>
                            </div>
                            <Button className="viewAll  ms-auto" >View all<IoIosArrowRoundForward /></Button>
                        </div>


                        <div className="productrow w-100 mt-4">
                            <Swiper
                                slidesPerView={7}
                                spaceBetween={10}
                                nagination={{
                                    clickable: true,
                                }}
                                slidesPerGroup={0}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                

                            </Swiper>

                        </div>

                        
                        <div className="d-flex align-items-center mt-6">
                            <div className="info w-75">
                                <h3 className=" mb-0 newlaunchtext">Trending Near You</h3>
                                <p className="text-light1">Popular in your city...</p>
                            </div>
                            <Button className="viewAll  ms-auto" >View all<IoIosArrowRoundForward /></Button>
                        </div>


                        <div className="productrow w-100 mt-4">
                            <Swiper
                                slidesPerView={7}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                                

                            </Swiper>

                        </div>

                        <div className='banner mt-4'>
                            <img src={banner} className='cursor w-100 mt-4'/>
                        </div>


                    </div>
                </div>
            </section>


            
        </>
    )
}

export default Home;