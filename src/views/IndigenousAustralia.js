
import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'




const IndigenousAustralia = () => {  window.location.replace("https://www.academicjobs.com/australia/indigenous");

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
        <title>Indigenous Academic Jobs Australia</title>
        <meta name="description" content="Do you want to work in a diverse and inclusive environment that supports Indigenous research, teaching and community engagement? If so, you have come to the right place! " />
        <meta name="keywords" content="indigenous Academic Jobs Australia, indigenous AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl ">Indigenous Academic Jobs Australia</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p>We are committed to promoting Indigenous excellence in academia and fostering a culture of respect and recognition for the First Nations peoples of Australia. We welcome applications from qualified Indigenous candidates who share our vision and values. </p> </div>
          <div className="newLine mb-2"></div>



       
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


      <SearchResults q={{ q: "Indigenous", l: "Australia" || 0 }} />
    </div>

  );
};

export default IndigenousAustralia;