"use client";
import { useParams, useSearchParams } from 'next/navigation';
import Breadcrumb from '../../components/common/ServiceDetail';
import Content from '../../components/common/ServiceDetailContent';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import Wrapper from '@/layout/Wrapper';
import FooterOne from '@/layout/footers/FooterOne';

const servicedata =  {
  id: 5,
  icon: "flaticon-data-visualization",
  title: <>Machine <br />Learning</>,
  serviceDetail: {
    id: 1,
    nextLink: "Machine Learning",
    serviceBanner: {
      bannertext: "Machine Learning",
      bannerImage: "https://supplychainbeyond.com/wp-content/uploads/2017/09/what-is-machine-learning.jpg"
    },
    serviceContent: {
      paraMain: "Service Description",
      machineMain: "Artificial Intelligence",


      machineList1: [
        {
          id: 1,
          listpara: "Introduction to Machine Learning",
          listspan: "Machine learning is a subset of artificial intelligence (AI) that enables systems to learn and improve from experience without being explicitly programmed. By using algorithms to parse data, learn from it, and make decisions, machine learning can automate and enhance a wide range of tasks.",

        },
        {

          id: 2,
          listpara: "Types of Machine Learning",
          listspan: "There are three main types of machine learning: supervised, unsupervised, and reinforcement learning. Supervised learning involves training a model on labeled data, while unsupervised learning finds patterns in unlabeled data. Reinforcement learning involves an agent learning to make decisions by receiving rewards or penalties.",

        },
        {
          id: 3,
          listpara: "Applications of Machine Learning",
          listspan: "Machine learning has a myriad of applications across various fields. In healthcare, it is used for disease prediction and personalized treatment plans. In finance, it aids in fraud detection and algorithmic trading. Other applications include image and speech recognition, recommendation systems, and autonomous vehicles.",

        },
        {
          id: 4,
          listpara: "Popular Machine Learning Algorithms",
          listspan: "Some commonly used machine learning algorithms include linear regression, logistic regression, decision trees, support vector machines, and neural networks. Each algorithm has its strengths and weaknesses and is suited to different types of problems.",

        },
        {
          id: 5,
          listpara: "Challenges in Machine Learning",
          listspan: "Despite its potential, machine learning faces several challenges. These include the need for large amounts of data, the complexity of selecting and tuning algorithms, and issues related to data privacy and security. Moreover, ensuring the fairness and interpretability of machine learning models is an ongoing area of research.",

        },
        {
          id: 6,
          listpara: "Future of Machine Learning",
          listspan: "The future of machine learning is promising, with advancements expected in various domains. Innovations in deep learning, natural language processing, and reinforcement learning are likely to drive further breakthroughs. As computational power increases and data becomes more accessible, the capabilities and applications of machine learning will continue to expand.",
        },
        {
          id: 7,
          listpara: "Getting Started with Machine Learning",
          listspan: "For those interested in getting started with machine learning, there are numerous resources available. Online courses, tutorials, and textbooks can provide a solid foundation. Practical experience through projects and participation in competitions like Kaggle can also be invaluable. Understanding the fundamentals of statistics, mathematics, and programming is essential for a successful career in machine learning.",
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
          listpara: "Introduction to Machine Learning:",
          listspan: "Machine Learning (ML) is a subset of artificial intelligence (AI) that focuses on developing algorithms and statistical models enabling computers to perform specific tasks without explicit instructions. It relies on patterns and inference rather than direct programming. The field has grown rapidly due to advancements in computing power and the availability of large datasets, making it a crucial technology in various industries.",

        },
        {

          id: 2,
          listpara: "Types of Machine Learning: ",
          listspan: "Machine Learning is typically categorized into three types: supervised learning, unsupervised learning, and reinforcement learning. Supervised learning involves training a model on labeled data, where the correct output is known. Unsupervised learning deals with unlabeled data, and the model tries to identify patterns and relationships. Reinforcement learning involves an agent that learns to make decisions by receiving rewards or penalties for actions taken in an environment.",

        },
        {
          id: 3,
          listpara: "Supervised Learning: ",
          listspan: "In supervised learning, the model is trained using a dataset that includes both input data and the corresponding output labels. Common algorithms in this category include linear regression, logistic regression, support vector machines (SVM), and neural networks. These models are widely used for tasks such as image classification, spam detection, and predictive analytics.",

        },
        {
          id: 4,
          listpara: "Unsupervised Learning:",
          listspan: "Unsupervised learning models are used to find hidden patterns or intrinsic structures in data. Clustering and association are the two main techniques in this category. Clustering algorithms, like k-means and hierarchical clustering, group similar data points together. Association algorithms, such as Apriori and Eclat, are used to find relationships between variables in large datasets, often applied in market basket analysis.",

        },
        {
          id: 5,
          listpara: " Reinforcement Learning:",
          listspan: "Reinforcement learning (RL) is inspired by behavioral psychology and involves an agent that interacts with an environment to maximize some notion of cumulative reward. The agent learns by receiving feedback from its actions, adjusting its strategy to improve performance over time. RL has been successfully applied in various fields, including robotics, gaming (notably AlphaGo), and autonomous vehicles.",

        },
        {
          id: 6,
          listpara: " Applications of Machine Learning:",
          listspan: "Machine Learning has a wide array of applications across different sectors. In healthcare, it aids in disease diagnosis, personalized treatment plans, and drug discovery. In finance, ML algorithms are used for fraud detection, algorithmic trading, and risk management. Other notable applications include recommendation systems (e.g., Netflix, Amazon), natural language processing (e.g., chatbots, language translation), and self-driving cars.",

        },
        {
          id: 6,
          listpara: "Challenges and Future Directions:",
          listspan: "Despite its successes, Machine Learning faces several challenges, including the need for large amounts of data, computational resources, and the interpretability of complex models. Ethical considerations, such as bias in algorithms and data privacy, are also significant concerns. Looking ahead, research in ML aims to develop more efficient algorithms, enhance model interpretability, and ensure fairness and transparency, paving the way for broader and more responsible applications.",

        },

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
