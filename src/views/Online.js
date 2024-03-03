import React, { useState, useEffect, useRef } from 'react'

import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

import { Link } from 'react-router-dom'

const Online2 = () => {  window.location.replace("https://www.academicjobs.com/online");
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
        <title>Academic Jobs Online</title>
        <meta name="description" content="If you are looking for academic jobs online, you can browse through our job board to find the latest opportunities in this flexible and rewarding field. " />
        <meta name="keywords" content="Academic Jobs Online. online positions" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full ">Academic Jobs Online</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 rounded-2xl ">
        
          <p >Explore all higher education opportunities through academic jobs online, whether your a student, graduate, or professional. Beyond the prospect of earning income, these roles offer a unique avenue to delve into the complexities of higher education settings. Engaging in academic online jobs, particularly in higher education, involves a spectrum of roles—from teaching and research to administration, customer service, events management, marketing, IT, and library curation.</p>
          <div className="py-4  rounded-2xl ">
          <p > Participants not only improve their employability skills but also cultivate a deep connection with the academic community, creating a comprehensive and rewarding experience. Through higher ed jobs online, individuals can actively contribute to the advancement of knowledge, the cultivation of learning environments, and the overall growth of the academic landscape while simultaneously expanding their professional horizons.</p>


          </div> </div> 
          <div className="newLine mb-2"></div>
         
          

        
        

          


    </div>
          

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex flex-col  gap-2 md:flex-row md:gap-2 mx-18 w-full " onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#00aeef] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
              //defaultValue={name}
            />
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#00aeef] text-gray-500 rounded-md focus:ring-orange-500 focus:border-orange-500"
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
          
           
     
                <SearchResults q={{ q: "online" || 0 }} />
            
                </div>
                </div>
    );
};

export default Online2;