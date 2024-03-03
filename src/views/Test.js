import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setJob, setId, setEmployer } from '../store/postsSlice'
import SearchResults from './SearchResults'
import hrData from "../utils/hr.json";
import { Helmet } from "react-helmet";
const Test = () => {
  const dispatch = useDispatch()
  let { hr } = useParams();
  hr = hr?.replace(/-/g, ' ')
  console.log(hr)
  console.log(hr)
  const [page, setPage] = useState(0);
  const navigate = useNavigate()
  const keyWordRef = useRef('')
  const locationRef = useRef('')
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: locationRef.current.value.trim() } });
  }
  const { Name, Title, Description, Keyword, content: content1 } = hrData.find(item => item.Name === hr);
  let content
  <div className=''></div>
  content = (
    <div className='flex-col gap-2'>
      <div className='flex justify-between'>

        <div className='w-[60%]'>
          <h1 className='font-bold text-2xl '>TAX INVOICE</h1>
          <div>Address</div>

        </div>
        <div className='flex justify-between'>
          <div className=''>
            
          </div>
          <div className=''>

            <p>Post My Job P/L</p>
            <p>Suite 7, 72 Church Street</p>
            <p>BRIGHTON VIC 3186</p>
            <p>AUSTRALIA</p>
          </div>
        </div>
      </div>
      
    </div>
  )
  return <div className=' w-full'>{content}</div>
}
export default Test
