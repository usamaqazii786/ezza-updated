'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is installed
import { TypeAnimation } from 'react-type-animation';
import Modal from 'react-bootstrap/Modal';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

const HeroAreaHomeThree = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    query: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    query: '',
  });

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 9000);

    return () => clearTimeout(timeout);
  }, []);

  const handleModalClose = () => setShowModal(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    let valid = true;
    const newErrors = { email: '', phone: '', query: '' };

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      valid = false;
      newErrors.email = 'Valid email is required.';
    }
    if (!formData.phone) {
      valid = false;
      newErrors.phone = 'Phone number is required.';
    }
    if (!formData.query) {
      valid = false;
      newErrors.query = 'Query is required.';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent page reload or default behavior

    if (handleValidation()) {
      try {
        const response = await axios.post(
          'https://skillwritingapi.dev-sh.xyz/api/contact',
          {
            email: formData.email,
            phone: formData.phone,
            query: formData.query,
            website: 'Ezza',
          },
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );

        if (response.data.status === true) {
          toast(response.data.message);
          setFormData({ email: '', phone: '', query: '' }); // Reset form data
          setShowModal(false); // Close modal after successful submission
        }
      } catch (error) {
        toast("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
    
      <div ref={ref}>

        <section className={inView ? "homevideoSec zoom-ins" : "homevideoSec zoom-outs"} >
          <div className="video-container">
      
            <video className='rtu2' autoPlay loop muted playsInline controls={false}>
              <source src="https://firebasestorage.googleapis.com/v0/b/eza-technology.appspot.com/o/assad.mp4?alt=media&token=1764f9c8-5774-49fd-a002-4de1d41928aa" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className={"video-overlay"}>
              <div className={inView ? 'slide-in-rights' : ""}>

                <div className='row justify-content-cneter'>
                  <div className="col-11 text-cneter">
                  <TypeAnimation
      sequence={[
        'Think Big', // Types 'One'
        3000, // Waits 1s
        'We\'ll make it Possible', // Deletes 'One' and types 'Two'
        3000, // Waits 2s
      
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      className='heae'
      repeat={Infinity}
     />
                  </div>
              
                  
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-md-12">
                  <button className="tp-btn dsf" onClick={() => setShowModal(true)}>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>
      
        <Modal   show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <form  onSubmit={handleSubmit}>
        <div className="row justify-content-center ">
         

          <div className="col-lg-10 text-center">
            <div className="tp-contact-details-form-input mb-20">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span>
              {errors.email && <p className="text-danger">{errors.email}</p>}
              </span>
            </div>
          </div>
          <div className="col-lg-10 text-center">
            <div className="tp-contact-details-form-input mb-20">
            <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-danger">{errors.phone}</p>}
              
            </div>
          </div>
   
          <div className="col-lg-10 text-center">
            <div className="tp-contact-details-form-input mb-20">
              <textarea
                className="form-control"
                placeholder="Enter Query"
                name="query"
                value={formData.query}
                onChange={handleChange}
              ></textarea>
              <span>
              {errors.query && <p className="text-danger">{errors.query}</p>}
              </span>
            </div>
          </div>
          <div className="col-lg-10 mb-3 text-center">
            <div className="tp-contact-details-form-btn">
              <button  type="submit"  className="tp-btn">Send a Message</button>
            </div>
          </div>
        </div>
      </form>
        </Modal.Body>

      </Modal>

    </>
  );
};

export default HeroAreaHomeThree;