"use client"
import HeaderTwo from '@/layout/headers/HeaderTwo';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FeatureAreaHomeOne from '../homes/multi-page/home/FeaturesAreaHomeOne';
// import OfferingAreaHomeThree from '../homes/multi-page/home-3/OfferingAreaHomeThree';
import BrandAreaHomeThree from '../homes/multi-page/home-3/BrandAreaHomeThree';
import TeamFormArea from '../inner-pages/team/TeamFormArea';
import CtaAreaHomeOne from '../homes/multi-page/home/CtaAreaHomeOne';
import FooterOne from '@/layout/footers/FooterOne';
import StepAreaHomeTwo from '../homes/multi-page/home-2/StepAreaHomeTwo';
import ServicesAreaHomeTwo from '../homes/multi-page/home-2/ServicesAreaHomeTwo';
import dynamic from 'next/dynamic';
const ServicesDetails = dynamic(
  () => import('../homes/multi-page/home-2/ServicesDetails'),
  { 
    ssr: false,
    loading: () => <p>Loading services...</p> 
  }
);

const Services = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title='Services' title='Our Services' />
        <FeatureAreaHomeOne style={true} />
        {/* <ServicesAreaHomeTwo onPageStyle={true} /> */}
        <ServicesDetails />
        <StepAreaHomeTwo />
        <BrandAreaHomeThree style={true} />
        <TeamFormArea />
        <CtaAreaHomeOne />
      </main>
      <FooterOne style_inner={true} />
    </>
  );
};

export default Services;