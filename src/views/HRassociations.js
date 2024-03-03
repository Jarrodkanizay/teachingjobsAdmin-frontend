
import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from "react-helmet";

import admin from "../utils/admin.json";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'




const HRassociations = () => {  window.location.replace("https://www.academicjobs.com/hr-jobs");

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
        <title> Academic Jobs HR Associations </title>
        <meta name="description" content="Don’t miss this chance to work in one of the best academic environments in the world. Apply now for your dream academic job in Gold Coast! " />
        <meta name="keywords" content="Academic Jobs HR Associations, HR Associations AcademicJobs" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl ">Academic Jobs HR Associations</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
          <div className="py-4 px-7 rounded-2xl ">

            <p>The University of Adelaide, Flinders University, the University of South Australia provide a broad spectrum of academic programmes, spanning from business and law to science and engineering, health and medical, and the arts and humanities. To support their brilliance in research, teaching, and impact, you can become a member of their outstanding and cooperative academic communities.</p> </div>
          <div className="newLine mb-2"></div>


          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl  shadow-md">Higher Ed HR assocaitions</h2>
      <div className="cate-group section23 ">
        <div className="widget__text-block">
          <div className="faculty-container grid-cols-1 grid md:grid-cols-2 gap-4 py-2 px-7 pb-8">
          <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><a className='text-[#A51C30] font-bold'>Austrlia</a></li>
                <ul className="innerUL">
                  <li><Link to="https://aheia.edu.au/" >Australian higher education industrial association </Link></li>
                  <li><Link to="https://www.herdsa.org.au/educational-organisations-within-australia " >Higher Education Research and Development Society of Australasia</Link></li>
                  <li><Link to="https://www.acnc.gov.au/charity/charities/8616b6d6-2daf-e811-a95e-000d3ad24c60/profile" >Australian Charities and Not-for-profits Commission</Link></li>
                  <li><Link to="https://www.ieaa.org.au/" >International Education Association of Australia</Link></li>
                  <li><Link to="https://www.naauc.edu.au/" >National Association Of Australian University Colleges </Link></li>
                  <li><Link to="https://www.teqsa.gov.au/" >Tertiary Education Quality and Standards Agency</Link></li>
                  <li><Link to="https://www.association-of-australian-university-secretaries.org/" >Association of Australian University Secretaries  </Link></li>
                  <li><Link to="https://iru.edu.au/" >Innovative Research Universities </Link></li>
                  <li><Link to="https://atn.edu.au/" >Australian Technology Network of Universities </Link></li>
                  <li><Link to="https://www.education.gov.au/" >Department of Education </Link></li>
                  <li><Link to="https://www.asqa.gov.au/" >Australian Skills Quality Authority </Link></li>
                  <li><Link to="https://universitiesaustralia.edu.au/about/who-we-are/" >Universities Australia</Link></li>
                  <li><Link to="https://ihea.edu.au/" >Independent Higher Education Australia </Link></li>
                </ul>
              </ul>
            </div>
            <div className="column">
              <ul className="">
                <li className='mb-1 mt-4'><Link to="/employers/flinders-university/3873/" className='text-[#f1b821] font-bold'>USA</Link></li>
                <ul className="innerUL">
                  <li><Link to="https://www.aacu.org/" >The American Association of Colleges and Universities </Link></li>
                  <li><Link to="https://myacpa.org/" >ACPA</Link></li>
                  <li><Link to="https://www.acenet.edu/Pages/default.aspx" >American council on education </Link></li>
                  <li><Link to="https://www.aera.net/" >American Educational Research Association </Link></li>
                  <li><Link to="https://www.airweb.org/" >Association for Institutional Research </Link></li>
                  <li><Link to="https://www.ashe.ws/" >Association for the Study of Higher Education</Link></li>
                  <li><Link to="https://www.aau.edu/" >Association for American University</Link></li>
                  <li><Link to="https://www.nafsa.org/" >NAFSA: Association of International Educators</Link></li>
                  <li><Link to="https://www.aplu.org/" >Association of Public Land Grant Universities </Link></li>
                  <li><Link to="https://www.carnegiefoundation.org/" >Carnegie Foundation for the advancement of teaching</Link></li>
                  <li><Link to="https://www.hacu.net/hacu/default.asp" >Hispanic Association of Colleges and Universities </Link></li>
                  <li><Link to="https://www.studentaffairs.com/resources/websites/professional-associations/" >Student Affairs </Link></li>
                  <li><Link to="https://www.aahea.org/" >American Association for higher education </Link></li>
                  <li><Link to="https://higher-ed.org/orgs/" >Higher ed</Link></li>
                  <li><Link to="https://www.naspa.org/" >NASPA </Link></li>
                </ul>
              </ul>
            </div>
           
          
          </div>
        </div>
      </div>



      


  
    </div>
    </div>
     </div>

  );
};

export default HRassociations;