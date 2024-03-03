import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setJob, setId, setEmployer } from '../store/postsSlice'
import SearchResults from './SearchResults'
import careerAdviceData from "../utils/careerAdvice.js";

import { Helmet } from "react-helmet";
const CareerAdvice = () => {  
  const dispatch = useDispatch()
  let { careerAdvice } = useParams();
  careerAdvice = careerAdvice?.replace(/-/g, ' ')
  console.log(careerAdvice)
  console.log(careerAdvice)

  const { Name, Title, Description, Keyword, content: content1, content2 } = careerAdviceData.find(item => item.Name === careerAdvice);
  
  window.location.replace(`https://www.academicjobs.com/career-help/${careerAdvice?.replace(/\W+/g, '-').toLowerCase()}`);
  
  let content
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className='flex-col gap-2 max-w-screen-xl mx-auto'>
      <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <meta name="keywords" content={Keyword} />
      </Helmet>
      <h1 className='max-h-50 overflow-y  border border-orange-400 p-4 mb-4 rounded-lg shadow-lg text-orange-400 font-bold'>
        {Title}
      </h1>
      <Link className='text-[#00aeef] mb-4 ' to='/academic-hub/'>← View all Academic Happiness Posts</Link>
      <div className='max-h-50 overflow-y  border border-gray-300 p-4 mb-4 rounded-lg shadow-lg'>
        {content1}
      </div>
      <div className='max-h-50 overflow-y border border-gray-300 p-4 mb-4 rounded-lg shadow-lg' dangerouslySetInnerHTML={{ __html: content2 }} />



    </div>
  )
  return <div className='overflow-y w-full'>{content}</div>
}
export default CareerAdvice
