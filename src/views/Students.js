import React, { useState, useEffect, useRef } from 'react'

import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';
import student from "../utils/student.json";
import { Link } from 'react-router-dom'

const Students = () => {  window.location.replace("https://www.academicjobs.com/student");
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
        <title>Student Jobs on Campus</title>
        <meta name="description" content="Looking for a flexible and rewarding job on campus? Browse hundreds of student jobs in various roles and departments at your university. Apply today and gain valuable work experience and skills. " />
        <meta name="keywords" content="Student Jobs on Campus, Student Jobs at College" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl ">Student Jobs on Campus</h1>

        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">
          <p className="newLine pb-2">Make extra cash while studying at university.  Great jobs for students and graduates.  Immediate start for casual and part-time jobs.  Get money for rent, groceries or going out money.  Make 'beer money' where you study at college, and get valuable experience along the way. </p>
            <p >Student jobs on campus involve working part-time or casually in various roles and departments within a university or research institute setting. Academic student jobs on campus provide students with the opportunity to earn income, gain valuable work experience, develop employability skills, and enhance their academic and social networks. Academic student jobs on campus can cover administration, customer service, events, marketing, IT, library, research, teaching, and other student jobs on campus.  </p>
          </div>
          <div className="newLine mb-2"></div>
          <Link className='text-[#00aeef] mb-4 px-7' to='/student/faq/'>View Student Jobs FAQ</Link>




          <div className="bg-white flex flex-col  ">
            <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl shadow-md  mt-20 ">Choose Student Jobs on Campus</h2>
            <ul className=" mb-8 text-left columns-1 md:columns-4  md:gap-2 py-2 px-7 h-auto w-full text-transform: capitalize">
              {student.map(({ Title, Name, break1, isBold }, key) => (
                <li className={`pb-2 flex ${break1 ? ' md:break' : ''} ${isBold ? 'pt-4 font-bold text-[#00aeef]' : ''}`} key={key}>
                  <Link to={`/student/${Name?.replace(/\s+/g, '-')}/`}>{Name}</Link>
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



      <SearchResults q={{ q: "student" || 0 }} />
    </div>

  );
};

export default Students;