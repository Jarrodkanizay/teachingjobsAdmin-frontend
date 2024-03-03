import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { countryMappings, countryMappings1 } from "../utils/data";
import { setSearchJobCriteria, setRegion } from "../store/postsSlice";
import DispatchLink from "./DispatchLink";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRefreshMutation } from "../views/auth/authApiSlice";
import { selectCurrentToken } from "../views/auth/authSlice";
import { useSendLogoutMutation } from "../views/auth/authApiSlice";
export default function Header() {
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const region = useSelector((state) => state.posts.region);
  const handleFormSubmit = () => {
    if (region !== "Global") {
      navigate("/jobs/", {
        state: { q: "", l: countryMappings1[region].searchLocation },
      });
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch(
            "https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66"
          );
          const result = await response.json();
          return result.country.name;
        } catch (error) {
          return "";
        }
      };
      fetchLocation1()
        .then((country) => {
          //sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          //alert(countryMappings[country.toLowerCase()])
          //alert(countryMappings[country.toLowerCase()])
          dispatch(setRegion(countryMappings[country.toLowerCase()]));
          //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          //alert(region)
          //dispatch(setSearchJobCriteria(a))
          //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
          navigate("/jobs/", {
            state: {
              q: "",
              l: countryMappings1[countryMappings[country.toLowerCase()]]
                .searchLocation,
            },
          });
          //navigate(`/jobs/${countryMappings1[sessionStorage.getItem("location")].searchLocation}`);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
    setIsNavOpen(false);
  };
  const ref = useRef(null);
  const onMouseEnter = (e) => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };
  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  const location = useLocation();
  return (
    <div className="flex w-full items-center  justify-between md:justify-start gap-12 border-gray-400 py-8 px-8">
      <Link to={`/${region}/`}>
        {location.pathname === "/" || (
          <img
            className="w-48"
            src="https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png"
            alt=""
          />
        )}
      </Link>
   
    </div>
  );
}
// {
//   token
//     ? <Link to='/employer-center'>
//       {/* <span className='text-lg text-blue-600  font-bold'>{username}</span> */}
//       <FaUser />
//     </Link>
//     : <Link to='/login'>Login</Link>
// }
{
  /* <FaUser
  onClick={async () => {
    try {
      console.log(token)
      if (token) {
        navigate("/employer-center")
      } else {
        const response = await refresh()
        console.log(response)
        console.log(response.error)
        if (response.error) {
          navigate("/login")
        } else {
          navigate("/employer-center")
        }
      }
    }
    catch (err) {
      console.error(err)
    }
  }}
/> */
}
