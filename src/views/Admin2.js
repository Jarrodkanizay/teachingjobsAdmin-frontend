
import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import admin from "../utils/admin.json";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'




const Admin2 = () => {  window.location.replace("https://www.academicjobs.com/admin");

  const handleFormSubmit = (event) => {


    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    navigate("/find-jobs", { state: { q: keyWordRef.current.value.trim(), l: locationRef.current.value.trim() } });
  }

  const [page, setPage] = useState(0);
  const navigate = useNavigate()
  const keyWordRef = useRef('')
  const locationRef = useRef('')

  return (


    <div className="container mx-auto">
      <Helmet>
        <title>Academic Admin and Support Jobs</title>
        <meta name="description" content="As an academic admin and support job, you will have the opportunity to work with diverse and talented people, contribute to the academic excellence and innovation of your institution. " />
        <meta name="keywords" content="Academic Admin and Support Jobs, Admin and Support AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl ">Academic Admin and Support Jobs</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-full ">
          <p className="pb-2">
          We have posts of all admin positions from the best institutions. Our academic institutions are constantly seeking the greatest admin staff, so apply on our website for incredible admin positions across the world.
            </p>
            <p >Academic Admin and support Jobs will need to have a diploma or higher qualification in business administration or a related field, as well as relevant work experience in academic administration and support. Academic Admin and support Jobs will also need to have excellent communication, interpersonal, organizational, and problem-solving skills. Academic Admin and support Jobs need to be familiar with the policies and procedures of the higher education sector, as well as the applicable laws and regulations.  </p>
          </div>
          <div className="newLine mb-2"></div>



          <div className="bg-white flex flex-col  ">
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl shadow-md mt-20 ">Choose Higher Ed Admin and Support Jobs</h2>
            <ul className="mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
              {admin.map(({ Title, Name, break1, isBold }, key) => (
                <li className={`flex pb-2 ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#00aeef]' : ''}`} key={key}>
                  <Link to={`/admin/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
                </li>
              ))}
            </ul>
            <div className="newLine"></div>
          </div>
        </div>





      </div>



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex flex-col  gap-2 md:flex-row md:gap-2 mx-18 w-full " onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
            //defaultValue={name}cc
            />
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#00aeef] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
              type="submit"
            >
             Find Jobs
            </button>
          </form>
        </div>
      </div>


      <SearchResults q={{ q: "admin" || 0 }} />
    </div>

  );
};

export default Admin2;