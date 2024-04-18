import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Job from './Job'
import Modal from '../components/Modal'
import JobDetail from './JobDetail'
import { Link } from "react-router-dom";
import { setJob, setId, setEmployer } from '../store/postsSlice'
import { useNavigate } from 'react-router-dom';
const EmployerList = ({ endOfJobs, data, nextPage }) => {
  const navigate = useNavigate();
  console.log('JobList')
  ///alert(endOfJobs)
  const dispatch = useDispatch()
  let content
  const [isOpen, setIsOpen] = useState(false)
  console.log(data)
  content = data.map((employer, index) => {
    //console.log("=========================employer", employer)
    const { id, logo, company_name, website, company_description, location, Region, country, featured, createdAt, clientType } = employer
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? '' : ''}`}
        // onClick={() => {
        //   dispatch(setJob(job))
        //   if (window.innerWidth <= 768) {
        //     setIsOpen(true)//
        //   }
        key={index}
      >
        <button
          className="w-full bg-white border border-gray-200 p-4 mb-4 rounded-xl shadow-lg block"
          onClick={() => {
            dispatch(setEmployer({ employer_id: id, company_name, logo, clientType }))
            navigate(`/employers-center/${id}/`)
            // to = {`/employers-center/${id}/`
          }}
        >
          <div className="flex items-center pb-2">
            <div className="flex-1">
              <span className="text-left block text-gray-500 text-xl font-bold leading-tight hover:underline cursor-pointer">
                {company_name}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-start text-sm text-gray-700 font-light">{location}</div>
            <div className="text-sm text-gray-700 font-light">
              {new Date(createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="w-[300px] text-sm text-[#e74b7f] font-light">
              {featured ? <span>Featured</span> : <span>Not Featured</span>}
            </div>
          </div>
        </button>
      </div>
    );
  });
  return <div className='overflow-y w-full'>
    {content}
    < button type="button" className="load-more bg-white py-2 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100"
      onClick={() => { if (!endOfJobs) { nextPage() } }}
    >
      {endOfJobs ? 'End Of Job list' : 'Load more'}
    </button >
  </div>
}
export default EmployerList
