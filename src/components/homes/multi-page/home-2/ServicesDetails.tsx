'use client';
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react';
import 'animate.css';
import WOW from 'wowjs';

const ServicesDetails = () => {
    const sectionRef = useRef(null);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wow.sync(); 
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className="pb-50 ml-40 mr-40">
      <div className="mt-40 ml-20 mr-20">
        <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          Our Services
        </h2>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
          At EZA Tech, we specialize in offering comprehensive business solutions tailored to your specific needs. Whether you're looking to streamline operations, scale your business, or leverage the latest technology, we provide the expertise and support to help you succeed.
        </p>

        {/* Service 1 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          1. Business Solutions
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
          We provide strategic and effective business solutions that drive efficiency and profitability. From optimizing your workflows to enhancing your customer experience, our solutions are designed to meet your unique business challenges and opportunities.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
          <li>Streamline business processes</li>
          <li>Enhance operational efficiency</li>
          <li>Improve decision-making with data-driven strategies</li>
        </ul>

        {/* Service 2 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
          2. Business Growth Planning
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
          Planning for growth is essential for success. Our business growth planning services help you chart a clear path to scaling your business sustainably. We work with you to set realistic goals, create actionable plans, and ensure you have the right strategies in place to achieve long-term success.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
          <li>Define clear business objectives</li>
          <li>Set actionable growth milestones</li>
          <li>Develop strategies for sustainable expansion</li>
        </ul>

        {/* Service 3 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
          3. SEO (Search Engine Optimization)
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
          In today’s digital landscape, SEO is vital for increasing your online visibility. Our SEO services help improve your website's ranking, attract more organic traffic, and convert visitors into loyal customers. We implement cutting-edge SEO techniques to ensure you stay ahead of the competition.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <li>Boost search engine rankings</li>
          <li>Drive more organic traffic</li>
          <li>Improve online visibility</li>
        </ul>

        {/* Service 4 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
          4. Web Development
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          We create high-performance, responsive, and user-friendly websites that deliver exceptional user experiences. Whether you need a simple website or a complex web application, our web development team uses the latest technologies to bring your vision to life.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
          <li>Custom web design and development</li>
          <li>Mobile-optimized solutions</li>
          <li>Secure and scalable websites</li>
        </ul>

        {/* Service 5 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
          5. Machine Learning
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
          Unlock the power of data with our machine learning solutions. From predictive analytics to personalized recommendations, we help businesses harness machine learning to make smarter decisions, improve operational efficiency, and enhance customer experiences.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
          <li>Implement predictive models</li>
          <li>Enhance data-driven decision-making</li>
          <li>Automate processes with AI algorithms</li>
        </ul>

        {/* Service 6 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
          6. Application Design and Development
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
          Our team designs and develops custom applications that meet the unique needs of your business. Whether it's a mobile app, desktop software, or enterprise application, we ensure the design is intuitive and the functionality is seamless.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
          <li>Custom application development</li>
          <li>Intuitive user interfaces</li>
          <li>Scalable and secure solutions</li>
        </ul>

        {/* Service 7 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          7. AI (Artificial Intelligence)
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
          Transform your business with cutting-edge AI technologies. From automation to data analysis, we provide AI-powered solutions that enhance efficiency, reduce costs, and drive innovation. Whether it's natural language processing, computer vision, or intelligent systems, we're here to help you lead the way.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          <li>Automate repetitive tasks</li>
          <li>Improve decision-making with AI insights</li>
          <li>Enhance customer experience with intelligent systems</li>
        </ul>

        {/* Service 8 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
          8. AI Development
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
          Our AI development services empower your business with intelligent systems that learn, adapt, and evolve. Whether you're building a recommendation engine, chatbots, or intelligent automation tools, we bring deep AI expertise to help you stay competitive in your industry.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
          <li>Build intelligent and adaptive systems</li>
          <li>Enhance customer interactions with AI-powered solutions</li>
          <li>Drive innovation with advanced technologies</li>
        </ul>

        {/* Service 9 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
          9. UI/UX Design
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
          Great design is key to a great user experience. Our UI/UX design services focus on creating intuitive, user-friendly interfaces that keep your customers engaged. We work to enhance both the functionality and aesthetic of your digital products to ensure they are visually appealing and easy to navigate.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s">
          <li>Intuitive design and navigation</li>
          <li>Improved user engagement and retention</li>
          <li>Aesthetic designs that align with your brand</li>
        </ul>

        {/* Service 10 */}
        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
          10. Database Development
        </h4>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          A robust and scalable database is critical for managing your business data. Our database development services ensure your data is secure, easily accessible, and optimized for performance. Whether you need SQL, NoSQL, or cloud-based databases, we've got you covered.
        </p>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
          <li>Efficient data storage and management</li>
          <li>Scalable database solutions</li>
          <li>Data security and backup strategies</li>
        </ul>

        {/* Why Choose Us */}
        <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          Why Choose EZA Tech?
        </h3>
        <ul className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
          <li>Expertise: With years of experience and a talented team of professionals, we have the skills and knowledge to tackle any challenge.</li>
          <li>Customized Solutions: At EZA Tech, we recognize that every business is unique. Our services are tailored to your specific needs, ensuring the best possible results.</li>
          <li>Results-Driven: We focus on delivering measurable outcomes that contribute directly to your business growth and success.</li>
        </ul>

        {/* Final CTA */}
        <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
          Ready to take your business to the next level?
        </h3>
        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
          Contact us today to learn how EZA Tech can help you achieve your goals.
        </p>
      </div>
    </section>
  );
};

export default ServicesDetails;
