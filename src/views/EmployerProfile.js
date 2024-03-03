import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { setJob, setId, setEmployer } from '../store/postsSlice'
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import {
  useGetEmployerQuery,
} from '../store/apiSlice'
import SearchResults from './SearchResults'

const Employer = () => {
  const [viewJob, setViewJob] = useState(false)
  const quillModules = {
    toolbar: false,
  };
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log(id)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetEmployerQuery(id)
  let content
  if (isLoading) {
    content = (
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center w-full space-x-2">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[400px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[440px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[360px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  } else if (isSuccess) {
    console.log(data)
    const { logo, company_name, website, company_description, location, Region, country } = data
    console.log(company_description)
    let location1 = '', company_description1 = ''
    if (company_description) {
      company_description1 = company_description
    } else {
      if (Region) location1 = Region
      if (country) location1 = country
      if (location1) {
        company_description1 = `${company_name} is located at ${location1}.`
      } else {
        company_description1 = `Welcome to ${company_name}. `
      }
      company_description1 = `${company_description1}<br><br>
      For more infomation, join our Talent Pool`
      if (website) company_description1 = `${company_description1}, or visit our university website at <a href=${website} style="text-decoration: underline; color: blue" >${website}</a>`
      company_description1 = `${company_description1}<br><br>
      To advertise a Job for ${company_name}, please <a href="/post-job/" style="text-decoration: underline; color: blue" >click here</a><br><br>
      To join the  ${company_name} Talent Pool, please <a href="#" style="text-decoration: underline; color: blue" >click here</a>
      `

    }
    content = (
      <div className='flex-col gap-4 max-w-screen-xl mx-auto'>
   
        <article className={`media ${company_name == 'Queensland University of Technology (QUT)' ? 'bg-blue-950' : 'bg-[#003663]'} border border-gray-300 p-4 mb-4 rounded-lg shadow-lg`}
        >
          <div class="md:flex md:justify-start .col-auto ">
            <div className="w-[8rem] h-[8rem] mr-4  ">
              <img src={logo || "/favicon.png"}
                alt={company_name}
                className="w-full h-full object-contain rounded-md bg-white "
                onError={(e) => {
                  e.target.src = 'https://academicjobs.s3.amazonaws.com/img/_misc/uni-profiles.png'
                }}
              />
            </div>
            <div class="md:flex md:flex-col gap-6 ">
              <h1 class="text-3xl font-bold text-white pt-4">{company_name}</h1>
              <div class="md:flex  md:gap-6 p-4">
                <div class="text-white md:flex md:items-center md:justify-start md:gap-2 .col-auto p-4">
                  <MdLocationPin />
                  {location}
                </div>
                {
                  website &&
                  <div class="text-white md:flex md:items-center md:justify-start md:gap-2 p-4">
                    <AiOutlineGlobal />
                    <a href={website} className="">{website}</a>
                  </div>}
              </div>
            </div>
          </div>
        </article>
        <div class="flex justify-start gap-4 mt-6 mb-2 pl-4">
          <div className={` cursor-pointer text-xl text-orange-400    ${viewJob || 'underline'}`}
            onClick={() => { setViewJob(false) }}
          >Institution Description</div>
          <div className={` cursor-pointer text-xl text-orange-400   ${viewJob && 'underline'}`}
            onClick={() => { setViewJob(true) }}
          >View Jobs</div>
          <div className=' hidden cursor-pointer text-xl text-orange-400  '
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#my-target").offsetTop,
                behavior: "smooth",
              });
            }}>
            View Jobs
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto'>
          {
            viewJob
              ?
              <SearchResults q={{ employer_id: id || 0 }} />
              :
              <div className={`max-h-50 overflow-y  border border-gray-300 p-4 mb-4 rounded-lg shadow-lg ${company_name == 'Bond University' && 'bg-[#f1b821]'} ${company_name == 'Queensland University of Technology (QUT)' && 'bg-blue-950'}`}>
                <div className={`wrapper  ${company_name == 'Queensland University of Technology (QUT)' && 'text-white'}`}>
                  <div dangerouslySetInnerHTML={{ __html: company_description1 }} />
                  {company_name === 'Queensland University of Technology (QUT)' && (
                    <style>
                      {`
        .wrapper span {
          color: white !important;
        }
        .wrapper a {
          color: yellow !important;
        }
      `}
                    </style>
                  )}
                  {company_name === 'Bond University' && (
                    <style>
                      {`
        .wrapper span {
          color: white !important;
        }
        .wrapper a {
          color: white !important;
        }
      `}
                    </style>
                  )}
                </div>
              </div>
          } <div className="hidden" id="my-target">
            <SearchResults id="about" q={{ employer_id: id || 0 }} /> </div>
        </div>
      </div>
    )
  }
  return <div className='overflow-y w-full'>
    {content}</div>
}
export default Employer
