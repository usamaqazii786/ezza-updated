'use client'
import ContactFormHomeTwo from '@/components/forms/ContactFormHomeTwo';
import contact_shape_1 from '@/assets/img/shape/contact-2-shape-1.png';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface DataType {
  form_sub_title: string;
  form_title: string;
  title: string;
  head_title: string;
  contact_info: {
    id: number;
    icon: string;
    title: string;
    target: string;
    info: string;
  }[];
}
const team_form_content: DataType = {
  form_sub_title: "Contact With Us",
  form_title: "Drop Us a Line",
  title: "It's right time to make something new",
  head_title: "Contact Without Hesitation",
  contact_info: [
    {
      id: 1,
      icon: "flaticon-phone-call",
      title: "Call Us Anytime",
      target: "PK +92 332 4210477",
      info: "UK +44 7471 0958 53",
    },
    {
      id: 2,
      icon: "flaticon-email-1",
      title: "Write to Us",
      target: "info@eza-tech.com",
      info: "info@eza-tech.com",
    },
    {
      id: 3,
      icon: "flaticon-location-1",
      title: "Our Location",
      // target: "https://www.google.com/maps/@45.6496054,13.7655154,184a,35y,81.61h,44.96t/data=!3m1!1e3?entry=ttu",
      target: "",
      info: "PARCHMORE ROAD,THORNTON HEATH,CRA 8HA",
    },

  ]
}
const { form_sub_title, form_title, title, head_title, contact_info } = team_form_content

const TeamFormArea = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <div ref={ref}>
      <section className={inView ? "zoom-ins form-area pb-55" : "zoom-outs form-area pb-55 "}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={inView ? "tp-form-wrapper mb-60 wow fadeInRight slide-in-rights" : "tp-form-wrapper mb-60 wow fadeInRight"} data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-form-content">
                  <span>{form_sub_title}</span>
                  <h4 className="tp-form-title">{form_title}</h4>
                </div>
                <div className="tp-form-wrap">
                  <ContactFormHomeTwo />
                </div>
                <div className="tp-form-shape">
                  <Image src={contact_shape_1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={inView ? "tp-faq ml-70 wow fadeInLeft slide-in-left" : "tp-faq ml-70 wow fadeInLeft"} data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-faq-inner mb-40">
                  <div className="tp-faq-inner-bg" style={{ backgroundImage: `url(/assets/img/bg/faq-inner-bg-1.jpg)` }}></div>
                  <div className="tp-faq-inner-wrap d-flex align-items-center">
                    <div className="tp-faq-inner-icon">
                      <i className="flaticon-solution"></i>
                    </div>
                    <div className="tp-faq-inner-contact">
                      <h4 className="tp-faq-inner-title">{title}</h4>
                    </div>
                  </div>
                </div>
                <div className="tp-faq-inner-contact">
                  <h4 className="tp-faq-inner-contact-title-head mb-50">{head_title}</h4>
                  {contact_info.map((item, i) =>
                    <div key={i} className="tp-faq-inner-contact-item d-flex align-items-center mb-40">
                      <div className="tp-faq-inner-contact-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tp-faq-inner-contact-content">
                        <span>{item.title}</span>

                        {/* For Call Us */}
                        {item.id === 1 && (
                          <h4 className="tp-faq-inner-contact-content-title">
                            <a  href={`tel:${item.target.replace(/\s+/g, '')}`}>
                              {item.info}
                            </a>
                          </h4>
                        )}

                        {/* For Write to Us (Email) */}
                        {item.id === 2 && (
                          <h4 className="tp-faq-inner-contact-content-title">
                            <a target='_blank' rel="noopener noreferrer" href={`mailto:${item.target}`}>
                              {item.info}
                            </a>
                          </h4>
                        )}

                        {/* For Location */}
                        {item.id === 3 && (
                          <h4 className="tp-faq-inner-contact-content-title">
                            <a target='_blank' rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.info)}`}>
                              {item.info}
                            </a>
                          </h4>
                        )}
                      </div>

                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamFormArea;