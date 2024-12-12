import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../../Components/ProductItem";
import Button from '@mui/material/Button';



const RelatedProducts =(props)=>{
    return (
        <>
          <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className="newlaunchtext hd mt-4 text-capitalize">{props.title}</h3>
                                
                            </div>
                            
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
        </>
    )
}

export default RelatedProducts;