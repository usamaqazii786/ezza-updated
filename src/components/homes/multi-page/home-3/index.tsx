'use client'
import HeaderTwo from '@/layout/headers/HeaderTwo'; 
import HeroAreaHomeThree from './HeroAreaHomeThree';
import AboutAreaHomeThree from './AboutAreaHomeThree';
import CtaAreaHomeThree from './CtaAreaHomeThree';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import TeamAreaHomeThree from './TeamAreaHomeThree';
import FooterOne from '@/layout/footers/FooterOne';
import BlogAreaHomeThree from './BlogAreaHomeThree';
import BrandAreaHomeThree from './BrandAreaHomeThree';
import ReviewAreaHomeThree from './ReviewAreaHomeThree';
import CounterAreaHomeThree from './CounterAreaHomeThree';
// import ProjectAreaHomeThree from './ProjectAreaHomeThree';
import FeatureAreaHomeThree from './FeatureAreaHomeThree';
// import OfferingAreaHomeThree from './OfferingAreaHomeThree';
import SolutionAreaHomeThree from './SolutionAreaHomeThree';
import Home3Testimonial from '../home-3/Home3Testimonial'
import Home3TeamSec from '../home-3/Home3TeamSec'

const HomeThree = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroAreaHomeThree />
        <FeatureAreaHomeThree />
        <AboutAreaHomeThree />
        {/* <OfferingAreaHomeThree /> */}
        <CtaAreaHomeThree />
        {/* <ProjectAreaHomeThree /> */}
        <ReviewAreaHomeThree />
        <CounterAreaHomeThree />
        {/* <CtaAreaHomeOne style={true} /> */}
        <SolutionAreaHomeThree />
        <TeamAreaHomeThree />
        <BrandAreaHomeThree />
        <BlogAreaHomeThree />
        <Home3Testimonial/>
        {/* <Home3TeamSec/> */}
      </main>
      <FooterOne />

    </>
  );
};

export default HomeThree;