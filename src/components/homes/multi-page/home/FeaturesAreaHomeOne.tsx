'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Shape from "@/assets/img/feature/one/feature-shape.png";
import Deatures from "@/assets/img/feature/one/features-bg.png";

import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import slugify from 'slugify';


interface ServiceBanner {
  bannertext: string;
  bannerImage: string;
}

interface ListItem {
  id: number;
  listpara: string;
  listspan: string;
}
interface ServiceContent {
  bannerImage: string;
  ContentHeading1: string;
  ContentHeading2: string;
  para22: string;
  heading23: string;
  ContentHeading3: string;
  list1: ListItem[];
  ContentHeading4: string;
  list2: ListItem[];
  para23: string;
}

interface ServiceContent2 {
  bannerImage: string;
  ContentHeading1: string;
  Contentpara2: string;
  ContentHeading3: string;
  list1: ListItem[];
  ContentHeading4: string;
  list2: ListItem[];
  headingList3: string;
  list3: ListItem[];
  headingList4: string;
  list4: ListItem[];
  headingList5: string;
  list5: ListItem[];
  headingList6: string;
  list6: ListItem[];
  headingList7: string;
  list7: ListItem[];
}

interface ServiceDetails {
  id: number;
  serviceBanner: ServiceBanner;
  serviceContent: ServiceContent;
  serviceContent2?: ServiceContent2; // Optional property
}

interface DataType {
  id: number;
  fade: string;
  icon: string;
  title: string;
  sm_info: string;
  semi_title?: string;
  serviceDetail?: ServiceDetails;
}






const feature_data: DataType[] = [
  {
    id: 1,
    fade: "fadeInRight",
    icon: "flaticon-solution-1",
    title: "Best Business \n Solution",
    sm_info: `
      <p>Empower Your Business with the Best Business Solutions!</p>
      <p>At Eza Tech, we understand that every business faces unique challenges—and we’re here to solve them. Our Business Solutions service is designed to streamline operations, improve efficiency, reduce costs, and drive long-term growth for businesses of all sizes.</p>
      <p>We offer customized strategies tailored to your needs, using a combination of expert consultation, process automation, outsourcing, and digital transformation. From identifying inefficiencies to implementing scalable systems, our solutions help businesses become leaner, smarter, and more competitive.</p>
      <p>Whether you’re a startup needing operational support or an established company looking to expand, our team of professionals collaborates closely with you to deliver results. We provide actionable insights and hands-on implementation, ensuring measurable improvement and sustainable success.</p>
      <p>Our solutions aren’t one-size-fits-all—they’re built around your goals. Partner with us to unlock your business’s full potential and experience growth driven by innovation, strategy, and smart execution.</p>
      <hr/>
      <h5 class="text-white">Our Working Process</h5>
      <ul class="text-white">
        <li><strong>Consultation and Needs Assessment:</strong> We begin by understanding your business model, challenges, and goals. Through collaborative workshops and data analysis, we uncover areas for growth and optimization.</li>
        <li><strong>Strategic Planning:</strong> Based on our findings, we develop a tailored strategy that aligns with your vision. This includes resource planning, process redesign, and technology recommendations.</li>
        <li><strong>Implementation and Execution:</strong> Our team takes the lead in putting the plan into action—whether it’s deploying digital tools, managing outsourced teams, or streamlining internal processes.</li>
        <li><strong>Monitoring and Optimization:</strong> We continuously track performance and gather feedback to refine the solution. Our goal is to ensure maximum efficiency, ROI, and adaptability to changing market conditions.</li>
      </ul>
    `,
    semi_title: "Our Working Process",
    serviceDetail: {
      id: 1,
      serviceBanner: {
        bannertext: "Artificial Intelligence",
        bannerImage: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
      },
      serviceContent: {
        bannerImage: "Artificial Intelligence",
        ContentHeading1: "Empower Your Business with Innovative Development Solutions",
        ContentHeading2: "Artificial Intelligence (AI) Development: Leading the Future of Technology",
        para22: "Embrace the future with our cutting-edge AI development services. Our AI expertise spans multiple industries, including medical sciences, architecture, finance, marketing, sales, and more. We specialize in developing AI-powered diagnostic tools for medical applications, predictive analytics for finance, and intelligent marketing and sales solutions.",
        heading23: "Our AI Capabilities:",
        ContentHeading3: "Why Choose Us for AI Development?",

        list1: [
          {
            id: 1,
            listpara: "Industry-Specific Solutions:",
            listspan: "From healthcare to finance and construction, our AI projects are tailored to meet the unique needs of various sectors.",

          },
          {

            id: 2,
            listpara: "Expert Team:",
            listspan: "Our AI experts utilize the latest advancements to create customized solutions that automate processes, optimize workflows, and provide actionable insights.",

          },
          {
            id: 3,
            listpara: "Innovation-Driven:",
            listspan: "We focus on leveraging AI to address complex challenges, drive innovation, and unlock new opportunities for growth and competitiveness.",

          }

        ],
        ContentHeading4: "Our AI Capabilities:",
        list2: [
          {
            id: 1,
            listpara: "Medical Sciences:",
            listspan: "AI-powered diagnostic tools for accurate and efficient patient care.",

          },
          {
            id: 2,
            listpara: "Finance:",
            listspan: "Predictive analytics to optimize investment strategies and risk management.",

          },
          {
            id: 3,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          },
          {
            id: 4,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          }

        ],
        para23: "With our AI-enabled capabilities, your business will achieve operational excellence, enhanced competitiveness, and sustainable growth. Partner with us to harness the full potential of AI and revolutionize your industry."


      },
<<<<<<< HEAD
      serviceContent2: {
        bannerImage: "Artificial Intelligence",
        ContentHeading1: "Our Working Process",
        Contentpara2: "At EZA-TECH, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

        ContentHeading3: "Discovery and Requirement Analysis",

        list1: [
=======
      serviceContent2:{
          bannerImage:"Artificial Intelligence",
          ContentHeading1:"Our Working Process",
          Contentpara2:"At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
       
          ContentHeading3:"Discovery and Requirement Analysis",
  
          list1:[
            {
              id:1,
              listpara:"Initial Consultation: ",
              listspan:"We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",
  
            },
            {
  
              id:2,
              listpara:"Requirement Gathering: ",
              listspan:"Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",
      
            },
            {
              id:3,
              listpara:"Feasibility Study: ",
              listspan:"We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",
  
            }
  
          ],
          ContentHeading4:"Data Collection and Preparation",
          list2:[
            {
              id:1,
              listpara:"Data Gathering:",
              listspan:" We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",
  
            },
            {
              id:2,
              listpara:"Data Cleaning:",
              listspan:"Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",
      
            },
            {
              id:3,
              listpara:"Data Annotation:",
              listspan:" We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",
  
            },
            {
              id:4,
              listpara:"Marketing and Sales:",
              listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",
  
            }
  
          ],
      headingList3:"Model Development and Training",
  
      list3:[
>>>>>>> 93e00f7 (alldone)
          {
            id: 1,
            listpara: "Initial Consultation: ",
            listspan: "We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",

          },
          {

            id: 2,
            listpara: "Requirement Gathering: ",
            listspan: "Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",

          },
          {
            id: 3,
            listpara: "Feasibility Study: ",
            listspan: "We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",

          }

        ],
        ContentHeading4: "Data Collection and Preparation",
        list2: [
          {
            id: 1,
            listpara: "Data Gathering:",
            listspan: " We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",

          },
          {
            id: 2,
            listpara: "Data Cleaning:",
            listspan: "Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",

          },
          {
            id: 3,
            listpara: "Data Annotation:",
            listspan: " We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",

          },
          {
            id: 4,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          }

        ],
        headingList3: "Model Development and Training",

        list3: [
          {
            id: 1,
            listpara: "Algorithm Selection:",
            listspan: " Based on the project requirements, we select the most suitable algorithms and machine learning techniques.",

          },
          {
            id: 2,
            listpara: "Model Building: ",
            listspan: " Our data scientists build and customize AI models, such as Naive Bayes, LSTM, CNN, and Transformer models, tailored to your needs.",

          },
          {
            id: 3,
            listpara: "Training and Validation: ",
            listspan: " We train the models using the prepared data, followed by rigorous validation to ensure accuracy and reliability. This includes splitting the data into training, validation, and testing sets",

          },


        ],
        headingList4: "Testing and Evaluation",
        list4: [
          {
            id: 1,
            listpara: "Performance Metrics:",
            listspan: "We evaluate model performance using various metrics like accuracy, precision, recall, and F1-score.",

          },
          {
            id: 2,
            listpara: "Iterative Refinement: ",
            listspan: "Based on the evaluation results, we iteratively refine and optimize the models to enhance performance.",

          },
          {
            id: 3,
            listpara: "Real-World Testing: ",
            listspan: "We test the models on real-world data scenarios to validate their effectiveness and reliability in practical applications.",

          },


        ],
        headingList5: "Deployment and Integration",
        list5: [
          {
            id: 1,
            listpara: "Implementation Plan: ",
            listspan: "We develop a detailed implementation plan to integrate the AI solutions seamlessly into your existing systems.",

          },
          {
            id: 2,
            listpara: "System Integration: ",
            listspan: "Our team ensures smooth integration of AI models with your business processes, software, and workflows.",

          },
          {
            id: 3,
            listpara: "User Training: ",
            listspan: "We provide comprehensive training for your team to effectively use and manage the AI solutions.",

          },


        ],
        headingList6: "Monitoring and Maintenance",
        list6: [
          {
            id: 1,
            listpara: "Continuous Monitoring:",
            listspan: "Post-deployment, we continuously monitor the performance of the AI models to ensure they operate optimally.",

          },
          {
            id: 2,
            listpara: "Regular Updates: ",
            listspan: "We provide regular updates and improvements to the AI solutions, adapting to new data and evolving business needs.",

          },
          {
            id: 3,
            listpara: "Support Services:",
            listspan: "Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

          },


        ],
        headingList7: "Documentation and Reporting",
        list7: [
          {
            id: 1,
            listpara: "Detailed Documentation:",
            listspan: "We provide thorough documentation of the entire AI development process, including methodologies, model details, and integration steps.",

          },
          {
            id: 2,
            listpara: "Compliance and Reporting: ",
            listspan: "We ensure that all AI solutions comply with relevant regulatory standards and provide detailed reports on the outcomes and performance metrics.",

          },
          {
            id: 3,
            listpara: "Support Services:",
            listspan: "Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

          },


        ],

      }

    }
  },
  {
    id: 2,
    fade: "fadeInUp",
    icon: "flaticon-search-engine",
    title: "Business Growth \n Planning",
    sm_info: `
    <p>Strategize for Success with Expert Business Growth Planning!</p>
    <p>At Eza Tech, we believe growth doesn’t happen by chance—it’s engineered through smart planning, strategic decision-making, and consistent execution. Our Business Growth Planning service is designed to help companies define their long-term vision, set achievable milestones, and build scalable strategies for sustainable expansion.</p>
    <p>We work closely with founders, executives, and operational teams to identify growth opportunities, evaluate risks, and create actionable roadmaps tailored to your market, resources, and goals. Whether you’re entering new markets, launching products, or scaling operations, we provide the insights and direction needed to move with confidence.</p>
    <p>Our expert consultants bring industry knowledge and strategic thinking to the table, helping you make data-backed decisions, improve financial performance, and align your business structure with your vision for growth.</p>
    <p>Growth is a journey—let’s plan yours with purpose and precision.</p>
    <hr/>
    <h5 class="text-white">Our Working Process</h5>
    <ul class="text-white">
      <li><strong>Discovery and Goal Setting:</strong> We begin by understanding your business, vision, challenges, and aspirations. Through one-on-one sessions and data review, we establish clear growth goals and KPIs.</li>
      <li><strong>Market and Competitor Analysis:</strong> Our team analyzes your target market, competitors, and industry trends to identify gaps, emerging opportunities, and potential threats that could impact your growth.</li>
      <li><strong>Strategic Roadmapping:</strong> We design a tailored growth strategy that covers short-term wins and long-term goals. This includes financial forecasting, resource allocation, team structuring, marketing direction, and expansion planning.</li>
      <li><strong>Execution and Performance Monitoring:</strong> We support you during execution, providing ongoing guidance and tracking progress through measurable indicators. Adjustments are made as needed to keep your business on track and responsive to change.</li>
    </ul>
  `,
    serviceDetail: {
      id: 1,
      serviceBanner: {
        bannertext: "Artificial Intelligence",
        bannerImage: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
      },
      serviceContent: {
        bannerImage: "Artificial Intelligence",
        ContentHeading1: "Empower Your Business with Innovative Development Solutions",
        ContentHeading2: "Artificial Intelligence (AI) Development: Leading the Future of Technology",
        para22: "Embrace the future with our cutting-edge AI development services. Our AI expertise spans multiple industries, including medical sciences, architecture, finance, marketing, sales, and more. We specialize in developing AI-powered diagnostic tools for medical applications, predictive analytics for finance, and intelligent marketing and sales solutions.",
        heading23: "Our AI Capabilities:",
        ContentHeading3: "Why Choose Us for AI Development?",

        list1: [
          {
            id: 1,
            listpara: "Industry-Specific Solutions:",
            listspan: "From healthcare to finance and construction, our AI projects are tailored to meet the unique needs of various sectors.",

          },
          {

            id: 2,
            listpara: "Expert Team:",
            listspan: "Our AI experts utilize the latest advancements to create customized solutions that automate processes, optimize workflows, and provide actionable insights.",

          },
          {
            id: 3,
            listpara: "Innovation-Driven:",
            listspan: "We focus on leveraging AI to address complex challenges, drive innovation, and unlock new opportunities for growth and competitiveness.",

          }

        ],
        ContentHeading4: "Our AI Capabilities:",
        list2: [
          {
            id: 1,
            listpara: "Medical Sciences:",
            listspan: "AI-powered diagnostic tools for accurate and efficient patient care.",

          },
          {
            id: 2,
            listpara: "Finance:",
            listspan: "Predictive analytics to optimize investment strategies and risk management.",

          },
          {
            id: 3,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          },
          {
            id: 4,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          }

        ],
        para23: "With our AI-enabled capabilities, your business will achieve operational excellence, enhanced competitiveness, and sustainable growth. Partner with us to harness the full potential of AI and revolutionize your industry."


      },
<<<<<<< HEAD
      serviceContent2: {
        bannerImage: "Artificial Intelligence",
        ContentHeading1: "Our Working Process",
        Contentpara2: "At EZA-TECH, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

        ContentHeading3: "Discovery and Requirement Analysis",

        list1: [
=======
      serviceContent2:{
          bannerImage:"Artificial Intelligence",
          ContentHeading1:"Our Working Process",
          Contentpara2:"At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
       
          ContentHeading3:"Discovery and Requirement Analysis",
  
          list1:[
            {
              id:1,
              listpara:"Initial Consultation: ",
              listspan:"We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",
  
            },
            {
  
              id:2,
              listpara:"Requirement Gathering: ",
              listspan:"Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",
      
            },
            {
              id:3,
              listpara:"Feasibility Study: ",
              listspan:"We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",
  
            }
  
          ],
          ContentHeading4:"Data Collection and Preparation",
          list2:[
            {
              id:1,
              listpara:"Data Gathering:",
              listspan:" We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",
  
            },
            {
              id:2,
              listpara:"Data Cleaning:",
              listspan:"Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",
      
            },
            {
              id:3,
              listpara:"Data Annotation:",
              listspan:" We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",
  
            },
            {
              id:4,
              listpara:"Marketing and Sales:",
              listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",
  
            }
  
          ],
      headingList3:"Model Development and Training",
  
      list3:[
>>>>>>> 93e00f7 (alldone)
          {
            id: 1,
            listpara: "Initial Consultation: ",
            listspan: "We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",

          },
          {

            id: 2,
            listpara: "Requirement Gathering: ",
            listspan: "Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",

          },
          {
            id: 3,
            listpara: "Feasibility Study: ",
            listspan: "We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",

          }

        ],
        ContentHeading4: "Data Collection and Preparation",
        list2: [
          {
            id: 1,
            listpara: "Data Gathering:",
            listspan: " We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",

          },
          {
            id: 2,
            listpara: "Data Cleaning:",
            listspan: "Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",

          },
          {
            id: 3,
            listpara: "Data Annotation:",
            listspan: " We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",

          },
          {
            id: 4,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          }

        ],
        headingList3: "Model Development and Training",

        list3: [
          {
            id: 1,
            listpara: "Algorithm Selection:",
            listspan: " Based on the project requirements, we select the most suitable algorithms and machine learning techniques.",

          },
          {
            id: 2,
            listpara: "Model Building: ",
            listspan: " Our data scientists build and customize AI models, such as Naive Bayes, LSTM, CNN, and Transformer models, tailored to your needs.",

          },
          {
            id: 3,
            listpara: "Training and Validation: ",
            listspan: " We train the models using the prepared data, followed by rigorous validation to ensure accuracy and reliability. This includes splitting the data into training, validation, and testing sets",

          },


        ],
        headingList4: "Testing and Evaluation",
        list4: [
          {
            id: 1,
            listpara: "Performance Metrics:",
            listspan: "We evaluate model performance using various metrics like accuracy, precision, recall, and F1-score.",

          },
          {
            id: 2,
            listpara: "Iterative Refinement: ",
            listspan: "Based on the evaluation results, we iteratively refine and optimize the models to enhance performance.",

          },
          {
            id: 3,
            listpara: "Real-World Testing: ",
            listspan: "We test the models on real-world data scenarios to validate their effectiveness and reliability in practical applications.",

          },


        ],
        headingList5: "Deployment and Integration",
        list5: [
          {
            id: 1,
            listpara: "Implementation Plan: ",
            listspan: "We develop a detailed implementation plan to integrate the AI solutions seamlessly into your existing systems.",

          },
          {
            id: 2,
            listpara: "System Integration: ",
            listspan: "Our team ensures smooth integration of AI models with your business processes, software, and workflows.",

          },
          {
            id: 3,
            listpara: "User Training: ",
            listspan: "We provide comprehensive training for your team to effectively use and manage the AI solutions.",

          },


        ],
        headingList6: "Monitoring and Maintenance",
        list6: [
          {
            id: 1,
            listpara: "Continuous Monitoring:",
            listspan: "Post-deployment, we continuously monitor the performance of the AI models to ensure they operate optimally.",

          },
          {
            id: 2,
            listpara: "Regular Updates: ",
            listspan: "We provide regular updates and improvements to the AI solutions, adapting to new data and evolving business needs.",

          },
          {
            id: 3,
            listpara: "Support Services:",
            listspan: "Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

          },


        ],
        headingList7: "Documentation and Reporting",
        list7: [
          {
            id: 1,
            listpara: "Detailed Documentation:",
            listspan: "We provide thorough documentation of the entire AI development process, including methodologies, model details, and integration steps.",

          },
          {
            id: 2,
            listpara: "Compliance and Reporting: ",
            listspan: "We ensure that all AI solutions comply with relevant regulatory standards and provide detailed reports on the outcomes and performance metrics.",

          },
          {
            id: 3,
            listpara: "Support Services:",
            listspan: "Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

          },


        ],

      }

    }
  },
  {
    id: 3,
    fade: "fadeInLeft",
    icon: "flaticon-speed",
    title: "Search Engine \n Optimization",
    sm_info: `
  <p><strong>Search Engine Optimisation</strong></p>
  <p><strong>Boost Your Online Visibility with Powerful SEO Services!</strong></p>
  <p>In today’s digital landscape, showing up on search engines isn’t just important—it’s essential. At Eza Tech, our Search Engine Optimization (SEO) services are designed to help your business rise above the competition and get discovered by the right audience at the right time.</p>
  <p>We focus on both on-page and off-page SEO strategies to improve your website’s rankings, increase organic traffic, and drive qualified leads to your business. From technical audits and keyword optimization to content strategy and link building, our SEO experts ensure that every part of your digital presence is optimized for maximum visibility and performance.</p>
  <p>Whether you’re a local business targeting nearby customers or a growing brand expanding globally, we tailor SEO strategies to meet your unique goals. We stay updated with the latest search engine algorithms and best practices, helping your website stay ahead in a constantly evolving digital environment.</p>
  <p>Let us help you grow organically and turn your website into a lead-generating machine.</p>
  <hr/>
  <h5 class="text-white">Our Working Process</h5>
  <ul class="text-white">
    <li><strong>SEO Audit and Analysis:</strong> We begin by conducting a full audit of your website to identify technical issues, content gaps, and opportunities for optimization. This forms the foundation of your personalized SEO strategy.</li>
    <li><strong>Keyword Research and Strategy:</strong> Our team identifies high-impact keywords relevant to your industry, services, and target audience. We build a keyword map to drive traffic with intent and maximize visibility.</li>
    <li><strong>On-Page Optimization:</strong> We optimize your site’s structure, meta tags, headings, content, images, and internal links to ensure search engine friendliness and enhance user experience.</li>
    <li><strong>Off-Page SEO and Link Building:</strong> We strengthen your domain authority with quality backlinks, directory listings, guest posts, and outreach campaigns, building a trustworthy online presence.</li>
    <li><strong>Tracking, Reporting, and Refinement:</strong> Using advanced analytics tools, we track keyword rankings, traffic, and conversions. Regular reports and reviews allow us to refine strategies and deliver measurable results.</li>
  </ul>
`,
    serviceDetail: {
      id: 1,
      serviceBanner: {
        bannertext: "Artificial Intelligence",
        bannerImage: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
      },
      serviceContent: {
        bannerImage: "Artificial Intelligence",
        ContentHeading1: "Empower Your Business with Innovative Development Solutions",
        ContentHeading2: "Artificial Intelligence (AI) Development: Leading the Future of Technology",
        para22: "Embrace the future with our cutting-edge AI development services. Our AI expertise spans multiple industries, including medical sciences, architecture, finance, marketing, sales, and more. We specialize in developing AI-powered diagnostic tools for medical applications, predictive analytics for finance, and intelligent marketing and sales solutions.",
        heading23: "Our AI Capabilities:",
        ContentHeading3: "Why Choose Us for AI Development?",

        list1: [
          {
            id: 1,
            listpara: "Industry-Specific Solutions:",
            listspan: "From healthcare to finance and construction, our AI projects are tailored to meet the unique needs of various sectors.",

          },
          {

            id: 2,
            listpara: "Expert Team:",
            listspan: "Our AI experts utilize the latest advancements to create customized solutions that automate processes, optimize workflows, and provide actionable insights.",

          },
          {
            id: 3,
            listpara: "Innovation-Driven:",
            listspan: "We focus on leveraging AI to address complex challenges, drive innovation, and unlock new opportunities for growth and competitiveness.",

          }

        ],
        ContentHeading4: "Our AI Capabilities:",
        list2: [
          {
            id: 1,
            listpara: "Medical Sciences:",
            listspan: "AI-powered diagnostic tools for accurate and efficient patient care.",

          },
          {
            id: 2,
            listpara: "Finance:",
            listspan: "Predictive analytics to optimize investment strategies and risk management.",

          },
          {
            id: 3,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          },
          {
            id: 4,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          }

        ],
        para23: "With our AI-enabled capabilities, your business will achieve operational excellence, enhanced competitiveness, and sustainable growth. Partner with us to harness the full potential of AI and revolutionize your industry."


      },
<<<<<<< HEAD
      serviceContent2: {
        bannerImage: "Artificial Intelligence",
        ContentHeading1: "Our Working Process",
        Contentpara2: "At EZA-TECH, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

        ContentHeading3: "Discovery and Requirement Analysis",

        list1: [
=======
      serviceContent2:{
          bannerImage:"Artificial Intelligence",
          ContentHeading1:"Our Working Process",
          Contentpara2:"At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",
       
          ContentHeading3:"Discovery and Requirement Analysis",
  
          list1:[
            {
              id:1,
              listpara:"Initial Consultation: ",
              listspan:"We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",
  
            },
            {
  
              id:2,
              listpara:"Requirement Gathering: ",
              listspan:"Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",
      
            },
            {
              id:3,
              listpara:"Feasibility Study: ",
              listspan:"We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",
  
            }
  
          ],
          ContentHeading4:"Data Collection and Preparation",
          list2:[
            {
              id:1,
              listpara:"Data Gathering:",
              listspan:" We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",
  
            },
            {
              id:2,
              listpara:"Data Cleaning:",
              listspan:"Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",
      
            },
            {
              id:3,
              listpara:"Data Annotation:",
              listspan:" We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",
  
            },
            {
              id:4,
              listpara:"Marketing and Sales:",
              listspan:"Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",
  
            }
  
          ],
      headingList3:"Model Development and Training",
  
      list3:[
>>>>>>> 93e00f7 (alldone)
          {
            id: 1,
            listpara: "Initial Consultation: ",
            listspan: "We begin by understanding your business objectives, challenges, and specific AI needs through detailed consultations.",

          },
          {

            id: 2,
            listpara: "Requirement Gathering: ",
            listspan: "Our team collects comprehensive information on the project scope, existing data, and desired outcomes.",

          },
          {
            id: 3,
            listpara: "Feasibility Study: ",
            listspan: "We conduct a feasibility study to assess the potential impact and viability of AI solutions for your business.",

          }

        ],
        ContentHeading4: "Data Collection and Preparation",
        list2: [
          {
            id: 1,
            listpara: "Data Gathering:",
            listspan: " We collect relevant data from various sources, ensuring a robust dataset for training our AI models.",

          },
          {
            id: 2,
            listpara: "Data Cleaning:",
            listspan: "Our experts clean and preprocess the data to remove inconsistencies, missing values, and irrelevant information.",

          },
          {
            id: 3,
            listpara: "Data Annotation:",
            listspan: " We annotate and label the data as required, especially for supervised learning tasks, ensuring high-quality input for model training.",

          },
          {
            id: 4,
            listpara: "Marketing and Sales:",
            listspan: "Intelligent solutions for targeted marketing, customer segmentation, and sales forecasting.",

          }

        ],
        headingList3: "Model Development and Training",

        list3: [
          {
            id: 1,
            listpara: "Algorithm Selection:",
            listspan: " Based on the project requirements, we select the most suitable algorithms and machine learning techniques.",

          },
          {
            id: 2,
            listpara: "Model Building: ",
            listspan: " Our data scientists build and customize AI models, such as Naive Bayes, LSTM, CNN, and Transformer models, tailored to your needs.",

          },
          {
            id: 3,
            listpara: "Training and Validation: ",
            listspan: " We train the models using the prepared data, followed by rigorous validation to ensure accuracy and reliability. This includes splitting the data into training, validation, and testing sets",

          },


        ],
        headingList4: "Testing and Evaluation",
        list4: [
          {
            id: 1,
            listpara: "Performance Metrics:",
            listspan: "We evaluate model performance using various metrics like accuracy, precision, recall, and F1-score.",

          },
          {
            id: 2,
            listpara: "Iterative Refinement: ",
            listspan: "Based on the evaluation results, we iteratively refine and optimize the models to enhance performance.",

          },
          {
            id: 3,
            listpara: "Real-World Testing: ",
            listspan: "We test the models on real-world data scenarios to validate their effectiveness and reliability in practical applications.",

          },


        ],
        headingList5: "Deployment and Integration",
        list5: [
          {
            id: 1,
            listpara: "Implementation Plan: ",
            listspan: "We develop a detailed implementation plan to integrate the AI solutions seamlessly into your existing systems.",

          },
          {
            id: 2,
            listpara: "System Integration: ",
            listspan: "Our team ensures smooth integration of AI models with your business processes, software, and workflows.",

          },
          {
            id: 3,
            listpara: "User Training: ",
            listspan: "We provide comprehensive training for your team to effectively use and manage the AI solutions.",

          },


        ],
        headingList6: "Monitoring and Maintenance",
        list6: [
          {
            id: 1,
            listpara: "Continuous Monitoring:",
            listspan: "Post-deployment, we continuously monitor the performance of the AI models to ensure they operate optimally.",

          },
          {
            id: 2,
            listpara: "Regular Updates: ",
            listspan: "We provide regular updates and improvements to the AI solutions, adapting to new data and evolving business needs.",

          },
          {
            id: 3,
            listpara: "Support Services:",
            listspan: "Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

          },


        ],
        headingList7: "Documentation and Reporting",
        list7: [
          {
            id: 1,
            listpara: "Detailed Documentation:",
            listspan: "We provide thorough documentation of the entire AI development process, including methodologies, model details, and integration steps.",

          },
          {
            id: 2,
            listpara: "Compliance and Reporting: ",
            listspan: "We ensure that all AI solutions comply with relevant regulatory standards and provide detailed reports on the outcomes and performance metrics.",

          },
          {
            id: 3,
            listpara: "Support Services:",
            listspan: "Our support team is always available to assist with any issues, ensuring sustained performance and value from our AI solutions.",

          },


        ],

      }

    }
  },
]

const FeaturesAreaHomeOne = ({ style, style_onpage }: any) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [showMore, setShowMore] = useState<Record<number, boolean>>({});

  const checkingClick = (id: number) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div ref={ref}>
      <section id="services-one-page" className={inView ? `zoom-ins feature-area pb-90 pb-sm-thirty p-relative ${style ? "pt-120  pt-sm-fourty feature-inner-bg" : style_onpage ? "pt-140" : "pt-140 mb-160"}` : `zoom-outs feature-area pb-90 pb-sm-thirty p-relative ${style ? "pt-120  pt-sm-fourty feature-inner-bg" : style_onpage ? "pt-140" : "pt-140 mb-160"}`}
        style={{ backgroundImage: `url(${style ? "assets/img/feature/inner/feature-inner-bg-1.jpg" : null})` }}
      >
        <div className="container">
          <div className="row">

            {feature_data.map((item, i) => {
              return (
                <div
                  key={i}
                  className={inView ? "col-lg-4 col-md-6 slide-in-rights" : "col-lg-4 col-md-6"}
                >
                  <div
                    className={`tp-feature-item mb-30 wow ${item.fade}`}
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                  >
                    <div className="tp-feature-icon">
                      <i className={item.icon}></i>
                    </div>

                    <div className="tp-feature-content">
                      <Link
                        href={`/${slugify(item?.title?.toString() || "", { lower: true })}`}
                      >
                        <h4
                          className="tp-feature-content-title"
                          dangerouslySetInnerHTML={{
                            __html: item?.title.replace(/\n/g, "<br/>"),
                          }}
                        ></h4>
                      </Link>

                      <div
                        className={`tp-feature-description ${showMore[item.id] ? "show-full" : "line-clamp"
                          }`}
                        dangerouslySetInnerHTML={{ __html: item.sm_info }}
                      ></div>

                      <div className="see-more-btn">
                        <button onClick={() => checkingClick(item.id)}>
                          {showMore[item.id] ? "See Less" : "See More"}
                        </button>
                      </div>
                    </div>

                    <div className="tp-feature-shape-two">
                      <Image src={Shape} alt={item.title} />
                    </div>
                  </div>
                </div>
              );
            })}



          </div>
        </div>
        <div className="tp-feature-shape">
          <div className="tp-feature-shape-one w-img">
            <Image src={Deatures} alt="image-title" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesAreaHomeOne;