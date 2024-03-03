import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  useGetEmployerQuery,
} from '../store/apiSlice'
const Job = ({ job }) => {
  const { employer_id, title } = job
  console.log(employer_id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetEmployerQuery(employer_id || 0)
  let content
  if (isLoading) {
    content = <p> </p>
  } else if (isSuccess) {
    console.log(data)
    const { logo, company_name, website, custom_fields, location } = data
    content = (
      <div className='flex w-full flex-col font-bold text-xl'>
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
      </div>
    )
  }
  return <div className='overflow-y w-full'>{content}</div>
}
export default Job
