"use client"
import Link from 'next/link';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from 'swiper';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import slugify from 'slugify';

interface DataType {
  id: number;
  capital: string;
  icon: string;
  title: string;
  duration: string;
}[]

const feature_data = [
  {
    id: 1,
    capital: "G",
    icon: "flaticon-ux-design",
    title: `UI / UX  Design`,
    duration: ".6s",
      span:1,
    },
  {
    id: 2,
    capital: "B",
    icon: "flaticon-consultant",
    title: "Web Development",
    duration: ".5s",
    span:2,

  },
  {
    id: 3,
    capital: "W",
    icon: "flaticon-data-visualization",
    title: "App Development",
    duration: ".4s",
    span:3,

  },
  {
    id: 4,
    capital: "U",
    icon: "flaticon-search-engine",
    title: "Artificial Intelligence",
    duration: ".5s",
    span:4,
  },
  {
    id: 5,
    capital: "S",
    icon: "flaticon-technical-support",
    title: "Machine Learning",
    duration: ".6s",
    span:5,

  },
  {
    id: 6,
    capital: "S",
    icon: "flaticon-ux-design",
    title: "AI Development",
    duration: ".6s",
    span:6,

  },
  {
    id: 7,
    capital: "S",
    icon: "flaticon-search-engine",
    title: "Database  Development",
    duration: ".6s",
    span:7,

  },
  

];

const FeatureAreaHomeThree = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div ref={ref}>
      <div>

      <div className="Our" style={{ textAlign: "center", paddingTop: '40px' }}>
        <h3 className='sets3'> Our Services </h3>
        <h1 style={{ padding: "2px", color: "black", textAlign: "center", marginTop: "10px" }}>We are dedicated to <br />serve <span className='set2'>YOU</span></h1>
      </div>
      <section className="feature-area tp-feature-3-bg" style={{ backgroundImage: `url(/assets/img/feature/three/feature-3-bg-1.jpg)`, marginTop: "150px", minHeight: "150px" }}>
        <div className="container" style={{ position: "relative", bottom: "220px" }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-feature-3-wrapper d-flex align-items-center  justify-content-between">
          
 {feature_data.map((item, i) => (
  <div 
    key={i} 
    className="tp-feature-3-item  mb-60 wow bounceIn"
    data-wow-duration={item.duration} 
    data-wow-delay={item.duration}
  >
    {/* Feature Icon or Symbol */}
    <span className='sar3'>
      {item?.span}
    </span>
    <div className="tp-feature-3-item-icon">
      <i className={item.icon}></i>
    </div>

    {/* Feature Content */}
    <div className="tp-feature-3-item-content">
      <Link href={`/${slugify(item?.title?.toString() || '', { lower: true })}`}>
        <h3 style={{ fontSize: "16px", display: "block" }} className="tp-feature-3-item-title">
          {item.title}
        </h3>
      </Link>
      <span>{item.capital}</span>
    </div>
  </div>
))}

{/* </Swiper> */}
              </div>
            </div>
           </div>
       
          <div className="row">
            <div className="col-12">
              <div className="tp-feature-3-details text-center">
                <span>Tailored IT services designed exclusively for your needs.
                  {/* <Link href="/services-details">Find your solution</Link> */}
                </span>
              </div>
            </div>
          </div>
          {/* <div className='row justify-content-center'>
            <div className="col-2 text-center ">
              <div onClick={() => swiperRef.current?.slidePrev()} className="hero-button-prev "><FaArrowLeft className='asd4' /></div>
            </div>
            <div className="col-2  text-center ">
              <div onClick={() => swiperRef.current?.slideNext()} className="hero-button-next"><FaArrowRight className='asd4' /></div>
            </div>
          </div> */}
        </div>
      </section>
      </div>
    </div>
  );
};

export default FeatureAreaHomeThree;
