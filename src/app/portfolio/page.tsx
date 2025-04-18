"use client"
import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import Error from "@/components/error";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderTwo from "@/layout/headers/HeaderTwo";
import Link from "next/link";
import ProjectArea from "@/components/inner-pages/project/ProjectArea";

import ServicesAreaHomeTwo from '../../components/homes/multi-page/home-2/ServicesAreaHomeTwo';

// export const metadata = {
//   title: "Portfolio - EZA-TECHnology",
// };
const index = () => {
  return (
    <Wrapper>
      <HeaderTwo />
      <Breadcrumb top_title='portfolio' title='Our Portfolio' />
      {/* <ProjectArea/> */}
      <ServicesAreaHomeTwo onPageStyle={true} />


      <FooterOne />
    </Wrapper>
  );
};

export default index;