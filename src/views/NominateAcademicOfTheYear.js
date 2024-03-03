import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../data/CountryList.json";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSendEmail1Mutation } from "../store/apiSlice";
const NominateAcademicOfTheYear = () => {  window.location.replace("https://www.academicjobs.com/");
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
      navigate("/nomination-successful");
    }
  }, [submitStatus, navigate]);

  return (
    <div className="">
      <Helmet>
        <title>Nominate an Academic</title>
        <meta
          name="description"
          content="Nominate an Academic for the 'University & Global Academic Awards 2024' today. "
        />
        <meta
          name="keywords"
          content="Nominate Academics, University & Global Academic Awards 2024"
        />
      </Helmet>
      <div
        className="hero min-h-fit bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/academic-awards/the-university-and-global-academic-awards.jpg)",
        }}
      >
        <h1 className="text-4xl px-8 mx-auto text-center font-bold text-white drop-shadow-sm mt-5 mb-[300px]">
          University &amp; Global Academic Awards 2024
          {/* Below are some SEO optimized headings… */}
          {/* 
          <span name="option 1">
            2024 Global Academic Excellence Awards for Universities
          </span>
          <span name="option 2">
            University Academic Achievement Awards 2024: Global Recognition
          </span>
          <span name="option 3">
            Global Academic Awards 2024: Celebrating University Excellence
          </span> */}
        </h1>

        {/* <div className="hero-content text-center text-neutral-content">
          <div className="container mx-auto">
            <h1 className="mb-48 text-4xl font-bold text-white drop-shadow-sm mt-10">
              University &amp; Global Academic Awards 2024
            </h1>
            <button className="btn btn-primary mb-20">Get Started</button>
          </div>
        </div> */}
      </div>

      <div className="container mx-auto bg-slate-100 rounded-3xl mt-8 mb-8 p-4 px-5">
        <p className="mb-5">
          The prestigious University &amp; Global Academic Awards 2024 celebrate
          the luminaries of the academic world. Our awards span a diverse array
          of categories, recognizing the extraordinary talents and contributions
          of individuals in higher education.
        </p>
        <p>
          Shinning the light on academics and the unsung heroes in University
          Admin/Support and Human Resources, who play a critical role in shaping
          a supportive and dynamic educational environment.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Award Categories</h2>
        <ul className="list-disc pl-4 flex flex-wrap gap-8 font-semibold my-4">
          <li className="award-bullet">
            <a href="#award-descriptions-Lecturer">Lecturer</a>
          </li>
          <li className="award-bullet">
            <a href="#award-descriptions-Researcher">Researcher</a>
          </li>
          <li className="award-bullet">
            <a href="#award-descriptions-President/Vice Chancellor">
              President/Vice Chancellor
            </a>
          </li>
          <li className="award-bullet">
            <a href="#award-descriptions-PhD">PhD</a>
          </li>
          <li className="award-bullet">
            <a href="#award-descriptions-Department-Heads-Managers">
              Department Heads/Managers
            </a>
          </li>
          <li className="award-bullet">
            <a href="#award-descriptions-University-Admin-Support">
              University Admin/Support
            </a>
          </li>
          <li className="award-bullet">
            <a href="#award-descriptions-Human-Resources">Human Resources</a>
          </li>
          <li className="award-bullet">
            <a href="#award-descriptions-Outstanding-Student">
              Outstanding Student
            </a>
          </li>
        </ul>
      </div>

      <div className="px-7 py-8 container mx-auto py-16 bg-orange-100 p-4 pt-4 rounded-3xl mt-8 mb-12">
        <h4 className=" text-[#00aeef] text-lg mt-4 pb-8">
          Nominating is easy. Fill in the simple form below with a brief
          explanation of your nominees achievements. All details are kept
          strictly confidential.
          <span className="font-semibold">
            (Nominations close: 20/12/2024) - Winners announced on 22/12/2024.
          </span>{" "}
        </h4>
        <p>
          All nominees go into the running for Global Academic of the Year 2024
        </p>
        <h4 className=" text-[#00aeef] text-3xl mt-4">
          <span className="font-semibold">Nominee</span>
        </h4>
        <form className="mt-4 " onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
          {/* {submitStatus === "success" && (
            <p className="mt-4 text-center text-2xl font-bold text-green-500">
              Thank you for your message/feedback, our team will get back to you
              soon!
            </p>
          )} */}

          {/* WARNING */}
          {/* WARNING */}
          {/* WARNING */}
          {/* WARNING */}
          {/* WARNING */}
          {/* WARNING */}
          {/* THE BELOW FORM NEEDS TO BE FIXED ON MOBILE */}
          {/* FIELDS ARE RENDERING ON TOP OF EACH OTHER */}
          {/* WORKING FINE ON DESKTOP */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nominee First Name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="1"
                  type="text"
                  id="nominee-first-name"
                  name="01_nominee-first-name"
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Nominee First Name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee Last Name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="2"
                  type="text"
                  id="nominee-family-name"
                  name="02_nominee-family-name"
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Nominee Last Name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Academic Title */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="3"
                  type="text"
                  id="name-input"
                  name="03_Nominee_Academic_Title"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Academic Title"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative">
                <select
                  tabindex="4"
                  className="select w-full "
                  name="04_Nominee_Award_Nomination"
                  onChange={handleChange}
                  required
                >
                  <option disabled selected>
                    Award Nomination
                  </option>
                  {/* <option>Academic of the Year</option> */}
                  <option>Lecturer</option>
                  <option>Researcher</option>
                  <option>President/Vice Chancellor</option>
                  <option>PhD</option>
                  <option>Department Heads/Managers</option>
                  <option>University Admin/Support</option>
                  <option>Human Resources</option>
                  <option>Outstanding Student</option>
                </select>
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee Email */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="5"
                  type="email"
                  id="nominee-email"
                  name="05_nominee-email"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Nominee Email"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Department/Faculty */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="6"
                  type="text"
                  id="email-input"
                  name="06_Nominee_Department_Faculty"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Department/Faculty"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee phone */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="7"
                  type="text"
                  id="nominee-phone"
                  name="07_nominee-phone"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee Institution */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="8"
                  type="text"
                  id="nominee-institution"
                  name="08_nominee-institution"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Nominee Institution"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominee suburb */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="9"
                  type="text"
                  id="nominee-school-suburb"
                  name="09_nominee-school-suburb"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Institution Suburb (Town)"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            <div className="col-span-1">
              <div className="relative">
                <select
                  tabindex="10"
                  id="country-select"
                  name="10_Nominee_Country"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Institution Country"
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Select a country...
                  </option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <i className="required">*</i>
              </div>
            </div>

            {/* Nomination reason */}
            <div className="col-span-2">
              <div className="relative">
                <textarea
                  tabindex="11"
                  id="description-input"
                  name="11_Nominee_Description"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Please write a brief description as to why your Academic deserves our award (maxium 200 words)"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
                <label
                  htmlFor="description-input"
                  className="absolute left-4 top-2 text-gray-600 transition-all"
                ></label>
              </div>
            </div>

            {/* Nominator section */}
            <div className="col-span-2">
              <h4 className="text-[#00aeef] text-3xl mt-8 mb-2 font-semibold">
                About You
              </h4>
            </div>

            {/* Nominator first name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="12"
                  type="text"
                  id="first-name-input"
                  name="12_Nominator-First-Name"
                  className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder=" First Name"
                  autocomplete="given-name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominator last name */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="13"
                  type="text"
                  id="last-name-input"
                  name="13_Nominator-Last-Name"
                  className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder=" Last Name"
                  autocomplete="family-name"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominator role position */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="14"
                  type="text"
                  id="role-position-input"
                  name="14_Nominator-Role-Position"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Role or Position (student, parent, teacher, etc.)"
                  onChange={handleChange}
                />
                <i className="required">*</i>
              </div>
            </div>

            {/* Nominator email */}
            <div className="col-span-1">
              <div className="relative">
                <input
                  tabindex="15"
                  type="email"
                  id="email-input"
                  name="15_Nominator-Email"
                  className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                  placeholder="Email"
                  autocomplete="email"
                  onChange={handleChange}
                  required
                />
                <i className="required">*</i>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="relative">
              <p required>
                Any field with an asterisk (<span className="asterisk">*</span>)
                is a required field!
              </p>
            </div>
          </div>

          <div className="text-right mt-6">
            <button
              tabindex="16"
              type="submit"
              className="px-6 py-2 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-semibold hover:bg-[#00aeef] hover:text-black transition duration-300 ease-in-out"
            >
              Send
            </button>
          </div>

          {submitStatus === "error" && (
            <p className="mt-4 text-center text-2xl font-bold text-red-500">
              An unknown error occurred.
            </p>
          )}
        </form>
      </div>

      {/* Category details */}
      <div className="px-7 py-8 container mx-auto py-16 bg-slate-50 p-4 pt-4 rounded-3xl mt-36 mb-12">
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
          id="award-descriptions-Department-Heads-Managers"
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
          id="award-descriptions-University-Admin-Support"
          className="list-headings"
        >
          University Admin/Support:
        </h3>
        <ul className="ul">
          <li>
            Celebrating outstanding administrative excellence and support in
            academia.
          </li>
          <li>
            Highlighting contributions to efficient university operations and
            student success.
          </li>
          <li>
            Honoring dedication to creating an effective, inclusive, and dynamic
            university community.
          </li>
        </ul>

        <h3 id="award-descriptions-Human-Resources" className="list-headings">
          Human Resources:
        </h3>
        <ul className="ul">
          <li>
            Recognizing innovative HR strategies and practices in the academic
            sector.
          </li>
          <li>
            Acknowledging significant contributions to staff wellbeing,
            development, and diversity.
          </li>
          <li>
            Applauding excellence in recruitment, retention, and talent
            management in higher education.
          </li>
        </ul>

        <h3
          id="award-descriptions-Outstanding-Student"
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
          href="/nominee-promotion-ideas"
        >
          Need help with promoting your nomination?
        </a>
      </div>
      <div className="spacer mt-[850px]"></div>
    </div>
  );
};
export default NominateAcademicOfTheYear;
