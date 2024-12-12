
import React from "react";
import Slider from "react-slick";


const HomeBanner =()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    return(
        <div className="homeBanner">
            <Slider {...settings}>
                <div className="carousel-slide">
                    <img src="https://cdn01.pharmeasy.in/dam/banner/banner/5b563505137-B2H_24_HP.jpg" alt="Slide 1" />
                    
                </div>
                <div className="carousel-slide">
                    <img src="https://cdn01.pharmeasy.in/dam/banner/banner/0a949f16adb-HOMEPAGE_BANNER2.jpg" alt="Slide 2" />
                    
                </div>
                <div className="carousel-slide">
                    <img src="https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg" alt="Slide 3" />
                    
                </div>
                <div className="carousel-slide">
                    <img src="https://cdn01.pharmeasy.in/dam/banner/banner/cbe2728ed31-primary_evion.jpg" alt="Slide 4" />
                    
                </div>
            </Slider>
        </div>
    )

}

export default HomeBanner;