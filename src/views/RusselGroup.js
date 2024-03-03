import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


import SearchResults from './SearchResults'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { Helmet } from "react-helmet";
const RusselGroup = () => {  window.location.replace("https://www.academicjobs.com/russel-group");
  const navigate = useNavigate()
  const handleFormSubmit = (event) => {

    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: locationRef.current.value.trim() } });
  }

  const [page, setPage] = useState(0);
 
  const keyWordRef = useRef('')
  const locationRef = useRef('')
  return (



    <div className='max-w-screen-2xl mx-auto'>

      <Helmet>
        <title>Find Academic Employers</title>
        <meta name="description" content="The Russell Group is a consortium of 24 leading research-intensive universities in the United Kingdom. The group is committed to promoting world-class research and education, contributing to economic prosperity and innovation, and civic responsibility. " />
        <meta name="keywords" content="Find Universities. Find employers, Find institutions" />
      </Helmet>

      <div className=' max-w-screen-2xl mx-auto'>
      <div className="blurb text-left py-8 px-4">
        <h1 className="text-3xl font-bold py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl">Russel Group</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        

        <div className="newLine">
        <div  className="bg-gradient-to-b to-white from-orange-300 p-4 rounded-3xl">
          <p className="px-7 pb-8">The Russell Group is a consortium of 24 leading research-intensive universities in the United Kingdom. The group aims to ensure that higher education and research policy development is underpinned by a robust evidence base and a commitment to improving life chances, raising aspirations, contributing to economic prosperity and innovation, and to civic responsibility. The group provides strategy, policy development, intelligence, communications, and advocacy for its member institutions</p>
          <p className="font-semibold"></p>


        <div className="newLine">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 ">
          <ul>
        <li><Link to="/employers/university-of-cambridge/12635/" className="text-blue-500">University of Cambridge</Link></li>
            <li><Link to="/employers/university-of-oxford/3099/"className="text-blue-500" > University of Oxford</Link></li>
            <li><Link to="/employers/university-of-manchester/3833/" className="text-blue-500">University of Manchester</Link></li>
            <li><Link to="/employers/university-of-birmingham/12614/"className="text-blue-500" >University of Birmingham</Link></li>
            <li><Link to="/employers/university-college-london/12527/" className="text-blue-500">University College London, University of London</Link></li>
            <li><Link to="/employers/imperial-college-london/3129/"className="text-blue-500" >Imperial College London</Link></li>
            <li><Link to="/employers/london-school-of-economics-and-political-science/3153/"className="text-blue-500" >London School of Economics and Political Science</Link></li>
            <li><Link to="/employers/university-of-leeds/12797/"className="text-blue-500" >University of Leeds</Link></li>
            <li><Link to="/employers/king's-college-london/13540/"className="text-blue-500" >King's College London</Link></li>
            <li><Link to="/employers/durham-university/13541/"className="text-blue-500" >Durham University</Link></li>
            <li><Link to="/employers/university-of-bristol/13542/"className="text-blue-500" >University of Bristol</Link></li>
            <li><Link to="/employers/university-of-exeter/13543/"className="text-blue-500" >University of Exeter</Link></li>
            <li><Link to="/employers/university-of-liverpool/13544/"className="text-blue-500" >University of Liverpool</Link></li>
            <li><Link to="/employers/university-of-nottingham/13545/"className="text-blue-500" >University of Nottingham</Link></li>
            <li><Link to="/employers/queen-mary-university-of-london/13546/"className="text-blue-500" >Queen Mary University of London</Link></li>
            <li><Link to="/employers/university-of-sheffield/13547/"className="text-blue-500" >University of Sheffield</Link></li>
            <li><Link to="/employers/university-of-southampton/13548/"className="text-blue-500" >University of Southampton</Link></li>
            <li><Link to="/employers/university-of-warwick/13549/"className="text-blue-500" >University of Warwick</Link></li>  
            <li><Link to="/employers/university-of-york/13550/"className="text-blue-500" >University of York</Link></li> 
            <li><Link to="/employers/university-of-newcastle/13551/"className="text-blue-500" >University of Newcastle</Link></li> 
            <li><Link to="/employers/university-of-edinburgh/12681/"className="text-blue-500" >University of Edinburgh</Link></li> 
            <li><Link to="/employers/university-of-glasgow/12713/"className="text-blue-500" >University of Glasgow</Link></li> 
            <li><Link to="/employers/cardiff-university/6252/"className="text-blue-500" >Cardiff University</Link></li> 
            <li><Link to="/employers/queens-university-belfast/10799/"className="text-blue-500" >The Queen's University Belfast</Link></li>

         </ul>
        </div>
      </div>
      </div> </div>

      
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



      <SearchResults q={{ q: "" , l: "uk"  || 0 }} />
    </div> </div>
    
  )
}
export default RusselGroup