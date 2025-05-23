'use client'
import React from 'react';
/* eslint-disable camelcase */
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { Rating } from 'react-simple-star-rating'
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial_img_1 from "@/assets/img/testimonial/sm/testimonial-avater-2.png";
import testimonial_img_2 from "@/assets/img/testimonial/sm/testimonial-avater-3.png";
import testimonial_shape from "@/assets/img/testimonial/testimonial-2-shape-2.png";
import testimonial_quote from "@/assets/img/testimonial/testimonial-2-quote.png";
import testimonial_shape_1 from "@/assets/img/testimonial/testimonial-2-shape-1.png";
import rating_star from "@/assets/img/testimonial/sm/rating-star.svg";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface DataType {
  sub_title: string;
  title: string;
  // sm_info: string;
  testimonial_data: {
      id: number;
      img: StaticImageData;
      name: string;
      job_title: string;
      sm_des: string;
  }[];
}
const testimonial_content: DataType = {
  sub_title: "Testimonials",
  title: "What They're Tell About Our EZA-TECHnology",
  // sm_info: " System is a term used to refer to an organized collection symbols and processes that may be operate on such symbols. Perspiciatis omnis voupems accusa omnis error",
  testimonial_data: [
    {
      id: 1,
      img: testimonial_img_1,
      name: "Aliya",
      job_title: "Co-Founder",
      sm_des: "Users and experts praise EZA-TECHnology , for its innovative solutions, focusing on efficiency and user-friendly design, making it a standout in the tech industry. ",
    },
    {
      id: 2,
      img: testimonial_img_2,
      name: "Ayan",
      job_title: "Co-Founder",
      sm_des: "EZA-TECHnology ,'s commitment to excellence and customer satisfaction is evident, receiving praise for its transformative effect on businesses of all sizes.",
    },
    {
      id: 3,
      img: testimonial_img_1,
      name: "Muskan",
      job_title: "Co-Founder",
      sm_des: "EZA-TECHnology , is renowned for exceptional customer service, delivering high-quality products with personalized support. establishing it as a leader in the market",
    },
  ]

}
const { sub_title, title, testimonial_data } = testimonial_content

const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // Navigation arrows
  pagination: {
    el: ".tp-blog-main-slider-dot",
    clickable: true,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

const GET_TESTIMONIAL = gql`
query Testimonials {
  testimonials {
    email
    id
    name
    rating
    review
  }
}
`;

const TestimonialAreaHomeTwo = () => {

const { data, error, loading, refetch: refetchQueries } = useQuery(GET_TESTIMONIAL);

  return (
    <>
      <section className="testimonial-area tp-testimonial-two p-relative pb-0 pt-sm-fourty" style={{ backgroundImage: `url(/assets/img/testimonial/testimonial-2-bg-1.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-testimonial mb-40">
                <div className="tp-section tp-section-two mb-40">
                  <span className="tp-section-sub-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                    {sub_title}
                  </span>
                  <h4 className="tp-section-title wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".7s">
                    {title}
                  </h4>
                  {/* <div className="tp-section-title-wrapper wow fadeInUp" data-wow-duration="1.4s"
                    data-wow-delay=".9s">
                    <p>{sm_info}</p>
                  </div> */}
                </div>
                <div className="tp-testimonial-btn wow fadeInUp" data-wow-duration="1.6s" data-wow-delay="1.1s">
                  <p className="tp-btn">All Testimonials</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-testimonial-two-wrapper ml-70">
                <div className="tp-testimonial-two-slider">
                  <Swiper {...setting} loop={true} className="swiper-container tp-testimonial-two-active">
                    {data?.testimonials?.map((item: { img: string | StaticImport; rating: number | undefined; review: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, i: React.Key | null | undefined) =>
                      <SwiperSlide key={i} className="tp-testimonial-two-wrap mb-30">
                        <div className="tp-testimonial-two-item mb-20">
                          <div className="tp-testimonial-two-avater">
                            {/* <Image src={item.img} alt="image-title" /> */}
                          </div>
                          <div className="tp-testimonial-two-content">
                            <span><Image src={testimonial_quote} alt="image-title" /></span>
                            <div className="tp-testimonial-two-rating">
                            <Rating initialValue={item?.rating} size={20} />
                            </div>
                            <p>{item.review}</p>
                          </div>
                          <div className="tp-testimonial-two-quote">
                          </div>
                          <div className="tp-testimonial-two-shape">
                            <Image src={testimonial_shape_1} alt="image-title" />
                          </div>
                        </div>
                        <div className="tp-testimonial-two-avater-info ml-30">
                          <h5 className="tp-testimonial-two-avater-title">{item.name}</h5>
                          {/* <span>{item.job_title}</span> */}
                        </div>
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-testimonial-shape">
          <div className="tp-testimonial-two-shape-one">
            <Image src={testimonial_shape} alt="image-title" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeTwo;