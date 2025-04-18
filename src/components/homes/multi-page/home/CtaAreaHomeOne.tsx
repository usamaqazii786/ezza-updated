"use client"
import Link from 'next/link'; 
import React from 'react';
import { useInView } from 'react-intersection-observer';

type  DataType = {
  title: string;
  btn_text: string;
}


const cta_content: DataType = {
  title: "EZA-TECHnology Always Ready For Solve Your Problem",
  btn_text: "Contact Us",
}
const {title, btn_text}  = cta_content

const CtaAreaHomeOne = ({style} : any) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div ref={ref}>
      <section className={inView?`zoom-ins cta-area ${style ? "mb-40" : "mb-40"}`:`zoom-outs cta-area ${style ? "mb-40" : "mb-40"}`}>
        <div className="container">
          <div className="tp-cta-bg uus wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" 
          style={{ backgroundSize: "cover"}}>
            <div className="row align-items-center">
              <div className={inView?"slide-in-rights col-xl-5 col-lg-6 col-md-7":"col-xl-5 col-lg-6 col-md-7"}>
                <div className="tp-cta-wrapper">
                  <h4 className="tp-cta-title">{title}</h4>
                </div>
              </div>
              <div className={inView?"slide-in-left col-xl-7 col-lg-6 col-md-5":"col-xl-7 col-lg-6 col-md-5"}>
                <div className="tp-cta-btn">
                  <Link href="/contact" className="tp-btn">{btn_text}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CtaAreaHomeOne;

 
