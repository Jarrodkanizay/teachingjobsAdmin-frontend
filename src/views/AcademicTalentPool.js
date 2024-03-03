import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import countries from "../data/CountryList.json";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTalentPoolEmailMutation } from "../store/apiSlice";
const TalentPoolSignUp = () => {  window.location.replace("https://www.academicjobs.com/academic-talent-pool");
  
  const [
    sendEmail,
    { isSuccess: isSendSuccess, isError: isSendError, error: senderror },
  ] = useTalentPoolEmailMutation();
  const [formData, setFormData] = useState({
    "01_First_Name": "",
    "02_Last_Name": "",
    "03_Academic_Title": "",
    "04_phone": "",
    "05_Email": "",
    "06_Collaborations_Checkbox": "Collaborate with Top Academics",
    "07_Keynote_Checkbox": "Keynote Speaking",
    "08_Media_Checkbox": "Media",
    "09_Career_Job_Opportunities_Checkbox": "Career Job Opportunities",
    "10_Seek_IP_Investors_Checkbox": "Seek IP Investors",
    "11_Partner_with_Industry_Checkbox": "Partner with Industry",
    "12_Institution": "",
    "13_Department_Faculty": "",
    "14_Specialty": "",
    "15_Institution_Location": "",
    "16_Country": "",
    "17_Profile": "",
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
  const navigate = useNavigate();
  useEffect(() => {
    if (submitStatus === "success") {
      navigate("/thank-you-for-joining-our-talent-pool");
    }
  }, [submitStatus, navigate]);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(true);
  const [isChecked6, setIsChecked6] = useState(true);
  const handleCheckboxChange1 = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? "Collaborate with Top Academics" : "",
    });
    setIsChecked1(!isChecked1);
  };
  const handleCheckboxChange2 = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? "Keynote Speaking" : "",
    });
    setIsChecked2(!isChecked2);
  };
  const handleCheckboxChange3 = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? "Media" : "",
    });
    setIsChecked3(!isChecked3);
  };
  const handleCheckboxChange4 = (e) => {
    //alert()
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? "Career Job Opportunities" : "",
    });
    setIsChecked4(!isChecked4);
  };
  const handleCheckboxChange5 = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? "Seek IP Investors" : "",
    });
    setIsChecked5(!isChecked5);
  };
  const handleCheckboxChange6 = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked ? "Partner with Industry" : "",
    });
    setIsChecked6(!isChecked6);
  };
  return (
    <div className="">
      <Helmet>
        <title>Academic Talent Pool</title>
        <meta
          name="description"
          content="Join our exclusive Talent Pool to connect and collaborate with top employers and academics worldwide. Sign up today to explore exciting job opportunities, gain industry exposure, and fast-track your career. Perfect for academics seeking to elevate their career paths."
        />
        <meta
          name="keywords"
          content="talent pool, career opportunities, job seekers, find academic networking, academic exposure, professional networking, industry exposure, employment, career growth, job application, talent database, professional development, sign up, global job market"
        />
      </Helmet>
      {/* <img
        src="/talent-pool/talent-pool-face-network.jpg"
        alt="Nominate us"
        className=" object-cover w-full h-full max-h-80 shadow-xl"
      /> */}
      {/* <img
        src="/talent-pool/higher-ed-jobs-talent-pool.jpg"
        alt="Higher Education Jobs Talent Pool"
        className=" object-cover w-full h-full max-h-80 shadow-xl"
      /> */}

      {/* Page heading */}
      <div className="container mx-auto mt-8 mb-6">
        <h1 className="text-3xl font-bold py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl mb-8">
          {/* Unlock Your Academic Potential!  */}
          Join Our Talent Pool Today!
        </h1>
      </div>

      <div className="container mx-auto flex flex-col">
        <h2 className="font-bold text-xl md:text-xl mt-12 text-center">
          Join Our Talent Pool Today!
        </h2>
        <h2 className=" font-bold text-xl md:text-xl mt-12 text-center">
          We're looking for people who want to connect and collaborate!
        </h2>
        <p className="text-center">
          we want to create a community of academics who share similar passions,
          interests an ideas. So that you have a space to connect, mtivate and
          ...
        </p>
        <p className="text-center">
          if this sounds like you, we want to hear from you!
        </p>
        <p className="text-center mb-8">
          Join our talent pool to be notified when the perfect opportunity for
          you arrives - simply select the relevant interests below.
        </p>

        {/* Suggested new text */}
        {/* <p className="mb-6">
          Our Talent Pool network is a rich community to innovate, and
          collaborate. We're fostering a dynamic community of passionate
          academics dedicated to sharing ideas, sparking innovation, and driving
          academic excellence. Our platform is more than a mere network; it's a
          thriving space for like-minded scholars to engage, motivate, and forge
          lasting professional connections.
        </p>
        <p>
          Dive into Academic Jobs' Talent Pool for tailored academic
          opportunities. Be the first to discover roles that perfectly match
          your skills and interests. Select your preferred areas, and receive
          notifications about positions that align with your unique academic
          profile. Seize the opportunity to find your ideal academic role and
          become part of a community that truly values your expertise and
          vision.
        </p> */}

        {/* Cards */}
        <h2 className="mb-8 font-bold text-xl md:text-xl px-7 mt-12 py-2 text-center">
          Join the community
        </h2>
        <div className="container mx-auto">
          <ul className="m-0 p-0 mx-5 text-left items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* card 1  */}
            <div className="card bg-base-100 mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Professional-Services-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Collaborations</h2>
                <p>
                  Enagage in a high-level academic collaborations and research
                  partnerships.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="card bg-base-100  mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Client-Success-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Media Expert</h2>
                <p>Gain visbility through media features and nterviews.</p>
              </div>
            </div>

            {/* card 3 */}
            <div className="card bg-base-100 mb-4 shadow-xl">
              <figure className="px-10 pt-10 ">
                <img
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Internship-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Keynote Speaking</h2>
                <p>
                  Access opportunities for keynote speaking at prestigious
                  conferences and events{" "}
                </p>
              </div>
            </div>

            {/* card 4  */}
            <div className="card bg-base-100  mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Corporate-Services-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Partner with Industry</h2>
                <p>
                  Bridge theory and practical applications to foster
                  collaborative research, share resources, and enhance the
                  real-world impact of your work.
                </p>
              </div>
            </div>
            {/* card 5 */}
            <div className="card bg-base-100  mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Client-Care-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Headhunted</h2>
                <p>
                  Open doors to career progression and attract attention from
                  headhunters.
                </p>
              </div>
            </div>
            {/* card 6 */}
            <div className="card bg-base-100  mb-4 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/Innovation-icon.png"
                  alt="Shoes"
                  className="rounded-xl max-h-[100px] "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Patent your Intellectual Property
                </h2>
                <p>
                  Connect with investors to fund and support your innovative
                  intellectual property projects.
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>

      {/* Form section */}
      <main>
        <div className="talent-pool px-7 py-8 container mx-auto py-16 border-[1px] border-[#f4ac10] bg-[#f4ac10]/10 p-4 pt-4 rounded-3xl mt-8 mb-12">
          {/* <h4 className="font-semibold text-slate-400 text-2xl mt-4">
          Talent Pool Sign Up
        </h4> */}
          <form className="mt-4 " onSubmit={handleSubmit}>
            <h3 className="bg-white font-bold text-lg md:text-lg px-7 text-[#f4ac10] border-2 border-[#f4ac10] rounded-3xl py-2 mb-6">
              Your Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First name */}
              <div className="col-span-1">
                <div className="relative">
                  <input
                    tabindex="1"
                    type="text"
                    id="first-name-input"
                    name="01_First_Name"
                    className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder="First Name"
                    autocomplete="given-name"
                    onChange={handleChange}
                    required
                  />
                  <i className="required">*</i>
                </div>
              </div>
              {/* Last name */}
              <div className="col-span-1">
                <div className="relative">
                  <input
                    tabindex="2"
                    type="text"
                    id="last-name-input"
                    name="02_Last_Name"
                    className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder=" Last Name"
                    autocomplete="family-name"
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
                    name="03_Academic_Title"
                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder="Academic Title (Role or Position)"
                    onChange={handleChange}
                    required
                  />
                  <i className="required">*</i>
                </div>
              </div>
              {/* phone */}
              <div className="col-span-1">
                <div className="relative">
                  <input
                    tabindex="4"
                    type="tel"
                    id="phone-input"
                    name="04_phone"
                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                    autocomplete="tel"
                    placeholder="Phone Number"
                    onChange={handleChange}
                  />
                  <i className="required">*</i>
                </div>
              </div>
              {/* Email */}
              <div className="col-span-2">
                <div className="relative">
                  <input
                    tabindex="5"
                    type="email"
                    id="email-input"
                    name="05_Email"
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
            <h3 className="bg-white font-bold text-lg md:text-lg px-7 text-[#f4ac10] border-2 border-[#f4ac10] rounded-3xl py-2 mt-12 mb-6">
              What are you interested in?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Seeking Opportunities */}
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    tabindex="6"
                    type="checkbox"
                    id="06_Collaborations_Checkbox"
                    name="06_Collaborations_Checkbox"
                    value={isChecked1 ? "Collaborate with Top Academics" : ""}
                    className="checkbox checkbox-warning"
                    checked={isChecked1}
                    onChange={handleCheckboxChange1}
                  />
                  <span className="label-text ml-2 mr-auto">
                    Collaborations
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    tabindex="7"
                    type="checkbox"
                    id="keynote"
                    name="07_Keynote_Checkbox"
                    value={isChecked2 ? "Keynote Speaking" : ""}
                    className="checkbox checkbox-warning"
                    checked={isChecked2}
                    onChange={handleCheckboxChange2}
                  />
                  <span className="label-text ml-2 mr-auto">
                    Keynote Speaking
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    tabindex="8"
                    type="checkbox"
                    id="media"
                    name="08_Media_Checkbox"
                    value={isChecked3 ? "Media" : ""}
                    className="checkbox checkbox-warning"
                    checked={isChecked3}
                    onChange={handleCheckboxChange3}
                  />
                  <span className="label-text ml-2 mr-auto">
                    Media Visibility
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    tabindex="9"
                    type="checkbox"
                    id="career-job-opportunities"
                    name="09_Career_Job_Opportunities_Checkbox"
                    value={isChecked4 ? "Career Job Opportunities" : ""}
                    className="checkbox checkbox-warning"
                    checked={isChecked4}
                    onChange={handleCheckboxChange4}
                  />
                  <span className="label-text ml-2 mr-auto">
                    Career Progression (Open to Job Offers)
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    tabindex="10"
                    type="checkbox"
                    id="seek-ip-investors"
                    name="10_Seek_IP_Investors_Checkbox"
                    value={isChecked5 ? "Seek IP Investors" : ""}
                    className="checkbox checkbox-warning"
                    checked={isChecked5}
                    onChange={handleCheckboxChange5}
                  />
                  <span className="label-text ml-2 mr-auto">
                    Seek IP Investors
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    tabindex="11"
                    type="checkbox"
                    id="partner-with-"
                    name="11_Partner_with_Industry_Checkbox"
                    value={isChecked6 ? "Partner with Industry" : ""}
                    className="checkbox checkbox-warning"
                    checked={isChecked6}
                    onChange={handleCheckboxChange6}
                  />
                  <span className="label-text ml-2 mr-auto">
                    Partner with Industry
                  </span>
                </label>
              </div>
            </div>
            {/* Academic Details Section */}
            <h3 className="bg-white font-bold text-lg md:text-lg px-7 text-[#f4ac10] border-2 border-[#f4ac10] rounded-3xl py-2 mt-12 mb-6">
              Academic Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Institution */}
              <div className="col-span-1">
                <div className="relative">
                  <input
                    tabindex="12"
                    type="text"
                    id="institution-input"
                    name="12_Institution"
                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder="Institution/University (Current, Last or Attended)"
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
                    tabindex="13"
                    type="text"
                    id="department-faculty-input"
                    name="13_Department_Faculty"
                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder="Department/Faculty"
                    onChange={handleChange}
                    required
                  />
                  <i className="required">*</i>
                </div>
              </div>
              {/* Specialty */}
              <div className="col-span-1">
                <div className="relative">
                  <input
                    tabindex="14"
                    type="text"
                    id="specialty-input"
                    name="14_Specialty"
                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder="Specialty"
                    onChange={handleChange}
                    required
                  />
                  <i className="required">*</i>
                </div>
              </div>
              {/* Location */}
              <div className="col-span-1">
                <div className="relative">
                  <input
                    tabindex="15"
                    type="text"
                    id="location-input"
                    name="15_Institution_Location"
                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder="Institution Location"
                    onChange={handleChange}
                    required
                  />
                  <i className="required">*</i>
                </div>
              </div>
              <div className="col-span-1">
                <div className="relative">
                  <select
                    tabindex="16"
                    id="country-select"
                    name="16_Country"
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
              {/* Profile */}
              <div className="col-span-2">
                <div className="relative">
                  <textarea
                    tabindex="17"
                    id="profile-input"
                    name="17_Profile"
                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                    placeholder="OPTIONAL - Please write a brief profile noting your key skills, experience, and achievements."
                    onChange={handleChange}
                  />
                  <i className="required">*</i>
                  <label
                    htmlFor="profile-input"
                    className="absolute left-4 top-2 text-gray-600 transition-all"
                  ></label>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="relative">
                <p required>
                  Any field with an asterisk (
                  <span className="asterisk">*</span>) is a required field!
                </p>
              </div>
            </div>
            <div className="text-right mt-6">
              <button
                tabindex="30"
                type="submit"
                className="bg-white px-6 py-2 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-semibold hover:bg-[#00aeef] hover:text-black transition duration-300 ease-in-out"
              >
                Join Talent Pool
              </button>
            </div>
            {submitStatus === "error" && (
              <p className="mt-4 text-center text-2xl font-bold text-red-500">
                An unknown error occurred.
              </p>
            )}
          </form>
        </div>
        <div className="container mx-auto mt-8 mb-12">
          <h3 className="text-[#00aeef] text-xl font-semibold mb-4">
            Checkbox Definitions
          </h3>
          <ul className="ul">
            <li>
              <strong>Collaborations: </strong>Engage in high-level academic
              collaborations and research partnerships.
            </li>
            <li>
              <strong>Keynote Speaking: </strong>
              Access opportunities for keynote speaking at prestigious
              conferences and events.
            </li>
            <li>
              <strong>Media Visibility: </strong>Gain visibility through media
              features and interviews.
            </li>
            <li>
              <strong>Career Progression: </strong>
              Open doors to career progression and attract attention from
              headhunters.
            </li>
            <li>
              <strong>Seek IP Investors: </strong>
              Connect with investors to fund and support your innovative
              intellectual property projects.
            </li>
            <li>
              <strong>Academic Rankings: </strong>
              Become eligible for recognition in academic rankings and awards.
            </li>
          </ul>
          <div className="text-black rounded-2xl mt-8">
            <div className="p-4 rounded-3xl bg-slate-100 pt-7">
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
                  <strong>Share and Gain Insights</strong> - Engage in
                  meaningful dialogues, share your expertise, and gain unique
                  perspectives from fellow academics globally.
                </li>
              </ul>
              <p className="p-6">
                Don't Wait — The Opportunity for Academic Excellence Awaits!
                Sign Up Now and Propel Your Career to New Heights!
              </p>
            </div>
          </div>
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
