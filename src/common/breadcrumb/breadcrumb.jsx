import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrow from "@/src/svg/line-arrow";
import breadcrumb_img from "@assets/img/breadcrumb/titile.svg";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Breadcrumb = ({
  top_title = "Our Company",
  page_title = "Our Company",
}) => {

  const [isLoop, setIsLoop] = useState(false)
  useEffect(() => {
    setIsLoop(true)
  }, [])

  const setting = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },

  };


  return (
    <>
      <section
        className="breadcrumb__area breadcrumb-style   p-relative z-index-1"
      >

        <div className="hero-active-1 swiper-container">
          <Swiper {...setting} loop={isLoop} modules={[Navigation, EffectFade]}>
            <SwiperSlide >
              <div className="tp-hero-inner-1">
                <div className="container">
                  <div className="tp-hero-shape">

                  </div>
                  <div className="tp-hero-1">
                    <div className="tp-hero-bg tp-hero-overlay p-relative"
                      style={{

                        backgroundImage: `url(${{
                          "Contact Us": "/assets/img/breadcrumb/contact.jpg",
                          "Our Portfolio": "/assets/img/breadcrumb/portfolio.jpg",
                          "Our Services": "/assets/img/breadcrumb/services.jpg",
                          "about": "/assets/img/breadcrumb/company.jpg",
                        }[top_title] || "/assets/img/breadcrumb/breadcrumb-bg-1.jpg"
                          })`,

                      }}
                    ></div>
                    <div className="row pt-190 pb-210">
                      <div className="breadcrumb__bg-overlay m-img"></div>
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-xl-10">
                            <div className="breadcrumb__content swiper-slide  swiper-slide-active  tp-hero-title text-center">
                              <div className="tp-hero-title-wrapper">
                                <span className="tp-section-title__pre p-relative text-capitalize">

                                  <h3 className="breadcrumb__title   text-white ">
                                    {top_title}
                                    <LineArrow src={breadcrumb_img} alt="theme-pure" />
                                  </h3>

                                </span>
                              </div>
                              {/* <div className="breadcrumb__list breadcrumb__list-translate">
                  <span className="text-white">
                    {" "}
                    <Link href="/">Home</Link>{" "}
                  </span>
                  <span className="dvdr text-white">
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
                  <span className="text-white">pages</span>
                  <span className="dvdr text-white">
                    {" "}
                    <i className="fa-regular fa-angle-right"></i>{" "}
                  </span>
                  <span className="text-white">{page_title}</span>
                </div> */}


                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>



      </section>
    </>
  );
};

export default Breadcrumb;
