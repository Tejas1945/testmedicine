import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { useRef, useState } from 'react';

const ProductZoom =() =>{

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderbig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderbig.current.swiper.slideTo(index);
    }

    return(

        <div className="productZoom">
            <div className="productzoom position-relative">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            navigation={false}
                            slidesPerGroup={1}
                            modules={[Navigation]}
                            className="zoomSliderbig"
                            ref={zoomSliderbig}
                        >

                            <SwiperSlide>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100`} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={`https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100`} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        navigation={true}
                        slidesPerGroup={1}
                        modules={[Navigation]}
                        className="zoomSlider"
                        ref={zoomSlider}
                    >
                        <SwiperSlide>
                            <div className={`item ${slideIndex == 0 && `item_active`}`}>
                                <img src={`https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100`} className="w-100" onClick={() => goto(0)} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item ${slideIndex == 1 && `item_active`}`}>
                                <img src={`https://cdn01.pharmeasy.in/dam/products_otc/S31892/pharmeasy-fish-oil-1000mg-soft-gelatin-60-capsules-6.1-1731323235.jpg?dim=700x0&dpr=1&q=100`} className="w-100" onClick={() => goto(1)} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
        </div>
    )
}

export default ProductZoom;