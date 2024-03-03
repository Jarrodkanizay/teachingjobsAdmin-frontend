import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const USA = () => {  window.location.replace("https://www.academicjobs.com/usa");
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(setRegion('USA'))
  }, []);
  return (
    <div>
      <Helmet>
        <title>USA Academic Jobs Online </title>
        <meta name="description" content="Search for academic jobs in USA colleges and apply to the top universities and institutions at USA college jobs with faculty, postdoc or staff roles and more." />
        <meta name="keywords" content="Academic Jobs Online. USA Academic Jobs Online, academic jobs in USA, USA college jobs" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-us-min.png"
          alt="AcademicJobs USA"
          className=" w-[20rem] mb-[1rem] "
        />
      </div>
      <SearchBox />
      <div className=" mt-[10rem] " >
        <ul className=" flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <li><Link to="/boston/" >	Boston </Link></li>
          <li><Link to="/new-York/" >	New York</Link></li>
          <li><Link to="/philadelphia/" >Philadelphia</Link></li>
          <li><Link to="/new-haven/" >	New Haven</Link></li>
          <li><Link to="/los-angeles/" >Los Angeles	</Link></li>
          <li><Link to="/san-francisco/" >	San Francisco</Link></li>
          <li><Link to="/chicago/" >	Chicago</Link></li>
        </ul>
      </div>
      <div className=" mt-[1rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#00aeef] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link to="/USA/lecturer/" >	Lecturer</Link></li>
            <li><Link to="/USA/research/" >	Research </Link></li>
            <li><Link to="/USA/professor/" >	Professor</Link></li>
            <li><Link to="/USA/faculty/" >	Faculty</Link></li>
          </ul>
          <li><Link to="/USA/executive/" >	Executive</Link></li>
          <li><Link to="/USA/admin/" >Admin</Link></li>
          <li><Link to="/USA/hr-jobs/" >	HR</Link></li>
          <li><Link to="/USA/student/" >	Student</Link></li>
          <li><Link to="/USA/graduate/">Graduate</Link></li>
          <li><Link to="/USA/phd/">PhD</Link></li>
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
          <div className="blurb text-left py-8 mt-[30rem]">
            <h1 className="py-3 px-7 bg-[#00aeef] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl ">USA Academic Jobs Online</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">On Academic Jobs Online find all University Positions in the USA. We have all academic jobs online job for researchers, scientists, university staff, lecturers, professors, and researchers.
                Find academic jobs in USA colleges and apply to the top universities and institutions with faculty, postdoc or staff roles and more.</p>
              <div className="  px-7 pb-8 text-gray-400" >
                <Link to="/USA/faq/" >	USA FAQ</Link>
                <Link to="/ivyleague/" >	Ivy League</Link> </div>
              <p className="font-semibold"></p>
            </div>
          </div>
          <h2 className="text-1xl font-bold py-3 px-7 border-[#00aeef] border-2  text-[#00aeef] rounded-3xl shadow-md ">USA Academic Jobs Online: Academia Jobs by University </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
            <ul>
              <li className='mb-1 '><Link to="/jobs/california/" className='text-[#00aeef] font-bold'>California</Link></li>
              <li><Link to="/employers/stanford-university/3101/">Stanford University</Link></li>
              <li><Link to="/employers/california-institute/4133/">California Institute
                of Technology</Link></li>
              <li><Link to="/employers/university-of-california-san-francisco/3683/">University
                of California - San Francisco</Link></li>
              <li><Link to="/employers/university-of-southern-california/3672/">University
                of Southern California</Link></li>
              <li><Link to="/employers/university-of-california-berkeley/3105/">University
                of California - Berkeley</Link></li>
              <li><Link to="/employers/university-of-california-los-angeles/3136/">University
                of California - Los Angeles</Link></li>
              <li><Link to="/employers/university-of-california-san-diego/3149/">University
                of California - San Diego</Link></li>
              <li><Link to="/employers/university-of-california-davis/3498/">University
                of California - Davis</Link></li>
              <li><Link to="/employers/university-of-california-irvine/3689/">University
                of California - Irvine</Link></li>
              <li><Link to="/employers/university-of-california-santa-barbara/5407/">University
                of California - Santa Barbara</Link></li>
              <li><Link to="/employers/university-of-california-santa-cruz/3252/">University
                of California - Santa Cruz</Link></li>
              <li><Link to="/employers/university-of-california-Rrverside/3268/">University
                of California - Riverside</Link></li>
              <li><Link to="/employers/california-state-university-stanislaus/3414/">California
                State University Stanislaus</Link></li>
              <li><Link to="/employers/cal-poly-pomona/3728/">Cal Poly Pomona</Link></li>
              <li><Link to="/employers/california-state-university-monterey-bay/3313/">California
                State University, Monterey Bay</Link></li>
              <li><Link to="/employers/caltech/3128/">Caltech</Link>
              </li>
              <li><Link to="/employers/grossmont-cuyamaca-community-college-district/3858/">Grossmont–Cuyamaca
                Community College District</Link></li>
              <li><Link to="/employers/northeastern-university/3285/">Northeastern
                University</Link>
              </li>
              <li><Link to="/employers/loyola-marymount-university/3637/">Loyola
                Marymount University</Link></li>
              <li><Link to="/employers/palomar-college/3612/">Palomar College</Link></li>
              <li><Link to="/employers/san-diego-state-university/3693/">San Diego State
                University</Link></li>
              <li><Link to="/employers/saint-mary-s-college-of-california/3729/">Saint
                Mary's College of California</Link></li>
              <li><Link to="/employers/university-of-california-office-of-the-president/3731/">University
                of California Office of the President</Link></li>
            </ul>
            <ul>
              <li className='mb-1 '><Link to="/jobs/massachusetts/" className='text-[#00aeef] font-bold'>Massachusetts</Link></li>
              <li><Link to="/employers/massachusetts-institute-of-technology/3103/">Massachusetts
                Institute of Technology</Link></li>
              <li><Link to="/employers/harvard-university/3100/">Harvard University</Link>
              </li>
              <li><Link to="/employers/boston-university/3190/">Boston University</Link>
              </li>
              <li><Link to="/employers/boston-college/3604/">Boston College</Link>
              </li>
              <li><Link to="/employers/tufts-university/3460/">Tufts University</Link>
              </li>
              <li><Link to="/employers/northeastern-university/3285/">Northeastern
                University</Link>
              </li>
              <li><Link to="/employers/brandeis-university/3617/">Brandeis
                University</Link></li>
              <li><Link to="/employers/anna-jaques-hospital/3235/">Anna Jaques
                Hospital</Link></li>
              <li><Link to="/employers/dana-farber-cancer-institute/3108/">Dana-Farber
                Cancer Institute</Link></li>
              <li className='mb-1 '><Link to="/jobs/georgia/" className='text-[#00aeef] font-bold'>Georgia</Link></li>
              <li><Link to="/employers/emory-university/3372/">Emory University</Link>
              </li>
              <li><Link to="/employers/georgia-institute-of-technology/3154/">Georgia
                Institute of Technology</Link></li>
              <li className='mb-1 '><Link to="/jobs/florida/" className='text-[#00aeef] font-bold'>Florida</Link></li>
              <li><Link to="/employers/university-of-miami/5475/">University of
                Miami</Link>
              </li>
              <li><Link to="/employers/miami-university/3350/">Miami University</Link>
              </li>
              <li><Link to="/employers/university-of-florida/3394/">University of
                Florida</Link>
              </li>
              <li className='mb-1 '><Link to="/jobs/north-carolina/" className='text-[#00aeef] font-bold'>North
                Carolina</Link></li>
              <li><Link to="/employers/duke-university/3139/">Duke University</Link>
              </li>
              <li><Link to="/employers/university-of-north-carolina/5503/">University of
                North Carolina</Link>
              </li>
              <li><Link to="/employers/the-university-of-north-carolina-at-chapel-hill/3679/">University
                of North Carolina at Chapel Hill</Link>
              </li>
              <li><Link to="/employers/university-of-north-carolina-wilmington/3253/">University
                of North Carolina Wilmington</Link>
              </li>
            </ul>
            <ul>
              <li className='mb-1 '><Link to="/jobs/new-york/" className='text-[#00aeef] font-bold'>New york</Link></li>
              <li><Link to="/employers/columbia-university/3127/">Columbia University</Link></li>
              <li><Link to="/employers/new-york-university-nyu/3144/">New York
                University NYU</Link></li>
              <li><Link to="/employers/Cornell-University/3138/">Cornell University</Link>
              </li>
              <li><Link to="/employers/Brown-University/3308/">Brown University</Link>
              </li>
              <li><Link to="/employers/University-of-Rochester/5527/
                                                            ">University of Rochester</Link></li>
              <li><Link to="/employers/fordham-university/3685/">Fordham University</Link>
              </li>
              <li><Link to="/employers/hofstra-university/3545/">Hofstra University</Link>
              </li>
              <li><Link to="/employers/princeton-university/3104/">Princeton
                University</Link>
              </li>
              <li><Link to="/employers/rutgers-the-state-university-of-new-jersey/3255/">Rutgers,
                The State University of New Jersey</Link>
              </li>
              <li><Link to="/employers/st-john-s-university/3375/">St. John's
                University</Link>
              </li>
              <li><Link to="/employers/stony-brook-university/3456/">Stony Brook
                University</Link>
              </li>
              <li><Link to="/employers/university-at-buffalo/3609/
                                        "> University at Buffalo</Link></li>
              <li className='mb-1 '><Link to="/jobs/pennsylvania/" className='text-[#00aeef] font-bold'>Pennsylvania</Link></li>
              <li><Link to="/employers/university-of-pennsylvania/3131/
                                                            ">University of Pennsylvania</Link>
              </li>
              <li><Link to="/employers/carnegie-mellon-university/3146/
                                                            ">Carnegie Mellon University</Link>
              </li>
              <li><Link to="/employers/bucknell-university/3309/
                                            ">Bucknell University</Link>
              </li>
              <li><Link to="/employers/duquesne-university/3330/
                            ">Duquesne University</Link>
              </li>
              <li className='mb-1 '><Link to="/jobs/illinois/" className='text-[#00aeef] font-bold'>Illinois</Link></li>
              <li><Link to="/employers/University-of-Chicago/3126/
                                                            ">University of Chicago</Link></li>
              <li><Link to="/employers/Northwestern-University/3143/
                                                            ">Northwestern University</Link></li>
              <li><Link to="/employers/northern-illinois-university/3415/
                                                                ">Northern Illinois University</Link></li>
              <li><Link to="/employers/university-of-illinois-at-urbana-champaign/3164/
                                                                ">University of Illinois at Urbana-Champaign</Link></li>
              <li className='mb-1 '><Link to="/jobs/michigan/" className='text-[#00aeef] font-bold'>Michigan</Link></li>
              <li><Link to="/employers/university-of-michigan/3142/
                                                                    ">University of Michigan</Link></li>
              <li><Link to="/employers/michigan-state-university/3654/
                                                                        ">Michigan State University</Link></li>
              <li><Link to="/employers/wayne-state-university/3499/
                                                                            "> Wayne State University</Link></li>
            </ul>
            <ul>
              <li className='mb-1 '><Link to="/jobs/usa/" className='text-[#00aeef] font-bold'>All States</Link></li>
              <li><Link to="/employers/yale-university/3125/">Yale University</Link>
              </li>
              <li><Link to="/employers/university-of-washington/3145/
                                            ">University of Washington</Link></li>
              <li><Link to="/employers/johns-hopkins-university/3130/
                                                            ">Johns Hopkins University</Link></li>
              <li><Link to="/employers/dartmouth-college/3327/">Dartmouth College</Link>
              </li>
              <li><Link to="/employers/rice-university/5067/">Rice University</Link>
              </li>
              <li><Link to="/employers/vanderbilt-university/5603/
                                                            ">Vanderbilt University</Link></li>
              <li><Link to="/employers/washington-university-in-st-louis/3655/
                                                            ">Washington University in St. Louis</Link></li>
              <li><Link to="/employers/university-of-notre-dame/3879/
                                                            ">University of Notre Dame</Link></li>
              <li><Link to="/employers/university-of-virginia/3484/
                                                            ">University of Virginia</Link></li>
              <li><Link to="/employers/georgetown-University/3522/
                                                            ">Georgetown University</Link></li>
              <li><Link to="/employers/university-of-texas-at-austin/3166/
                                                            ">University of Texas at Austin</Link></li>
              <li><Link to="/employers/university-of-wisconsin-madison/3404/
                                                            ">University of Wisconsin - Madison</Link></li>
              <li><Link to="/employers/university-of-mississippi-medical-center/3109/
                                                            ">University of Mississippi Medical Center</Link></li>
              <li><Link to="/employers/university-of-minnesota-twin-cities/3684/
                                                                ">University of Minnesota Twin Cities</Link></li>
              <li><Link to="/employers/the-ohio-state-university/3669/
                                                                    "> The Ohio State University</Link></li>
              <li><Link to="/employers/university-of-cincinnati/3393/
                                                                        "> University of Cincinnati</Link></li>
              <li><Link to="/employers/university-of-tennessee-knoxville/3401/
                                                                        "> University of Tennessee, Knoxville</Link></li>
              <li><Link to="/employers/university-of-alabama-at-birmingham/3387/
                                                                                "> University of Alabama at
                Birmingham</Link></li>
              <li><Link to="/employers/indiana-university-purdue-university-indianapolis/3658/
                                                                                            "> Indiana University
                Purdue University Indianapolis</Link></li>
              <li><Link to="/employers/the-university-of-iowa/3483/
                                                                                                "> The University of
                Iowa</Link></li>
              <li><Link to="/employers/university-of-kentucky/3510/
                                                                                                    "> University of
                Kentucky</Link></li>
              <li><Link to="/employers/oregon-state-university/3813/
                                                                                                        "> Oregon State
                University</Link>
              </li>
              <li><Link to="/employers/university-of-nebraska-medical-center/3712/
                                                                                                            ">
                University of Nebraska Medical Center</Link></li>
              <li><Link to="/employers/washington-state-university/3722/
                                                                                                                ">
                Washington State University</Link></li>
              <li><Link to="/employers/university-of-maryland-baltimore-county/3775/
                                                                                                                    ">
                University of Maryland, Baltimore County</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default USA