"use client"
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import Showless from '../../../common/Showless'

export default function Home3Testimonial() {
    const swiperRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    return (
        <div ref={ref}>
            <section className={inView ? 'zoom-ins ererwe mt-4 mb-5' : 'zoom-outs ererwe mt-4 mb-5'}>
                <div className="container">
                    <div className="row">
                        <div className={inView ? "col-md-5 slide-in-rights mt-3 mb-3" : "col-md-5 mt-3 mb-3"}>
                            <div>
                                <span className='adwe d-block'>TESTIMONIALS</span>
                                <span className='as mt-3 d-block'>Real stories of success
                                    and satisfaction</span>
                                <span className='ewt mt-3 d-block'>At EZA-TECH, customer satisfaction is not just a priority—it’s our core mission. We are committed to understanding and fulfilling our client&apos;s needs with precision, reliability, and top-notch quality. Our dedicated team goes above and beyond to ensure that every service we deliver meets the highest standards. With a focus on innovation, accuracy, and excellence, we strive to build long-lasting relationships with our clients by exceeding their expectations at every step. Your success is our success, and we take pride in delivering solutions that truly make a difference.</span>
                            </div>
                        </div>
                        <div className={inView ? "col-md-7 slide-in-left mt-3 mb-3" : "col-md-7 mt-3 mb-3"}>

                            <Swiper
                                loop
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false
                                }}
                                modules={[Autoplay, Navigation, Pagination]}
                                className="swiper"
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                <SwiperSlide>
                                    <div className="ert3">

                                        <div className="card ert3">
                                            <div className="card-body">

                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-3'>
                                                            {/* <div className="col-md-3 text-center">

                                                                <img src="https://tse3.mm.bing.net/th?id=OIP.JxyGHWbgPXgjta3k4PznxwHaLH&pid=Api&P=0&h=220" className='wr' alt="as" />
                                                            </div> */}
                                                            <div className="col-md-12 text-center">

                                                                <span className='d-block ert' >Leo Harry</span>
                                                                <span className='d-block ert2' >(Customer)</span>

                                                            </div>

                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                {/* <span className='adwe22 d-block'>

                                                                </span> */}
                                                                <Showless content="As a startup, finding a reliable tech partner was one of the most critical decisions for our growth and success. We needed a team that could not only understand our vision but also translate it into a powerful digital presence. EZA-TECH exceeded our expectations in every way. From the initial consultation to the final launch, their team demonstrated unmatched expertise, creativity, and dedication.

They designed and developed a website that is not only visually stunning but also optimized for seamless performance, user experience, and scalability. Every detail, from responsiveness to functionality, was handled with precision. Their ability to blend aesthetics with technical excellence truly set them apart.

Beyond just delivering a great website, EZA-TECH provided ongoing support, ensuring everything runs smoothly. Their commitment to quality and customer satisfaction made them more than just a service provider – they became a valuable partner in our journey toward success. We highly recommend them to any business looking for top-tier digital solutions."
                                                                    className="adwe22"
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ert3">

                                        <div className="card ert3">
                                            <div className="card-body">

                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-3'>
                                                            {/* <div className="col-md-3 text-center">

                                                                <img src="https://tse3.mm.bing.net/th?id=OIP.JxyGHWbgPXgjta3k4PznxwHaLH&pid=Api&P=0&h=220" className='wr' alt="as" />
                                                            </div> */}
                                                            <div className="col-md-12 text-center">

                                                                <span className='d-block ert' > Oscar Archie</span>
                                                                <span className='d-block ert2' >(Customer)</span>

                                                            </div>

                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                {/* <span className='adwe22 d-block'></span> */}



                                                                <Showless content="The EZA-TECH team’s expertise in web design, web development, and user experience (UX) went beyond our expectations. They took our vision and transformed it into a stunning, high-performance website that is both visually appealing and functionally robust.

From the very first discussion, their team took the time to understand our unique requirements, ensuring that every aspect of the website aligned with our brand identity and goals. Their attention to detail in UI/UX design made navigation smooth and intuitive, enhancing the overall user experience for our audience.

What truly stood out was their collaborative approach. We felt valued and heard at every stage of the project. They maintained clear and open communication, welcomed our feedback, and provided expert guidance to refine our ideas into a seamless digital experience.

The final product speaks for itself – a website that is not only beautiful but also fast, responsive, and optimized for success. Choosing EZA-TECH was one of the best decisions we made, and we highly recommend them to any business looking for top-notch digital solutions."
                                                                    className="adwe22"
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ert3">

                                        <div className="card ert3">
                                            <div className="card-body">

                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            {/* <div className="col-md-3 text-center">

                                                                <img src="https://tse3.mm.bing.net/th?id=OIP.JxyGHWbgPXgjta3k4PznxwHaLH&pid=Api&P=0&h=220" className='wr' alt="as" />
                                                            </div> */}
                                                            <div className="col-md-12 text-center">

                                                                <span className='d-block ert' >Henry Semon</span>
                                                                <span className='d-block ert2' >(Customer)</span>

                                                            </div>

                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                {/* <span className='adwe22 d-block'> </span> */}



                                                                <Showless content="Our collaboration with EZA-TECH was a game-changer. They revamped our website with a fresh, innovative design and enhanced functionality. The team&apos;s dedication to understanding our needs and ensuring our satisfaction was remarkable. The improvements have significantly boosted our online engagement and customer feedback has been overwhelmingly positive."
                                                                    className="adwe22"
                                                                />

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="ert3">
                                        <div className="card ert3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            <div className="col-md-12 text-center">
                                                                <span className='d-block ert'>David Thompson</span>
                                                                <span className='d-block ert2'>(Business Owner)</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                <Showless content="Our business was in dire need of a strong digital presence to scale and attract more clients. EZA-TECH not only designed an intuitive and high-performance website but also provided excellent branding strategies that helped position us ahead of our competitors. Their attention to detail, dedication, and understanding of market trends made a significant difference in our online visibility and customer engagement."
                                                                    className="adwe22"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Slide 4 - Emma Robertson (E-commerce) */}
                                <SwiperSlide>
                                    <div className="ert3">
                                        <div className="card ert3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            <div className="col-md-12 text-center">
                                                                <span className='d-block ert'>Emma Robertson</span>
                                                                <span className='d-block ert2'>(E-commerce Store Owner)</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                <Showless content="Running an online store means ensuring that our website is fast, user-friendly, and optimized for conversions. EZA-TECH delivered an outstanding e-commerce solution with seamless navigation and excellent UI/UX. Their expertise in integrating secure payment gateways and optimizing product pages significantly boosted our sales and customer engagement. Highly recommended for any e-commerce business!"
                                                                    className="adwe22"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                {/* Slide 5 - Michael Scott (Marketing Consultant) */}
                                <SwiperSlide>
                                    <div className="ert3">
                                        <div className="card ert3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            <div className="col-md-12 text-center">
                                                                <span className='d-block ert'>Michael Scott</span>
                                                                <span className='d-block ert2'>(Marketing Consultant)</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                <Showless content="As a marketing consultant, I needed a website that not only looks professional but also ranks well on search engines. EZA-TECH created a site that is visually stunning and fully optimized for SEO. Their strategic approach to branding, lead generation, and analytics tracking has helped me attract more clients. Their team is truly top-notch!"
                                                                    className="adwe22"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ert3">
                                        <div className="card ert3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            <div className="col-md-12 text-center">
                                                                <span className='d-block ert'>Thomas Bennett</span>
                                                                <span className='d-block ert2'>(Web Development Client (UK))</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                <Showless content="The Eza-Tech team exceeded our expectations with their web development services. They delivered a fast, secure, and modern site that aligns perfectly with our brand. Communication was clear throughout the process."
                                                                    className="adwe22"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ert3">
                                        <div className="card ert3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            <div className="col-md-12 text-center">
                                                                <span className='d-block ert'>Sofia Rossi</span>
                                                                <span className='d-block ert2'>(Recruitment Partner)</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                <Showless content="Working with Eza-Tech for recruitment has been smooth and productive. They understand our staffing needs and always provide qualified, well-prepared candidates. It’s a partnership we truly value."
                                                                    className="adwe22"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ert3">
                                        <div className="card ert3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            <div className="col-md-12 text-center">
                                                                <span className='d-block ert'>Lukas Novak</span>
                                                                <span className='d-block ert2'>(SEO Client)</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                <Showless content="Eza-Tech helped boost our website’s performance through effective SEO strategies. We saw a noticeable increase in both rankings and leads. Their reports were clear, and the results spoke for themselves."
                                                                    className="adwe22"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ert3">
                                        <div className="card ert3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            <div className="col-md-12 text-center">
                                                                <span className='d-block ert'>Jonas Müller </span>
                                                                <span className='d-block ert2'>(Machine Learning Project Partner)</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                <Showless className="adwe22" content="Eza-Tech’s data science and machine learning team delivered incredible insights for our predictive analytics model. Their ability to translate complex algorithms into business solutions impressed our entire team."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="ert3">
                                        <div className="card ert3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className='row justify-content-ceter mb-2'>
                                                            <div className="col-md-12 text-center">
                                                                <span className='d-block ert'>Anna Kowalska </span>
                                                                <span className='d-block ert2'>(Mobile App Client)</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-md-12">
                                                                <Showless className="adwe22" content="From design to deployment, the app development service at Eza-Tech was professional and seamless. They created a user-friendly app for our logistics operations that has improved both efficiency and customer satisfaction."
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                                <div className='row justify-content-center mt-3'>
                                    <div className="col-2 text-center">

                                        <div onClick={() => swiperRef.current.slidePrev()} className="hero-button-prev "><FaArrowLeft className='asd4' /></div>
                                    </div>
                                    <div className="col-2 text-center">

                                        <div onClick={() => swiperRef.current.slideNext()} className="hero-button-next"><FaArrowRight className='asd4' /></div>
                                    </div>

                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
