"use client"
import React from 'react';
import Image from 'next/image';
import img1 from "@/assets/img/bg/faq-1.jpg";
import { useInView } from 'react-intersection-observer';
import Showless from '../../../common/Showless'
export default function Home3TeamSec() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div ref={ref}>
      <div className={inView ?"zoom-ins container":"container zoom-outs"}>
        <div className="row mt-3 mb-3">
          <div className="col-md-6">
          <div className="rtyw ">

            <span className='d-block erts2'>OUR TEAM MEMBERS</span>
            <span className='d-block erts3'>Meet our professional
            team members</span>
            </div>

          </div>
          <div className="col-md-6">
            <div className="rtyw mt-3">
              {/* <Showless content=""/> */}

            <span className='d-block erts4'>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe looking impression on visitors.</span>
            </div>

          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="sd4">

            <div className="image-wrapper">
              <Image src={img1} className={'fwer'} alt="image-title" />
       
            </div>
              <div className="row yxz">
                <div className="col-md-12">
                  <span className='trg1 d-block'>Jessica Brown</span>
                  <span className='trg2 d-block'> Manager</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="sd4">

            <div className="image-wrapper">
              <Image src={img1} className={'fwer'} alt="image-title" />
       
            </div>
              <div className="row yxz">
                <div className="col-md-12">
                  <span className='trg1 d-block'>Kevin Martin</span>
                  <span className='trg2 d-block'> Manager</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="sd4">

            <div className="image-wrapper">
              <Image src={img1} className={'fwer'} alt="image-title" />
       
            </div>
              <div className="row yxz">
                <div className="col-md-12">
                  <span className='trg1 d-block'>Christine Eve</span>
                  <span className='trg2 d-block'> Manager</span>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="sd4">

            <div className="image-wrapper">
              <Image src={img1} className={'fwer'} alt="image-title" />
       
            </div>
              <div className="row yxz">
                <div className="col-md-12">
                  <span className='trg1 d-block'>Dawid Smith</span>
                  <span className='trg2 d-block'> Manager</span>

                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
