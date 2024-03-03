import React, { useState, useEffect, useRef } from 'react'

import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import category from "../utils/category.json";
import { Link } from 'react-router-dom'

const Faculty = () => {  window.location.replace("https://www.academicjobs.com/faculty");
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


    <div className="container mx-auto">
      <Helmet>
        <title>Academic Faculty Jobs</title>
        <meta name="description" content="The leading job site for academic faculty jobs. Best list of college and university jobs by specialty in departments. " />
        <meta name="keywords" content="academic faculty jobs, Academic Jobs, jobs by specialty" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full ">Search for a Faculty Position in Academia</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">
          <p className="pb-2">
          Find all academic positions by discipline, faculty and specialty.  
            </p>
            <p >All Lecturing, Research and Science jobs online today.  </p>
          </div>
          <div className="newLine mb-2"></div>



          <div className="bg-white flex flex-col  ">
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl mt-20 ">Choose Higher Ed Job faculty / Specialty</h2>
            <ul className=" mb-8 text-left columns-1 md:columns-5  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
              {category.map(({ Title, Name, break1, isBold, padding }, key) => (
                <li className={`flex ${break1 ? 'md:break' : ''}  ${padding ? 'md:pt-[6.001rem]' : ''} ${isBold ? 'pt-4 font-bold text-[#00aeef]' : ''}`} key={key}>
                  <Link to={`/faculty/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
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
            //defaultValue={name}
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


      <SearchResults q={{ q: "faculty" || 0 }} />
    </div>

  );
};

export default Faculty;