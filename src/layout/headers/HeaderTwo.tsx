"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import { TeamSocialLinks } from "@/components/common/SocialLinks";
import LogoTwo from "@/assets/img/logo/EZAS-Tech-0244.png";
import PhoneIcon from "@/assets/img/icon/header-cta-icon.svg";
import UseSticky from "@/hooks/UseSticky";
import HeaderSearch from "@/components/common/HeaderSearch";
import HeaderCart from "@/components/common/HeaderCart";
import Offcanvas from "./Menu/Offcanvas";
import OnePageOffcanvas from "./Menu/OnePageOffcanvas";
import "@/assets/css/Custom.css";
// import "@/assets/css/main.css";

import OnPageMenu from "./Menu/OnPageMenu";
import { useSelector } from "react-redux";

type DataType = {
  address: string;
  email: string;
  top_info: string[];
  btn_text: string;
  help_text: string;
  phone_number: string;
  phone_number1: string;
  phone_number2: string;
};
const header_two_content: DataType = {
  address: "your_address",
  email: "info@eza-tech.com",
  top_info: ["Help", "Support", "Contact"],
  btn_text: "Get Solution",
  help_text: "Need help? Talk to an expert",
  phone_number: "US +1 (205) 588-4732",
  phone_number1: "UK +44 2045 321133",
  phone_number2: "UK +44 7471 0958 53",
};

const {
  email,
  top_info,
  btn_text,
  help_text,
  phone_number,
  phone_number1,
  phone_number2,
} = header_two_content;

const HeaderTwo = ({ onePageHomeThree }: any) => {
  const { sticky } = UseSticky();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [openCanvas, setOpenCanvas] = useState<boolean>(false);
  const productItem = useSelector((state: any) => state.cart.cart);

  return (
    <>
      <header>
        <div className="tp-header-area tp-header-3 tp-header-height">
          <div
            id="header-sticky"
            className={`tp-header-3-wrap white-bgs justify-content-between ${
              sticky ? "header-sticky" : ""
            }`}
            style={{ paddingBlock: "5px" }}
          >
            <div className="tp-header-3-main ">
              <div className="logo">
                <Link href="/">
                  <Image
                    width="160"
                    height="45"
                    src={LogoTwo}
                    alt="image-title"
                    className="ert23"
                  />
                </Link>
                <div className="main-menu tp-header-3-menu d-none d-xl-block">
                  <nav id="mobile-menu" className="tp-main-menu-content">
                    {!onePageHomeThree && <NavMenu style_2={true} />}
                    {onePageHomeThree && (
                      <OnPageMenu
                        style_2={true}
                        onePageHomeThree={onePageHomeThree}
                      />
                    )}
                  </nav>
                </div>
                <div className="tp-header-right d-flex align-items-center">
                  <div className="offcanvas-btn d-xl-none ml-30">
                    <button
                      className="offcanvas-open-btn"
                      onClick={() => setOpenCanvas(true)}
                    >
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      {!onePageHomeThree && (
        <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
      )}
      {onePageHomeThree && (
        <OnePageOffcanvas
          openCanvas={openCanvas}
          setOpenCanvas={setOpenCanvas}
          onePageHomeThree={onePageHomeThree}
        />
      )}
    </>
  );
};

export default HeaderTwo;
