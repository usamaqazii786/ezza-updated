import Image from 'next/image';
import React from 'react'
import { useInView } from 'react-intersection-observer';

const Trust = ({ onPageStyle,img }: any) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    return (
        <div ref={ref}>
            <section id="services-one-page" className={inView ? `services-area tp-services-two pb-20 zoom-ins ${onPageStyle ? "pt-60" : ""}` : `services-area tp-services-two pb-120 zoom-outs ${onPageStyle ? "pt-60" : ""}`}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className={inView ? "col-xl-12 col-lg-12 slide-in-rights" : "col-xl-12 col-lg-12"}>
                            <div className="tp-section tp-section-two mb-50 wow fadeInRight" data-wow-duration="1s"
                                data-wow-delay=".4s">
                                <Image
                                    src={img}
                                    alt="Find Me Storage Logo"
                                    width={100}
                                    height={100}
                                    className={""}
                                    style={{
                                        width: "100%",
                                        height: "700px",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>
                        <div className={inView ? "slide-in-left offset-xl-2 col-xl-5 col-lg-6" : "offset-xl-2 col-xl-5 col-lg-6"}>
                            <div className="tp-section mb-40 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="tp-section-title-wrapper">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
        
    )
}

export default Trust