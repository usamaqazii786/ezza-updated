/* eslint-disable @next/next/no-page-custom-font */
'use client'
import react,{useState} from 'react'
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store"; 
import "../styles/index.scss";
import Modal from 'react-bootstrap/Modal';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <html lang="en">
      <head>
        <meta name="description" content="EZA-TECHnology" />
        <link rel="icon" href="/assets/img/logo/EZASTech-05.png" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>

        <Provider store={store}>

          {children}
          
        </Provider>
        
        <div style={{position:"relative"}}>
        <button type='button'  className="tp-btn22" onClick={handleShow}>Contact Us</button>
        </div>


        <Modal   show={showModal} onHide={()=>setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body >


        <form  >
        <div className="row justify-content-center ">
         

          <div className="col-lg-10 text-center">
            <div className="tp-contact-details-form-input mb-20">
              <input
                type="text"
                placeholder="Email Address"
              />
              <span>
                <i className="fa-light fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-10 text-center">
            <div className="tp-contact-details-form-input mb-20">
              <input
                type="text"
                placeholder="Phone Number"
              />
              <span>
                <i className="fa-light fa-phone"></i>
              </span>
            </div>
          </div>
   
          <div className="col-lg-10 text-center">
            <div className="tp-contact-details-form-input mb-20">
              <textarea
                placeholder="Enter Query"
              ></textarea>
              <span>
                <i className="fa-light fa-pen"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-10 mb-3 text-center">
            <div className="tp-contact-details-form-btn">
              <button className="tp-btn">Send a Message</button>
            </div>
          </div>
        </div>
      </form>
        </Modal.Body>

      </Modal>
      </body>
    </html>
  );
}
