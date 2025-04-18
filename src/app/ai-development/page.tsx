"use client";
import { useParams, useSearchParams } from 'next/navigation';
import Breadcrumb from '../../components/common/ServiceDetail';
import Content from '../../components/common/ServiceDetailContent';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import Wrapper from '@/layout/Wrapper';
import FooterOne from '@/layout/footers/FooterOne';

const servicedata =  {
  id: 6,
  icon: "flaticon-ux-design",
  title: <>AI Development</>,
  serviceDetail: {
    id: 1,
    nextLink: "AI Development",
    serviceBanner: {
      bannertext: "AI Development",
      bannerImage: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
    },
    serviceContent: {
      paraMain: "Service Description",
      machineMain: "(AI) Development through Machine Learning",


      machineList1: [
        {
          id: 1,
          listpara: "Introduction to AI Development:",
          listspan: "Artificial Intelligence (AI) development through Machine Learning (ML) is transforming the technological landscape, enabling machines to perform tasks that typically require human intelligence. This integration leverages data-driven approaches to create systems capable of learning, adapting, and improving over time. As a result, AI development has accelerated, with ML being a core component driving innovation in this space.",

        },
        {

          id: 2,
          listpara: "The Role of Data in AI Development:",
          listspan: "Data is the backbone of Machine Learning and, by extension, AI development. The quality and quantity of data significantly impact the performance of ML models. In AI development, data is used to train models to recognize patterns, make predictions, and automate decision-making processes. Collecting, cleaning, and preprocessing data are critical steps that ensure the effectiveness of the AI system being developed.",

        },
        {
          id: 3,
          listpara: "Model Training and Algorithms:",
          listspan: "The training of ML models involves selecting appropriate algorithms that can learn from data and make accurate predictions. Common algorithms include decision trees, neural networks, and support vector machines. During training, the model learns from a subset of data (training set) and is then tested on another subset (test set) to evaluate its performance. The choice of algorithm and training process is crucial for developing robust AI systems.",

        },
        {
          id: 4,
          listpara: "Evaluation and Validation:",
          listspan: "Once an ML model is trained, it needs to be evaluated to ensure its accuracy and reliability. This involves using metrics such as precision, recall, and F1 score to measure the model's performance. Cross-validation techniques, such as k-fold validation, help in assessing how well the model generalizes to unseen data. Rigorous evaluation and validation are essential steps in AI development to prevent overfitting and underfitting.",

        },
        {
          id: 5,
          listpara: "Deployment and Integration:",
          listspan: "After successful training and evaluation, the ML model is deployed into a production environment where it interacts with real-world data. Deployment involves integrating the model with existing systems and ensuring it can operate at scale. This phase also includes setting up monitoring and maintenance processes to track the model's performance over time and make necessary adjustments as needed.",

        },
        {
          id: 6,
          listpara: "Continuous Learning and Improvement:",
          listspan: "AI development is not a one-time process but a continuous cycle of learning and improvement. As new data becomes available, the ML models need to be retrained and updated to maintain their accuracy and relevance. This continuous learning approach ensures that AI systems can adapt to changing environments and evolving data patterns, providing sustained value over time.",
        },
        {
          id: 7,
          listpara: "Challenges and Ethical Considerations:",
          listspan: "Developing AI through Machine Learning presents several challenges, including data privacy, model interpretability, and ethical concerns related to bias and fairness. Addressing these challenges requires a comprehensive approach that includes transparent model development, rigorous testing, and adherence to ethical guidelines. Ensuring responsible AI development is crucial for building trust and maximizing the benefits of AI technologies.",
        },

      ],


    },
    serviceContent2: {
      bannerImage: "Artificial Intelligence",
      ContentHeading1: "Our Working Process",
      Contentpara2: "At EZA-TECHnology, we follow a structured and comprehensive process to ensure the successful development and implementation of AI solutions tailored to meet the unique needs of our clients. Our working process is designed to maximize efficiency, accuracy, and innovation. Here’s how we do it:",


      list1: [
        {
          id: 1,
          listpara: "Introduction to AI Development in Machine Learning: ",
          listspan: "AI development in the context of Machine Learning (ML) involves creating intelligent systems that can learn from data, adapt to new information, and make decisions with minimal human intervention. This process includes data collection, preprocessing, model training, evaluation, and deployment. The goal is to develop models that can perform tasks such as classification, prediction, and pattern recognition with high accuracy.",

        },
        {

          id: 2,
          listpara: "Data Collection and Preprocessing:",
          listspan: "The first step in AI development is data collection, which involves gathering relevant data from various sources. This data can be structured or unstructured and must be representative of the problem domain. Preprocessing the data is crucial to ensure quality and consistency. This includes cleaning the data (handling missing values, outliers), transforming data into a suitable format, and feature engineering (selecting and creating meaningful features).",

        },
        {
          id: 3,
          listpara: "Choosing the Right Algorithms: ",
          listspan: "Selecting the appropriate algorithms is a critical step in AI development. The choice depends on the nature of the problem, the type of data, and the desired outcome. Common algorithms include decision trees, support vector machines, neural networks, and ensemble methods like random forests and gradient boosting. Each algorithm has its strengths and weaknesses, and sometimes a combination of algorithms (ensemble learning) is used to achieve better performance.",

        },
        {
          id: 4,
          listpara: "Model Training and Optimization: ",
          listspan: "Model training involves feeding the algorithm with training data and adjusting parameters to minimize the error in predictions. This process requires selecting an appropriate loss function and optimization technique. Hyperparameter tuning, which involves adjusting the algorithm's settings, is crucial for improving model performance. Techniques such as cross-validation and grid search are commonly used for this purpose.",

        },
        {
          id: 5,
          listpara: " Model Evaluation and Validation: ",
          listspan: "After training, the model's performance is evaluated using metrics such as accuracy, precision, recall, F1-score, and ROC-AUC. It is essential to validate the model on a separate validation dataset to ensure it generalizes well to new data. Techniques like k-fold cross-validation help in assessing the model’s robustness. Proper evaluation helps in identifying overfitting or underfitting issues, which can then be addressed.",

        },
        {
          id: 6,
          listpara: " Deployment and Monitoring: ",
          listspan: "Once the model is validated, it is deployed into a production environment where it can make predictions on new data. Deployment involves integrating the model with existing systems and ensuring it can handle real-time data processing. Continuous monitoring is necessary to track the model's performance and update it as needed. This includes retraining the model with new data to maintain its accuracy and relevance.",

        },
        {
          id: 6,
          listpara: "Ethical Considerations and Future Directions: ",
          listspan: "AI development must consider ethical implications such as fairness, transparency, and accountability. Ensuring that models are free from bias and that decisions made by AI systems are explainable is crucial for building trust. Privacy and data protection are also significant concerns. Future directions in AI development include creating more interpretable models, improving transfer learning, and developing AI systems that can learn with minimal supervision, leading to more robust and versatile AI applications.",

        },

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
