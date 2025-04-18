"use client";
/* eslint-disable camelcase */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const ContactForm = () => {
  const schema = yup.object({
    Fname: yup.string().required("First name is required"),
    Lname: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    Cname: yup.string().required("Company name is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { Fname: string | Blob; Lname: string | Blob; email: string | Blob; phone: string | Blob; message: string | Blob; Cname: string | Blob; subject: string | Blob; }) => {
    console.log(data);

    const formData = new FormData();
    formData.append("fname", data.Fname);
    formData.append("lname", data.Lname);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("description", data.message);
    formData.append("company_name", data.Cname);
    formData.append("subject", data.subject);
    formData.append("website", "Ezza");

    var config = {
      method: "post",
      url: "https://skillwritingapi.dev-sh.xyz/api/contact",
      data: formData,
      headers: { Accept: "application/json" },
    };

    axios(config)
      .then((response) => {
        if (response.data.status === true) {
          toast.success(response.data.message);
          reset();
        }
      })
      .catch((error) => {
        toast.error("This didn't work.");
      });
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row justify-content-center">
        <div className="col-lg-5 text-center">
          <div className="tp-contact-details-form-input mb-20">
            <input
              type="text"
              placeholder="First Name"
              {...register("Fname")}
            />
            <p className="form_error">{errors.Fname?.message}</p>
          </div>
        </div>
        <div className="col-lg-5 text-center">
          <div className="tp-contact-details-form-input mb-20">
            <input
              type="text"
              placeholder="Last Name"
              {...register("Lname")}
            />
            <p className="form_error">{errors.Lname?.message}</p>
          </div>
        </div>
        <div className="col-lg-10 text-center">
          <div className="tp-contact-details-form-input mb-20">
            <input
              type="text"
              placeholder="Email Address"
              {...register("email")}
            />
            <p className="form_error">{errors.email?.message}</p>
          </div>
        </div>
        <div className="col-lg-10 text-center">
          <div className="tp-contact-details-form-input mb-20">
            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone")}
            />
            <p className="form_error">{errors.phone?.message}</p>
          </div>
        </div>
        <div className="col-lg-10 text-center">
          <div className="tp-contact-details-form-input mb-20">
            <input
              type="text"
              placeholder="Company Name"
              {...register("Cname")}
            />
            <p className="form_error">{errors.Cname?.message}</p>
          </div>
        </div>
        <div className="col-lg-10 text-center">
          <div className="tp-contact-details-form-input mb-20">
            <input
              type="text"
              placeholder="Your Subject"
              {...register("subject")}
            />
            <p className="form_error">{errors.subject?.message}</p>
          </div>
        </div>
        <div className="col-lg-10 text-center">
          <div className="tp-contact-details-form-input mb-20">
            <textarea
              placeholder="Write Your Message"
              {...register("message")}
            />
            <p className="form_error">{errors.message?.message}</p>
          </div>
        </div>
        <div className="col-lg-10 mb-3 text-center">
          <div className="tp-contact-details-form-btn">
            <button className="tp-btn" type="submit">
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
