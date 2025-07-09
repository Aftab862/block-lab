import React, { useRef } from 'react';
import icon1 from "@assets/img/icon/slider-icon (1).png";
import icon2 from "@assets/img/icon/slider-icon (2).png";
import icon3 from "@assets/img/icon/slider-icon (3).png";
import icon4 from "@assets/img/icon/slider-icon (4).png";
import icon5 from "@assets/img/icon/slider-icon (5).png";


import icon6 from "@assets/img/icon/slider-icon (6).png";
import icon7 from "@assets/img/icon/slider-icon (7).png";
import icon8 from "@assets/img/icon/slider-icon (8).png";
import icon9 from "@assets/img/icon/slider-icon (9).png";
import icon10 from "@assets/img/icon/slider-icon (10).png";

import Image from 'next/image';
import Slider from "react-slick";
import { useMobile } from '@/src/hooks/mobile';



const slider_data = [
    { id: 1, img: icon1, title: <>Block EX </> },
    { id: 2, img: icon2, title: <>Just Touch </> },
    { id: 3, img: icon3, title: <>Block Puzzle </> },
    { id: 4, img: icon4, title: <>Konnect </> },

    { id: 5, img: icon5, title: <>Block EX </> },
    { id: 6, img: icon6, title: <>Just Touch </> },
    { id: 7, img: icon7, title: <>Block Puzzle </> },
    { id: 8, img: icon8, title: <>Konnect </> },
    { id: 9, img: icon9, title: <>Block Puzzle </> },
    { id: 10, img: icon10, title: <>Konnect </> },
]

const setting = {
    autoplay: true,
    speed: 1000,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',

    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    // initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnFocus: false,
    pauseOnHover: false,
}

const SliderArea = () => {
    const sliderRef = useRef(null)
    
    const isMobile=useMobile();
    console.log("isMobile",isMobile)
    return (
        <>
            <section className={`tp-text-slider-area fix  ${isMobile ?"pb-100 pt-15" : "pt-100 pb-100" } `}  >
                <h3 className="tp-section-title text-center">
                    <span className="">Our Projects</span> <br />
                </h3>
                <div className="container-fluid gx-0 mt-40">
                    <div className="row gx-0">
                        <div className="col-lg-12">
                            <div className="tp-text-slider">
                                <Slider {...setting} ref={sliderRef} className="tp-text-active">
                                    {slider_data.map((item, i) =>
                                        <div key={i} className="tp-text-item ">
                                            <div className="tp-text-slider-wrapper">
                                                <div className="tp-text-slider-item d-flex align-items-center">
                                                    <Image width={150} height={50} src={item?.img} alt="theme-pure" />
                                                    {/* <h6 className="text-titlee">{item.title}</h6> */}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SliderArea;