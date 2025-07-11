import our_service_data from "@/src/data/our-service-data";

import AngleArrow from "@/src/svg/angle-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {useMobile} from "@/src/hooks/mobile";

const ServiceArea = () => {
  const [hover, setHover] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const isMobile= useMobile();
  return (
    <>
      <section className="tp-service-breadcrumb-area p-relative pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-lg-6 ${isMobile ?"text-center":""} `}>


              <div className="tp-service-breadcrumb-title-wrapper">
                {/* <span className="tp-section-title__pre">
                  service <span className="title-pre-color">IT Solutions</span>
                  <AngleArrow />
                </span> */}
                <h3 className="tp-section-title">
                  Explore Our
                  <br /> <span className="title-color"> Digital & IT Services</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-service-breadcrumb-title-wrapper justify-content-start justify-content-xl-end d-flex">
                <p>
                  At BlockLab, we offer a full spectrum of cutting-edge IT and creative services designed to help businesses grow, innovate, and lead in the digital world.

                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {our_service_data.map((item, i) => (
              <div  className="col-xl-3 col-lg-4 col-md-6 mb-3"
                key={i}
  onMouseEnter={() => setHoveredIndex(i)}
  onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`tp-service-3-content breadcrumb-item mb-30 d-flex flex-column h-100 ${isMobile?"text-center" : ""}`}>
                  <div className="tp-service-3-content-thumb">
                    <Image src={item.icon} alt="theme-pure" />
                  </div>
                  <p className="tp-service-breadcrumb-title  fs-5 fw-normal">
                    {/* <Link href="/service-details"> */}
                    {item.title}

                    {/* </Link> */}
                  </p>
                  <p
                    className="flex-grow-1"
                    style={{
                      color: hoveredIndex === i ? 'white' : 'grey',
                      transition: 'color 0.3s',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* <div className="tp-service-btn mt-auto">
                    <Link href="/service-details">
                      Read More <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="tp-about-call fadeUp">
                <a href="tel:01310-069824">
                  <p>
                    <i className="fa-solid fa-phone"></i>
                    Provide IT services to hundreds customers{" "}
                    <span>+91 123 456 789</span>
                  </p>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
