'use client'
import React, { useEffect, useState } from 'react';
import BlackLogo from "@/assets/img/logo/EZAS-Tech-0244.png"
import Image from 'next/image';
import Link from 'next/link';
import ToggleIcon from '@/svg/HomeOneIcons/ToggleIcon';
import MobileMenu from './MobileMenu';
import SocialLinks from '@/components/common/SocialLinks';


const Offcanvas = ({ openCanvas, setOpenCanvas }: any) => {
  const [nevIcon, setNevIcon] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setNevIcon(windowWidth <= 1199);
    };
    // Call the function once to set the initial value based on the window width
    handleResize();
    // Add event listener for the 'resize' event
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <>
      {/* <!-- offcanvas area start --> */}
      {nevIcon &&
        <>
          <div className={`offcanvas__area ${openCanvas ? "offcanvas-opened" : ""}`}>
            <div className="offcanvas__wrapper">
              <div className="offcanvas__close">
                <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setOpenCanvas(false)}>
                  <ToggleIcon />
                </button>
              </div>
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo logo">
                    <Link href="/">
                      <Image src={BlackLogo} alt="logo"  width="160"
                    height="45"  />
                    </Link>
                  </div>
                </div>
                <div className="tp-main-menu-mobile">
                  <MobileMenu />
                </div>
                <div className="offcanvas__btn mt-2">
                  <Link href="/contact" className="tp-btn">Getting Started</Link>
                </div>
                <div className="side-info-contact">
                  <span>we are here</span>
                  <p>Flat 1, 172 parchmore road<br/> Thorntonheath, CR7 8HA</p>
                </div>
                {/* <div className="side-info-social"> 
                  <SocialLinks /> 
                </div> */}
              </div>
            </div>
          </div>
          <div className={`body-overlay ${openCanvas ? "opened" : ""}`} onClick={() => setOpenCanvas(false)}></div>
        </>
      }
      {/* <!-- offcanvas area end --> */}
    </>
  );
};

export default Offcanvas;