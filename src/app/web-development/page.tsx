"use client";
import { useParams, useSearchParams } from 'next/navigation';
import Breadcrumb from '../../components/common/ServiceDetail';
import Content from '../../components/common/ServiceDetailContent';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import FooterOne from '@/layout/footers/FooterOne';
import Wrapper from '@/layout/Wrapper';

const servicedata = 
 

  {
    id: 1,
    icon: "flaticon-ux-design",
    title: <>Website <br /> Development</>,

    serviceDetail: {
      id: 1,
      nextLink: "Website Development",
      serviceBanner: {
        bannertext: "Website Development",
        bannerImage: "https://showmecourses.com/wp-content/uploads/2021/10/web-development.webp"
      },
      serviceContent: {
        paraMain: "Service Description",
        ContentHeading1: "Unlock the Potential of Your Website with Cutting-Edge Web Development Solutions!",
        para1: "Elevate your online presence with our advanced web development services tailored to meet your unique needs. Our team of seasoned developers utilizes a diverse range of programming languages and technologies to create powerful and dynamic websites and web applications.",
        para2: "From the initial planning stages to deployment and beyond, we handle every aspect of the development process with precision and expertise. We start by conducting a thorough analysis of your requirements, defining clear objectives, and mapping out the structure and features of your website.",
        para3: "When it comes to design, our experts go beyond the basics, crafting wireframes and mockups that not only look stunning but also prioritize user experience (UX) and accessibility. We leverage advanced front-end technologies such as React.js, Angular, and Vue.js to create immersive and interactive user interfaces that captivate your audience.",
        para4: "On the back end, we harness the power of robust frameworks like Node.js, Django, and Laravel to build scalable and secure web applications that can handle complex operations with ease. Our proficiency in database management systems such as MongoDB, MySQL, and PostgreSQL ensures optimal performance and data integrity.",
        para5: "But our commitment to excellence doesn't end there. We conduct rigorous testing across multiple devices, browsers, and screen sizes to ensure your website delivers a seamless experience to every user. Our deployment process is streamlined and efficient, ensuring minimal downtime and maximum impact when launching your site.",
        para6: "And when it comes to ongoing maintenance, you can count on us to keep your website running smoothly. From regular updates and bug fixes to proactive security measures, we've got you covered every step of the way.",
        para7: "Ready to take your website to the next level? Partner with us for advanced web development solutions that drive results. Contact us today to learn more and get started on your journey to online success!",

      },
      serviceContent2: {
        bannerImage: "Artificial Intelligence",
        ContentHeading1: "Our Working Process",

        UiUxlist: [
          {
            id: 1,
            listspan: "Requirement Analysis and Planning: Gather requirements, define scope, and create project plan",

          },
          {

            id: 2,
            listspan: "Design: Create architecture, UI/UX, and system structure",

          },
          {
            id: 3,
            listspan: "Development: Write code, follow standards, conduct reviews, and testing",

          },
          {
            id: 4,
            listspan: "Testing: Perform unit, integration, system, and acceptance testing",

          },
          {
            id: 5,
            listspan: "Deployment: Prepare, configure, and deploy software to production",

          },
          {
            id: 5,
            listspan: "Maintenance and Support: Provide ongoing support, bug fixes, and updates",

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
