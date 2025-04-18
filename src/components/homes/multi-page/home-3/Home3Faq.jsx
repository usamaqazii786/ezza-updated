"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img1 from "@/assets/img/bg/faq-1.jpg";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { useInView } from 'react-intersection-observer';
export default function Home3Faq() {
 const { ref, inView } = useInView({
        threshold: 0.2,
      });
    const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)
    const [show3, setshow3] = useState(false)
    const [show4, setshow4] = useState(false)

    return (
        <div ref={ref}>
            <div className={inView ?'zoom-ins wer5 mb-3 mt-3':'wer5 mb-3 mt-3 zoom-outs'}>
                <div className="container-fluid">
                    <div className="row justify-content-around mb-3 mt-3">
                        <div className={inView ?"col-lg-7 col-md-6  col-sm-12  mb-3 mt-3 slide-in-rights":"col-lg-7 col-md-6  col-sm-12    mb-3 mt-3"}>
                            <div>
                                <div className='text-start'>
                                    <span className='wt3 d-block'>COMPANY FEATURES</span>
                                    <span className='wer4 d-block mt-3'>Improve & enhance your business with us</span>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-4 col-md-5 text-sm-center">
                                        <div>
                                            <Image src={img1} className={'rew3 '} alt="image-title" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7">
                                        <div className='row justify-content-around  border-bottom'>

                                            <div className="col-md-5 col-lg-5 col-sm-5  mt-2 text-lg-start text-md-start text-sm-center mt-1 mb-1">

                                                <h2 className='er2 '>10+</h2>
                                            </div>
                                            <div className="col-md-7 col-lg-7 col-sm-7 text-center ">
                                                <span className='ewr7 d-block mt-4'>YEARS
                                                    EXPERIENCE</span>
                                            </div>
                                            </div>

                                        <div className="row mt-3 justify-content-betwwen">
                                            <div className="col-md-12 text-start">
                                                <span className='try3 d-block'>Web Designers</span>
                                                <span className='try33 d-block mt-2'>Web designing is a powerful way of just not only professions
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={inView ?"col-lg-5 col-md-6  col-sm-12  mb-3 mt-3 slide-in-left":"col-lg-5 col-md-6  col-sm-12   mb-3 mt-3"}>
                            <div className='row tyu mt-2 mb-2 justify-content-between'>
                                <div className="col-10 text-start">
                                    {show1?
                                    <div >
                                    <span className='d-block rtr1 mt-2'>Is my data and privacy secure with your services?</span>
                                    <span className='d-block rtr2 mt-2'>Absolutely. At EZA-TECH, your data and privacy are our top priorities. We employ state-of-the-art security measures to ensure that all your information is protected. Our protocols include end-to-end encryption, regular security audits, and strict access controls.
                                    </span>

                                    </div>:
                                    <div>
                                    <span className='d-block rtr1 mt-2'>Is my data and privacy secure with your services?</span>

                                    </div>

                                    }
                                </div>
                                <div className="col-2 text-start">
                                    <div>
                                        {show1 ?
                                            <div className='hero-button-nextFaq'><TiMinus onClick={() => setshow1(!show1)} className='asd4' /></div> :
                                            <div className='hero-button-nextFaq'><FaPlus onClick={() => setshow1(!show1)} className='asd4' /></div>

                                        }

                                    </div>
                                </div>

                            </div>
                            <div className='row tyu mt-2 mb-2 justify-content-between'>
                                <div className="col-10 text-start">
                                    {show2?
                                    <div >
                                    <span className='d-block rtr1 mt-2'>How can I get started with Eza  Tech?</span>
                                    <span className='d-block rtr2 mt-2'>Getting started is easy! Simply contact us through our website, and one of our representatives will get in touch to discuss your project requirements and guide you through the process.</span>

                                    </div>:
                                    <div>
                                    <span className='d-block rtr1 mt-2'>How can I get started with Eza  Tech?</span>

                                    </div>

                                    }
                                </div>
                                <div className="col-2 text-start">
                                    <div>
                                        {show2 ?
                                            <div className='hero-button-nextFaq'><TiMinus onClick={() => setshow2(!show2)} className='asd4' /></div> :
                                            <div className='hero-button-nextFaq'><FaPlus onClick={() => setshow2(!show2)} className='asd4' /></div>

                                        }

                                    </div>
                                </div>

                            </div>
                            <div className='row tyu mt-2 mb-2 justify-content-between'>
                                <div className="col-10 text-start">
                                    {show3?
                                    <div >
                                    <span className='d-block rtr1 mt-2'>Do you offer responsive web design?</span>
                                    <span className='d-block rtr2 mt-2'> Yes, all our web designs are fully responsive, ensuring that your website looks great and functions seamlessly on all devices, including desktops, tablets, and smartphones.</span>

                                    </div>:
                                    <div>
                                    <span className='d-block rtr1 mt-2'>Do you offer responsive web design?</span>

                                    </div>

                                    }
                                </div>
                                <div className="col-2 text-start">
                                    <div>
                                        {show3 ?
                                            <div className='hero-button-nextFaq'><TiMinus onClick={() => setshow3(!show3)} className='asd4' /></div> :
                                            <div className='hero-button-nextFaq'><FaPlus onClick={() => setshow3(!show3)} className='asd4' /></div>

                                        }

                                    </div>
                                </div>

                            </div>
                            <div className='row tyu mt-2 mb-2 justify-content-between'>
                                <div className="col-10 text-start">
                                    {show4?
                                    <div >
                                    <span className='d-block rtr1 mt-2'>How much do your services cost?</span>
                                    <span className='d-block rtr2 mt-2'> Our pricing varies based on the scope and complexity of the project. We offer customized quotes after discussing your specific needs and project requirements. Contact us for a detailed estimate.</span>

                                    </div>:
                                    <div>
                                    <span className='d-block rtr1 mt-2'>How much do your services cost?</span>

                                    </div>

                                    }
                                </div>
                                <div className="col-2 text-start">
                                    <div>
                                        {show4 ?
                                            <div className='hero-button-nextFaq'><TiMinus onClick={() => setshow4(!show4)} className='asd4' /></div> :
                                            <div className='hero-button-nextFaq'><FaPlus onClick={() => setshow4(!show4)} className='asd4' /></div>

                                        }

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
