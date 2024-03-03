import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setJob, setId, setStatusId } from '../store/postsSlice'
import Job from './Job'
import Modal from '../components/Modal'
import JobDetail from './JobDetail'
import { Link } from "react-router-dom";
const JobList1 = ({ endOfJobs, data, nextPage }) => {
  console.log('JobList')
  ///alert(endOfJobs)
  const dispatch = useDispatch()
  let content
  const [isOpen, setIsOpen] = useState(false)
  console.log(data)
  content = data.map((job, index) => {
    const { headlineOnly, email1, activation_date, createdAt, activeYN, employer_id, title, location, expiration_date, how_to_apply, logo, company_name, featured, id } = job
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? '' : ''}`}
        key={index}
      >
        <Link
          className="bg-white border border-gray-200 p-4 mb-4 rounded-xl shadow-lg block"
          to={`/jobs/edit/${id}/`}
        >
          <div className="flex items-center pb-2">
            <div className="flex-1">
              <span className="block text-gray-500 text-xl font-bold leading-tight hover:underline cursor-pointer">
                {title}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-700 font-light">{company_name}</div>
            <div className="text-sm text-gray-700 font-light">{location}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-700 font-light">{
              new Date(activation_date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            }</div>
            <div className="w-[300px] text-sm text-amber-500 font-light">{
              featured
                ? <span>Featured</span>
                : <span>Not Featured</span>
            }</div>
            <div className="text-sm text-gray-700 font-light">{headlineOnly
              ? <span className=" text-green-500">Headline Only</span>
              : <span>Full Job</span>
            }</div>
            <div className="text-sm text-gray-700 font-light">{email1
              && <span className=" text-red-600 font-bold">Sales Leads</span>
            }</div>
            <div className="text-sm text-gray-700 font-light">{activeYN
              ? <span className=" text-green-500">Active</span>
              : <span>Not Active</span>
            }</div>
            <div className="text-gray-700 text-sm font-light">
              {((new Date(expiration_date) < new Date()) && expiration_date)
                ? (
                  <div className="bg-opacity-50 bg-red-500 ">
                    Expired
                  </div>
                )
                :
                <time>
                  {expiration_date &&
                    `Exp. ${new Date(expiration_date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}`}
                </time>}
            </div>
          </div>
        </Link>
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
export default JobList1
