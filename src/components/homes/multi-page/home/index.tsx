import React from "react";
// import CtaAreaHomeOne from "./CtaAreaHomeOne";
import TechAreaHomeOne from "./TechAreaHomeOne";
import BlogAreaHomeOne from "./BlogAreaHomeOne";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import SolveAreaHomeOne from "./SolveAreaHomeOne";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import HeroBannerHomeOne from "./HeroBannerHomeOne";
import BrandAreaHomeArea from "./BrandAreaHomeArea";
import FeatureAreaHomeOne from "./FeaturesAreaHomeOne";
import GoogleMap from "@/components/common/GoogleMap";
import ProjectAreaHomeOne from "./ProjectAreaHomeOne";
import CounterAreaHomeOne from "./CounterAreaHomeOne";
import ServicesAreaHomeOne from "./ServicesAreaHomeOne";
import ManagementAreaHomeOne from "./ManagementAreaHomeOne";
import Home3Testimonial from "../home-3/Home3Testimonial";
const HomeOne = () => {
  return <>
    <HeaderOne />
    <main>
      <HeroBannerHomeOne />
      <FeatureAreaHomeOne />
      <AboutAreaHomeOne />
      <ProjectAreaHomeOne style_home_one={true} />
      <CounterAreaHomeOne />
      <ManagementAreaHomeOne />
      <TechAreaHomeOne />
      <ServicesAreaHomeOne />
      <BrandAreaHomeArea />
      <SolveAreaHomeOne />
      <BlogAreaHomeOne />
      <Home3Testimonial/>
      {/* <CtaAreaHomeOne />  */}
      <GoogleMap />
    </main>
    <FooterOne />

  </>;
};

export default HomeOne;
