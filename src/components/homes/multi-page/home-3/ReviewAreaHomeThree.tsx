"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";

import review_thumb from "@/assets/img/thumbs/review-thumb-1.jpg";

import rating_avatar_1 from "@/assets/img/team/avatar/rating-avatar-1.png";
import rating_avatar_2 from "@/assets/img/team/avatar/rating-avatar-2.png";
import rating_avatar_3 from "@/assets/img/team/avatar/rating-avatar-3.png";
import rating_avatar_4 from "@/assets/img/team/avatar/rating-avatar-4.png";
import rating_avatar_5 from "@/assets/img/team/avatar/rating-avatar-5.png";
import rating_avatar_6 from "@/assets/img/team/avatar/6.jpg";
import rating_avatar_7 from "@/assets/img/team/avatar/7.jpg";
import rating_avatar_8 from "@/assets/img/team/avatar/8.jpg";
import rating_avatar_9 from "@/assets/img/team/avatar/9.jpg";
import rating_avatar_10 from "@/assets/img/team/avatar/10.jpg";
import rating_avatar_11 from "@/assets/img/team/avatar/11.jpg";
import rating_avatar_12 from "@/assets/img/team/avatar/12.jpg";
import rating_avatar_13 from "@/assets/img/team/avatar/13.jpg";
import rating_avatar_14 from "@/assets/img/team/avatar/14.jpg";
import rating_avatar_15 from "@/assets/img/team/avatar/15.jpg";

const review_content = {
  sub_title: "Our Client Reviews",
  title: "What Our Clients Saying About EZA-TECHnology",
  slider_data: [
    {
      id: 1,
      name: "Frinkal Jhon",
      job_title: "David Backhum",
      info: "EZA-TECHnology stands out for providing exceptional service that exceeds expectations. Their team comprises highly knowledgeable professionals who are not only responsive but also consistently go the extra mile to ensure customer satisfaction. What truly sets them apart is their unwavering commitment to delivering high-quality work on time, every time. I have personally been consistently impressed by the caliber of their work and their dedication to meeting deadlines without compromising on quality. Based on my experience, I wholeheartedly recommend EZA-TECHnology for all your technology needs. Their expertise, reliability, and customer-centric approach make them a valuable partner for any organization looking to leverage technology for success.",
    },
    {
      id: 2,
      name: "Amelia",
      job_title: "David Backhum",
      info: "Clients express high levels of satisfaction with EZA-TECHnology, lauding their software solutions for their effectiveness and reliability. Their consistent performance and reliability earn them praise from clients across various industries. EZA-TECHnology' dedication to delivering dependable software solutions is evident in the positive feedback received from satisfied customers. The effectiveness of their solutions consistently meets the expectations of clients, contributing to their high satisfaction levels. With a focus on reliability, EZA-TECHnology maintains its reputation as a trusted provider in the software industry. Clients appreciate the peace of mind that comes with knowing they can rely on EZA-TECHnology for their software needs.",
    },
    {
      id: 3,
      name: "Jackson",
      job_title: "David Backhum",
      info: "EZA-TECHnology is renowned for its profound expertise spanning across various cutting-edge technologies and industries. With a keen understanding of diverse client requirements, they specialize in offering tailored solutions that precisely cater to unique business needs. Their extensive knowledge and experience enable them to navigate complex technological landscapes effortlessly, ensuring clients receive solutions that are not only innovative but also highly effective. EZA-TECHnology' commitment to staying abreast of the latest advancements in technology and industry trends empowers them to deliver forward-thinking solutions that drive success for their clients. Their ability to adapt and customize solutions sets them apart as a trusted partner for businesses seeking reliable and strategic technological support.",
    },
    {
      id: 4,
      name: "Lily",
      job_title: "David cap",
      info: "Clients consistently express their gratitude for the responsive and attentive customer service offered by EZA-TECHnology, which leaves them feeling valued and supported throughout the entire project lifecycle. The team at EZA-TECHnology prioritizes client satisfaction, ensuring that each client's needs are not only met but exceeded. Their proactive approach to communication and problem-solving fosters a sense of trust and partnership, leading to successful project outcomes. Clients appreciate the dedication and professionalism demonstrated by EZA-TECHnology' staff, who are always available to address any concerns or questions that may arise. This commitment to exceptional customer service sets EZA-TECHnology apart as a reliable and trusted partner in the technology industry, earning them praise and loyalty from their clients.",
    },
    {
      id: 5,
      name: "Mr Ayyan",
      job_title: "David lap",
      info: "EZA-TECHnology garners recognition for its innovative approach to problem-solving, consistently pushing the boundaries of technology with cutting-edge solutions. Their commitment to innovation drives them to explore new ideas and methodologies, ensuring that they stay ahead of the curve in a rapidly evolving technological landscape. Clients appreciate EZA-TECHnology' forward-thinking mindset, as it allows them to address complex challenges with creative and effective solutions. By embracing emerging technologies and techniques, EZA-TECHnology continues to set new standards for excellence in the industry, earning the trust and admiration of clients and peers alike. Their track record of delivering groundbreaking solutions underscores their position as a leader in the technology sector, inspiring confidence in their ability to tackle even the most daunting of tasks.",
    },
    {
      id: 6,
      name: "Charlie",
      job_title: "David carry",
      info: "While occasional delays may be mentioned by some clients, overall, EZA-TECHnology consistently strives to deliver projects within reasonable timeframes, ensuring that deadlines are met to the best of their ability. The team at EZA-TECHnology prioritizes effective project management and communication to minimize any potential delays and keep clients informed throughout the process. Despite challenges that may arise, they maintain a proactive approach to problem-solving, working diligently to meet project milestones and deliver results that align with client expectations. Clients appreciate EZA-TECHnology' commitment to transparency and accountability, as it fosters trust and collaboration throughout the project lifecycle. By balancing efficiency with quality, EZA-TECHnology demonstrates their dedication to client satisfaction and project success.",
    },
    {
      id: 7,
      name: "Abigail",
      job_title: "David lps",
      info: "EZA-TECHnology is widely praised for its strength in effective communication, as clients consistently highlight the clear and frequent updates provided throughout the project lifecycle. This commitment to transparent and proactive communication ensures that clients are well-informed about the progress, challenges, and any necessary adjustments, fostering trust and collaboration. By keeping clients in the loop at every stage, EZA-TECHnology demonstrates their dedication to meeting client expectations and delivering successful outcomes. This emphasis on communication not only enhances project transparency but also allows for timely feedback and course corrections, ultimately contributing to the overall satisfaction of clients.",
    },
    {
      id: 8,
      name: "George",
      job_title: "David",
      info: "Clients consistently express satisfaction with the value proposition offered by EZA-TECHnology, noting that the services provided represent excellent value for money considering the high quality of work delivered. This sentiment underscores the perception that EZA-TECHnology effectively balances cost-effectiveness with the caliber of their services, resulting in a favorable return on investment for clients. By delivering results that exceed expectations while remaining competitive in pricing, EZA-TECHnology establishes itself as a trusted partner for clients seeking both quality and affordability. This recognition of value further strengthens the reputation of EZA-TECHnology as a preferred choice in the technology services market.",
    },
    {
      id: 9,
      name: "Noah",
      job_title: "Backhum",
      info: "EZA-TECHnology consistently earns the trust and loyalty of its clients, as evidenced by many expressing a desire to continue working with the company on future projects. This strong sentiment reflects the high level of satisfaction and confidence clients have in EZA-TECHnology' services. The company's commitment to excellence, reliability, and customer satisfaction fosters long-term partnerships built on trust and mutual success. Clients value the expertise, professionalism, and dedication of the EZA-TECHnology team, making them a preferred choice for ongoing collaboration. This positive feedback underscores EZA-TECHnology' reputation as a trusted and reliable partner in delivering innovative and effective technology solutions.",
    },
    {
      id: 10,
      name: "Evelyn",
      job_title: "David Backhum",
      info: "Clients consistently express appreciation for EZA-TECHnology' adeptness in tailoring solutions to their specific requirements, enabling a personalized approach that effectively addresses unique business needs. This capability underscores EZA-TECHnology' commitment to understanding the intricacies of each client's operations and challenges, ensuring that the solutions provided align closely with their objectives and workflows. By customizing solutions, EZA-TECHnology not only enhances efficiency but also fosters a deeper level of engagement and satisfaction among clients. This personalized approach reflects the company's dedication to delivering value-added services that go beyond generic solutions, ultimately contributing to the success and growth of their clients' businesses.",
    },
    {
      id: 11,
      name: "Alfie",
      job_title: "David Backhum",
      info: "EZA-TECHnology' software solutions receive consistent praise for their exceptional scalability, adeptly accommodating the growth and evolving demands of businesses without sacrificing performance or stability. This commendation underscores the company's commitment to providing flexible and future-proof solutions that can seamlessly adapt to the changing needs of clients. By designing software with scalability in mind, EZA-TECHnology empowers businesses to expand their operations, add new functionalities, and handle increased user loads without experiencing any degradation in performance or reliability. This scalability not only enhances the longevity of the solutions but also ensures that clients can effectively leverage their investments in the long term. As a result, EZA-TECHnology remains a trusted partner for businesses seeking technology solutions that can grow and evolve alongside their operations.",
    },
    {
      id: 12,
      name: "Henry",
      job_title: "David Backhum",
      info: "EZA-TECHnology' software products consistently receive commendation for their outstanding user experience, characterized by intuitive interfaces and robust functionality that significantly enhance productivity and user satisfaction. This recognition underscores the company's dedication to prioritizing user-centric design principles, ensuring that their software solutions are not only visually appealing but also highly intuitive and easy to navigate. By focusing on usability and functionality, EZA-TECHnology enables users to accomplish tasks efficiently and effectively, thereby driving overall satisfaction with the software products. The combination of intuitive interfaces and robust functionality not only enhances user productivity but also contributes to a positive perception of the brand and fosters long-term loyalty among clients. As a result, EZA-TECHnology remains a preferred choice for businesses seeking software solutions that deliver exceptional user experiences.",
    },
    {
      id: 13,
      name: "Lily",
      job_title: "David Backhum",
      info: "Clients highly appreciate the meticulous quality assurance processes implemented by EZA-TECHnology, which guarantee that delivered solutions adhere to stringent standards of performance, security, and reliability. This emphasis on quality assurance underscores the company's commitment to delivering flawless products that exceed client expectations. By employing rigorous testing methodologies and protocols, EZA-TECHnology ensures that each solution undergoes thorough scrutiny to identify and rectify any potential issues before deployment. This proactive approach not only minimizes the risk of defects but also instills confidence in clients regarding the robustness and dependability of the solutions provided. The emphasis on quality assurance reflects EZA-TECHnology' dedication to maintaining the highest standards of excellence and customer satisfaction, further solidifying its reputation as a trusted provider of top-tier technology solutions.",
    },
    {
      id: 14,
      name: "Eleanor",
      job_title: "David Backhum",
      info: "EZA-TECHnology places a strong emphasis on fostering transparency in its interactions with clients, offering clear and comprehensive insights into various aspects of the project, including progress, costs, and potential challenges. This commitment to transparency serves as a cornerstone of their client relationships, facilitating open communication and establishing a foundation of trust and confidence. By providing clients with regular updates and transparent reporting, EZA-TECHnology ensures that they are fully informed about the status of their projects and any associated factors that may impact timelines or budgets. This proactive approach enables clients to make well-informed decisions and actively participate in the project's direction, ultimately leading to more successful outcomes and greater satisfaction. EZA-TECHnology' dedication to transparency not only strengthens its client partnerships but also reinforces its reputation as a reliable and trustworthy technology partner.",
    },
    {
      id: 15,
      name: "Ava",
      job_title: "David Backhum",
      info: "In the face of rapidly evolving technological landscapes, EZA-TECHnology showcases remarkable adaptability by remaining vigilant and proactive in staying abreast of emerging trends. Their commitment to adaptability is exemplified by their swift integration of new tools, methodologies, and best practices into their workflow. This proactive approach ensures that EZA-TECHnology remains at the forefront of innovation, constantly evolving to meet the dynamic needs of their clients and the market. By embracing change and leveraging emerging technologies, they consistently deliver cutting-edge solutions that drive success for their clients. This adaptability not only enhances their competitive edge but also reinforces their reputation as a forward-thinking and reliable technology partner. EZA-TECHnology' ability to navigate and thrive in rapidly changing environments underscores their resilience and dedication to delivering value in an ever-evolving landscape.",
    },
    // for swiper
  ],
};
const { sub_title, title, slider_data } = review_content;

const slider_images = [
  rating_avatar_1,
  rating_avatar_2,
  rating_avatar_3,
  rating_avatar_4,
  rating_avatar_5,
  rating_avatar_6,
  rating_avatar_7,
  rating_avatar_8,
  rating_avatar_9,
  rating_avatar_10,
  rating_avatar_11,
  rating_avatar_12,
  rating_avatar_13,
  rating_avatar_14,
  rating_avatar_15,
];

const setting_1 = {
  loop: true,
  spaceBetween: 10,
  FreeMode: true,
  navigation: {
    nextEl: ".testi-button-next",
    prevEl: ".testi-button-prev",
  },
};

const setting_2 = {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    "1400": {
      slidesPerView: 5,
    },
    "1200": {
      slidesPerView: 5,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 3,
    },
    "0": {
      slidesPerView: 3,
    },
  },
};

const ReviewAreaHomeThree = () => {
  type SwiperType = any;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <section className="review-area pt-120 pb-60 pt-sm-fourty pb-sm-zero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5">
              <div className="tp-review-thumb pb-60">
                <Image
                  src={review_thumb}
                  style={{ width: "100%", height: "auto" }}
                  alt="Rating"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="tp-review-wrap ml-50 pb-60">
                <div className="tp-section tp-section-3 mb-50">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
                <div className="tp-review-wrapper pb-60">
                  <Swiper
                    {...setting_1}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="swiper-container swiper tp-review-active"
                  >
                    {slider_data.map((item, i) => (
                      <SwiperSlide key={i} className="tp-review-item">
                        <div className="tp-review-content">
                          <p>{item.info}</p>
                        </div>
                        <div className="tp-review-avatar">
                          <h4 className="tp-review-avatar-title">
                            {item.name}
                          </h4>
                          {/* <span>{item.job_title}</span> */}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="tp-review-thumb-wrapper">
                  <Swiper
                    {...setting_2}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="swiper-container swiper tp-review-avatar-active"
                  >
                    {slider_images.map((image, index) => (
                      <SwiperSlide
                        key={index}
                        className="tp-review-avatar-thumb"
                      >
                        <Image src={image} alt="testi-avata" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewAreaHomeThree;
