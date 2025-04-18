'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar_img from "@/assets/img/about/one/avatar-1.png";
import video_img_1 from "@/assets/img/about/five/about-5-thumb-1.jpg";
import video_img_2 from "@/assets/img/about/five/about-5-thumb-2.jpg";
import { useInView } from 'react-intersection-observer';

const video_content = {
  call_text: "Best Awarded Company",
  phone: "We adapt our delivery to the way your work, whether as an external provider.",
  sub_title: "",
  title: "We're Partner of Your Innovations",
  info: "EZA-TECHnology has been optimized to give your visitors the best experience in terms of UX/UI, with a unique design.",
  // title_info: "Lorem ipsum is simply free text dolor sit <br /> am adipi we daily ipsum",
  // feature_1: "Perspiciatis omnis natus error",
  // feature_2: "Donec gravida imperdie",
  // name: "Harry Newman",
  // job_title: "Co Founder",
}
const { call_text, phone, sub_title, title, info} = video_content

const VideoAreaHomeFive = ({style, onPageStyle} : any) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div ref={ref}> 
      <section id="about-one-page" className={`video-area ${style ? "tp-benifits-inner pt-120 pt-sm-fourty" : "tp-benifits-4"} ${onPageStyle? "pt-80" : ""}`}>
        <div className="container">
          <div className="row">

            <div className={inView ?"slide-in-rights col-xxl-7 col-xl-6 col-lg-6 order-2 order-lg-1":"col-xxl-7 col-xl-6 col-lg-6 order-2 order-lg-1"}>
              <div className="tp-benifits-5-thumb">
                <div className="tp-benifits-5-thumb-1">
                  <Image src={video_img_1} alt="theme-pure" />
                </div>
              </div>
            </div>

            <div className={inView ?"slide-in-left col-xxl-5 col-xl-6 col-lg-6 order-1 order-lg-2":"col-xxl-5 col-xl-6 col-lg-6 order-1 order-lg-2"}>
              <div
                className="tp-video-two-wrapper p-relative pb-120 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".6s"
              >
                <div
                  className={`tp-section ${
                    style ? "" : "tp-section-red"
                  } mb-35`}
                >
                  {/* <span className="tp-section-sub-title">{sub_title}</span> */}
                  <h4 className="tp-section-title">{title}</h4>
                  <div className="tp-section-title-wrapper">
                    <p>{info}</p>
                  </div>
                </div>
                <div>
                  <div className="tp-benifits-5-thumb-2 overlay-anim">
                    <div
                      className={`${
                        style
                          ? "tp-thumb-common-overlay"
                          : "tp-thumb-common-overlay-red"
                      } wow`}
                    ></div>
                    <Image src={video_img_2} alt="theme-pure" className="custom-w" />
                  </div>
                  <div className="tp-benifits-5-wrap">
                    <div className="tp-benifits-5-contact">
                      <div className="tp-benifits-5-contact-icon">
                        <i
                          className="fa-solid fa-award"
                          style={{ fontSize: "40px" }}
                        ></i>
                      </div>
                      <div className="tp-benifits-5-contact-content">
                        <h5 className="tp-about-avatar-title">{call_text}</h5>
                        {/* <span>{call_text}</span>*/}
                        <a href="#">{phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoAreaHomeFive;