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
import icon12 from "@assets/img/icon/slider-icon (11).png";


import Image from 'next/image';



import { useMobile } from '@/src/hooks/mobile';
import Link from 'next/link';



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
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1, // optional if using variableWidth
  variableWidth: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: 'linear',
  pauseOnHover: false,
  pauseOnFocus: false,
  arrows: false,
}

const SliderArea = () => {
  const sliderRef = useRef(null)

  const isMobile = useMobile();
  console.log("isMobile", isMobile)
  return (
    <>
      <section className={`tp-text-slider-area fix ${isMobile ? "pb-100 pt-15" : "pt-100 pb-100"}`}>
        <h3 className="tp-section-title text-center">
          <span>Our Project</span> <br />
        </h3>
        <div className="custom-slider-container d-flex justify-content-center align-items-center">
          {/* <div className="custom-slider-track">
            {[...slider_data, ...slider_data].map((item, i) => (
              <div className="custom-slide" key={i}>
                <Image src={item.img} alt="project-icon" />
              </div>
            ))}
          </div> */}
          <Link href="https://exchangeblockex.com/"
            target="_blank"
            className="d-inline-block position-relative overflow-hidden" >
            <Image src={icon12} width={220} alt="project-icon"
              style={{
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}

            />
          </Link>
        </div>
      </section>

    </>
  );
};

export default SliderArea;