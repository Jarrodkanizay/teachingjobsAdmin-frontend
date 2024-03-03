
import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import admin from "../utils/admin.json";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'




const Admin2 = () => {  window.location.replace("https://www.academicjobs.com/australia/admin");

  const handleFormSubmit = (event) => {


    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: locationRef.current.value.trim() } });
  }

  const [page, setPage] = useState(0);
  const navigate = useNavigate()
  const keyWordRef = useRef('')
  const locationRef = useRef('')

  return (


    <div className="">
      <Helmet>
        <title>Admin and Support Academic Jobs Australia</title>
        <meta name="description" content="Admin and Support Academic Jobs Australia will provide you the chance to collaborate with a varied and skilled group of individuals while advancing the academic standards and innovative practises of your organisation. " />
        <meta name="keywords" content="Admin and Support Academic Jobs Australia, Admin and Support AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl ">Admin and Support Academic Jobs Australia</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p>Admin and Support Academic Jobs Australia work experience is a prerequisite for jobs, as is a diploma or higher certification in business administration or a comparable sector. Proficient interpersonal, communication, organisational, and problem-solving abilities are essential for Admin and Support Academic Jobs Australia. Higher education policies and procedures, together with relevant laws and regulations, are essential knowledge for anyone working in academic administration and support roles.  </p> </div>
          <div className="newLine mb-2"></div>



          <div className="bg-white flex flex-col  ">
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl shadow-md  mt-20">Choose Higher Ed Admin and Support Jobs in Australia</h2>
            <ul className="mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
              {admin.map(({ Title, Name, break1, isBold }, key) => (
                <li className={`flex ${break1 ? 'md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#00aeef]' : ''}`} key={key}>
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


      <SearchResults q={{ q: "admin", l: "Australia" || 0 }} />
    </div>

  );
};

export default Admin2;