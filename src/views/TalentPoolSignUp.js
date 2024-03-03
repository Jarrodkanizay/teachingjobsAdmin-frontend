import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../data/CountryList.json";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSendEmail1Mutation } from "../store/apiSlice";
const TalentPoolSignUp = () => {  window.location.replace("https://www.academicjobs.com/academic-talent-pool");
  const [
    sendEmail,
    { isSuccess: isSendSuccess, isError: isSendError, error: senderror },
  ] = useSendEmail1Mutation();
  const [formData, setFormData] = useState({});
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
  const navigate = useNavigate();
  useEffect(() => {
    if (submitStatus === "success") {
      navigate("/successful");
    }
  }, [submitStatus, navigate]);

  return (
    <div className="">
      {/* IMPORTANT!! */}
      {/* IMPORTANT!! */}
      {/* IMPORTANT!! */}
      {/* Go to AcademicTalentPool view to manage this module */}
      {/* IMPORTANT!! */}
      {/* IMPORTANT!! */}
      {/* IMPORTANT!! */}
      <Helmet>
        <title>Talent Pool Sign Up</title>
        <meta
          name="description"
          content="Join our exclusive Talent Pool to connect and collaborate with top employers and academics worldwide. Sign up today to explore exciting job opportunities, gain industry exposure, and fast-track your career. Perfect for academics seeking to elevate their career paths."
        />
        <meta
          name="keywords"
          content="talent pool, career opportunities, job seekers, find academic networking, academic exposure, professional networking, industry exposure, employment, career growth, job application, talent database, professional development, sign up, global job market"
        />
      </Helmet>

      {/* Page heading */}
      <div className="container mx-auto mt-8 mb-6">
        <h1 className="text-3xl font-bold py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl mb-8">
          Unlock Your Academic Potential! Join Our Global Talent Pool Now!
        </h1>
        <div className="py-4 px-7  text-black rounded-2xl ">
          <div className="bg-gradient-to-b to-white from-orange-300 p-4 rounded-3xl">
            <ul className="ul">
              <li>
                <strong>Dive into a World of Opportunities</strong> - Sign up
                today and connect with prestigious academic institutions
                worldwide. Explore cutting-edge job openings and collaborate
                with world-renowned academics.
              </li>
              <li>
                <strong>Elevate Your Career</strong> - Whether you're seeking
                groundbreaking research projects or looking to shape the minds
                of the next generation, our platform is your gateway to
                extraordinary possibilities.
              </li>
              <li>
                <strong>Expand Your Network</strong> - Collaborate, innovate,
                and grow with the best in academia. Be part of a vibrant
                community where ideas flourish and careers soar.
              </li>
              <li>
                <strong>Find Your Perfect Match</strong> - Our tailored job
                matching system brings you opportunities that align perfectly
                with your expertise and aspirations.
              </li>
              <li>
                <strong>Share and Gain Insights</strong> - Engage in meaningful
                dialogues, share your expertise, and gain unique perspectives
                from fellow academics globally.
              </li>
            </ul>
            <p className="p-6">
              Don't Wait — The Opportunity for Academic Excellence Awaits! Sign
              Up Now and Propel Your Career to New Heights!
            </p>
          </div>
        </div>
      </div>

      {/* Form section */}
      <main>
        <div className="talent-pool px-7 py-8 container mx-auto py-16 border-[1px] border-[#f4ac10] bg-[#f4ac10]/10 p-4 pt-4 rounded-3xl mt-8 mb-12">
          <h2 className="text-xl font-bold text-[#f4ac10] mb-4">
            Talent Pool Sign Up
          </h2>
          <p>
            Sign up form is on{" "}
            <a
              className="link link-warning hover:text-orange-500"
              href="/academic-talent-pool/"
            >
              Academic Talent Pool
            </a>
          </p>
        </div>
      </main>

      {/* Category details */}
      {/* <div className="px-7 py-8 container mx-auto py-16 bg-slate-50 p-4 pt-4 rounded-3xl mt-36 mb-12 hidden">
        <h3 id="award-descriptions-Lecturer" className="list-headings">
          Lecturer:
        </h3>
        <ul className="ul">
          <li>Recognizing excellence in teaching and pedagogy.</li>
          <li>
            Evaluation based on student feedback, innovation in teaching
            methods, and contribution to curriculum development.
          </li>
          <li>
            Emphasis on the lecturer's ability to inspire and engage students
            academically.
          </li>
        </ul>
        <h3 id="award-descriptions-Researcher" className="list-headings">
          Researcher:
        </h3>
        <ul className="ul">
          <li>Celebrating significant contributions to academic research.</li>
          <li>
            Focus on originality, impact, and relevance of research work in
            their field.
          </li>
          <li>
            Assessment of publications, grants received, and recognition by the
            academic community.
          </li>
        </ul>
        <h3
          id="award-descriptions-President/Vice Chancellor"
          className="list-headings"
        >
          President/Vice Chancellor:
        </h3>
        <ul className="ul">
          <li>
            Honoring outstanding leadership and administration in higher
            education.
          </li>
          <li>
            Criteria include strategic vision, institutional growth, and
            community engagement.
          </li>
          <li>
            Consideration of initiatives promoting diversity, sustainability,
            and global partnerships.
          </li>
        </ul>
        <h3 id="award-descriptions-PhD" className="list-headings">
          PhD:
        </h3>
        <ul className="ul">
          <li>Awarding groundbreaking doctoral research and scholarship.</li>
          <li>
            Evaluating the dissertation's contribution to the field,
            methodological rigor, and potential for real-world application.
          </li>
          <li>
            Acknowledgment of challenges overcome and overall academic journey.
          </li>
        </ul>
        <h3
          id="award-descriptions-Department Heads/Managers"
          className="list-headings"
        >
          Department Heads/Managers:
        </h3>
        <ul className="ul">
          <li>
            Acknowledging exceptional departmental leadership and management.
          </li>
          <li>
            Consideration of departmental achievements, faculty development, and
            resource management.
          </li>
          <li>
            Recognition of efforts in fostering a collaborative and supportive
            academic environment.
          </li>
        </ul>
        <h3
          id="award-descriptions-Outstanding Student"
          className="list-headings"
        >
          Outstanding Student:
        </h3>
        <ul className="ul">
          <li>
            Recognizing academic excellence, leadership, and extracurricular
            involvement.
          </li>
          <li>
            Focus on academic achievements, contributions to the campus
            community, and potential for future impact.
          </li>
          <li>
            Evaluation of personal growth, resilience, and commitment to their
            field of study.
          </li>
        </ul>
        <a
          className="btn btn-warning mt-8 hover:bg-orange-500"
          href="/promotion-ideas"
        >
          Need help with promoting your
        </a>
      </div>
     */}
    </div>
  );
};
export default TalentPoolSignUp;
