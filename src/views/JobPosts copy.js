import { useSelector, useDispatch } from "react-redux";
import SearchResults1 from './SearchResults1'
import {
  useGetOrderedProductsQuery,
} from "../store/apiSlice";
import { useNavigate, Link, NavLink } from 'react-router-dom'
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { setJobCredits } from "../store/postsSlice"
function JobPosts(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const region = useSelector((state) => state.posts.region);
  const userid = useSelector((state) => state.auth.userid)
  const email = useSelector((state) => state.auth.email)
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetOrderedProductsQuery({ userid })
  console.log(userid)
  //alert()
  const handleDownloadInvoice = async (id) => {
    // fetch("https://api2.sciencejobs.com.au/api/paymentintent", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     currency: "AUD",
    //     amount: Math.round(hasGST ? price * 1.1 * 100 : price * 100),
    //     userid, productid
    //   }),
    // }).then(async (result) => {
    //   var { clientSecret } = await result.json();
    //   setClientSecret(clientSecret);
    // });
    try {
      // fetch("https://api2.sciencejobs.com.au/api/paymentintent", {
      const response = await fetch("https://api2.sciencejobs.com.au/api/downloadInvoice", { //http://localhost:3500/api/downloadInvoice
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Adjust the id value as needed
      });
      if (!response.ok) {
        throw new Error(`Error downloading PDF: ${response.status}`);
      }
      const dataPDF = await response.blob();
      //const dataUrl = window.URL.createObjectURL(dataPDF);
      //window.open(dataUrl, '_blank');
      const link = document.createElement('a');
      link.href = URL.createObjectURL(dataPDF);
      link.download = 'invoice.txt';
      // Trigger the download directly
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
    }
  };
  let content, content1
  if (isLoading) {
    content = (
      <div className='flex  w-full h-screen  justify-between '>
        <div role="status" className="h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
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
    //orderedProducts: s, jobCredits
    if (data?.jobCredits) {
      dispatch(setJobCredits(data?.jobCredits))
      content1 = (<div className="p-4 border rounded-xl font-bold text-gray-400" >Credits: {data?.jobCredits}</div>)
    } else {
      content1 = (<div className="flex flex-col gap-4">
        <div>You do not have any job credits, pls purchase the products:</div>
        <div className="" ><NavLink
          to={`/post-job/${region}`}
          className="text-[#f4a10c] w-[8rem] font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
          activeClassName="post-a-job"
        >
          Purchase Products
        </NavLink></div>
      </div>)
    }
    if (data?.orderedProducts?.length > 0) {
      content = (
        <div className="flex flex-col gap-8">
          <div className="" ><NavLink
            to={`/post-job/${region}`}
            className="text-[#f4a10c] w-[8rem] font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
            activeClassName="post-a-job"
          >
            Purchase Products
          </NavLink></div>


        </div>
      )
    }
    // else {//
    //   content = <p className=' text-center text-2xl font-bold py-10'>You have not ordered any products</p>
    // }
  }
  return <div className=" md:flex  px-6  gap-8 ">
    <ul className="grid grid-cols-3 gap-4 md:gap-2 md:menu bg-base-200 md:w-56 rounded-box pb-8 p-4">
      <h1 className="text-xl font-black md:py-4 md:px-4">Invoices</h1>
      <li>
        <a
          onClick={() => {
            navigate('/employer-center/')
          }} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a>
          <svg className="h-8 w-5 py-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path></svg>
          <Link to={`/employer-center/job-posts/`}
          >
            Job Posts
          </Link>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <Link to={`/employer-center/invoices/`}
          >
            Invoices
          </Link>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          <Link to={`/editEmployerProfile/${userid}/`}
          >
            Edit Profile
          </Link>
        </a>
      </li>
      <li>
        <a>
          <svg class="svg-icon h-8 w-5" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 16 16"><path fill="currentColor" d="M15 4h-5V3h5v1zm-1 3h-2v1h2V7zm-4 0H1v1h9V7zm2 6H1v1h11v-1zm-5-3H1v1h6v-1zm8 0h-5v1h5v-1zM8 2v3H1V2h7zM7 3H2v1h5V3z"></path></svg>
          <Link to={`/employers/my-profile/${userid}/`}
          >
            View Profile
          </Link>
        </a>
      </li>
      <li className="text-[#f4a10c] flex gap-2 font-bold border-2 rounded-xl">
        <a>

          <Link className="text-[#f4a10c] flex gap-2 font-bold " to={`/post-a-job`}
          > <img width="20" height="20" src="/placeholders/life-saving-customer-service.svg" alt="Life Saving Customer Service &amp; Support"></img>
            Post A Job
          </Link>
        </a>
      </li>
    </ul>
    <div className="md:flex md:justify-between gap-8  pt-3">
      <div className="flex flex-col ">
        <h2 className="text-3xl font-black py-4 text-[#f4a10c]">Welcome {email}!</h2>
        <div className="">
          {content1}
          <div className="my-8">    </div>
          {content}
        </div>
        <div className="mt-16 mb-4"> <SearchResults1 q={{ employer_id: userid }} /></div>
      </div>

    </div>
  </div>
}
export default JobPosts;
