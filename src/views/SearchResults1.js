import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'react-quill/dist/quill.snow.css';
import JobList1 from './JobList1'
import JobDetail from './JobDetail'
import { useNavigate, Link, NavLink } from 'react-router-dom'
import {
  useGetJobsQuery, useGetQty1Query
} from '../store/apiSlice'
import { setJob, setSearchJobCriteria } from '../store/postsSlice';
import { store } from '../store/store'
import { apiSlice } from '../store/apiSlice'
import { BsHandbag } from 'react-icons/bs';
const SearchResults1 = ({ q }) => {
  console.log("=======q===============", q)
  const navigate = useNavigate()
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
  } = useGetQty1Query(q)
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
        <div role="status" className=" h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
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
        <div className='flex flex-col md:flex  md:justify-start   rounded-3xl'>
          < div className=' mt-6 flex justify-start items-start  font-bold gap-2  ' >
            <BsHandbag />
            <span>Latest Jobs - </span>
            {qty?.currentQty && <span>{`Current (${qty?.currentQty})`}</span>} 
            <span>|</span>
            {qty?.expiredQty && <span>{`Expired (${qty?.expiredQty})`}</span>}
          </div >
          <div className='overflow-y-auto mt-4 ' ><JobList1 data={data} nextPage={nextPage} /></div>
        </div>
      )
    } else {
      content = (<div className='  flex flex-col gap-4 justify-center'>
          <div class="w-full font-bold underline">Your Live Jobs</div>
        <div>No job has been posted, pls post your first job here:</div>
        <button className="text-[#f4a10c] w-[8rem] text-left font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
          onClick={() => {
            navigate('/post-a-job')
          }}
        >
          Post A Job
        </button>
      </div>)
    }
  }
  return <div className='relative overflow-y w-full'>
    {content}
    {/* </div><div className={showModal ? 'fixed top-0 left-0  overflow-y-auto w-full h-screen' : 'hidden'}> */}
  </div>
}
export default SearchResults1
