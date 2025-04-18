"use client"
import React from 'react';
import Image from 'next/image';
import ContactForm from '../forms/ContactForm';
import main_bg from "@/assets/img/thumbs/contact-main-bg-1.jpg";
import { useInView } from 'react-intersection-observer';

const contact_content = {
  sub_title: "Contact Us",
  title: "Grow Your Business With Our Expertise",
  info: "We understand the importance of approaching each work integrally and believe in the power of simple.",
  location_data: [
    {
      id: 1,
      location_title: "United Kingdom",
      address: "Parchmore road, Thorntonheath, CR7 8HA",
      phone: "UK +44 7471 0958 53",
      phone2: "UK +44 7554 4053 59",
      phone3: "UK +44 7576 5855 12",

      email: "info@eza-tech.com",
    },
    // {
    //   id: 2,
    //   location_title: "Australia",
    //   address: "Sydne 45 Broklyn",
    //   phone: "+1-365-857-0467",
    //   email: "info@tecz.com",
    // },
  ]
}
const { sub_title, title, info, location_data } = contact_content

const ContactArea = ({ style }: any) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div ref={ref}>
      <section id="contact-one-page" className={inView ? `zoom-ins contact-area pt-115 pt-sm-fourty ${style ? "pb-25" : "pb-80 pb-sm-thirty"}` : `contact-area pt-115 pt-sm-fourty zoom-outs ${style ? "pb-25" : "pb-80 pb-sm-thirty"}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className={inView ? "slide-in-rights tp-contact-main mb-40 " : "tp-contact-main mb-40"}>
                <div className="tp-section tp-section-two mb-25">
                  <span className="tp-section-sub-title"><i className="flaticon-edit"></i>{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div className="tp-contact-main-thumb mb-40 w-img d-flex flex justify-center md:justify-between items-center gap-1">

                  <div
                    className="flex-1 max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                    <Image
                      src={main_bg}
                      alt={`image`}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div
                    className="flex-1 max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                    <Image
                      src={main_bg}
                      alt={`image`}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div
                    className="flex-1 max-w-[150px] md:max-w-[200px] lg:max-w-[250px]">
                    <Image
                      src={main_bg}
                      alt={`image`}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="tp-contact-location-wrap d-flex align-items-center">
                  {location_data.map((item, i) =>
                    <div key={i} className={`tp-contact-location ${i === 1 ? "ml-40" : ""}`}>
                      <span className="tp-contact-location-title">{item.location_title}</span>
                      <a href="https://maps.google.com/maps?q={latitude},{longitude}" target="_blank"><i className="fa-light fa-location-dot"></i>{item.address}</a>
                      <a href="tel:+447539305980"><i className="fa-light fa-phone"></i>{item.phone}</a>
                      <a href="tel:+447539305980"><i className="fa-light fa-phone"></i>{item?.phone2}</a>
                      <a href="tel:+447539305980"><i className="fa-light fa-phone"></i>{item?.phone3}</a>


                      <a href="mailto:info@eza-tech.com"><i className="fa-light fa-envelope"></i>{item.email}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-xl-6 col-lg-6">
              <div className={inView ? "slide-in-left tp-contact-details-form mb-40 rty22" : "tp-contact-details-form mb-40 rty22"}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactArea;