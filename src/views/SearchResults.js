import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'react-quill/dist/quill.snow.css';
import JobList from './JobList'
import JobDetail from './JobDetail'
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import {
  useGetJobsQuery, useGetQtyQuery
} from '../store/apiSlice'
import { setJob, setSearchJobCriteria } from '../store/postsSlice';
import { store } from '../store/store'
import { apiSlice } from '../store/apiSlice'
import { BsHandbag } from 'react-icons/bs';
const SearchResults = ({ q }) => {
  const job = useSelector((state) => state.posts.job)
  const componentRef = useRef(null);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (componentRef.current) {
      console.log("Scrolling to top");
      componentRef.current.scrollTop = 0;
    }
  }, [job]);
  const {
    data: qty,
    isLoading: isLoadingQty,
    isSuccess: isSuccessQty,
  } = useGetQtyQuery( q )
  const [page, setPage] = useState(0);
  function nextPage() {
    console.log('nextPage')
    setPage(prev => prev + 1);
  }
  // function callbackFunction(data) {
  //   setShowModal(data);
  // }
  const dispatch = useDispatch()
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetJobsQuery({ ...q, page })
  useEffect(() => {
    store.dispatch(apiSlice.endpoints.getJobs.initiate())
    //dispatch(api.util.resetApiState());
  }, []);
  useEffect(() => {
    if (data) dispatch(setJob(data[0]));
  }, [data, dispatch]);
  let content
  if (isLoading) {
    content = (
      <div className='flex  w-full h-screen  justify-between '>
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
  } else if (isSuccess) {
    console.log(data)
    if (data?.length > 0) {
      content = (
        
        <div className='flex flex-col md:flex  md:justify-start gap-8 px-6  rounded-3xl'>
          < div className='px-6  py-4 flex justify-start items-start  font-bold gap-2  text-[#00aeef]' >
            <BsHandbag />
            {qty && <span>{`${qty} jobs found`}</span>}
          </div >
          <div className='flex  w-full gap-8   '>
            <div className='overflow-y-auto md:w-[40%] mt-4 ' ><JobList data={data} nextPage={nextPage} /></div>
            <div ref={componentRef} className='hidden md:block overflow-y-auto w-[50%] h-screen top-0  sticky'><JobDetail /></div>
          </div>
        </div>
      )
    } else {
      content = <p className=' hidden text-center text-2xl font-bold py-10'>Found No Job, Pls use other keyword.</p>
    }
  }
  return <div className='relative overflow-y w-full'>
    {content}
    {/* </div><div className={showModal ? 'fixed top-0 left-0  overflow-y-auto w-full h-screen' : 'hidden'}> */}
  </div>
}
export default SearchResults
