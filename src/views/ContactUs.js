import React, { useState, useEffect } from "react";
//import axios from 'axios';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSendEmailMutation } from "../store/apiSlice";
const ContactUs = () => {  window.location.replace("https://www.academicjobs.com/contact-us");
  const [
    sendEmail,
    { isSuccess: isSendSuccess, isError: isSendError, error: senderror },
  ] = useSendEmailMutation();
  const [formData, setFormData] = useState({
    topic: 'Message from "Contact US FORM"',
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendEmail(formData);
    //try {
    console.log(response);
    // Check the response for success or failure
    if (response) {
      console.log("Mutation was successful");
      setSubmitStatus("success");
    } else {
      console.error("Mutation failed:", response.error);
      setSubmitStatus("error");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Contact Academic Jobs</title>
        <meta
          name="description"
          content="Contact our knowledgeable team today for assistance and information on our number 1 academic job board site in higher education and academia. "
        />
        <meta
          name="keywords"
          content="Contact Academicjobs, Contact Academic Jobs, Academicjobs Contact "
        />
      </Helmet>
      <main className=" container mt-12 mx-auto">
        <div className="prose">
          <h1>Let’s Get Together!</h1>
          <h2>
            Tell us what you need, and we will be straight back to you. We make
            it easy for you at Academic Jobs!
          </h2>
          <h4>
            <span className="font-bold text-aj">Fun Fact: </span>{" "}
            AcademicJobs.com is the go-to job board in higher education,
            experiencing rapid growth with a larger audience and more job
            opportunities than any other. Join the success story that even has
            our mothers beaming with pride!
          </h4>
          {/* <div className="p-4 bg-gray-100 mt-[3rem] hidden">
          <p className="mb-4 text-lg font-semibold text-[#00aeef]">
            Drop us an email:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">
                University and College Advertisers:
              </span>{" "}
              BestResults (AT) Academicjobs.com
            </li>
            <li>
              <span className="font-semibold">
                Academics and Higher Ed Staff:
              </span>{" "}
              TheBestJobs (AT) AcademicJobs.com
            </li>
            <li>
              <span className="font-semibold">Student Jobs on Campus:</span>{" "}
              StudentWork (AT) AcademicJobs.com
            </li>
            <li>
              <span className="font-semibold">Academic Talent Pool:</span>{" "}
              TalentPool (AT) AcadmeicJobs.com
            </li>
          </ul>
          <p className="mt-4">Or call us:</p>
        </div> */}
          {/* <Link to="https://iloveacademicjobs.com/contact/">
          <img
            src="https://academicjobs.s3.amazonaws.com/img/_misc/contact-us.jpeg"
            alt="contact us"
            className="  mt-[4rem] hidden  "
          />
        </Link> */}
          <form className="my-16 max-w-[600px] mx-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="name-input"
                name="name"
                className="xxs:col-span-2 xs:col-span-2 sm:col-span-2 md:col-span-1 w-full px-4 py-3 bg-slate-100 rounded-lg text-black focus:outline-none"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                type="tel"
                id="phone-input"
                name="phone"
                className="xxs:col-span-2 xs:col-span-2 sm:col-span-2 md:col-span-1 w-full px-4 py-3 bg-slate-100 rounded-lg text-black focus:outline-none"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <input
                type="email"
                id="email-input"
                name="email"
                className="col-span-2 w-full px-4 py-3 bg-slate-100 rounded-lg text-black focus:outline-none"
                placeholder="Email"
                onChange={handleChange}
              />
              <textarea
                id="description-input"
                name="desc"
                className="col-span-2 w-full px-4 py-3 bg-slate-100 rounded-lg text-black focus:outline-none"
                placeholder="Message"
                onChange={handleChange}
              />
              {/* <label
              htmlFor="description-input"
              className="absolute left-4 top-2 text-gray-600 transition-all"
            ></label> */}
            </div>
            <div className="text-right mt-6">
              <button type="submit" className="btn btn-aj">
                Contact Us
              </button>
            </div>
            {submitStatus === "success" && (
              <p className="mt-4 text-center text-2xl font-bold text-green-500">
                Thank you for your message/feedback, our team will get back to
                you soon!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-center text-2xl font-bold text-red-500">
                An unknown error occurred.
              </p>
            )}
          </form>
        </div>
      </main>
      <div className="w-full bg-slate-100 py-6 px-8 mb-12">
        <h3 className="text-[#00aeef] font-bold pb-4">
          GLOBAL OFFICE PHONE NUMBERS
        </h3>
        <div className="grid grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-3 gap-8">
          <ul>
            <li>
              <a className="footer-nav__link" href="tel:+852-3730021">
                Asia: +852-3730021(Hong Kong)
              </a>
            </li>
            <li>
              <a className="footer-nav__link" href="tel:+61-452070156">
                Australia: +61-452070156 (Melbourne)
              </a>
            </li>
            <li>
              <a className="footer-nav__link" href="tel:778 819 1866">
                Canada: 778 819 1866(Vancouver)
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="footer-nav__link" href="tel:+49-4158730021">
                Europe: +49-4158730021(Berlin)
              </a>
            </li>
            <li>
              <a className="footer-nav__link" href="tel:+61-452070156">
                New Zealand: +61-452070156 (Wellington)
              </a>
            </li>
            <li>
              <a className="footer-nav__link" href="tel:+91-2250972736">
                India: +91-2250972736 (Mumbai)
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a className="footer-nav__link" href="tel:+44-2045876329">
                United Kingdom: +44-2045876329(London)
              </a>
            </li>
            <li>
              <a className="footer-nav__link" href="tel:+415 819 0021">
                United States: 415 819 0021 (San Francisco )
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
