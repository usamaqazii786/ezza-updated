"use client"
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import service_shape from "@/assets/img/services/two/services-2-shape-1.png";
import { useInView } from 'react-intersection-observer';
import slugify from 'slugify';
import { renderToStaticMarkup } from "react-dom/server";
import project1 from "@/assets/img/services/one/services-avater-1.png";
// import required modules


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
  nextLink: string;

  serviceBanner: ServiceBanner;
  serviceContent: ServiceContent;
  serviceContent2?: ServiceContent2; // Optional property
}
interface DataType {
  sub_title: string;
  title: string;
  info: string;

  slider_data: {
    id: number;
    image: string | StaticImageData;
    title: string;
    project_name: string;

  }[];
}
const services_content: DataType = {
  sub_title: "OUR PROJECTS",
  title: "We ensure that once we take a project on-board, we provide 360 degree solutions. As Ezza-Tech is technological hub, we give your project the ultimate platform to become scalable and successful. We create asthetically pleasing web apps tailored to your needs.",
  info: "System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa ",
  slider_data: [
    // web application
    {
      id: 1,
      image: "https://api.hnhtechsolutions.com/images/1705501258482-3d9b952b89ed9b6863242436c4184ffe-Findmestorage.jpg",
      title: `Find Me Storage`,
      project_name: `Web Application`,

<<<<<<< HEAD
=======
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
        serviceContent2: {
          bannerImage: "Artificial Intelligence",
          ContentHeading1: "Our Working Process",
          Contentpara2: "At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

          ContentHeading3: "Discovery and Requirement Analysis",

          list1: [
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
>>>>>>> 93e00f7 (alldone)
    },
    {
      id: 2,
      image: "https://api.hnhtechsolutions.com/images/1705501704511-18b1ccc825dfe9b5ffe712b9b18f4f60-newontario.jpg",
      title: `Ontario Homes`,
      project_name: `Web Application`,

<<<<<<< HEAD
=======
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
        serviceContent2: {
          bannerImage: "Artificial Intelligence",
          ContentHeading1: "Our Working Process",
          Contentpara2: "At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

          ContentHeading3: "Discovery and Requirement Analysis",

          list1: [
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
>>>>>>> 93e00f7 (alldone)
    },
    {
      id: 3,
      image: "https://api.hnhtechsolutions.com/images/1705501967070-27dbc9019a5ec44ddefd2c6782b3ca28-Valetservices.jpg",
      title: `Valet`,
      project_name: `Web Application`,

<<<<<<< HEAD
=======
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
        serviceContent2: {
          bannerImage: "Artificial Intelligence",
          ContentHeading1: "Our Working Process",
          Contentpara2: "At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

          ContentHeading3: "Discovery and Requirement Analysis",

          list1: [
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
>>>>>>> 93e00f7 (alldone)
    },
    {
      id: 4,
      image: "https://api.hnhtechsolutions.com/images/1705502131753-6cb2a1f229890c81ca3b9733246e4c04-Canada.jpg",
      title: `Canada Enterprizes`,
      project_name: `Web Application`,

<<<<<<< HEAD
=======
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
        serviceContent2: {
          bannerImage: "Artificial Intelligence",
          ContentHeading1: "Our Working Process",
          Contentpara2: "At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

          ContentHeading3: "Discovery and Requirement Analysis",

          list1: [
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
>>>>>>> 93e00f7 (alldone)
    },
    // web application
    // application
    {
      id: 5,
<<<<<<< HEAD
      image: "https://api.hnhtechsolutions.com/images/1705650651420-a7612a660fc7f868891df0fc8e448d3c-SRA.jpg",
      title: `Security Red Alert`,
      project_name: `Mobile Application`,
    },
    {
      id: 6,
      image: "https://api.hnhtechsolutions.com/images/1705650833847-adf016c5f3381ae838e60ad6eadd996e-Amnaya.jpg",
      title: `Shaigan Sehat`,
      project_name: `Mobile Application`,
    },
    {
      id: 7,
      image: "https://api.hnhtechsolutions.com/images/1705662360175-b286dc738bf13e6e54c4ed7c10f6baac-Designer.jpg",
      title: `Designer`,
      project_name: `Mobile Application`,
    },
    {
      id: 8,
      image: "https://api.hnhtechsolutions.com/images/1705652290039-adf016c5f3381ae838e60ad6eadd996e-Amnaya.jpg",
      title: `Amnaya`,
      project_name: `Mobile Application`,
    },
    // AI
    {
      id: 9,
      image: "https://api.hnhtechsolutions.com/images/1724766979941-4a0f8d784d9f54f5e2498707c510b49a-apple-laptop-hd-8k-wallpaper-stock-photographic-image_915071-64065.jpg",
      title: `Dolore elit aut dol`,
      project_name: `AI`,
    },
    {
      id: 10,
      image: "https://api.hnhtechsolutions.com/images/1726148444856-3666c95a9f77e57425eeb20e0d918b84-downloadj.peg",
      title: `Stocks And Cryptocurrency Bot Analyzer`,
      project_name: `AI`,
    },
    {
      id: 11,
      image: "https://api.hnhtechsolutions.com/images/1726148569532-4f5f91c768e8e99de6f9a4f3aff463ea-download.png",
      title: `Virtual Triage is a chatbot`,
      project_name: `AI`,
    },
    {
      id: 12,
      image: "https://api.hnhtechsolutions.com/images/1726149015625-d81917d2fc0a2fe482a7d82a977a0743-download1j.peg",
      title: `Stock image analyze`,
      project_name: `AI`,
=======
      icon: "flaticon-data-visualization",
      title: "Machine Learning",
      serviceDetail: {
        id: 1,
        nextLink: "artificial-Intelligence",
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
        serviceContent2: {
          bannerImage: "Artificial Intelligence",
          ContentHeading1: "Our Working Process",
          Contentpara2: "At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

          ContentHeading3: "Discovery and Requirement Analysis",

          list1: [
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
      id: 6,
      icon: "flaticon-ux-design",
      title: "AI Development",
      serviceDetail: {
        id: 1,
        nextLink: "artificial-Intelligence",
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
        serviceContent2: {
          bannerImage: "Artificial Intelligence",
          ContentHeading1: "Our Working Process",
          Contentpara2: "At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

          ContentHeading3: "Discovery and Requirement Analysis",

          list1: [
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
      id: 7,
      icon: "flaticon-search-engine",
      title: "Database  Development",
      serviceDetail: {
        id: 1,
        nextLink: "artificial-Intelligence",
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
        serviceContent2: {
          bannerImage: "Artificial Intelligence",
          ContentHeading1: "Our Working Process",
          Contentpara2: "At Eza, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",

          ContentHeading3: "Discovery and Requirement Analysis",

          list1: [
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
>>>>>>> 93e00f7 (alldone)
    },
  ]
}

const { sub_title, title, info, slider_data } = services_content

const setting = {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: false,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".tp-blog-main-slider-dot",
    clickable: true,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 4,
    },
    '992': {
      slidesPerView: 3,
      autoplay: {
        delay: 2000,
      },
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

const ServicesAreaHomeTwo = ({ onPageStyle }: any) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  // console.log(slider_data ,"slider_data==>")
  // const cleanTitle = (title: React.ReactNode) => {
  //   if (!title) return ''; // Handle null/undefined

  //   // Ensure title is always a string before processing
  //   const safeTitle = typeof title === "string" ? title : renderToStaticMarkup(<>{title}</>);

  //   return safeTitle.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
  // };
  // <Link  href={`/${slugify(item?.title?.toString() || '', { lower: true })}`}>{item.title}</Link>
  return (
    <div ref={ref}>
      <section id="services-one-page" className={inView ? `services-area tp-services-two pb-120 zoom-ins ${onPageStyle ? "pt-60" : ""}` : `services-area tp-services-two pb-120 zoom-outs ${onPageStyle ? "pt-60" : ""}`}>
        <div className="container">
          <div className="row align-items-end">
            <div className={inView ? "col-xl-12 col-lg-12 slide-in-rights" : "col-xl-12 col-lg-12"}>
              <div className="tp-section tp-section-two mb-50 wow fadeInRight" data-wow-duration="1s"
                data-wow-delay=".4s">
                <span className="tp-section-sub-title">{sub_title}</span>
                <h6 className="tp-section-title">{title}</h6>
              </div>
            </div>
            <div className={inView ? "slide-in-left offset-xl-2 col-xl-5 col-lg-6" : "offset-xl-2 col-xl-5 col-lg-6"}>
              <div className="tp-section mb-40 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-section-title-wrapper">
                  {/* <p>{info}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container my-5 ml-10 mr-10">
          <div className="row">
            {slider_data.map((item) => (
              <div key={item.id} className="col-md-3 col-sm-6 mb-4">
                <div className="hover-card">
                  <div
                    className="hover-card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="hover-card-overlay">
                      <div className="hover-card-text">
                        <Link href={`/${slugify(item?.title || '', { lower: true })}`}>
                          <h5 style={{ color: "white" }}>{item.title}</h5>
                          <p style={{ color: "#FFD700" }}>{item.project_name}</p>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default ServicesAreaHomeTwo;