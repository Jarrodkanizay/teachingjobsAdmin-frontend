import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";


const UK = () => {  window.location.replace("https://www.academicjobs.com/uk");
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(setRegion('UK'))
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs UK</title>
        <meta name="description" content="Find your ideal academic jobs in UK and join the vibrant academic community at UK university jobs. We have the perfect opportunity for you whatever the job." />
        <meta name="keywords" content="Academic Jobs UK. academicjobs, academia jobs" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-uk-min.png"

          alt="AcademicJobs UK Logo"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <SearchBox />

      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link to="/UK/lecturer/" >	Lecturer</Link></li>
            <li><Link to="/UK/research/" >	Research </Link></li>
            <li><Link to="/UK/professor/" >	Professor</Link></li>
            <li><Link to="/UK/faculty/" >	Faculty</Link></li>
          </ul>
          <li><Link to="/UK/executive/" >	Executive</Link></li>
          <li><Link to="/UK/admin/" >Admin</Link></li>
          <li><Link to="/UK/hr-jobs/" >	HR</Link></li>
          <li><Link to="/UK/student/" >	Student</Link></li>
          <li><Link to="/UK/graduate/" >	Graduate</Link></li>
          <li><Link to="/UK/phd/" >	PhD</Link></li>

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
          <div className="blurb text-left py-8 mt-[10rem] ">
            <h1 className="py-3 px-7 bg-[#00aeef] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs UK</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">To start your UK academic jobs search, you can browse through our listings of university jobs, research jobs, science jobs and managerial jobs in leading universities and top global employerss. You can also find PhDs, studentships, scholarships and fellowships to support your academic career. You can search by keywords, disciplines, locations, salary bands, contract types and more.
                Find your ideal academia jobs and join the vibrant academic community of university jobs uk. We have the perfect opportunity for you whatever the jobs in academia you are seeking.</p>
              <p className="font-semibold"></p>
            </div>
          </div>

          <div className="  flex flex-wrap gap-6 px-7 pb-4 text-gray-400" >
            <Link to="/russelgroup/" >	Russel Group</Link> </div>






          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#00aeef] border-2  text-[#00aeef] rounded-3xl shadow-md ">Academic Jobs UK: Jobs in Academia by University </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/england/" className='text-[#00aeef] font-bold'>England</Link></li>
                    <li><Link to="/employers/university-of-cambridge/12635/">University of
                      Cambridge</Link></li>
                    <li><Link to="/employers/university-of-oxford/3099/">University of
                      Oxford</Link>
                    </li>
                    <li><Link to="/employers/university-college-london/12527/">University
                      College London</Link>
                    </li>
                    <li><Link to="/employers/imperial-college-london/3129/">Imperial
                      College London</Link></li>
                    <li><Link to="/employers/london-school-of-economics-and-political-science/3153/">London School
                      of Economics and Political Science</Link>
                    </li>
                    <li><Link to="/employers/university-of-manchester/3833/">University of
                      Manchester</Link></li>
                    <li><Link to="/employers/university-of-birmingham/12614/">University of
                      Birmingham</Link></li>
                    <li><Link to="/employers/university-of-leeds/12797/">University of
                      Leeds</Link>
                      <li><Link to="/employers/king's-college-london/13540/" >King's College London</Link></li>
                      <li><Link to="/employers/durham-university/13541/" >Durham University</Link></li>
                      <li><Link to="/employers/university-of-bristol/13542/" >University of Bristol</Link></li>
                      <li><Link to="/employers/university-of-exeter/13543/" >University of Exeter</Link></li>
                      <li><Link to="/employers/university-of-liverpool/13544/" >University of Liverpool</Link></li>
                      <li><Link to="/employers/university-of-nottingham/13545/" >University of Nottingham</Link></li>
                      <li><Link to="/employers/queen-mary-university-of-london/13546/" >Queen Mary University of London</Link></li>
                      <li><Link to="/employers/university-of-sheffield/13547/" >University of Sheffield</Link></li>
                      <li><Link to="/employers/university-of-southampton/13548/" >University of Southampton</Link></li>
                      <li><Link to="/employers/university-of-warwick/13549/" >University of Warwick</Link></li>
                      <li><Link to="/employers/university-of-york/13550/" >University of York</Link></li>
                      <li><Link to="/employers/university-of-newcastle/13551/" >University of Newcastle</Link></li>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/scotland/" className='text-[#00aeef] font-bold'>Scotland</Link></li>
                    <li><Link to="/employers/university-of-edinburgh/12681/">University of
                      Edinburgh</Link></li>
                    <li><Link to="/employers/university-of-glasgow/12713/">University of
                      Glasgow</Link>
                    </li>
                    <li><Link to="/employers/university-of-aberdeen/12555/">University of
                      Aberdeen</Link></li>
                    <li><Link to="/employers/university-of-st-andrews/13005/">University of
                      St Andrews</Link></li>
                    <li><Link to="/employers/university-of-dundee/12669/">University of
                      Dundee</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/wales/" className='text-[#00aeef] font-bold'>Wales</Link></li>
                    <li><Link to="/employers/cardiff-university/6252/">Cardiff
                      University</Link>
                    </li>
                    <li><Link to="/employers/swansea-university/10538/">Swansea
                      University</Link>
                    </li>
                    <li><Link to="/employers/aberystwyth-university/13115/">Aberystwyth
                      University</Link></li>
                    <li><Link to="/employers/bangor-university/13116/">Bangor
                      University</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/northern-ireland/" className='text-[#00aeef] font-bold'>Northern Ireland</Link></li>
                    <li><Link to="/employers/queens-university-belfast/10799/">Queen's
                      University Belfast</Link>
                    </li>
                    <li><Link to="/employers/ulster-university/13098/">Ulster
                      University</Link>
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
export default UK