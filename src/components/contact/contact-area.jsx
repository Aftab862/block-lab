import ContactForm from "@/src/forms/contact-form";
import EmailIconOne from "@/src/svg/email-icon-1";
import PhoneIcon from "@/src/svg/phone-icon";
import Image from "next/image";
import React from "react";
import logoImg from "@assets/img/logo/footer-logo.svg"
import {useMobile } from "@/src/hooks/mobile";



const ContactArea = () => {
  const isMobile= useMobile();
  return (
    <>
      <section className="tp-contact-area pt-50 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-lg-6 ${isMobile?"text-center" :""}`}>
                         
              <div className="tp-contact-wrapper">
                <div className="tp-contact-title-wrapper">
                  <h3 className="tp-contact-title">
                    Send us an  <span className="title-color">Email</span>
                  </h3>
                  <p>
                    Email, call, or complete the form to learn how Kion can{" "}
                    <br />
                    solve your cloud management and governance cha.
                  </p>
                </div>
                <div className={`${isMobile? "d-flex align-items-center flex-column":""} tp-contact-content`}>
                  <div className="tp-contact-content-mail d-flex align-items-center">
                    <div className="tp-contact-content-mail-icon">
                      <span>
                        <EmailIconOne />
                      </span>
                    </div>
                    <h3 className="tp-contact-item-title">
                      <a href="mailto:info@blocklabtech.com">
                        info@blocklabtech.com
                      </a>
                    </h3>
                  </div>


                  <div className="d-flex align-items-center mt-5 d-none d-md-block  justify-content-start ">
                    <Image src={logoImg} width={250} />
                  </div>
                  {/* <div className="tp-contact-content-phone d-flex align-items-center">
                    <div className="tp-contact-content-phone-icon">
                      <span>
                        <PhoneIcon />
                      </span>
                    </div>
                    <h3 className="tp-contact-item-title">
                      <a href="tel:9266688000">+880 123 456 789 , 99875</a>
                    </h3>
                  </div> */}
                  {/* <div className="tp-contact-location-wrapper d-flex">
                    <div className="tp-contact-location">
                      <h3 className="tp-contact-location-title">
                        Office Location
                        <i className="fa-regular fa-arrow-down"></i>
                      </h3>
                      <p>4517 Washington Ave. Manch ester, Kentucky 39495</p>
                    </div>
                    <div className="tp-contact-location">
                      <h3 className="tp-contact-location-title">
                        Office Location{" "}
                        <i className="fa-regular fa-arrow-down"></i>
                      </h3>
                      <p>4517 Washington Ave. Manch ester, Kentucky 39495</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-contact-form">
                {/* <h3 className="tp-contact-title ">
                  Contact <span className="title-color"> Us</span>
                </h3>
                <p>
                  Your email address will not be published. Required fields{" "}
                  <br /> are marked *
                </p> */}
                <ContactForm />
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
