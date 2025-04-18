'use client'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';


import footer_logo from "@/assets/img/logo/EZAS Tech-023.png";
import footer_red_logo from "@/assets/img/logo/EZAS Tech-023.png";
import footer_gallery_img_1 from "@/assets/img/footer/one/gallery/fw-g-1.jpg";
import footer_gallery_img_2 from "@/assets/img/footer/one/gallery/fw-g-2.jpg";
import footer_gallery_img_3 from "@/assets/img/footer/one/gallery/fw-g-3.jpg";
import footer_gallery_img_4 from "@/assets/img/footer/one/gallery/fw-g-4.jpg";
import footer_gallery_img_5 from "@/assets/img/footer/one/gallery/fw-g-5.jpg";
import footer_gallery_img_6 from "@/assets/img/footer/one/gallery/fw-g-6.jpg";
import SocialLinks, { CopyRight } from '@/components/common/SocialLinks';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
interface DataType {
  footer_info: string;
  footer_contact_data: {
    id: number;
    link: string;
    icon: string;
    contact_info: string;
  }[];
  footer_link_title: string;
  footer_link: string[];
  gallery_title: string;
  gallery_images: StaticImageData[];
  subscribe_title: string;
  subscribe_info: string;
}
const footer_one: DataType = {
  footer_info: "We are driven by an unwavering passion for tackling challenges and pushing the boundaries of creativity, constantly redefining new possibilities in the advertising industry.",
  footer_contact_data: [
    {
      id: 1,
      link: "tel:",
      icon: "fa-solid fa-square-phone",
      contact_info: "UK +44 7576 5855 12",
    },
    {
      id: 2,
      link: "tel:",
      icon: "fa-solid fa-square-phone",
      contact_info: "UK +44 7471 0958 53",
    },
    // {
    //   id: 3,
    //   link: "tel:",
    //   icon: "fa-solid fa-square-phone",
    //   contact_info: "UK +44 7554 405359",
    // },
    // {
    //   id: 4,
    //   link: "tel:",
    //   icon: "fa-solid fa-square-phone",
    //   contact_info: "+1 (281) 885-8538",
    // },
    // {
    //   id: 5,
    //   link: "tel:",
    //   icon: "fa-solid fa-square-phone",
    //   contact_info: "+44 2045 321133",
    // },
    // {
    //   id: 6,
    //   link: "tel:",
    //   icon: "fa-solid fa-square-phone",
    //   contact_info: "+1 (205) 588-4732",
    // },
    {
      id: 7,
      link: "mailto:",
      icon: "fa-solid fa-envelope",
      contact_info: "info@eza-tech.com",
    },
    {
      id: 8,
      link: "#",
      icon: "fa-solid fa-location-dot",
      contact_info: "Parchmore road, Thorntonheath, CR7 8HA",
    },
  ],
  footer_link_title: "Official Info",
  footer_link: [
    "Subscribe our newsletter to get our latest update & news.",
  ],
  // subscribe_title: "Subscribe",
  // subscribe_info: "Our expertise, as well as our passion for web design, sets us agenciese",
  subscribe_title: "Newsletter",
  subscribe_info: "Subscribe our newsletter to get our latest update & news.",
  gallery_title: "Our Gallery",
  gallery_images: [
    footer_gallery_img_1,
    footer_gallery_img_2,
    footer_gallery_img_3,
    footer_gallery_img_4,
    footer_gallery_img_5,
    footer_gallery_img_6,
  ],

}
const { footer_info, footer_contact_data, footer_link_title, footer_link, gallery_title, gallery_images, subscribe_title, subscribe_info } = footer_one

const FooterOne = ({ style, style_inner }: any) => {
  const openFacebook = () => {
    window.open('https://www.facebook.com/share/1BHiSHWYqa/', '_blank');
  };
  const openInstagram = () => {
    window.open('https://www.instagram.com/eza.tech/', '_blank');
  };
  const openLinedin = () => {
    window.open('https://www.linkedin.com/company/ezatech/', '_blank');
  };
  return (
    <>
      <footer>
        <div className={`"footer-area ${style ? "tp-footer-red theme-bg-2" : ""}`}>
          <div className={`tp-footer-top ${style_inner ? "tp-footer-inner" : ""} pt-30 pt-sm-fourty theme-bg`} style={{ backgroundImage: `url(/assets/img/footer/one/footer-bg-1.jpg)` }}>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="tp-footer-widget footer-col-1 mb-40 wow fadeInUp" data-wow-duration="1s"
                    data-wow-delay=".4s">
                    <div className="tp-footer-widget-logo">
                      <Link href="/">
                        {style ?
                          <Image src={footer_red_logo} alt="fw-logo" width="250" height="170" />
                          :
                          <Image src={footer_logo} alt="fw-logo" width="250" height="170" />
                        }
                      </Link>
                    </div>
                    <div className="tp-footer-widget-content">
                      <p>{footer_info}</p>


                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="tp-footer-widget tp-footer-col-2 mb-40 wow fadeInUp" data-wow-duration="1.2s"
                    data-wow-delay=".6s">
                    <h4 className="tp-footer-widget-title mb-30">{footer_link_title}</h4>
                    <div className="tp-footer-widget-link">
                      <ul>
                        <div className="tp-footer-widget-content-list">
                          {
                            footer_contact_data.map((item, i) => (
                              <div key={i} className="tp-footer-widget-content-list-item">
                                <i className={item.icon}></i>
                                {item.id === 8 ? (
                                  <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.contact_info)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {item.contact_info}
                                  </a>
                                ) : (
                                  <Link href={item.link}>{item.contact_info}</Link>
                                )}
                              </div>
                            ))
                          }

                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="tp-footer-widget tp-footer-col-3 mb-40 wow fadeInUp" data-wow-duration="1.4s"
                    data-wow-delay=".8s">
                    <h4 className="tp-footer-widget-title mb-40">{gallery_title}</h4>
                    <div className="tp-footer-widget-gallery">
                      <div className="tp-footer-widget-gallery-all">
                        {gallery_images.map((gallery_img, gallery_index) =>
                          <div key={gallery_index} className="tp-footer-widget-gallery-single-item">
                            <a href="#" className="tp-footer-widget-gallery-item">
                              <div className="tp-footer-widget-gallery-thumb">
                                <Image src={gallery_img} alt="image-title" />
                                <div className="tp-footer-widget-gallery-social">
                                  <i className="fa-brands fa-linkedin-in"></i>
                                </div>
                              </div>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <div className="tp-footer-widget tp-footer-col-4 mb-40 wow fadeInUp" data-wow-duration="1.6s"
                    data-wow-delay="1s">
                    <h4 className="tp-footer-widget-title mb-20">{subscribe_title}</h4>
                    <div className="tp-footer-widget-newsletter-wrap">
                      <form onSubmit={e => e.preventDefault()}>
                        <div className="tp-footer-widget-newsletter-wrapper">

                          <div className="tp-footer-widget-newsletter-submit">
                            <button>
                              {/* <i className="fa-regular fa-arrow-right"></i> */}
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="tp-footer-widget-newsletter-content">
                        <p>{subscribe_info}</p>
                        <div className="tp-footer-widget-newsletter-social">
                          <div style={{ marginRight: "20px" }} className=' d-inline'>

                            <FaFacebookF onClick={openFacebook} size={17} className='we2 ' />
                          </div>
                          <div className='d-inline'>

                            <FaInstagram onClick={openInstagram} size={17} className='we2' />
                          </div>
                          <div style={{ marginLeft: "20px" }} className='d-inline'>

                            <FaLinkedinIn onClick={openLinedin} size={17} className='we2' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-bottom errt3" >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="tp-footer-copyright ">
                    <CopyRight />
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-5">
                  <div className="tp-footer-terms">
                    <Link href="#">Terms of Use</Link>
                    <Link href="#">Privacy Policy</Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;