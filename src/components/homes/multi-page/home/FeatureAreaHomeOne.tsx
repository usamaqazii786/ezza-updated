// 'use client'
// import React from 'react';
// import Image from 'next/image';
// import Shape from "@/assets/img/feature/one/feature-shape.png";
// import Deatures from "@/assets/img/feature/one/features-bg.png";

// import { useInView } from 'react-intersection-observer';
// import servicedata from './FeaturesAreaOne';
// import Link from "next/link";


// interface ServiceBanner {
//   bannertext: string;
//   bannerImage: string;
// }

// interface ListItem {
//   id: number;
//   listpara: string;
//   listspan: string;
// }
// interface ServiceContent {
//   bannerImage: string;
//   ContentHeading1: string;
//   ContentHeading2: string;
//   para22: string;
//   heading23: string;
//   ContentHeading3: string;
//   list1: ListItem[];
//   ContentHeading4: string;
//   list2: ListItem[];
//   para23: string;
// }

// interface ServiceContent2 {
//   bannerImage: string;
//   ContentHeading1: string;
//   Contentpara2: string;
//   ContentHeading3: string;
//   list1: ListItem[];
//   ContentHeading4: string;
//   list2: ListItem[];
//   headingList3: string;
//   list3: ListItem[];
//   headingList4: string;
//   list4: ListItem[];
//   headingList5: string;
//   list5: ListItem[];
//   headingList6: string;
//   list6: ListItem[];
//   headingList7: string;
//   list7: ListItem[];
// }

// interface ServiceDetails {
//   id: number;
//   serviceBanner: ServiceBanner;
//   serviceContent: ServiceContent;
//   serviceContent2?: ServiceContent2; // Optional property
// }

// interface DataType {
//   id: number;
//   fade: string;
//   icon: string;
//   title: React.JSX.Element;
//   sm_info: string;
//   serviceDetail?: ServiceDetails;
// }






// const feature_data: DataType[] = [
//   {
//     id: 1,
//     fade: "fadeInRight",
//     icon: "flaticon-solution-1",
//     title: <>Best Business <br /> Solution</>,
//     sm_info: "Best Business Solution provides comprehensive business solutions tailored to your needs, ensuring your success in today's competitive market.",
    
//     serviceDetail:{
//       id:1,
//       serviceBanner:{
//         bannertext:"Artificial Intelligence",
//         bannerImage:"https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
//       },
//       serviceContent:{
//         bannerImage:"Artificial Intelligence",
//         ContentHeading1:"Empower Your Business with Innovative Development Solutions",
//         ContentHeading2:"Artificial Intelligence (AI) Development: Leading the Future of Technology",
//         para22:"Embrace the future with our cutting-edge AI development services. Our AI expertise spans multiple industries, including medical sciences, architecture, finance, marketing, sales, and more. We specialize in developing AI-powered diagnostic tools for medical applications, predictive analytics for finance, and intelligent marketing and sales solutions.",
//         heading23:"Our AI Capabilities:",
//         ContentHeading3:"Why Choose Us for AI Development?",

//         list1:[
//           {
//             id:1,
//             listpara:"Industry-Specific Solutions:",
//             listspan:"From healthcare to finance and construction, our AI projects are tailored to meet the unique needs of various sectors.",

//           },
//           {

//             id:2,
//             listpara:"Expert Team:",
//             listspan:"Our AI experts utilize the latest advancements to create customized solutions that automate processes, optimize workflows, and provide actionable insights.",
    
//           },
//           {
//             id:3,
//             listpara:"Innovation-Driven:",
//             listspan:"We focus on leveraging AI to address complex challenges, drive innovation, and unlock new opportunities for growth and competitiveness.",

//           }

//         ],
//         ContentHeading4:"Our AI Capabilities:",
//         list2:[
//           {
//             id:1,
//             listpara:"Medical Sciences:",
//             listspan:"AI-powered diagnostic tools for accurate and efficient patient care.",

//           },
//           {
//             id:2,
//             listpara:"Finance:",
//             listspan:"Predictive analytics to optimize investment strategies and risk management.",
    
//           },
//           {
//             id:3,
//             listpara:"Marketing and Sales:",
//             listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

//           },
//           {
//             id:4,
//             listpara:"Marketing and Sales:",
//             listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

//           }

//         ],
//         para23:"With our AI-enabled capabilities, your business will achieve operational excellence, enhanced competitiveness, and sustainable growth. Partner with us to harness the full potential of AI and revolutionize your industry."


//       },
//       serviceContent2:{
//           bannerImage:"Artificial Intelligence",
//           ContentHeading1:"Our Working Process",
<<<<<<< HEAD
//           Contentpara2:"At EZA-TECH, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
=======
//           Contentpara2:"At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
>>>>>>> 93e00f7 (alldone)
       
//           ContentHeading3:"Discovery and Requirement Analysis",
  
//           list1:[
//             {
//               id:1,
//               listpara:"Initial Consultation: ",
//               listspan:"We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",
  
//             },
//             {
  
//               id:2,
//               listpara:"Requirement Gathering: ",
//               listspan:"Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",
      
//             },
//             {
//               id:3,
//               listpara:"Feasibility Study: ",
//               listspan:"We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",
  
//             }
  
//           ],
//           ContentHeading4:"Data Collection and Preparation",
//           list2:[
//             {
//               id:1,
//               listpara:"Data Gathering:",
//               listspan:" We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",
  
//             },
//             {
//               id:2,
//               listpara:"Data Cleaning:",
//               listspan:"Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",
      
//             },
//             {
//               id:3,
//               listpara:"Data Annotation:",
//               listspan:" We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",
  
//             },
//             {
//               id:4,
//               listpara:"Marketing and Sales:",
//               listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",
  
//             }
  
//           ],
//       headingList3:"Model Development and Training",
  
//       list3:[
//           {
//             id:1,
//             listpara:"Algorithm Selection:",
//             listspan:" Based on the project requirements, we select the most suitable algorithms and machine learning techniques.",

//           },
//           {
//             id:2,
//             listpara:"Model Building: ",
//             listspan:" Our data scientists build and customize AI models, such as Naive Bayes, LSTM, CNN, and Transformer models, tailored to your needs.",
    
//           },
//           {
//             id:3,
//             listpara:"Training and Validation: ",
//             listspan:" We train the models using the prepared data, followed by rigorous validation to ensure accuracy and reliability. This includes splitting the data into training, validation, and testing sets",

//           },
    

//         ],
//       headingList4:"Testing and Evaluation",
//       list4:[
//           {
//             id:1,
//             listpara:"Performance Metrics:",
//             listspan:"We evaluate model performance using various metrics like accuracy, precision, recall, and F1-score.",

//           },
//           {
//             id:2,
//             listpara:"Iterative Refinement: ",
//             listspan:"Based on the evaluation results, we iteratively refine and optimize the models to enhance performance.",
    
//           },
//           {
//             id:3,
//             listpara:"Real-World Testing: ",
//             listspan:"We test the models on real-world data scenarios to validate their effectiveness and reliability in practical applications.",

//           },
    

//         ],
//         headingList5:"Deployment and Integration",
//         list5:[
//           {
//             id:1,
//             listpara:"Implementation Plan: ",
//             listspan:"We develop a detailed implementation plan to integrate the AI solutions seamlessly into your existing systems.",

//           },
//           {
//             id:2,
//             listpara:"System Integration: ",
//             listspan:"Our team ensures smooth integration of AI models with your business processes, software, and workflows.",
    
//           },
//           {
//             id:3,
//             listpara:"User Training: ",
//             listspan:"We provide comprehensive training for your team to effectively use and manage the AI solutions.",

//           },
    

//         ],
//         headingList6:"Monitoring and Maintenance",
//         list6:[
//           {
//             id:1,
//             listpara:"Continuous Monitoring:",
//             listspan:"Post-deployment, we continuously monitor the performance of the AI models to ensure they operate optimally.",

//           },
//           {
//             id:2,
//             listpara:"Regular Updates: ",
//             listspan:"We provide regular updates and improvements to the AI solutions, adapting to new data and evolving business needs.",
    
//           },
//           {
//             id:3,
//             listpara:"Support Services:",
//             listspan:"Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

//           },
    

//         ],
//         headingList7:"Documentation and Reporting",
//         list7:[
//           {
//             id:1,
//             listpara:"Detailed Documentation:",
//             listspan:"We provide thorough documentation of the entire AI development process, including methodologies, model details, and integration steps.",

//           },
//           {
//             id:2,
//             listpara:"Compliance and Reporting: ",
//             listspan:"We ensure that all AI solutions comply with relevant regulatory standards and provide detailed reports on the outcomes and performance metrics.",
    
//           },
//           {
//             id:3,
//             listpara:"Support Services:",
//             listspan:"Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

//           },
    

//         ],

//         }

//     }
//   },
//   {
//     id: 2,
//     fade: "fadeInUp",
//     icon: "flaticon-search-engine",
//     title: <>Business Growth <br /> Planning</>,
//     sm_info: "Business growth planning is a strategic process that outlines how a business intends to expand its operations and increase its revenue.",
//     serviceDetail:{
//       id:1,
//       serviceBanner:{
//         bannertext:"Artificial Intelligence",
//         bannerImage:"https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
//       },
//       serviceContent:{
//         bannerImage:"Artificial Intelligence",
//         ContentHeading1:"Empower Your Business with Innovative Development Solutions",
//         ContentHeading2:"Artificial Intelligence (AI) Development: Leading the Future of Technology",
//         para22:"Embrace the future with our cutting-edge AI development services. Our AI expertise spans multiple industries, including medical sciences, architecture, finance, marketing, sales, and more. We specialize in developing AI-powered diagnostic tools for medical applications, predictive analytics for finance, and intelligent marketing and sales solutions.",
//         heading23:"Our AI Capabilities:",
//         ContentHeading3:"Why Choose Us for AI Development?",

//         list1:[
//           {
//             id:1,
//             listpara:"Industry-Specific Solutions:",
//             listspan:"From healthcare to finance and construction, our AI projects are tailored to meet the unique needs of various sectors.",

//           },
//           {

//             id:2,
//             listpara:"Expert Team:",
//             listspan:"Our AI experts utilize the latest advancements to create customized solutions that automate processes, optimize workflows, and provide actionable insights.",
    
//           },
//           {
//             id:3,
//             listpara:"Innovation-Driven:",
//             listspan:"We focus on leveraging AI to address complex challenges, drive innovation, and unlock new opportunities for growth and competitiveness.",

//           }

//         ],
//         ContentHeading4:"Our AI Capabilities:",
//         list2:[
//           {
//             id:1,
//             listpara:"Medical Sciences:",
//             listspan:"AI-powered diagnostic tools for accurate and efficient patient care.",

//           },
//           {
//             id:2,
//             listpara:"Finance:",
//             listspan:"Predictive analytics to optimize investment strategies and risk management.",
    
//           },
//           {
//             id:3,
//             listpara:"Marketing and Sales:",
//             listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

//           },
//           {
//             id:4,
//             listpara:"Marketing and Sales:",
//             listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

//           }

//         ],
//         para23:"With our AI-enabled capabilities, your business will achieve operational excellence, enhanced competitiveness, and sustainable growth. Partner with us to harness the full potential of AI and revolutionize your industry."


//       },
//       serviceContent2:{
//           bannerImage:"Artificial Intelligence",
//           ContentHeading1:"Our Working Process",
<<<<<<< HEAD
//           Contentpara2:"At EZA-TECH, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
=======
//           Contentpara2:"At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
>>>>>>> 93e00f7 (alldone)
       
//           ContentHeading3:"Discovery and Requirement Analysis",
  
//           list1:[
//             {
//               id:1,
//               listpara:"Initial Consultation: ",
//               listspan:"We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",
  
//             },
//             {
  
//               id:2,
//               listpara:"Requirement Gathering: ",
//               listspan:"Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",
      
//             },
//             {
//               id:3,
//               listpara:"Feasibility Study: ",
//               listspan:"We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",
  
//             }
  
//           ],
//           ContentHeading4:"Data Collection and Preparation",
//           list2:[
//             {
//               id:1,
//               listpara:"Data Gathering:",
//               listspan:" We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",
  
//             },
//             {
//               id:2,
//               listpara:"Data Cleaning:",
//               listspan:"Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",
      
//             },
//             {
//               id:3,
//               listpara:"Data Annotation:",
//               listspan:" We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",
  
//             },
//             {
//               id:4,
//               listpara:"Marketing and Sales:",
//               listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",
  
//             }
  
//           ],
//       headingList3:"Model Development and Training",
  
//       list3:[
//           {
//             id:1,
//             listpara:"Algorithm Selection:",
//             listspan:" Based on the project requirements, we select the most suitable algorithms and machine learning techniques.",

//           },
//           {
//             id:2,
//             listpara:"Model Building: ",
//             listspan:" Our data scientists build and customize AI models, such as Naive Bayes, LSTM, CNN, and Transformer models, tailored to your needs.",
    
//           },
//           {
//             id:3,
//             listpara:"Training and Validation: ",
//             listspan:" We train the models using the prepared data, followed by rigorous validation to ensure accuracy and reliability. This includes splitting the data into training, validation, and testing sets",

//           },
    

//         ],
//       headingList4:"Testing and Evaluation",
//       list4:[
//           {
//             id:1,
//             listpara:"Performance Metrics:",
//             listspan:"We evaluate model performance using various metrics like accuracy, precision, recall, and F1-score.",

//           },
//           {
//             id:2,
//             listpara:"Iterative Refinement: ",
//             listspan:"Based on the evaluation results, we iteratively refine and optimize the models to enhance performance.",
    
//           },
//           {
//             id:3,
//             listpara:"Real-World Testing: ",
//             listspan:"We test the models on real-world data scenarios to validate their effectiveness and reliability in practical applications.",

//           },
    

//         ],
//         headingList5:"Deployment and Integration",
//         list5:[
//           {
//             id:1,
//             listpara:"Implementation Plan: ",
//             listspan:"We develop a detailed implementation plan to integrate the AI solutions seamlessly into your existing systems.",

//           },
//           {
//             id:2,
//             listpara:"System Integration: ",
//             listspan:"Our team ensures smooth integration of AI models with your business processes, software, and workflows.",
    
//           },
//           {
//             id:3,
//             listpara:"User Training: ",
//             listspan:"We provide comprehensive training for your team to effectively use and manage the AI solutions.",

//           },
    

//         ],
//         headingList6:"Monitoring and Maintenance",
//         list6:[
//           {
//             id:1,
//             listpara:"Continuous Monitoring:",
//             listspan:"Post-deployment, we continuously monitor the performance of the AI models to ensure they operate optimally.",

//           },
//           {
//             id:2,
//             listpara:"Regular Updates: ",
//             listspan:"We provide regular updates and improvements to the AI solutions, adapting to new data and evolving business needs.",
    
//           },
//           {
//             id:3,
//             listpara:"Support Services:",
//             listspan:"Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

//           },
    

//         ],
//         headingList7:"Documentation and Reporting",
//         list7:[
//           {
//             id:1,
//             listpara:"Detailed Documentation:",
//             listspan:"We provide thorough documentation of the entire AI development process, including methodologies, model details, and integration steps.",

//           },
//           {
//             id:2,
//             listpara:"Compliance and Reporting: ",
//             listspan:"We ensure that all AI solutions comply with relevant regulatory standards and provide detailed reports on the outcomes and performance metrics.",
    
//           },
//           {
//             id:3,
//             listpara:"Support Services:",
//             listspan:"Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

//           },
    

//         ],

//         }

//     }
//   },
//   {
//     id: 3,
//     fade: "fadeInLeft",
//     icon: "flaticon-speed",
//     title: <>Search Engine <br /> Optimization</>,
//     sm_info: "Search Engine Optimization (SEO) is the process of improving the visibility of a website or a web page in search engine results pages (SERPs) organically, without paying for placement.",
//     serviceDetail:{
//       id:1,
//       serviceBanner:{
//         bannertext:"Artificial Intelligence",
//         bannerImage:"https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
//       },
//       serviceContent:{
//         bannerImage:"Artificial Intelligence",
//         ContentHeading1:"Empower Your Business with Innovative Development Solutions",
//         ContentHeading2:"Artificial Intelligence (AI) Development: Leading the Future of Technology",
//         para22:"Embrace the future with our cutting-edge AI development services. Our AI expertise spans multiple industries, including medical sciences, architecture, finance, marketing, sales, and more. We specialize in developing AI-powered diagnostic tools for medical applications, predictive analytics for finance, and intelligent marketing and sales solutions.",
//         heading23:"Our AI Capabilities:",
//         ContentHeading3:"Why Choose Us for AI Development?",

//         list1:[
//           {
//             id:1,
//             listpara:"Industry-Specific Solutions:",
//             listspan:"From healthcare to finance and construction, our AI projects are tailored to meet the unique needs of various sectors.",

//           },
//           {

//             id:2,
//             listpara:"Expert Team:",
//             listspan:"Our AI experts utilize the latest advancements to create customized solutions that automate processes, optimize workflows, and provide actionable insights.",
    
//           },
//           {
//             id:3,
//             listpara:"Innovation-Driven:",
//             listspan:"We focus on leveraging AI to address complex challenges, drive innovation, and unlock new opportunities for growth and competitiveness.",

//           }

//         ],
//         ContentHeading4:"Our AI Capabilities:",
//         list2:[
//           {
//             id:1,
//             listpara:"Medical Sciences:",
//             listspan:"AI-powered diagnostic tools for accurate and efficient patient care.",

//           },
//           {
//             id:2,
//             listpara:"Finance:",
//             listspan:"Predictive analytics to optimize investment strategies and risk management.",
    
//           },
//           {
//             id:3,
//             listpara:"Marketing and Sales:",
//             listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

//           },
//           {
//             id:4,
//             listpara:"Marketing and Sales:",
//             listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

//           }

//         ],
//         para23:"With our AI-enabled capabilities, your business will achieve operational excellence, enhanced competitiveness, and sustainable growth. Partner with us to harness the full potential of AI and revolutionize your industry."


//       },
//       serviceContent2:{
//           bannerImage:"Artificial Intelligence",
//           ContentHeading1:"Our Working Process",
<<<<<<< HEAD
//           Contentpara2:"At EZA-TECH, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
=======
//           Contentpara2:"At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
>>>>>>> 93e00f7 (alldone)
       
//           ContentHeading3:"Discovery and Requirement Analysis",
  
//           list1:[
//             {
//               id:1,
//               listpara:"Initial Consultation: ",
//               listspan:"We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",
  
//             },
//             {
  
//               id:2,
//               listpara:"Requirement Gathering: ",
//               listspan:"Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",
      
//             },
//             {
//               id:3,
//               listpara:"Feasibility Study: ",
//               listspan:"We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",
  
//             }
  
//           ],
//           ContentHeading4:"Data Collection and Preparation",
//           list2:[
//             {
//               id:1,
//               listpara:"Data Gathering:",
//               listspan:" We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",
  
//             },
//             {
//               id:2,
//               listpara:"Data Cleaning:",
//               listspan:"Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",
      
//             },
//             {
//               id:3,
//               listpara:"Data Annotation:",
//               listspan:" We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",
  
//             },
//             {
//               id:4,
//               listpara:"Marketing and Sales:",
//               listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",
  
//             }
  
//           ],
//       headingList3:"Model Development and Training",
  
//       list3:[
//           {
//             id:1,
//             listpara:"Algorithm Selection:",
//             listspan:" Based on the project requirements, we select the most suitable algorithms and machine learning techniques.",

//           },
//           {
//             id:2,
//             listpara:"Model Building: ",
//             listspan:" Our data scientists build and customize AI models, such as Naive Bayes, LSTM, CNN, and Transformer models, tailored to your needs.",
    
//           },
//           {
//             id:3,
//             listpara:"Training and Validation: ",
//             listspan:" We train the models using the prepared data, followed by rigorous validation to ensure accuracy and reliability. This includes splitting the data into training, validation, and testing sets",

//           },
    

//         ],
//       headingList4:"Testing and Evaluation",
//       list4:[
//           {
//             id:1,
//             listpara:"Performance Metrics:",
//             listspan:"We evaluate model performance using various metrics like accuracy, precision, recall, and F1-score.",

//           },
//           {
//             id:2,
//             listpara:"Iterative Refinement: ",
//             listspan:"Based on the evaluation results, we iteratively refine and optimize the models to enhance performance.",
    
//           },
//           {
//             id:3,
//             listpara:"Real-World Testing: ",
//             listspan:"We test the models on real-world data scenarios to validate their effectiveness and reliability in practical applications.",

//           },
    

//         ],
//         headingList5:"Deployment and Integration",
//         list5:[
//           {
//             id:1,
//             listpara:"Implementation Plan: ",
//             listspan:"We develop a detailed implementation plan to integrate the AI solutions seamlessly into your existing systems.",

//           },
//           {
//             id:2,
//             listpara:"System Integration: ",
//             listspan:"Our team ensures smooth integration of AI models with your business processes, software, and workflows.",
    
//           },
//           {
//             id:3,
//             listpara:"User Training: ",
//             listspan:"We provide comprehensive training for your team to effectively use and manage the AI solutions.",

//           },
    

//         ],
//         headingList6:"Monitoring and Maintenance",
//         list6:[
//           {
//             id:1,
//             listpara:"Continuous Monitoring:",
//             listspan:"Post-deployment, we continuously monitor the performance of the AI models to ensure they operate optimally.",

//           },
//           {
//             id:2,
//             listpara:"Regular Updates: ",
//             listspan:"We provide regular updates and improvements to the AI solutions, adapting to new data and evolving business needs.",
    
//           },
//           {
//             id:3,
//             listpara:"Support Services:",
//             listspan:"Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

//           },
    

//         ],
//         headingList7:"Documentation and Reporting",
//         list7:[
//           {
//             id:1,
//             listpara:"Detailed Documentation:",
//             listspan:"We provide thorough documentation of the entire AI development process, including methodologies, model details, and integration steps.",

//           },
//           {
//             id:2,
//             listpara:"Compliance and Reporting: ",
//             listspan:"We ensure that all AI solutions comply with relevant regulatory standards and provide detailed reports on the outcomes and performance metrics.",
    
//           },
//           {
//             id:3,
//             listpara:"Support Services:",
//             listspan:"Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

//           },
    

//         ],

//         }

//     }
//   },
// ]

// const FeatureAreaHomeOne = ({style, style_onpage} : any) => {
//   const { ref, inView } = useInView({
//     threshold: 0.2,
//   });
//   return (
//     <div ref={ref}> 
//       <section id="services-one-page" className={inView?`zoom-ins feature-area pb-90 pb-sm-thirty p-relative ${style ? "pt-120  pt-sm-fourty feature-inner-bg" : style_onpage? "pt-140" : "pt-140 mb-160"}`:`zoom-outs feature-area pb-90 pb-sm-thirty p-relative ${style ? "pt-120  pt-sm-fourty feature-inner-bg" : style_onpage? "pt-140" : "pt-140 mb-160"}`}
//       style={{backgroundImage: `url(${style ? "assets/img/feature/inner/feature-inner-bg-1.jpg" : null})`}}
//       >
//         <div className="container">
//           <div className="row">
//             {feature_data.map((item, i) =>
//               <div key={i} className={inView?"col-lg-4 col-md-6 slide-in-rights":'col-lg-4 col-md-6'}>
//                 <div className={`tp-feature-item mb-30 wow ${item.fade}`} data-wow-duration="1s" data-wow-delay=".4s">
//                   <div className="tp-feature-icon">
//                     <i className={item.icon}></i>
//                   </div>
//                   <div className="tp-feature-content">
//                   <Link href={{ pathname: `/services-details/${item.id}`}}><h4 className="tp-feature-content-title">{item.title}</h4></Link>
//                     <p>{item.sm_info}</p>
//                   </div>
//                   <div className="tp-feature-shape-two">
//                     <Image  width={700} layout="fill" height={475} style={{ width: '100%', height: '100%' }}  src={Shape} alt={item.sm_info} />
//                   </div>
//                 </div>
//               </div>
//             )} 
//           </div>
//         </div>
//         <div className="tp-feature-shape">
//           <div className="tp-feature-shape-one w-img">
//             <Image src={Deatures} alt="image-title" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FeatureAreaHomeOne;