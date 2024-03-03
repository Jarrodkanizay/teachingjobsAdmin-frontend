import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const Africa = () => {  window.location.replace("https://www.academicjobs.com/africa");
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Africa</title>
        <meta name="description" content="Find your dream academic job in Africa and join the leading universities at Africa university jobs with professor, researcher or manager roles." />
        <meta name="keywords" content="Academic Jobs Africa, academic jobs in Africa, Africa university jobs" />
      </Helmet>

      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-africa-min.png"

          alt="AcademicJobs Africa"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <SearchBox />

      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link to="/Africa/lecturer/" >	Lecturer</Link></li>
            <li><Link to="/Africa/research/" >	Research </Link></li>
            <li><Link to="/Africa/professor/" >	Professor</Link></li>
            <li><Link to="/Africa/faculty/" >	Faculty</Link></li>
          </ul>
          <li><Link to="/Africa/executive/" >	Executive</Link></li>
          <li><Link to="/Africa/admin/" >Admin</Link></li>
          <li><Link to="/Africa/hr-jobs/" >	HR</Link></li>
          <li><Link to="/Africa/student/" >	Student</Link></li>
          <li><Link to="/Africa/graduate/" >	Graduate</Link></li>
          <li><Link to="/Africa/phd/" >	PhD</Link></li>

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
            <h1 className="py-3 px-7 bg-[#00aeef] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl shadow-xl">Academic Jobs Africa: The Best Uni Jobs</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Academic Jobs Africa is a platform that connects you with the best academic employers and candidates. You can browse through hundreds of job listings in various disciplines and fields, such as engineering, health sciences, humanities, social sciences, education, and more. You can also filter your search by country, region, institution type, salary range, and contract duration.</p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#00aeef] border-2  text-[#00aeef] rounded-3xl shadow-md  ">Academic Jobs Africa University List</h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                <ul>
                  <li className='mb-1 '><Link to="/jobs/egypt/" className='text-[#00aeef] font-bold'>Egypt</Link></li>
                  <li><Link to="/employers/cairo-university/6226/">Cairo
                    University</Link>
                  </li>
                  <li><Link to="/employers/american-university-in-cairo/5798/">American
                    University in Cairo</Link>
                  </li>
                  <li><Link to="/employers/alexandria-university/5713/">Alexandria
                    University</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 '><Link to="/jobs/south-africa/" className='text-[#00aeef] font-bold'>South Africa</Link></li>
                  <li><Link to="/employers/university-of-cape-town/12637/">University of
                    Cape Town</Link></li>
                  <li><Link to="/employers/university-of-the-witwatersrand/13133/">University of
                    the Witwatersrand</Link></li>
                  <li><Link to="/employers/stellenbosch-university/13008/">Stellenbosch
                    University</Link></li>
                  <li><Link to="/employers/university-of-pretoria/12935/">University of
                    Pretoria</Link></li>
                  <li><Link to="/employers/12787/university-of-kwazulu-natal/">University of
                    KwaZulu-Natal</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 '><Link to="/jobs/nigeria/" className='text-[#00aeef] font-bold'>Nigeria</Link></li>
                  <li><Link to="/employers/university-of-ibadan/12743/">University of
                    Ibadan</Link>
                  </li>
                  <li><Link to="/employers/ahmadu-bello-university/6388/">Ahmadu Bello
                    University</Link></li>
                  <li><Link to="/employers/university-of-lagos/12789/">University of
                    Lagos</Link>
                  </li>
                  <li><Link to="/employers/obafemi-awolowo-university/9482/">Obafemi
                    Awolowo University</Link>
                  </li>
                  <li><Link to="/employers/university-of-nigeria-nsukka/12881/">University of
                    Nigeria, Nsukka</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 '><Link to="/jobs/kenya/" className='text-[#00aeef] font-bold'>Kenya</Link></li>
                  <li><Link to="/employers/university-of-nairobi/12866/">University of
                    Nairobi</Link>
                  </li>
                  <li><Link to="/employers/kenyatta-university/8470/">Kenyatta
                    University</Link>
                  </li>
                  <li><Link to="/employers/strathmore-university/10485/">Strathmore
                    University</Link>
                  </li>
                  <li><Link to="/employers/moi-university/9051/">Moi
                    University</Link>
                  </li>
                  <li><Link to="/employers/egerton-university/7048/">Egerton
                    University</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 '><Link to="/jobs/morocco/" className='text-[#00aeef] font-bold'>Morocco</Link></li>
                  <li><Link to="/employers/university-mohammed-v-of-rabat/12453/">University
                    Mohammed V of Rabat</Link></li>
                  <li><Link to="/employers/cadi-ayyad-university/12262/">Cadi Ayyad
                    University</Link>
                  </li>
                  <li><Link to="/employers/hassan-ii-university-of-casablanca/12426/">Hassan II
                    University of Casablanca</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 '><Link to="/jobs/ghana/" className='text-[#00aeef] font-bold'>Ghana</Link></li>
                  <li><Link to="/employers/university-of-ghana/12711/">University of
                    Ghana</Link>
                  </li>
                  <li><Link to="/employers/kwame-nkrumah-university-of-science-and-technology/8649/">Kwame Nkrumah
                    University of Science and Technology</Link>
                  </li>
                  <li><Link to="/employers/university-of-cape-coast/12636/">University of
                    Cape Coast</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 '><Link to="/jobs/senegal/" className='text-[#00aeef] font-bold'>Senegal</Link></li>
                  <li><Link to="/employers/cheikh-anta-diop-university/12272/">Cheikh Anta
                    Diop University</Link>
                  </li>
                </ul>
                <ul>
                  <li className='mb-1 '><Link to="/jobs/tunisia/" className='text-[#00aeef] font-bold'>Tunisia</Link></li>
                  <li><Link to="/employers/university-of-tunis-el-manar/12393/">University of
                    Tunis El Manar</Link>
                  </li>
                  <li><Link to="/employers/university-of-sfax/12370/">University of
                    Sfax</Link>
                  </li>
                  <li><Link to="/employers/university-of-carthage/12303/">University of
                    Carthage</Link></li>
                </ul>
                <ul>
                  <li className='mb-1 '><Link to="/jobs/uganda/" className='text-[#00aeef] font-bold'>Uganda</Link></li>
                  <li><Link to="/employers/makerere-university/8875/">Makerere
                    University</Link>
                  </li>
                  <li><Link to="/employers/uganda-martyrs-university/10962/">Uganda
                    Martyrs University</Link>
                  </li>
                  <li><Link to="/employers/kyambogo-university/8660/">Kyambogo
                    University</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Africa