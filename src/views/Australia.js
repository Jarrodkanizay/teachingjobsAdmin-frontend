import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults';
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Australia = () => {  window.location.replace("https://www.academicjobs.com/australia");
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Australia</title>
        <meta name="description" content="Browse through hundreds of opportunities in higher education and research across various disciplines and institutions in Australia today." />
        <meta name="keywords" content="Academic Jobs Australia. university jobs Australia, Uni jobs Australia" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-australia-min.png"
          alt="AcademicJobs Logo"
          className=" w-[20rem] mb-[1rem] "
        />
      </div>
      <SearchBox />
      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li className=""><Link to="/Australia/lecturer/" >	Lecturer</Link></li>
            <li className=""><Link to="/Australia/research/" >	Research </Link></li>
            <li className=" "><Link to="/Australia/professor/" >	Professor</Link></li>
            <li><Link to="/Australia/faculty/" >	Faculty</Link></li>
          </ul>
          <li><Link to="/Australia/executive/" >	Executive</Link></li>
                    <li><Link to="/Australia/admin/" >Admin</Link></li>
          <li><Link to="/Australia/hr-jobs/" >	HR</Link></li>
          <li><Link to="/Australia/student/" >	Student</Link></li>
          <li><Link to="/Australia/indigenous/">Indigenous</Link></li>
          <li><Link to="/Australia/graduate/">Graduate</Link></li>
          <li><Link to="/Australia/phd/">PhD</Link></li>
        </ul>
      </div>
      <div className=" mt-4 " >
        <ul className=" flex flex-wrap gap-4 items-center justify-center text-[#00aeef] ">
          <li><Link to="/online/" >	Online </Link></li>
          <li><Link to="/jobs/remote/" >	Remote</Link></li>
          <li><Link to="/jobs/full-time/" >Full-Time</Link></li>
          <li><Link to="/jobs/part-time/" >	Part-Time</Link></li>
          <li><Link to="/jobs/casual/" >	Casual</Link></li>
        </ul>
      </div>
      <div className="text-[#00aeef]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6 ">
        <a href="#section" class="scroll-smooth md:scroll-auto">
          ▼
        </a>
      </div>
      <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]">
        <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#00aeef] text-white rounded-full font-bold text-2xl md:text-3xl lg:text-2xl shadow-xl ">Academic Jobs Australia</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Welcome to Australia's #1university jobs website.  You will find all the uni jobs in Australia right here. If you are a researcher, lecturer, professor, HR professional or administrator, you can seek jobs, find the best university jobs, and apply online for any job in your academic or professional field. </p>
              <div className="newLine">  <p className="px-7 pb-8"> Australia is home to some of the highest ranked universities and world-renowned academics.  The best academic careers start here at Academic Jobs.  Sign up for job alerts or post a job today.</p>
              </div>

              <p className="font-semibold"></p>
              <div className="  " >
                <ul className=" flex flex-wrap gap-6 px-7 pb-4  text-[#00aeef] ">
                  <li><Link to="/melbourne/" >	Melboune </Link></li>
                  <li><Link to="/sydney/" >	Sydney</Link></li>
                  <li><Link to="/brisbane/" >Brisbane</Link></li>
                  <li><Link to="/gold-coast/" >	Gold Coast</Link></li>
                  <li><Link to="/canberra/" >	Canberra</Link></li>
                  <li><Link to="/perth/" >	Perth</Link></li>
                  <li><Link to="/adelaide/" >	Adelaide</Link></li>
                </ul>
              </div>
              <div className="  flex flex-wrap gap-6 px-7 pb-4 text-gray-400" >
                <Link to="/Australia/faq/" >	Aus FAQ</Link>
                <Link to="/groupof8/" >	Group Of 8</Link> </div>
            </div>
          </div>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl  shadow-md">Top Australian Universities To Work For</h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 pb-8">
                <div className="column">
                  <ul className="">
                    <li className='mb-1 mt-4'><Link to="/employers/queensland-university-of-technology-qut-/3786/" className='text-[#003463] font-bold'>Queensland University of Technology (QUT)</Link></li>
                    <ul className="innerUL">
                      <li><Link to="/jobs/QUT-lecturer/" >QUT Lecturing Jobs</Link></li>
                      <li><Link to="/jobs/QUT-research/" >QUT Research Jobs</Link></li>
                      <li><Link to="/jobs/QUT-professor/" >QUT Professorial Jobs</Link></li>
                      <li><Link to="/jobs/QUT-Executive/" >QUT Executive</Link></li>
                      <li><Link to="/jobs/QUT-Administration/" >QUT Administration</Link></li>
                      <li><Link to="/jobs/QUT-Human-Resources/" >QUT Human Resources</Link></li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className='mb-1 mt-4'><Link to="/employers/bond-university/3785/" className='text-[#f1b821] font-bold'>Bond University</Link></li>
                    <ul className="innerUL">
                      <li><Link to="/jobs/bond-lecturer/" >Bond Lecturing Jobs</Link></li>
                      <li><Link to="/jobs/bond-research/" >Bond Research Jobs</Link></li>
                      <li><Link to="/jobs/bond-professor/" >Bond Professorial Jobs</Link></li>
                      <li><Link to="/jobs/bond-Executive/" >Bond Executive</Link></li>
                      <li><Link to="/jobs/bond-Administration/" >Bond Administration</Link></li>
                      <li><Link to="/jobs/bond-Human-Resources/" >Bond Human Resources</Link></li>
                    </ul>
                  </ul>
                </div>
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
                    <li className='mb-1 mt-4'><Link to="/employers/university-of-western-australia/3173/" className='text-[#192847] font-bold'>University of Western Australia</Link></li>
                    <ul className="innerUL">
                      <li><Link to="/jobs/western/" >UWA Lecturing Jobs</Link></li>
                      <li><Link to="/jobs/western/" >UWA Research Jobs</Link></li>
                      <li><Link to="/jobs/western/" >UWA Professorial Jobs</Link></li>
                      <li><Link to="/jobs/western/" >UWA Executive</Link></li>
                      <li><Link to="/jobs/western/" >UWA Administration</Link></li>
                      <li><Link to="/jobs/western/" >UWA Human Resources</Link></li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#00aeef] border-2  text-[#00aeef] rounded-3xl shadow-md">Academic Jobs Australia: All University Jobs</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/act/" className='text-[#00aeef] font-bold'>ACT</Link></li>
                    <li><Link to="/employers/australian-national-university/3739/">Australian National
                      University</Link></li>
                    <li><Link to="/employers/university-of-canberra/3821/">University of Canberra</Link>
                    </li>
                    <li className='mb-1 '><Link to="/jobs/new-south-wales/" className='text-[#00aeef] font-bold'>New South Wales</Link></li>
                    <li><Link to="/employers/the-university-of-sydney/3171/">The
                      University of Sydney</Link></li>
                    <li><Link to="/employers/university-of-new-south-wales/3738/">University of New
                      South Wales</Link></li>
                    <li><Link to="/employers/charles-sturt-university/3855/">Charles Sturt University</Link>
                    </li>
                    <li><Link to="/employers/australian-catholic-university/3853/" >Australian Catholic
                      University</Link></li>
                    <li><Link to="/employers/southern-cross-university/3862/">Southern Cross
                      University</Link></li>
                    <li><Link to="/employers/university-of-technology-sydney/3864/">University of
                      Technology, Sydney</Link></li>
                    <li><Link to="/employers/macquarie-university/3881/">Macquarie
                      University</Link>
                    </li>
                    <li><Link to="/employers/university-of-new-england/3209/">University of New England
                    </Link></li>
                    <li><Link to="/employers/university-of-newcastle/3863/">University of Newcastle</Link>
                    </li>
                    <li><Link to="/employers/university-of-western-sydney/3865/">University of Western
                      Sydney</Link></li>
                    <li><Link to="/employers/university-of-wollongong/3866/">University of Wollongong</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/victoria/" className='text-[#00aeef] font-bold'>Victoria</Link></li>
                    <li><Link to="/employers/university-of-melbourne/3170/
                                        ">The University of Melbourne</Link>
                    </li>
                    <li><Link to="/employers/monash-university/3182/
                                        ">Monash University</Link>
                    </li>
                    <li><Link to="/employers/victoria-university/3871/
                                    ">Victoria University</Link>
                    </li>
                    <li><Link to="/employers/university-of-divinity/3872/
                                    ">University of Divinity</Link>
                    </li>
                    <li><Link to="/employers/swimburne-university-of-technology/10541/
                                    ">Swinburne University of Technology</Link>
                    </li>
                    <li><Link to="/employers/rmit-university/3869/
                                    ">RMIT University</Link>
                    </li>
                    <li><Link to="/employers/la-trobe-university/3868/
                                    ">La Trobe University</Link>
                    </li>
                    <li><Link to="/employers/deakin-university/3856/
                                    ">Deakin University</Link>
                    </li>
                    <li><Link to="/employers/federation-university/3787/
                                    ">Federation University Australia</Link></li>
                    <li className='mb-1 '><Link to="/jobs/tasmania/" className='text-[#00aeef] font-bold'>Tasmania</Link></li>
                    <li><Link to="h/employers/university-of-tasmania/3867/
                                    ">The University of Tasmania</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/queensland/" className='text-[#00aeef] font-bold'>Queensland</Link></li>
                    <li className='text-[#003463] '><Link to="/employers/queensland-university-of-technology-qut-/3786/">Queensland
                      University of Technology (QUT)</Link>
                    </li>
                    <li className=''><Link to="/employers/bond-university/3785/
                                    ">Bond University</Link></li>
                    <li><Link to="/employers/university-of-queensland/3172/">The
                      University of Queensland</Link></li>
                    <li><Link to="/employers/cquniversity/3854/">CQUniversity</Link>
                    </li>
                    <li><Link to="/employers/griffith-university/3860/">Griffith
                      University</Link>
                    </li>
                    <li><Link to="/employers/james-cook-university/3857/">James
                      Cook University</Link>
                    </li>
                    <li><Link to="/employers/university-of-southern-queensland/3861/">University of
                      Southern Queensland</Link>
                    </li>
                    <li><Link to="/employers/university-of-sunshine-coast/3859/">University of Sunshine
                      Coast</Link></li>
                    <li className='mb-1 '><Link to="/jobs/northern-territory/" className='text-[#00aeef] font-bold'>Northern
                      Territory</Link></li>
                    <li><Link to="/employers/charles-darwin-university/3880/">Charles Darwin
                      University</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/south-australia/" className='text-[#00aeef] font-bold'>South
                      Australia</Link></li>
                    <li><Link to="/employers/the-university-of-adelaide/3737/">The
                      University of Adelaide</Link>
                    </li>
                    <li><Link to="/employers/carnegie-mellon-university/3146/">Carnegie Mellon
                      University</Link> </li>
                    <li><Link to="/employers/torrens-university-australia/3875/">Torrens University
                      Australia</Link></li>
                    <li><Link to="/employers/university-of-south-australia/3874/">University of South
                      Australia</Link></li>
                    <li><Link to="/employers/flinders-university/3873/">Flinders
                      University</Link>
                    </li>
                    <li className='mb-1 '><Link to="/jobs/western-australia/" className='text-[#00aeef] font-bold'>Western
                      Australia</Link></li>
                    <li><Link to="/employers/university-of-western-australia/3173/">The University of
                      Western Australia</Link></li>
                    <li><Link to="/employers/university-of-notre-dame/3879/">University of Notre Dame</Link>
                    </li>
                    <li><Link to="/employers/murdoch-university/3878/">Murdoch
                      University</Link>
                    </li>
                    <li><Link to="/employers/edith-cowan-university/3877/">Edith
                      Cowan University</Link>
                    </li>
                    <li><Link to="/employers/curtin-university/3876/">Curtin
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
export default Australia