'use client'
import React from 'react';
import Image from 'next/image';

import about_shape_1 from "@/assets/img/about/three/about-3-thumb-1.jpg";
import about_shape_2 from "@/assets/img/about/three/about-3-thumb-2.jpg";
import about_shape_3 from "@/assets/img/about/three/about-3-shape-1.jpg";
import about_shape_4 from "@/assets/img/icon-circle-text.png";
import { useInView } from 'react-intersection-observer';

import check_icon from "@/assets/img/icon/check-icon-2.svg";
import Link from 'next/link';
interface DataType {
  sub_title: string;
  title: string;
  info: string;
  solution_info: {
      id: number;
      icon: string;
      text: React.JSX.Element;
  }[];
  solution_list: string[];
}

const solution_content: DataType = {
  sub_title: "Technology Solution",
  title: "For Your Specific Industry We Have Smart Idea",
  info: "Sed et aliquam lectus. Etiam id augue lectus. Suspendisse eget orci convallis, dignissim nibh eget, blandit lacus. Cras suscipit negestas consequat, augue leo porttitor est placerat dui eros non",
  solution_info: [
    {
      id: 1,
      icon: "flaticon-technical-support",
      text: <>Moneyback <br /> Guarantee</>,
    },
    {
      id: 2,
      icon: "flaticon-optimization",
      text: <>Technical <br /> Support</>,
    },
  ],
  solution_list: [
    "Sed do eiusmod tempor incidi-dunt ut labore",
    "Donec laoreet leo a ullamcorper ornar",
  ]


}
const {   solution_info, solution_list } = solution_content

const about_content = {
  project_title: "Project Completed",
  project_count: "230+",
  sub_title: "About Our Company",
  title:"",
  info: <>Welcome to EZA where imagination and expertise collide in the profession of web development, web design, and information technology. Our commitment lies in providing businesses of all sizes with exceptional digital solutions that enable them to prosper in the rapidly evolving digital realm
</>,
  title_2: "Deliver awesome idea",
  info_2: <>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusm</>,
  list_1: "Efficient Budget Allocation",
  list_2: "Faster Than The Market",
  list_3: "Coding Years Saved",
  customar_count: 2500,
  customar_title: <>Satisfied <br /> Customer</>
}
const {project_count, project_title, sub_title, title, info, title_2, info_2, list_1, list_2,list_3, customar_count, customar_title} = about_content

const AboutAreaHomeThree = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div ref={ref}>
      <section className={inView ?"about-area pt-115 tp-about-3 pb-60 pb-sm-zero zoom-ins":"about-area pt-115 tp-about-3 pb-60 pb-sm-zero zoom-outs"}>
        <div className="container">
          <div className="row" >
            <div className={inView ?"col-lg-5 col-md-8 col-sm-10 slide-in-rights":"col-lg-5 col-md-8 col-sm-10"}>
              <div className="tp-about-3-wrap">
                <div className="tp-about-3-thumb-1 tp-thumb-common fix mb-30 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                  <div className="tp-thumb-common-overlay wow"></div>
                  <Image src={about_shape_1} style={{ height: 'auto'}} alt="image-title" />
                  <div >
                  <Image className='asew2' style={{position:"absolute",bottom:"54%",left:"11%",height: 'auto'}} src={about_shape_4}  alt="image-title" />
                    <span className='ery2'>EZA</span>
                  </div>
                </div>
                <div className="tp-about-3-thumb-2 wow fadeInLeft tp-thumb-common fix" data-wow-duration="1s" data-wow-delay=".5s">
                  <div className="tp-thumb-common-overlay wow"></div>
                  <Image src={about_shape_2} style={{ height: 'auto'}} alt="image-title" />
                </div>
                <div className="tp-about-3-shape-1">
                  <Image src={about_shape_3} alt="image-title" />
                </div>
                <div className="tp-about-3-project">
                  <span>{project_title}</span>
                  <h3 className="tp-about-3-project-title">{project_count}</h3>
                </div>
              </div>
            </div>
            <div className={inView ?"offset-lg-1 col-lg-6 slide-in-left":"offset-lg-1 col-lg-6"}>
              <div className="tp-about-3-wrapper mb-50 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                <div className="tp-section tp-section-3 mb-30">
                  <span className="tp-section-sub-title2 mb-5" style={{fontSize:"35px",fontWeight:900}}>{sub_title}</span>
                  {/* <h4 className="tp-section-title">{title}</h4> */}
                  <div className="tp-section-title-wrapper">
                    <p style={{marginTop:"4%"}}>{info}</p>
                  </div>
                </div>
                {/* <div className="tp-about-3-list mb-45">
                  <ul>
                    <li><span><Image src={check_icon} alt="image-title" /></span>{list_1}</li>
                    <li><span><Image src={check_icon} alt="image-title" /></span>{list_2}</li>
                    <li><span><Image src={check_icon} alt="image-title" /></span>{list_3}</li>
                  </ul>
                </div> */}
                  <div className="tp-solution-info mb-50">
                  <ul>
                    {solution_info.map((item, i) =>
                      <li key={i}>
                        <div className="tp-solution-info-item d-flex align-items-center">
                          <div className="tp-solution-info-icon">
                            <i className={item.icon}></i>
                          </div>
                          <div className="tp-solution-info-content">
                            <h4 className="tp-solution-info-title">{item.text}</h4>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="tp-about-3-details  d-flex align-items-center">
                  <div className="tp-about-3-btn">
                    <Link className="tp-btn" href="/contact">Contact Us</Link>
                  </div>
                  <div className="tp-about-3-customar d-flex align-items-end">
                    {/* <li className='fas fa-phone mb-2 fs-4 me-3'>
                      
                    </li>
                    <h4 className="" style={{fontSize:"20px", marginRight:"10px"}}>UK +44 7471 0958 53</h4> */}
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

export default AboutAreaHomeThree;