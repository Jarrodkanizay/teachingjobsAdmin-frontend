import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { Helmet } from "react-helmet";
const Rankings = () => {  window.location.replace("https://www.academicjobs.com/employers");
  const navigate = useNavigate()
  return (
    <div className='w-full h-full'>
      <Helmet>
        <title> Academic Rankings</title>
        <meta name="description" content="Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, USA, or anywhere else, we have the information you need to make an informed decision." />
        <meta name="keywords" content="Find Universities. Find Employers, Find institutions" />
      </Helmet>
      <div className="blurb text-left py-8">
        <h1 className="text-2xl font-bold py-3 px-7 bg-[#00aeef] text-white rounded-3xl">FIND ACADEMIC JOB VACANCIES BY UNIVERSITY AND COLLEGE</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <p className="px-7 pb-8">On AcademicJobs explore higher ed career opportunities at universities worldwide. The find employers page helps you to learn more about the academic jobs that interest you and their current job openings. You can view the employer’s profile, which includes information such as their mission, vision, values, history, achievements, and culture. Find your dream academic job online at the university of your choice with AcademicJobs.</p>
          <p className=""> </p>
        </div>
      </div>
      <h2 className="text-1xl font-bold py-1 px-7 bg-[#00aeef] text-white rounded-3xl mt-10 ">The University Rankings/ Top Academic Careers</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container flex flex-col  gap-4 py-2 px-7 gap-x-4">
            <div className="column">
              <ul className=" gap-x-4">
                <ul className="flex flex-col  gap-4 ">
                  <li><Link to="/employers/harvard-university/3100/" >Harvard University</Link></li>
                  <li><Link to="/employers/stanford-university/3101/" >	Stanford University</Link></li>
                  <li><Link to="/employers/university-of-cambridge/12635/" >	University of Cambridge</Link></li>
                  <li><Link to="/employers/massachusetts-institute-of-technology/3103/" >Massachusetts Institute of Technology (MIT)</Link></li>
                  <li><Link to="/employers/university-of-california-berkeley/3105/" >	University of California, Berkeley</Link></li>
                  <li><Link to="/employers/princeton-university/3104/" >	Princeton University</Link></li>
                  <li><Link to="/employers/university-of-oxford/3099/" >	University of Oxford</Link></li>
                  <li><Link to="/employers/columbia-university/3127/" >	Columbia University</Link></li>
                  <li><Link to="/employers/caltech/3128/" >Caltech</Link></li>
                  <li><Link to="/employers/University-of-Chicago/3126/" >	University of Chicago</Link></li>
                  <li><Link to="/employers/yale-university/3125/" >	Yale University</Link></li>
                  <li><Link to="/employers/Cornell-University/3138/" >Cornell University</Link></li>
                  <li><Link to="/employers/university-of-california-los-angeles/3136/" >UCLA</Link></li>
                  <li><Link to="/employers/university-of-pennsylvania/3131/" >University of Pennsylvania (UPenn)</Link></li>
                  <li><Link to="/employers/johns-hopkins-university/3130/" >Johns Hopkins University (JHU)</Link></li>
                  <li><Link to="/employers/university-college-london/12527/" >University College London (UCL)</Link></li>
                  <li><Link to="/employers/eth-zurich/3132/" >ETH Zurich</Link></li>
                  <li><Link to="/employers/university-of-tokyo/3155/" >The University of Tokyo (UTokyo)</Link></li>
                  <li><Link to="/employers/new-york-university-nyu/3144/" >New York University (NYU)</Link></li>
                  <li><Link to="/employers/duke-university/3139/" >	Duke University (Duke)</Link></li>
                  <li><Link to="/employers/national-university-of-singapore/3137/" >	National University of Singapore (NUS)</Link></li>
                  <li><Link to="/employers/peking-university/3133/" >	Peking University</Link></li>
                  <li><Link to="/employers/university-of-melbourne/3170/" >University of Melbourne</Link></li>
                  <li><Link to="/employers/university-of-new-south-wales/3738/" >	University of New South Wales (UNSW Sydney)</Link></li>
                  <li><Link to="/employers/the-university-of-sydney/3171/" >	University of Sydney</Link></li>
                  <li><Link to="/employers/university-of-toronto//3134/" >	University of Toronto</Link></li>
                  <li><Link to="/employers/nanyang-technological-university-singapore/3152/" >	Nanyang Technological University, Singapore (NTU) Singapore</Link></li>
                  <li><Link to="/employers/paris-sciences-et-lettres/3163/" >Universite PSL (Paris Sciences & Lettres) France</Link></li>
                  <li><Link to="/employers/tsinghua-university/3840/" >	Tsinghua University Mainland China</Link></li>
                  <li><Link to="/employers/university-of-edinburgh/12681/" >	University of Edinburgh</Link></li>
                  <li><Link to="/employers/australian-national-university/3739/" >Australian National University Australia</Link></li>
                  <li><Link to="/employers/university-of-hong-kong/3148/" >University of Hong Kong (UKU) Hong Kong SAR</Link></li>
                  <li><Link to="/employers/mcgill-university/3162/" > McGill University Canada</Link></li>
                  <li><Link to="/employers/ecole-polytechnique/3158/" >Ecole Polytechnique Federale de Lausanne (EPFL) Switzerland</Link></li>
                  <li><Link to="/employers/seoul-national-university/10119/" >Seoul National University South Korea</Link></li>
                  <li><Link to="/employers/chinese-university-of-hong-kong/3161/" >The Chinese University of Hong Kong (CUHK) Hong Kong SAR</Link></li>
                  <li><Link to="/employers/the-hong-kong-university-of-science-and-technology/3843/" >The Hong Kong University of Science and Technology</Link></li>
                  <li><Link to="/employers/karolinska-institute/3165/" >	Karolinska Institute</Link></li>
                  <li><Link to="/employers/georgia-institute-of-technology/3154/" >Georgia Institute of Technology (Georgia Tech)</Link></li>
                  <li><Link to="/employers/carnegie-mellon-university/3146/" >	Carnegie Mellon University </Link></li>
                  <li><Link to="/employers/monash-university/3182/" >	Monash University Australia</Link></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rankings