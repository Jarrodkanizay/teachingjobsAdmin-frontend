import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { Helmet } from "react-helmet";
const IvyLeague = () => {  window.location.replace("https://www.academicjobs.com/ivy-league");
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
        <meta name="description" content="The Ivy League is a group of eight prestigious private universities in the United States. These universities are Brown University, Columbia University, Cornell University, Dartmouth College, Harvard University, the University of Pennsylvania, Princeton University, and Yale University. The Ivy League is known for its selectivity and prestige, and all of its schools are highly competitive, admitting fewer than 1 in 10 applicants. While Ivy League colleges are expensive, they often provide generous financial aid packages. " />
        <meta name="keywords" content="Find Universities. Find employers, Find institutions" />
      </Helmet>

      <div className=' max-w-screen-2xl mx-auto'>
      <div className="blurb text-left py-8 px-4">
        <h1 className="text-3xl font-bold py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl">Ivy League</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>

        <div className="newLine">
        <div  className="bg-gradient-to-b to-white from-orange-300 p-4 rounded-3xl">
          <p className="px-7 pb-8">The Ivy League is a group of eight prestigious private colleges and universities in the United States, known for their academic excellence, rich history, and selective admissions process. The member institutions are Brown University, Columbia University, Cornell University, Dartmouth College, Harvard University, the University of Pennsylvania, Princeton University, and Yale University. These universities are considered some of the most prestigious universities, not just in the US, but globally.

The Ivy League was originally an athletic conference, a body of sports teams playing competitively in a league against opposing teams. These eight American universities were known for their highly competitive sports programmes, and as they continued to perform well in the athletic world, they began to attract further funding, grants and top lecturers from around the globe. As a result, the institutions soon gained a reputation for academic achievement alongside sporting success.</p>
          <p className="font-semibold"></p>


        
        <div className="newLine">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 ">
        <ul>
        <li><Link to="/employers/harvard-university/3100/" className="text-blue-500">Harvard University</Link></li>
            <li><Link to="/employers/yale-university/3125/" className="text-blue-500">Yale University</Link></li>
            <li><Link to="/employers/university-of-pennsylvania/3131/" className="text-blue-500">University of Pennsylvania</Link></li>
            <li><Link to="/employers/columbia-university/3127/" className="text-blue-500">Columbia University</Link></li>
            <li><Link to="/employers/Cornell-University/3138/" className="text-blue-500">Cornell University</Link></li>
            <li><Link to="/employers/princeton-university/3104/" className="text-blue-500">Princeton University</Link></li>
            <li><Link to="/employers/dartmouth-college/3327/" className="text-blue-500">Dartmouth College</Link></li>
            <li><Link to="/employers/Brown-University/3308/" className="text-blue-500">Brown University</Link></li>
            </ul>
        </div>
      </div>
      </div>
      </div>
      

      
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



      <SearchResults q={{ q: "" , l: "usa"  || 0 }} />
    </div> </div>
    
  )
}
export default IvyLeague