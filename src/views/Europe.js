import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Europe = () => {  window.location.replace("https://www.academicjobs.com/europe");
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Europe</title>
        <meta name="description" content="Find your ideal academic job in Europe and join the vibrant academic community at Europe university jobs such teaching, research or innovative opportunities." />
        <meta name="keywords" content="Academic Jobs Europe. academic jobs in Europe, Europe University Jobs" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-europe-min.png"

          alt="AcademicJobs Europe"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <SearchBox />

      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link to="/Europe/lecturer/" >	Lecturer</Link></li>
            <li><Link to="/Europe/research/" >	Research </Link></li>
            <li><Link to="/Europe/professor/" >	Professor</Link></li>
            <li><Link to="/Europe/faculty/" >	Faculty</Link></li>
          </ul>
          <li><Link to="/Europe/executive/" >	Executive</Link></li>
          <li><Link to="/Europe/admin/" >Admin</Link></li>
          <li><Link to="/Europe/hr-jobs/" >	HR</Link></li>
          <li><Link to="/Europe/student/" >	Student</Link></li>
          <li><Link to="/Europe/graduate/" >	Graduate</Link></li>
          <li><Link to="/Europe/phd/" >	PhD</Link></li>

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
      <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]">
        <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#00aeef] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs Europe</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Academic Jobs board is a platform that connects academic universities, institutions and organizations with qualified candidates across Europe. You can browse through hundreds of University Jobs in various disciplines. Whether you are looking for a permanent or a temporary position, a full-time or a part-time role, our academic job board can help you find your dream job in Europe.</p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#00aeef] border-2  text-[#00aeef] rounded-3xl shadow-md">AcademicJobs Europe: All Academic Positions by university  </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/france/" className='text-[#00aeef] font-bold'>France</Link></li>
                    <li><Link to="/employers/paris-sciences-et-lettres/3163/">Paris

                      Sciences et Lettres</Link></li>
                    <li><Link to="/employers/ecole-polytechnique/3158/">Ecole Polytechnique</Link></li>
                    <li className='mb-1 '><Link to="/jobs/sweden/" className='text-[#00aeef] font-bold'>Sweden</Link></li>
                    <li><Link to="/employers/karolinska-institute/3165/">Karolinska Institute</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/germany/" className='text-[#00aeef] font-bold'>Germany</Link></li>
                    <li><Link to="/employers/heidelberg-university/3160/">Heidelberg
                      University</Link></li>
                    <li><Link to="/employers/lmu-munich-ludwig-maximilians-universitat/3150/">LMU
                      Munich (Ludwig Maximilians Universität München)</Link></li>
                    <li><Link to="/employers/technische-uiniversitat-munchen/10702/">Technische Universität München</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/denmark/" className='text-[#00aeef] font-bold'>Denmark</Link></li>
                    <li><Link to="/employers/the-university-of-copenhagen/3156/">University of
                      Copenhagen</Link>
                    </li>
                    <li className='mb-1 '><Link to="/jobs/switzerland/" className='text-[#00aeef] font-bold'>Switzerland</Link></li>
                    <li><Link to="/employers/eth-zurich/3132/">ETH
                      Zurich</Link></li>
                    <li className='mb-1 '><Link to="/jobs/belgium/" className='text-[#00aeef] font-bold'>Belgium</Link></li>
                    <li><Link to="/employers/ku-leuven/3159/">KU Leuven</Link></li>
                  </ul>


                  <ul>
                    <li className='mb-1 '><Link to="/jobs/netherlands/" className='text-[#00aeef] font-bold'>Netherlands</Link></li>
                    <li><Link to="/employers/delft-university-of-technology/3847/">Delft University of Technology</Link>
                    </li>
                    <li className='mb-1 '><Link to="/jobs/italy/" className='text-[#00aeef] font-bold'>Italy</Link></li>
                    <li><Link to="/employers/University-of-Bologna/12015/">University of Bologna</Link></li>

                    <li className='mb-1 '><Link to="/jobs/spain/" className='text-[#00aeef] font-bold'>Spain</Link></li>
                    <li><Link to="/employers/universitat-de-barcelona/12195/">Universitat de Barcelona</Link></li>

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
export default Europe