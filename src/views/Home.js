import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRefreshMutation } from "../views/auth/authApiSlice";
import { selectCurrentToken } from "../views/auth/authSlice";
import { useSendLogoutMutation } from "../views/auth/authApiSlice";
export default function Home() {
  const [sendLogout] = useSendLogoutMutation();
  const token = useSelector(selectCurrentToken);
  const [trueSuccess, setTrueSuccess] = useState(false);
  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();
  useEffect(() => {
    const verifyRefreshToken = async () => {
      console.log("verifying refresh token"); 
      try {
        const response = await refresh();
        if (!response.error) {
          setTrueSuccess(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (!token) verifyRefreshToken();
    // eslint-disable-next-line
  }, []);
  const username = useSelector((state) => state.posts.username);
  //const [username, setUsername] = useState(localStorage.getItem('username'));
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const keyWordRef = useRef("");
  const dispatch = useDispatch();
  const region = useSelector((state) => state.posts.region);
  console.log(region);
  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full md:w-3/5 h-[60vh] flex flex-col gap-10 items-center justify-center max-w-screen-md mx-auto">
          <div className=" flex flex-col items-center justify-center ">
            <img
              src="/NewTeachingJobsLogo.png"
              alt="AcademicJobs Logo"
              className=" pl-4 w-[20rem]"
            />
          </div>
          <div className=" flex flex-col items-center justify-center gap-1">
            {/* <h1 className="text-5xl font-semibold  text-[#f4a10c] ">Welcome  to the</h1> */}
 
            <h1 className="text-5xl font-semibold  text-[#e74b7f] ">Admin Center</h1>
          </div>
          <div className="flex gap-1 text-xl text-gray-900 justify-center items-center ">
            {token || trueSuccess ? (
              <div className="text-5xl  flex gap-4">
                <span
                  className="  whitespace-nowrap"
                  onClick={() => {
                    sendLogout();
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </span>
                <div>|</div>
                <Link className="   whitespace-nowrap" to="/admin-home">
                  My Account
                </Link>
              </div>
            ) : (
              <div className="text-5xl  flex gap-4">
                <Link className="   whitespace-nowrap" to="/login">
                  Sign In
                </Link>
                <div>|</div>
                <Link className="   whitespace-nowrap" to="/signup">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
