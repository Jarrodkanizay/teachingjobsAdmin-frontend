import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import JobList from './JobList'
import JobDetail from './JobDetail'

import {
  useGetSingleQAQuery,
} from '../store/apiSlice'
import { setSearchJobCriteria } from '../store/postsSlice';
const SingleQA = () => {  window.location.replace("https://www.academicjobs.com/about");
  const dispatch = useDispatch()
  const keyWordRef = useRef("")
  const locationRef = useRef("")
  let content
  const id = useSelector((state) => state.posts.id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetSingleQAQuery(id)
  if (isLoading) {
    content = <p> </p>
  } else if (isSuccess) {
    console.log(data)
    const { logo, company_name, website, custom_fields, location } = data
    content = (
      <div className='flex w-full flex-col font-bold text-xl'>

        <div className="bg-white p-6 shadow-md rounded-md mx-auto max-w-1280">
          <div className="bg-white p-6">
            <div className="flex justify-between gap-2">
              <div className="bg-white w-36 h-36 flex items-center justify-center shadow-md rounded-lg overflow-hidden">
                <img
                  className="max-w-full max-h-full"
                  src={
                `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` ||
                '/favicon.png'
              }
                  alt="Company Logo"
                />
              </div>
              <div className="w-3/4 flex flex-col">
                <h1 className="text-gray-500 text-2xl font-semibold">
                  {company_name}
                </h1>
                <ul className="mt-2 text-gray-500">
                  <li>{location} {custom_fields[4].value}</li>
                  <li>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {website}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 其他内容 */}
          </div>
        </div>
        <div className="bg-gray-100 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Keyword"
                  ref={keyWordRef}
                />
                <input
                  type="text"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Location"
                  ref={locationRef}
                />
                <button
                  className="bg-[#00aeef] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300"
                  onClick={() => {
                    const a = {}
                    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
                    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
                    console.log(a)
                    dispatch(setSearchJobCriteria(a))
                  }}
                >
                  Find Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <JobList />
          <JobDetail />
        </div>
      </div>
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default SingleQA
