import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import GoogleMap from "@/components/common/GoogleMap";
import ContactArea from "@/components/contact/ContactArea";
import CtaAreaHomeOne from "../../multi-page/home/CtaAreaHomeOne";
import TechAreaHomeOne from "../../multi-page/home/TechAreaHomeOne";
import BlogAreaHomeOne from "../../multi-page/home/BlogAreaHomeOne";
import AboutAreaHomeOne from "../../multi-page/home/AboutAreaHomeOne";
import SolveAreaHomeOne from "../../multi-page/home/SolveAreaHomeOne";
import HeroBannerHomeOne from "../../multi-page/home/HeroBannerHomeOne";
import BrandAreaHomeArea from "../../multi-page/home/BrandAreaHomeArea";
import ProjectAreaHomeOne from "../../multi-page/home/ProjectAreaHomeOne";
import CounterAreaHomeOne from "../../multi-page/home/CounterAreaHomeOne";
import FeatureAreaHomeOne from "../../multi-page/home/FeaturesAreaHomeOne";
import ServicesAreaHomeOne from "../../multi-page/home/ServicesAreaHomeOne";
import ManagementAreaHomeOne from "../../multi-page/home/ManagementAreaHomeOne";
import Home3Testimonial from "../../multi-page/home-3/Home3Testimonial";
const HomeOneSinglePage = () => {
  return (
    <>
      <HeaderOne onePageHomeOne={true} />
      <main>
        <HeroBannerHomeOne style_onpage={true} />
        <FeatureAreaHomeOne style_onpage={true} />
        <AboutAreaHomeOne style_onpage={true} />
        <ProjectAreaHomeOne />
        <CounterAreaHomeOne />
        <ManagementAreaHomeOne />
        <TechAreaHomeOne />
        <ServicesAreaHomeOne />
        <BrandAreaHomeArea />
        <SolveAreaHomeOne />
        <ContactArea style={true} />
        <BlogAreaHomeOne style={true} />
        <Home3Testimonial/>
        {/* <CtaAreaHomeOne /> */}
        <GoogleMap />

      </main>
      <FooterOne />
    </>
  );
};

export default HomeOneSinglePage;
