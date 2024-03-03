import { useRef, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputBlock3 from "../InputBlock3";
import { setCredentials, isLoggedInOn, isLoggedInOff } from './authSlice'
import { useRegisterUserMutation } from './authApiSlice'
// import usePersist from '../../hooks/usePersist'
// import useTitle from '../../hooks/useTitle'
//import PulseLoader from 'react-spinners/PulseLoader'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail1, setUserid, setCompany_name, setCountry } from './authSlice';
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import UniSearchBlock from "../UniSearchBlock";
const SignUp = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors: errors }, setError } = useForm({
    // resolver: yupResolver(validationSchema),
    defaultValues: {
      // postedBy: userInfo.id,
      username: '',
      email: '',
      password: '',
      // employer_name: userInfo.employer_name,
      // employer_id: userInfo.employer_id,
    }
  })
  const location = useLocation();
  const [nextPageYN, setNextPageYN] = useState(false)
  const { from } = location.state || { from: { pathname: '/' } }
  const productid = useSelector((state) => state.posts.productid)
  const productQty = useSelector((state) => state.posts.productQty)
  const addOnYN = useSelector((state) => state.posts.addOnYN);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signUpBuy, { isLoading }] = useRegisterUserMutation()
  const onSubmit1 = async (data) => {
    //e.preventDefault();
    console.log('data', data)
    // if (!(userInfo.jobCredits > 0)) {
    //   setNoCreditsYN(true);
    // } else {
    //   const response = await postAJob(data);
    //   console.log(response);
    //   if (response) {
    //     setJobStatus("Job POSTED!")
    //     //submitRef.current.innerText = "Job POSTED!";
    //     setTimeout(() => {
    //       setJobStatus("Post Job")
    //       //submitRef.current.innerText = "Post Job";
    //     }, 5000);
    //   }
    // }
  }
  const onSubmit = async (data) => {
    //e.preventDefault();
    console.log('data', data)
    try {
      const { accessToken } = await signUpBuy({ ...data, productid, productQty }).unwrap()
      dispatch(setCredentials({ accessToken }))
      //navigate("/employer-center/invoices/");
      navigate("/admin-home");
      // if (from.pathname === "/") {
      //   navigate("/employer-center");
      // } else { navigate(from.pathname); }
    }
    catch (err) {
      if (err.data?.message) {
      } else if (err.status === 400) {
      } else if (err.status === 401) {
      } else {
      }
    }
  }
  let content
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true)
  }, []);
  const inputErrClass = 'w-full text-xs font-bold text-red-700'
  const handleCompanyNameInput = (newValue, flag) => setCompany_name(newValue)
  content = (
    <div className='w-full mt-12'>
      <section className='flex flex-col items-center justify-around px-6 pt-6 mx-auto  lg:py-0'>
        <main className=''>
          <header className='flex justify-between text-center w-full'>
            <h1 className='text-2xl font-semibold w-11/12 '>Sign Up</h1>
            <div className='w-1/12 text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
              <Link to='/'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </Link>
            </div>
          </header>
          {/* <p ref={errRef} className={errClass} aria-live='assertive'>{errMsg}</p> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="flex flex-col gap-2">
                <div role="radiogroup" aria-required="true" aria-invalid="false">
                  <label className="font-semibold">User Type:</label>
                  <div className="flex flex-col mt-2">
                    <label className="inline-flex items-center mt-2">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        name="user-type"
                        value="University"
                      />
                      <span className="ml-2">University/College (Post jobs for my University only)</span>
                    </label>
                    <label className="inline-flex items-center mt-2">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        name="user-type"
                        value="Business"
                      />
                      <span className="ml-2">Industry/Private Enterprise (Post jobs for my Company only)</span>
                    </label>
                    <label className="inline-flex items-center mt-2">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        name="user-type"
                        value="Agency"
                      />
                      <span className="ml-2">Search Firm/Ad Agency (Post jobs for multiple organisations)</span>
                    </label>
                  </div>
                </div>
                <InputBlock3 type="text" field="firstName" label="First Name*" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
                <InputBlock3 type="text" field="lastName" label="Last Name*" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
                <InputBlock3 type="text" field="email" label="Email*" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
                <InputBlock3 type="password" field="password" label="Passord*" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
                <InputBlock3 type="password" field="retypePassword" label="Retype Passord*" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="country">
                    Country
                  </label>
                  <InputBlock3 type="text" field="country" label="Country" register={register} errors={errors} forceClass="rounded-none w-1/2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="font-bold">Optional fields:</div>
              <div>
                <UniSearchBlock
                  register={register}
                  field="employer_name"
                  customKey="company_name"
                  label="Company Name*"
                  value1={""}
                  onChange={handleCompanyNameInput}
                  forceClass="w-full"
                />
                {errors.company_name && (
                  <p className={inputErrClass}>{errors.company_name}</p>
                )}
              </div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="address-1">
                  Address 1
                </label>
                <InputBlock3 type="text" field="address1" label="Address 1" register={register} errors={errors} forceClass="rounded-none w-1/2" />
              </div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="address-2">
                  Address 2
                </label>
                <InputBlock3 type="text" field="address2" label="Address 2" register={register} errors={errors} forceClass="rounded-none w-1/2" />
              </div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="city">
                  City
                </label>
                <InputBlock3 type="text" field="city" label="City" register={register} errors={errors} forceClass="rounded-none w-1/2" />
              </div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="state">
                  State
                </label>
                <InputBlock3 type="text" field="state" label="State" register={register} errors={errors} forceClass="rounded-none w-1/2" />
              </div>
        
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="postal-code">
                  Postal Code
                </label>
                <InputBlock3 type="text" field="postCode" label="Postal Code" register={register} errors={errors} forceClass="rounded-none w-1/2" />
              </div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="contact-phone">
                  Contact Phone Number
                </label>
                <InputBlock3 type="text" field="phone" label="Contact Phone Number" register={register} errors={errors} forceClass="rounded-none w-1/2" />
              </div>
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="">
                </label>
                <button type="submit" className="w-1/2 btn bg-blue-600 text-white mt-4 ">Submit Registration</button>
              </div>
            </div>
          </form>
        </main>
      </section>
    </div>
  )
  return content
}
export default SignUp
