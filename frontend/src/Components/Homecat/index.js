import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";



const Homecat = () => {
    return (
        <section className='homecat'>
            <div className='container '>
                <h3 class="hd">Featured categories</h3>
                <Swiper
                    slidesPerView={8}
                    spaceBetween={50}
                    nagination={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item text-center cursor">
                        <Link to="/cat/01"><img src="https://img.freepik.com/premium-photo/medical-bottles-heart-pills-isolated-white-background_185193-8407.jpg?semt=ais_hybrid" alt=""/></Link>
                            <h6>Medicine</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center cursor">
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/81fa3c44e0503863b3778895d5ed0bec.png?f=png?dim=256x0" alt=""/>
                            <h6>Wellness</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center cursor">
                            <img src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/e4ca54bc1d1d3ed18253afcb2ca77870.png?f=png?dim=256x0" alt=""/>
                            <h6>Beauty</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center cursor">
                            <img src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0" alt=""/>
                            <h6>Offer</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text-center cursor">
                            <img src="https://img.freepik.com/free-vector/heart-human-hand_1308-128690.jpg?t=st=1731932750~exp=1731936350~hmac=e6d0779c9295ee4f86fb2f7c779f7c1c7ec10f4757f4a39d303bcbe82182c0c7&w=740" alt=""/>
                            <h6>Health Blogs</h6>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
            </div>
        </section>
    )

}

export default Homecat;