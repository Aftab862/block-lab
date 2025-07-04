import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow';
import React, { useEffect, useRef, useState } from 'react';


import category_shape_1 from "@assets/img/category/shape-1.png";
import category_shape_2 from "@assets/img/category/shape-2.png";

import category_icon_1 from "@assets/img/category/icon (1).png";
import category_icon_2 from "@assets/img/category/icon (2).png";
import category_icon_3 from "@assets/img/category/icon (3).png";
import category_icon_4 from "@assets/img/category/icon (4).png";
import category_icon_5 from "@assets/img/category/icon (6).png";
import SimpleParticles from '@/src/common/particle-animation';

const CategoryArea = () => {



    return (
        <>



            <div className="container pt-120 pb-120 " style={{ position: "relative" }}>

                <div style={{ position: "absolute" }}>
                    <SimpleParticles />
                </div>

                <div className="row ">
                    <div className="col-xl-12">
                        <div className="tp-category-title-wrapper text-center">

                            <h3 className="tp-section-title">
                                Best Digital <span className="title-color">Technology</span> <br /> Agency For People
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div className="tp-category-content-wrapper d-flex">
                            <div className="tp-category-content one">
                                <div className="tp-category-icon">
                                    <Image width={80} src={category_icon_3} alt="theme-pure" />
                                    <h4 className="tp-category-content-title mt-0">Consulting</h4>
                                </div>
                            </div>
                            <div className="tp-category-content two">
                                <div className="tp-category-icon">
                                    <Image width={80} src={category_icon_5} alt="theme-pure" />
                                    <h4 className="tp-category-content-title mt-0">Software</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 order-3 order-md-2">
                        <div className="tp-category-content-wrapper d-flex">
                            <div className="tp-category-content three">
                                <div className="tp-category-icon">
                                    <Image width={80} src={category_icon_2} alt="theme-pure" />
                                    <h4 className="tp-category-content-title mt-0">Blockchain   </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 order-2 order-md-3">
                        <div className="tp-category-content-wrapper d-flex">
                            <div className="tp-category-content four">
                                <div className="tp-category-icon">
                                    <Image width={80} src={category_icon_4} alt="theme-pure" />
                                    <h4 className="tp-category-content-title mt-0">Designing</h4>
                                </div>

                            </div>
                            <div className="tp-category-content five">
                                <div className="tp-category-icon">
                                    <Image width={80} src={category_icon_1} alt="theme-pure" />
                                    <h4 className="tp-category-content-title mt-0">3D<br />Modeling </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-offer-all-btn text-center mt-50">
                            <p>Bring them together and you overcome the ordinary.
                                <Link href="/service">
                                    View More SErvice <span><i className="fa-regular fa-plus"></i></span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CategoryArea;