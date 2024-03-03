import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


import SearchResults from './SearchResults'
import JobDetail from './JobDetail'
import SingleQA from './SingleQA'
import { Helmet } from "react-helmet";
const GroupOf8 = () => {  window.location.replace("https://www.academicjobs.com/group-of-8");
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
        <meta name="description" content="I’m sorry, but I could not find any information about a “Group of 8” in the context of job boards. However, if you are referring to the Group of Eight (Go8), it is a coalition of eight leading research-intensive universities in Australia. The Go8 is committed to promoting world-class research and education, contributing to economic prosperity and innovation, and civic responsibility." />
        <meta name="keywords" content="Find Universities. Find employers, Find institutions" />
      </Helmet>

      <div className=' max-w-screen-2xl mx-auto'>
      <div className="blurb text-left py-8 px-4">
        <h1 className="text-3xl font-bold py-4 px-7 bg-[#00aeef] text-white rounded-full shadow-xl">Group of 8 (Go8)</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>

        <div className="newLine">
        <div  className="bg-gradient-to-b to-white from-orange-300 p-4 rounded-3xl">
          <p className="px-7 pb-8">The Group of Eight (Go8) is a coalition of eight leading research-intensive universities in Australia1. The Go8 universities are committed to providing high-quality education and research opportunities to students and faculty alike. They are known for their world-class research facilities, cutting-edge technology, and innovative teaching methods. The Go8 universities are responsible for supporting over 50,000 jobs and contributing $17.98 billion to the Australian economy through international student markets. They receive over 70% of Australian Competitive Grant funding and have the largest proportion of research fields rated at 4 or 5 (‘above’ or ‘well above’ world standard in the latest Excellence for Research Australia (ERA) exercise). The Go8 universities are also involved in various research collaborations with other universities and research institutions around the world. If you are looking for a job in academia, the Go8 universities are an excellent place to start your search.</p>
          <p className="font-semibold"></p>
         
          <div className="newLine">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 ">
          <ul>
        <li><Link to="/employers/university-of-melbourne/3170/" className="text-blue-500">The University of Melbourne</Link></li>
            <li><Link to="/employers/australian-national-university/3739/" className="text-blue-500" > The Australian National University (ANU)</Link></li>
            <li><Link to="/employers/the-university-of-sydney/3171/" className="text-blue-500">The University of Sydney</Link></li>
            <li><Link to="/employers/university-of-queensland/3172/" className="text-blue-500">The University of Queensland</Link></li>
            <li><Link to="/employers/university-of-western-australia/3173/" className="text-blue-500">The University of Western Australia</Link></li>
            <li><Link to="/employers/the-university-of-adelaide/3737/" className="text-blue-500">The University of Adelaide</Link></li>
            <li><Link to="/employers/monash-university/3182/" className="text-blue-500">Monash University</Link></li>
            <li><Link to="/employers/university-of-new-south-wales/3738/" className="text-blue-500">University of New South Wales (UNSW)</Link></li>
            </ul>
          </div>
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



      <SearchResults q={{ q: "" , l: "australia"  || 0 }} />
    </div> 

    
    
  )
}
export default GroupOf8