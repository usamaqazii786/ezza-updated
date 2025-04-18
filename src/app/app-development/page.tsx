"use client";
import { useParams, useSearchParams } from 'next/navigation';
import Breadcrumb from '../../components/common/ServiceDetail';
import Content from '../../components/common/ServiceDetailContent';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import Wrapper from '@/layout/Wrapper';
import FooterOne from '@/layout/footers/FooterOne';

const servicedata =  {
  id: 3,
  icon: "flaticon-search-engine",
  title: <>Application Design & <br />Development</>,
  serviceDetail: {
    id: 3,
    nextLink: "Application Design & Development",
    serviceBanner: {
      bannertext: "Application Design & Development",
      bannerImage: "https://www.androiddeveloper.co.in/blog/wp-content/uploads/2016/03/Android-App-Development-2.jpg"
    },
    serviceContent: {
      paraMain: "Service Description",
      ContentHeading1: "Supercharge Your Business with Custom Mobile App Development Services!",
      para1: "Transform your business with tailor-made mobile applications meticulously crafted by our seasoned team of developers. App development isn't just about coding; it's about creating captivating experiences that resonate with your audience.",
      para2: "From inception to deployment, our holistic approach to app development ensures every aspect is meticulously crafted to perfection, guaranteeing top-notch functionality and user satisfaction.",
      para3: "During the planning phase, our experts collaborate closely with you to understand your requirements and objectives, mapping out features and functionalities that align with your business goals. With a keen eye on user experience, we design wireframes and prototypes to visualize the app's layout and flow, ensuring a seamless and intuitive user journey.",
      para4: "When it comes to development, we harness the power of cutting-edge technologies such as Java for Android, Swift for iOS, React Native, and Flutter to build cross-platform apps that reach a wider audience without compromising on performance or user experience. Our coding prowess ensures robust features and flawless performance across all platforms.",
      para5: "But our commitment to excellence doesn't end there. We conduct rigorous testing to identify and rectify any bugs or glitches, ensuring your app delivers a smooth and seamless experience to every user.",
      para6: "Deployment is a breeze, with your app made available to users through app stores and other distribution channels. Our dedication to your success doesn't stop there; we provide continuous updates and maintenance to keep your app running smoothly and adapt to evolving user needs and technological advancements.",
      para7: "Ready to elevate your business with a custom mobile app? Partner with us for bespoke app development services that drive results. Contact us today to get started!",
    },
    serviceContent2: {
      bannerImage: "Application Design & Development",
      ContentHeading1: "Our Working Process",

      UiUxlist: [
        {
          id: 1,
          listspan: "Requirement Analysis and Planning: Gather requirements, define scope, and create project plan.",

        },
        {

          id: 2,
          listspan: "Design: Create architecture, UI/UX, and system structure.",

        },
        {
          id: 3,
          listspan: "Development: Write code, follow standards, conduct reviews, and testing.",

        },
        {
          id: 3,
          listspan: "Testing: Perform unit, integration, system, and acceptance testing",

        },
        {
          id: 4,
          listspan: "Deployment: Prepare, configure, and deploy software to production.",

        },
        {
          id: 4,
          listspan: "Maintenance and Support: Provide ongoing support, bug fixes, and updates.",

        }

      ],


    }

  }
}

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
