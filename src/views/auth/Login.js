import { useRef, useState, useEffect } from "react";
import { setUserInfo, setCredentials, isLoggedInOn, isLoggedInOff } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
// import usePersist from '../../hooks/usePersist'
// import useTitle from '../../hooks/useTitle'
//import PulseLoader from 'react-spinners/PulseLoader'
import { useSelector, useDispatch } from "react-redux";
import { setEmail1, setUserid } from "./authSlice";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  //alert(from.pathname)
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  //const [persist, setPersist] = usePersist()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const [login, { isLoading }] = useLoginMutation()
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);
  //useTitle('User Login')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      //const decoded = jwtDecode(accessToken);
      //dispatch(setUserInfo(decoded.UserInfo))
      //const { userid } = decoded.UserInfo;
      //dispatch(setUserid(userid));
      //dispatch(setEmail1(email));
      setEmail("");
      setPassword("");
      if (from.pathname === "/") {
        //navigate("/employer-center");
        navigate("/admin-home");
      } else {
        navigate(from.pathname);
      }
    } catch (err) {
      if (err.data?.message) {
        setErrMsg(err.data?.message);
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };
  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  //const handleToggle = () => setPersist((prev) => !prev)
  const errClass = `w-full flex justify-center items-center text-xl font-bold  text-red-700 ${
    errMsg ? "block" : "hide"
  } `;
  const inputErrClass = "w-full text-xs font-bold text-red-700";
  let content;
  // if (isLoading)
  //   return (
  //     <div className='w-full h-screen flex justify-center items-center '>
  //       <PulseLoader color={'#808080'} size={100} />
  //     </div>
  //   )
  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };
    if (!email) {
      errorsCopy.email = "email is required";
      valid = false;
    } else {
      errorsCopy.email = "";
    }
    if (!password) {
      errorsCopy.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      errorsCopy.password = "Password must be at least 6 characters";
      valid = false;
    } else {
      errorsCopy.password = "";
    }
    setErrors(errorsCopy);
    return valid;
  };
  content = (
    <div className="w-full h-screen mt-12">
      <section className="flex flex-col items-center justify-around px-6 pt-6 mx-auto  lg:py-0">
        <main className="login">
          <header className="flex justify-between text-center w-full">
            <h1 className="text-xl font-bold w-11/12 ">User Login</h1>
            <div className="w-1/12 text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <Link to="/">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </header>
          <p ref={errRef} className={errClass} aria-live="assertive">
            {errMsg}
          </p>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className=" font-bold py-2">
              Email:
            </label>
            <input
              className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="text"
              id="email"
              ref={userRef}
              value={email}
              onChange={handleUserInput}
              autoComplete="off"
              aria-label="email"
              required
            />
            {errors.email && <p className={inputErrClass}>{errors.email}</p>}
            <label htmlFor="password" className="font-bold py-2">
              Password:
            </label>
            <input
              className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={password}
              autoComplete="off"
              aria-label="password"
              required
            />
            {errors.password && (
              <p className={inputErrClass}>{errors.password}</p>
            )}
            <div className="flex justify-between mt-4 gap-10 items-center">
              <button
                className="w-1/2 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                type="submit"
                name="submit"
              >
                Sign In
              </button>
              <label htmlFor="persist" className="text-sm font-bold">
                <input
                  type="checkbox"
                  className=""
                  id="persist"
                  //onChange={handleToggle}
                  //checked={persist}
                />
                Trust This Device
              </label>
            </div>
            <p className="py-8 font-bold text-center">
              Not registered? Sign Up Now!
            </p>
            {/* <Link
              className='w-full inline-block px-7 py-3 bg-yellow-600 text-white font-bold text-xl text-center leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              to={{
                pathname: '/signup',
                state: { from:  from.pathname  }
              }}
            >
              Sign Up
            </Link> */}
            <button
              type="button"
              className="w-full inline-block px-7 py-3 bg-yellow-600 text-white font-bold text-xl text-center leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => navigate("/signup", { state: { from } })}
            >
              Sign Up
            </button>
          </form>
        </main>
      </section>
    </div>
  );
  return content;
};
export default Login;
