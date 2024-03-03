import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const NewZealand = () => {  window.location.replace("https://www.academicjobs.com/new-zealand");
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs New Zealand</title>
        <meta name="description" content="Find your dream academic job in New Zealand and join the leading universities at New Zealand university jobs with professor, researcher or manager roles." />
        <meta name="keywords" content="Academic Jobs New Zealand. academic job in New Zealand, New Zealand university jobs" />
      </Helmet>
      <div className="pt-[5rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/Black-Fern.jpg"

          alt="AcademicJobs New Zealand"
          className=" w-[8rem]  "
        /></div>
 <div className=" flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-nz.png"

          alt="AcademicJobs New Zealand"
          className=" w-[20rem] mb-[1rem] "
        /></div>

      <SearchBox />

      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link to="/New-Zealand/lecturer/" >	Lecturer</Link></li>
            <li><Link to="/New-Zealand/research/" >	Research </Link></li>
            <li><Link to="/New-Zealand/professor/" >	Professor</Link></li>
            <li><Link to="/New-Zealand/faculty/" >	Faculty</Link></li>
          </ul>
          <li><Link to="/New-Zealand/executive/" >	Executive</Link></li>
          <li><Link to="/New-Zealand/admin/" >Admin</Link></li>
          <li><Link to="/New-Zealand/hr-jobs/" >	HR</Link></li>
          <li><Link to="/New-Zealand/student/" >	Student</Link></li>
          <li><Link to="/New-Zealand/graduate/" >	Graduate</Link></li>
          <li><Link to="/New-Zealand/phd/" >	PhD</Link></li>

        </ul>
      </div>


      <div className=" mt-4 " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#00aeef] ">

          <li><Link to="/online/" >	Online </Link></li>
          <li><Link to="/jobs/remote/" >	Remote</Link></li>

          <li><Link to="/jobs/full-time/" >Full-Time</Link></li>
          <li><Link to="/jobs/part-time/" >	Part-Time</Link></li>
          <li><Link to="/jobs/casual/" >	Casual</Link></li>
        </ul>
      </div>




      <div className="text-[#00aeef]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div>
      <div className="bg-gradient-to-b to-white from-gray-300 rounded-t-[3rem] mt-[-1rem]">
        <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#00aeef] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs New Zealand</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
            <p className="newLine px-7 pb-2">On Academic Jobs New Zealand, you will find all  the best academic positions at highly regarded New Zealand universities. Our academic employment platform enables academics to pursue excellent careers in New Zealand, and our universities are always on the lookout for the greatest New Zealand Academics.</p>
              <p className="px-7 pb-8">New Zealand is a beautiful and diverse country that offers a high quality of life and a supportive academic environment. Whether you are looking for teaching, research, or leadership positions, you can find a range of academic jobs in New Zealand that match your skills and interests. You can browse through hundreds of academic jobs in New Zealand on this page, covering various fields and disciplines such as education, science, arts, business, and more.</p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#00aeef] border-2  text-[#00aeef] rounded-3xl shadow-md ">AcademicJobs New Zealand: All University Jobs by Region</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/" className='text-[#00aeef] font-bold'>North Island</Link></li>
                    <li><Link to="/employers/the-university-of-auckland/3809/">The
                      University of Auckland</Link></li>
                    <li><Link to="/employers/victoria-university-of-wellington/3807/">Victoria
                      University of Wellington</Link></li>
                    <li><Link to="/employers/waikato-university/3806/">Waikato
                      University</Link>
                    </li>
                    <li><Link to="/employers/auckland-university-of-technology/3804/">Auckland
                      University of Technology (AUT)</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/" className='text-[#00aeef] font-bold'>South Island</Link></li>
                    <li><Link to="/employers/university-of-otago/3805/">University of
                      Otago</Link>
                    </li>
                    <li><Link to="/employers/lincoln-university/3808/">Lincoln
                      University</Link>
                    </li>
                    <li><Link to="/employers/massey-university/3810/">Massey University</Link>
                    </li>
                    <li><Link to="/employers/university-of-canterbury/3811/">University of
                      Canterbury</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-8 px-7 text-[#00aeef] ">The
                      University of Auckland Jobs</h2>
<div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container  flex flex-wrap px-7 md:gap-2 py-2  pb-16 text-black">

              
                  <ul className=" flex flex-wrap gap-8">
                  <li className="mb-1 mt-4 ">
                  <a href="/jobs/auckland-lecturer/" class="scroll-smooth md:scroll-auto ">              UOA Lecturing Jobs
        </a>
                    </li>
                    <li className="mb-1 mt-4 ">
                  <a href="/jobs/auckland-research/" class="scroll-smooth md:scroll-auto">              UOA Research Jobs
          </a>
                    </li>
                   

                 
              
                  
                    <li className="mb-1 mt-4">
                    <a href="/jobs/auckland-professor/" class="scroll-smooth md:scroll-auto">           UOA Professorial Jobs
          </a>
                    </li>
                    <li className="mb-1 mt-4">
                    <a href="/jobs/auckland-executive/" class="scroll-smooth md:scroll-auto">             UOA Executive
         </a>
                    </li>
                    
                    
               
                    <li className="mb-1 mt-4"> <a href="/jobs/auckland-admin/" class="scroll-smooth md:scroll-auto">  UOA Administration           </a>
                    </li>
                    <li className="mb-1 mt-4">
                    <a href="/jobs/auckland-hr/" class="scroll-smooth md:scroll-auto">            UOA Human Resources
 Jobs           </a>
                    </li>
                
                   
              
                    <li className="mb-1 mt-4">
                    <a href="/jobs/auckland/" class="scroll-smooth md:scroll-auto">            All UOA Jobs           </a>
                    </li>
                   
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
export default NewZealand