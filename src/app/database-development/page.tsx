"use client";
import { useParams, useSearchParams } from 'next/navigation';
import Breadcrumb from '../../components/common/ServiceDetail';
import Content from '../../components/common/ServiceDetailContent';
import HeaderTwo from '@/layout/headers/HeaderTwo';
import Wrapper from '@/layout/Wrapper';
import FooterOne from '@/layout/footers/FooterOne';

const servicedata =  {
  id: 7,
  icon: "flaticon-search-engine",
  title: <>Database<br />Development</>,
  serviceDetail: {
    id: 7,
    nextLink: "Database  Developmentt",
    serviceBanner: {
      bannertext: "Database  Development",
      bannerImage: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg"
    },
    serviceContent: {
      paraMain: "Service Description",
      machineMain: "Database  Development through Machine Learning",


      machineList1: [
        {
          id: 1,
          listpara: "Introduction to Database Development",
          listspan: "Database development is a crucial aspect of modern software systems, focusing on the creation, implementation, and maintenance of databases. Databases store and manage data efficiently, allowing for easy retrieval, manipulation, and analysis. This process involves designing the database schema, setting up database management systems (DBMS), and ensuring data integrity and security. Effective database development supports various applications, from simple websites to complex enterprise systems.",

        },
        {

          id: 2,
          listpara: "Types of Databases",
          listspan: "There are several types of databases, each designed for specific use cases. Relational databases, such as MySQL, PostgreSQL, and Oracle, use tables to store data and are accessed using Structured Query Language (SQL). NoSQL databases, like MongoDB, Cassandra, and Redis, handle unstructured data and offer flexible schemas. Other types include in-memory databases, graph databases, and time-series databases, each catering to particular needs such as speed, relationship mapping, and temporal data handling.",

        },
        {
          id: 3,
          listpara: "Database Design",
          listspan: "Database design is a critical phase in database development, involving the creation of a blueprint for the database structure. This includes defining tables, columns, data types, and relationships between tables. Normalization is a key process in database design, which organizes data to reduce redundancy and improve data integrity. Effective database design ensures efficient data storage, retrieval, and updates, and is foundational for the overall performance of the database.",

        },
        {
          id: 4,
          listpara: "Database Management Systems (DBMS)",
          listspan: "A Database Management System (DBMS) is software that interacts with the database, providing tools for data management. DBMS handles tasks such as data insertion, updating, querying, and administration. Popular DBMS include MySQL, Microsoft SQL Server, Oracle, and PostgreSQL for relational databases, and MongoDB and Cassandra for NoSQL databases. A DBMS ensures data consistency, supports transactions, and provides mechanisms for backup and recovery.",

        },
        {
          id: 5,
          listpara: "Data Integrity and Security",
          listspan: "Maintaining data integrity and security is paramount in database development. Data integrity involves ensuring the accuracy and consistency of data over its lifecycle. Techniques such as constraints, triggers, and referential integrity are used to maintain data integrity. Data security involves protecting data from unauthorized access and breaches. This includes implementing user authentication, encryption, and access control mechanisms to safeguard sensitive information.",

        },
        {
          id: 6,
          listpara: "Database Optimization",
          listspan: "Database optimization is essential for enhancing the performance and efficiency of a database. This involves tuning queries, indexing, and optimizing the database schema. Indexing helps speed up data retrieval by creating quick access paths to data. Query optimization ensures that SQL queries run efficiently by using the best execution plans. Regular monitoring and performance tuning are necessary to maintain optimal database performance, especially as the volume of data grows.",
        },
        {
          id: 7,
          listpara: "Future Trends in Database Development",
          listspan: "The field of database development is continually evolving, driven by advancements in technology and changing business needs. Emerging trends include the adoption of cloud databases, which offer scalability and flexibility, and the use of artificial intelligence (AI) and machine learning (ML) for advanced data analytics. Additionally, databases are increasingly being designed to handle big data, real-time processing, and integration with IoT (Internet of Things) devices. As these trends develop, database development will continue to adapt, providing robust and innovative solutions for data management.",
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
          listpara: "Introduction to Database Development",
          listspan: "Database development involves designing, implementing, and maintaining databases to store and manage data efficiently. It is a critical aspect of software development and data management, ensuring that applications can access and manipulate data seamlessly. Databases are structured collections of data organized to facilitate data retrieval, storage, and update operations, essential for businesses, organizations, and applications across various industries.",

        },
        {

          id: 2,
          listpara: "Types of Databases",
          listspan: "There are several types of databases, each suited for different purposes and scalability requirements. Relational databases, such as MySQL, PostgreSQL, and Oracle, organize data into tables with predefined relationships between them. NoSQL databases, like MongoDB and Cassandra, provide more flexibility for unstructured or semi-structured data and can scale horizontally. NewSQL databases aim to combine the benefits of relational and NoSQL databases for improved scalability and performance.",

        },
        {
          id: 3,
          listpara: "Database Design",
          listspan: "Database design is a crucial phase in database development, involving defining the structure of the database schema. It includes identifying entities, attributes, and relationships between entities based on the application's requirements. Normalization is a key principle in relational database design, ensuring data integrity and reducing redundancy by organizing data into tables without data duplication.",

        },
        {
          id: 4,
          listpara: " Database Modeling",
          listspan: "Database modeling involves creating a visual representation (usually using diagrams) of the database structure and relationships. Entity-Relationship (ER) diagrams are commonly used to depict entities (tables), attributes (columns), and relationships (links between tables). Tools like ERwin, Lucidchart, and even built-in features of database management systems (DBMS) assist in creating and managing these models, ensuring that they accurately reflect the database schema.",

        },
        {
          id: 5,
          listpara: "Database Implementation",
          listspan: "Once the database design and modeling are complete, the next step is implementation. This involves translating the design into a physical database using SQL (Structured Query Language) or other query languages supported by the chosen DBMS. Database administrators (DBAs) or developers create tables, define relationships, establish constraints (e.g., primary keys, foreign keys), and optimize the database schema for performance.",

        },
        {
          id: 6,
          listpara: "Database Management",
          listspan: "Database management encompasses tasks such as data manipulation, querying, backup and recovery, security management, and performance tuning. DBAs or database developers use SQL commands to insert, update, delete, and retrieve data from tables. They also monitor database performance, optimize queries, schedule backups, implement security measures (e.g., access controls, encryption), and ensure data integrity and availability.",
        },
        {
          id: 7,
          listpara: "Emerging Trends and Challenges",
          listspan: "The field of database development continues to evolve with emerging technologies and trends. Big Data and analytics have driven the demand for scalable and high-performance databases capable of handling massive volumes of data. Cloud databases offer flexibility, scalability, and cost-efficiency, enabling organizations to deploy and manage databases in the cloud. Challenges include ensuring data security and privacy, managing complex data relationships, and adapting to rapid technological advancements and changing business needs.",
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
