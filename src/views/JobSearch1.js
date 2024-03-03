import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../store/store'
import { apiSlice } from '../store/apiSlice'
import 'react-quill/dist/quill.snow.css';
import JobList from './JobList'
import JobDetail from './JobDetail'
import { useNavigate, useLocation } from "react-router-dom"
import {
  useGetJobsQuery, useGetFiltersQuery, useGetQtyQuery
} from '../store/apiSlice'
import { useParams } from 'react-router-dom';
import { setJob } from '../store/postsSlice';
import { Helmet } from "react-helmet";
import { BsHandbag } from 'react-icons/bs';

const JobSearch = () => {  
  const region = useSelector((state) => state.posts.region)
  const [isShowFilter, setIsShowFilter] = useState(false)
  const [filter1, setfilter] = useState([])
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let q = "", l = ""
  const { name } = useParams();
  const location = useLocation();
  //console.log(location.state.l)
  const keyWordRef = useRef('')
  const locationRef = useRef('')
  if (name) {
    q = name?.replace(/-/g, ' ');
  } else if (location.state?.q || location.state?.l) {
    // alert(location.state.l)
    q = location.state.q || ''
    l = location.state.l || ''
  } else {
    if (region !== "Global") l = region
  }
  useEffect(() => {
    store.dispatch(apiSlice.endpoints.getJobs.initiate())
    keyWordRef.current.value = q
    if (l) {
      locationRef.current.value = l
    } else {
      if (region !== "Global") locationRef.current.value = region
    }
    window.scrollTo(0, 0)
  }, []);
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetJobsQuery({ q: q, l: l || '', page })
  const {
    data: qty,
    isLoading: isLoadingQty,
    isSuccess: isSuccessQty,
  } = useGetQtyQuery({ q: q, l: l || '' })
  // const {
  //   data: filters,
  //   isLoading: filtersIsLoading,
  //   isSuccess: filtersIsSuccess,
  // } = useGetFiltersQuery({ category })
  useEffect(() => {
    if (data) dispatch(setJob(data[0]));
  }, [data, dispatch]);
  function nextPage() {
    console.log('nextPage')
    setPage(prev => prev + 1);
  }
  let content
  // if (filtersIsSuccess) {
  //   console.log(filters)
  // }
  if (isLoading) {
    content = (
      <div className='flex  w-full h-screen  justify-between'>
        <div role="status" className="w-[40%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className="w-[60%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess && data) {
    console.log(data)
    if (data?.length > 0) {
      content = (
        <div className=''>
          {qty &&
            < div className='py-4 flex justify-start items-center font-bold gap-2 ' >
              <BsHandbag />
              <span>{`${qty} jobs found`}</span>
            </div >}
          <div className='flex  w-full h-screen  justify-between'>
            <div className='overflow-y-auto md:w-[40%] h-screen' ><JobList data={data} nextPage={nextPage} /></div>
            <div className=' hidden md:block overflow-y-auto w-[60%] h-screen'><JobDetail /></div>
          </div>
        </div>
      )
    }
  } else {
    content = <p className='text-center text-2xl font-bold py-10'>Found No More Jobs, Pls use other keyword.</p>
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {}
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim()
    if (locationRef.current.value.trim()) a.l = locationRef.current.value.trim()
    navigate("/jobs/", { state: { q: keyWordRef.current.value.trim(), l: locationRef.current.value.trim() } });
  }
  return <div className='overflow-y w-full'>
    <Helmet>
      <title>{name}</title>
      <meta name="description" content={name} />
      <meta name="keywords" content={name} />
    </Helmet>
    <div className="bg-gray-100 py-10  rounded-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <form className="flex flex-col  gap-2 md:flex-row md:gap-2 mx-18 w-full " onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#00aeef] rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Keyword"
              ref={keyWordRef}
              defaultValue={name}
            />
            <input
              type="text"
              className="text-center md:w-[41%] md:text-left px-4 py-2 border border-[#00aeef] rounded-md focus:ring-orange-500 focus:border-orange-500"
              placeholder="Location"
              ref={locationRef}
            />
            <button
              className="bg-[#00aeef] hover:bg-orange-600 text-white py-2 px-6 rounded-md focus:ring-2 focus:ring-orange-300 font-bold"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

      </div>
    </div>
    {content}
  </div>
}
export default JobSearch
