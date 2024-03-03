import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setJob, setId, setStatusId } from '../store/postsSlice'
import Job from './Job'
const JobList = ({ data }) => {
  console.log('JobList')
  const dispatch = useDispatch()

 
  useEffect(() => {
    if(data)   dispatch(setJob(data[0]));
  }, [data, dispatch]);
  let content
  console.log(data)
  content = data.map((job, index) => {
    const { id, title } = job;
    console.log(job)
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
        //onClick={() => dispatch(setJob(job))}
        key={id}
      >
        <Job job={job } />
      </div>
    );
  });

  return content
}
export default JobList
