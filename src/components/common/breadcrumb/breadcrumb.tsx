"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import shape_img_1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_img_2 from "@/assets/img/breadcrumb/breadcrumb-shape-3.png";
import shape_img_3 from "@/assets/img/breadcrumb/breadcrumb-shape-2.png";
import { useInView } from 'react-intersection-observer';

type DataType = {
  top_title: string;
  title: string;
}

const Breadcrumb = ({ top_title, title }: DataType) => {
  const [clientOnly, setClientOnly] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    setClientOnly(true);
  }, []);

  if (!clientOnly) {
    return null; 
  }

  return (
    <div ref={ref}>
      <section className={inView ? "zoom-ins breadcrumb-area breadcrumb-wrap" : "breadcrumb-area breadcrumb-wrap zoom-outs"}>
        <div className="breadcrumb-bg" style={{ backgroundImage: `url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)` }}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="tpbreadcrumb">
                <div className="breadcrumb-link mb-15">
                  <span className="breadcrumb-item-active">
                    <Link href="/">Home</Link></span>
                  <span> / {top_title}</span>
                </div>
                <h2 className="heae">
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-shape">
          <div className="breadcrumb-shape-1 wow fadeInRight " data-wow-duration="1.8s" data-wow-delay=".4s">
            <Image src={shape_img_1} alt="image-title" />
          </div>

          <div className="breadcrumb-shape-4 wow slideInRight" data-wow-duration="1.2s" data-wow-delay=".1s">
            <Image src={shape_img_2} alt="image-title" className='sdfsf2'/>
          </div>
          <div className="breadcrumb-shape-5 wow slideInRight" data-wow-duration="1.4s" data-wow-delay=".3s">
            <Image src={shape_img_3} alt="image-title" className='sdfsf2'/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Breadcrumb;
