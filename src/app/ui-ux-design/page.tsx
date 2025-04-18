"use client";
import { useParams, useSearchParams } from 'next/navigation';
import Breadcrumb from '../../components/common/ServiceDetail';
import Content from '../../components/common/ServiceDetailContent';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import Wrapper from '@/layout/Wrapper';
import FooterOne from '@/layout/footers/FooterOne';

const servicedata =  {
  id: 1,
  icon: "flaticon-data-visualization",
  title: <>UI/UX <br /> Designing</>,
  serviceDetail: {
    id: 1,
    nextLink: "UI/UX Designing",
    serviceBanner: {
      bannertext: "UI/UX Designing",
      bannerImage: "https://wallpaperaccess.com/full/6000163.jpg"
    },
    serviceContent: {
      paraMain: "Service Description",
      ContentHeading1: "Elevate User Satisfaction with Expert UI/UX Design Services!",
      para1: "UI/UX design is the cornerstone of exceptional digital experiences, focusing on enhancing user satisfaction and interface usability across websites, mobile apps, and software applications.",
      para2: "Our UI/UX design process begins with in-depth research and analysis to understand user behaviors, needs, and motivations. Through wireframing and prototyping, we meticulously map out user journeys to ensure intuitive navigation and seamless interactions, prioritizing usability, accessibility, and overall satisfaction.",
      para3: "In UI design, we focus on the visual elements of the interface, including layout, typography, color schemes, and interactive components. Our designers craft visually stunning interfaces that not only align with your brand identity but also enhance usability and engagement. We establish style guides and design systems to maintain consistency across different screens and devices, ensuring a cohesive user experience.",
      para4: "Throughout the design process, our UI/UX designers collaborate closely with stakeholders, developers, and other team members. We conduct rigorous usability testing and gather feedback to iteratively improve the design and address any user pain points.",
      para5: "UI/UX design isn't just about aesthetics; it's about creating digital products that are both functional and delightful to use. Partner with us to unlock the full potential of your digital offerings, driving user engagement, satisfaction, and loyalty. Contact us today to learn more about our UI/UX design services!",

    },
    serviceContent2: {
      bannerImage: "Artificial Intelligence",
      ContentHeading1: "Our Working Process",

      UiUxlist: [
        {
          id: 1,
          listspan: "Research and Analysis: Conducting user research and analyzing market trends to understand user needs and preferences, providing insights that inform the design process.",

        },
        {

          id: 2,
          listspan: "Wireframing and Prototyping: Creating wireframes and prototypes to visualize the layout and functionality of the user interface, allowing for early testing and iteration to refine the user experience.",

        },
        {
          id: 3,
          listspan: "Usability Testing: Conducting usability tests to evaluate the effectiveness and efficiency of the user interface, identifying areas for improvement and validating design decisions.",

        },
        {
          id: 3,
          listspan: "Iteration and Refinement: Incorporating feedback from usability testing and iterating on the design to continuously refine and enhance the user experience, ensuring that the final product meets user needs and expectations.)",

        }

      ],


    }

  }
};

// export function generateStaticParams() {
//   return servicedata.map((service) => ({
//     id: service.id.toString(),
//   }));
// }


const ServiceDetails = () => {
  // const params = useSearchParams();
  // const { id } = params; // Extract the id parameter
  // const id = params.get("id")

  // const service = servicedata.find((item) => item.id == Number(id));
// console.log(params.get("id"))
  return (
    <Wrapper>
      <HeaderTwo />
          <main>
              <Breadcrumb data={servicedata.serviceDetail?.serviceBanner} />
              <Content data={servicedata.serviceDetail?.serviceContent} datas={servicedata?.serviceDetail?.serviceContent2} />
            </main>
      <FooterOne />
    </Wrapper>
  );
};

export default ServiceDetails;
