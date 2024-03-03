import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const India = () => {  window.location.replace("https://www.academicjobs.com/india");
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs India</title>
        <meta name="description" content="Discover academic jobs in India and apply to the top universities and institutions at India university jobs. like lecturer, researcher or a administrator role." />
        <meta name="keywords" content="Academic Jobs India. India university jobs, academic jobs in India, " />
      </Helmet>
      <div className="pt-[5rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/India-Leaf.jpg"

          alt="AcademicJobs India"
          className=" w-[8rem]  "
        /></div>
 <div className=" flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-india.png"

          alt="AcademicJobs India"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <SearchBox />
      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-500 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link to="/India/lecturer/" >	Lecturer</Link></li>
            <li><Link to="/India/research/" >	Research </Link></li>
            <li><Link to="/India/professor/" >	Professor</Link></li>
            <li><Link to="/India/faculty/" >	Faculty</Link></li>
          </ul>
          <li><Link to="/India/executive/" >	Executive</Link></li>
          <li><Link to="/India/admin/" >Admin</Link></li>
          <li><Link to="/India/hr-jobs/" >	HR</Link></li>
          <li><Link to="/India/student/" >	Student</Link></li>
          <li><Link to="/India/graduate/" >	Graduate</Link></li>
          <li><Link to="/India/phd/" >	PhD</Link></li>
        </ul>
      </div>


      <div className=" mt-4 " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#138806] ">

          <li><Link to="/online/" >	Online </Link></li>
          <li><Link to="/jobs/remote/" >	Remote</Link></li>

          <li><Link to="/jobs/full-time/" >Full-Time</Link></li>
          <li><Link to="/jobs/part-time/" >	Part-Time</Link></li>
          <li><Link to="/jobs/casual/" >	Casual</Link></li>
        </ul>
      </div>




      <div className="text-[#138806]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div>
      <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]">
        <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#138806] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl shadow-xl">Academic Jobs India</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7">As an academic job seeker in India, you can explore various fields of study, such as engineering, technology, mathematics, statistics, economics, business, arts, humanities, social sciences, life sciences, health sciences, and more. You can also choose from different types of academic positions, such as assistant professor, associate professor, professor, lecturer, researcher, postdoctoral fellow, and more. On Academic Jobs India you can also apply for jobs in different types of institutions, such as public universities, private universities, deemed universities, institutes of national importance, central universities, state universities, and more.</p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#00aeef] border-2  text-[#00aeef] rounded-3xl shadow-md ">AcademicJobs India: University Jobs by State  </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/mumbai/" className='text-[#00aeef] font-bold'>Mumbai</Link></li>
                    <li><Link to="/employers/indian-institute-of-technology-bombay/3844/">Indian
                      Institute of Technology Bombay</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/chennai/" className='text-[#00aeef] font-bold'>Chennai</Link></li>
                    <li><Link to="/employers/indian-institute-of-technology-madras/3845/">Indian
                      Institute of Technology Madras</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/vellore/" className='text-[#00aeef] font-bold'>Vellore</Link></li>
                    <li><Link to="/employers/vellore-institute-of-technology/3846/">Vellore
                      Institute of Technology</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/bangalore/" className='text-[#00aeef] font-bold'>Bangalore</Link></li>
                    <li><Link to="/employers/indian-institute-of-science/7818/">Indian
                      Institute of Science (IISc)</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/delhi/" className='text-[#00aeef] font-bold'>Delhi</Link></li>
                    <li><Link to="/employers/indian-institute-of-technology-delhi/7822/">Indian
                      Institute of Technology Delhi</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default India