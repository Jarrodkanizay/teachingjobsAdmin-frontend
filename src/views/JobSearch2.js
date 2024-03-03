import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setJob, setfilter } from "../store/postsSlice";
import { Helmet } from "react-helmet";
import JobSearchA from "./JobSearchA";
import hr from "../utils/hr.json";
import { Link } from "react-router-dom";
const HR2 = () => {  
  const dispatch = useDispatch();
  dispatch(
    setfilter([
      {
        category: "Institution Name",
        filter: "University of California, Los Angeles",
      },
    ])
  );
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {};
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim();
    if (locationRef.current.value.trim())
      a.l = locationRef.current.value.trim();
    navigate("/jobs/", {
      state: {
        q: keyWordRef.current.value.trim(),
        l: locationRef.current.value.trim(),
      },
    });
  };
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const keyWordRef = useRef("");
  const locationRef = useRef("");
  return (
    <div className="container mx-auto mb-20">
      <Helmet>
        <title>Academic Human Resources Jobs</title>
        <meta
          name="description"
          content="To be eligible for Academic Human Resources Jobs on academic job board, you will need to have a bachelor’s degree or higher in human resources management or a related field. "
        />
        <meta
          name="keywords"
          content="Academic Human Resources Jobs, Human Resources AcademicJobs"
        />
      </Helmet>
      <div className="blurb text-left py-8 px-4">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl ">
          Higher Ed HR jobs{" "}
        </h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine max-w-screen-2xl mx-auto ">
          <div className="py-4 px-7 rounded-2xl ">
            {/* <p className="mb-8">
              Find all university and college Human Resource jobs here. HR jobs
              in higher education are highly sought after, and once you work in
              higher ed you understand that the working environment is a
              fantastic place to work.
            </p> */}
            <p className="mb-4">
              Dive into the dynamic world of higher education HR with our
              curated selection of roles. Our platform connects HR professionals
              to unique opportunities in universities and colleges, where you
              can foster talent and drive organizational success.
            </p>
            <p className="">
              Higher education HR jobs offer more than a role; they're a journey
              into vibrant academic communities. Embrace the challenge and
              satisfaction of shaping educational excellence and nurturing a
              positive workplace culture. Find your next HR opportunity with
              Academic Jobs.
            </p>

                        
          <div className=' '>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

              <iframe class=" aspect-video  " src="https://www.youtube.com/embed/zA4K1-QmrO4?si=FeSGIGczCj2ZZkwL" title="YouTube video player"></iframe>

              <iframe class=" aspect-video " src="https://www.youtube.com/embed/pqjW3uCtswE?si=CxYxWGXqILlP4TlQ" title="YouTube video player"></iframe>
            
              <iframe class=" aspect-video " src="https://www.youtube.com/embed/xiCacfu7Y7Y?si=iC3XrZQZ6o1cCluc" title="YouTube video player"></iframe>
            </div>
          </div>
          </div>

          <div className="newLine mb-2"></div>
          <div className="bg-white flex flex-col  ">
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl shadow-md mb-4 mt-20 ">
              Choose HR Specialty to Start your Job&nbsp;Search
            </h2>
            <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
              {hr.map(({ Title, Name, break1, isBold }, key) => (
                <li
                  className={`pb-2 flex ${break1 ? " md:break" : ""} ${
                    isBold ? "pt-4 font-bold text-[#00aeef]" : ""
                  }`}
                  key={key}
                >
                  <Link to={`/hr-jobs/${Name?.replace(/\s+/g, "-")}/`}>
                    {Name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="newLine"></div>
          </div>
        </div>
      </div>

      <JobSearchA />
    </div>
  );
};
export default HR2;
