import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link, NavLink } from "react-router-dom";
import { useSendLogoutMutation } from "../views/auth/authApiSlice";

const Layout1 = () => {
  const [sendLogout] = useSendLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  let content
  if (userInfo.employer_id > 0) {
    content = (
      <div className={`w-full min-h-screen flex`}>
        <div className="z-[1] menu relative w-57 h-auto flex-none bg-base-200 pt-4">
          <ul className="flex flex-col gap-4 text-lg  items-start "> {/* <h1 className="text-xl font-black md:py-4 md:px-4">Employer Center</h1> */}
            <Link
              to={`/admin-home/`}>
              <img
                className="w-60"
                src="/NewTeachingJobsLogo.png"
                alt=""
              />
            </Link>
            <img
              src={userInfo.portrait ? `https://academicjobs.s3.amazonaws.com/img/users/${userInfo.portrait}` : "/user.jpg"}
              width={150}
              height={150}
              className="lg:max-w-lg rounded-3xl shadow-2xl mb-8 lg:mb-0 items-center justify-center ml-8"
              alt="AI Powered Recruitment Platform"
            />
            <li className="text-lg font-bold text-left"> 
              <Link
                to={`/admin-home/`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </Link>
            </li>
            <li className="text-lg font-bold text-left">
              <Link to={`/employers-center/${userInfo.employer_id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  class="svg-icon h-8 w-5"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7m0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5"
                    class="clr-i-outline clr-i-outline-path-1"
                  />
                  <path
                    fill="currentColor"
                    d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z"
                    class="clr-i-outline clr-i-outline-path-2"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                My Profile
              </Link>
            </li>
            <li className="text-lg font-bold text-left">
              <Link to={`/jobs-center`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="32"
                  viewBox="0 0 24 24"
                  class="svg-icon h-6 p-0"
                >
                  <path
                    fill="currentColor"
                    d="M11 22v-4H6l-3-3l3-3h5v-2H4V4h7V2h2v2h5l3 3l-3 3h-5v2h7v6h-7v4zM6 8h11.175l1-1l-1-1H6zm.825 8H18v-2H6.825l-1 1zM6 8V6zm12 8v-2z"
                  />
                </svg>
                Jobs
              </Link>
            </li>
            <li className="text-lg font-bold text-left ">
              <Link
                className=""
                to={`/post-a-job`}
              >
                <svg
                  className="h-8 w-5 py-2"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path>
                </svg>
                Post a Job
              </Link>
            </li>
            <li className="text-lg font-bold text-left ">
              <Link
                className=""
                to={`/post-a-job`}
              >
                <svg
                  className="h-8 w-5 py-2"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path>
                </svg>
                My Ambassadores
              </Link>
            </li>
          </ul>
        </div>
        <div className=" w-full ml-[2px]">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    )
  } else {
    content = (
      <div className={`w-full min-h-screen flex`}>
        <div className="z-[1] menu relative w-57 h-auto flex-none bg-base-200 pt-4">
          <ul className="flex flex-col gap-4 text-lg  items-start "> {/* <h1 className="text-xl font-black md:py-4 md:px-4">Employer Center</h1> */}
            <Link
              to={`/admin-home/`}>
              <img
                className="w-60"
                src="/NewTeachingJobsLogo.png"
                alt=""
              />
            </Link>
            <img
              src={userInfo.portrait ? `https://academicjobs.s3.amazonaws.com/img/users/${userInfo.portrait}` : "/user.jpg"}
              width={150}
              height={150}
              className="lg:max-w-lg rounded-3xl shadow-2xl mb-8 lg:mb-0 items-center justify-center ml-10"
              alt="AI Powered Recruitment Platform"
            />
            <li className="text-lg font-bold text-left">
              <Link
                to={`/admin-home/`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </Link>
            </li>
            <li className="text-lg font-bold text-left">
              <Link to={userInfo.employer_id ? `/employers-center/${userInfo.employer_id}` : `/employers`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  class="svg-icon h-8 w-5"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M18 17a7 7 0 1 0-7-7a7 7 0 0 0 7 7m0-12a5 5 0 1 1-5 5a5 5 0 0 1 5-5"
                    class="clr-i-outline clr-i-outline-path-1"
                  />
                  <path
                    fill="currentColor"
                    d="M30.47 24.37a17.16 17.16 0 0 0-24.93 0A2 2 0 0 0 5 25.74V31a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2v-5.26a2 2 0 0 0-.53-1.37M29 31H7v-5.27a15.17 15.17 0 0 1 22 0Z"
                    class="clr-i-outline clr-i-outline-path-2"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                Employers
              </Link>
            </li>
            <li className="text-lg font-bold text-left">
              <Link to={`/jobs-center`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="32"
                  viewBox="0 0 24 24"
                  class="svg-icon h-6 p-0"
                >
                  <path
                    fill="currentColor"
                    d="M11 22v-4H6l-3-3l3-3h5v-2H4V4h7V2h2v2h5l3 3l-3 3h-5v2h7v6h-7v4zM6 8h11.175l1-1l-1-1H6zm.825 8H18v-2H6.825l-1 1zM6 8V6zm12 8v-2z"
                  />
                </svg>
                Jobs
              </Link>
            </li>
            <li className="text-lg font-bold text-left ">
              <Link
                className=""
                to={`/post-a-job`}
              >
                <svg
                  className="h-8 w-5 py-2"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path>
                </svg>
                Post a Job
              </Link>
            </li>
            <li className="text-lg font-bold text-left ">
              <Link
                className=""
                to={`/UsersTask`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Task Allocation<br />(Management Only)
              </Link>
            </li>

            
            <li className="text-lg font-bold text-left pl-1 ">
              <span
                  className="  whitespace-nowrap"
                  onClick={() => {
                    sendLogout();
                    navigate("/");
                    window.location.reload();
                  }}
                >
                <img src="/logout-svgrepo-com.svg" alt="Logout"/> Logout 
                </span>
            </li>
            {/* <li className="text-lg font-bold text-left ">
              <Link
                className=""
                to={`/JobLoadingActivity`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Job Loading Activity
              </Link>
            </li> */}
          </ul>
        </div>
        <div className=" w-full ml-[2px] mt-2 px-6 py-6">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  return content
}
export default Layout1
