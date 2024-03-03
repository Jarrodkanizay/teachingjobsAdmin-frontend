
import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import admin from "../utils/admin.json";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'




const Adelaide = () => {  window.location.replace("https://www.academicjobs.com/adelaide");

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
        <title> Academic Jobs Adelaide</title>
        <meta name="description" content="Don’t miss this chance to work in one of the best academic environments in the world. Apply now for your dream academic job in Gold Coast! " />
        <meta name="keywords" content="Adelaide Academic Jobs Australia, Adelaide AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl ">Adelaide Academic Jobs Australia</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p>The University of Adelaide, Flinders University, and the University of South Australia provide a broad spectrum of academic programs, spanning from business and law to science and engineering, health and medical, and the arts and humanities. To support their brilliance in research, teaching, and impact, you can become a member of their outstanding and cooperative academic communities.</p> </div>
          <div className="newLine mb-2"></div>


          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl  shadow-md">Top Australian Universities To Work For</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 pb-8">
          <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/employers/the-university-of-adelaide/3737/" className='text-[#A51C30] font-bold'>University of Adelaide</Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobs/Adelaide/" >Adelaide Lecturing Jobs</Link></li>
                  <li><Link to="/jobs/Adelaide/" >Adelaide Research Jobs</Link></li>
                  <li><Link to="/jobs/Adelaide/" >Adelaide Professorial Jobs</Link></li>
                  <li><Link to="/jobs/Adelaide/" >Adelaide Executive</Link></li>
                  <li><Link to="/jobs/Adelaide/" >Adelaide Administration</Link></li>
                  <li><Link to="/jobs/Adelaide/" >Adelaide Human Resources</Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/employers/flinders-university/3873/" className='text-[#f1b821] font-bold'>Flinders University</Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobs/flinders/" >Flinders Lecturing Jobs</Link></li>
                  <li><Link to="/jobs/flinders/" >Flinders Research Jobs</Link></li>
                  <li><Link to="/jobs/flinders/" >Flinders Professorial Jobs</Link></li>
                  <li><Link to="/jobs/flinders/" >Flinders Executive</Link></li>
                  <li><Link to="/jobs/flinders/" >Flinders Administration</Link></li>
                  <li><Link to="/jobs/flinders/" >Flinders Human Resources</Link></li>
                </ul>
              </ul>
            </div>
           
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/employers/university-of-south-australia/3874/" className='text-[#192847] font-bold'>University of South Australia</Link></li>
                <ul className="innerUL">
                  <li><Link to="/jobs/UniSA/" >UniSA Lecturing Jobs</Link></li>
                  <li><Link to="/jobs/UniSA/" >UniSA Research Jobs</Link></li>
                  <li><Link to="/jobs/UniSA/" >UniSA Professorial Jobs</Link></li>
                  <li><Link to="/jobs/UniSA/" >UniSA Executive</Link></li>
                  <li><Link to="/jobs/UniSA/" >UniSA Administration</Link></li>
                  <li><Link to="/jobs/UniSA/" >UniSA Human Resources</Link></li>
                </ul>
              </ul>
            </div>
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


      <SearchResults q={{ q: "", l: "Adelaide" || 0 }} />
    </div>
    </div>
     </div>

  );
};

export default Adelaide;