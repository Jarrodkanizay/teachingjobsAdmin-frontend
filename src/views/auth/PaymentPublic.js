import { useRef, useState, useEffect } from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputBlock3 from "../InputBlock3";
import { setCredentials, isLoggedInOn, isLoggedInOff } from './authSlice'
import { useSignUpBuyMutation } from './authApiSlice'
import { useSelector, useDispatch } from "react-redux";
import { decreasePriorityQtyCart, increasePriorityQtyCart, decreaseSocialQtyCart, increaseSocialQtyCart, increaseCart, decreaseCart, toggleAddOnYN, toggleSocialAddOn, togglePriorityAddOn } from "../../store/postsSlice"
import { useParams } from 'react-router-dom';
import { setEmail1, setUserid, setCompany_name, setCountry } from './authSlice';
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import UniSearchBlock from "../UniSearchBlock";
import Modal1 from '../../components/Modal1'
import SelectBlock2 from "../SelectBlock2";
import { countries } from "../../utils/data";
const PaymentPublic = () => {
  const [hasGST, setHasGST] = useState(true);
  const { id } = useParams();
  const pack = [{ name: 'Basic Listing', price: 315 }, { name: 'Priority Listing', price: 465 }]
  const { name, price } = pack[id - 1]
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
  const { from } = location.state || { from: { pathname: '/' } }
  const productid = useSelector((state) => state.posts.productid)
  const productQty = useSelector((state) => state.posts.productQty)
  const priorityQty = useSelector((state) => state.posts.priorityQty)
  const socialQty = useSelector((state) => state.posts.socialQty)
  const socialAddOn = useSelector((state) => state.posts.socialAddOn);
  const priorityAddOn = useSelector((state) => state.posts.priorityAddOn);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signUpBuy, { isLoading }] = useSignUpBuyMutation()
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
    const totalPrice = price * productQty + (+priorityAddOn) * priorityQty * 99 + (+socialAddOn) * socialQty * 99
    try {
      const { accessToken } = await signUpBuy({ ...data, productid, productQty, totalPrice, priorityQty: (+priorityAddOn) * priorityQty, socialQty: (+socialAddOn) * socialQty }).unwrap()
      dispatch(setCredentials({ accessToken }))

      navigate("/employer-center/quick-pay-post/");
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
    //if()
    setIsOpen(true)
  }, []);
  const inputErrClass = 'w-full text-xs font-bold text-red-700'
  const handleCompanyNameInput = (newValue, flag) => setCompany_name(newValue)
  content = (
    <div className='w-full  mt-12'>
      <div key="1" className="max-w-3xl mx-auto p-6">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12  lg:py-16 ">
            <h1 className="text-3xl font-bold text-gray-900">Purchase Job Postings</h1>
            <p className="mt-2 text-sm text-gray-500">* Indicates Required Fields</p>
            <div className="mt-8">
              <div className="flex items-center">
                <TfiShoppingCart className="h-6 w-6 text-red-600" />
                <h2 className="ml-4 text-2xl font-semibold text-red-600">Items in Your Cart</h2>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">{name}</h2>
        <div className="border-t border-b border-gray-300 py-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">{name} ${price} each</h3>
              <p className="text-gray-600">
                Purchases of two or fewer credits must be used within 30 days of the transaction. Purchases of three
                credits must be used within 90 days of the transaction.
              </p>
            </div>
            <span className="text-xl font-semibold">${price * productQty} </span>
          </div>
          <div className="flex justify-between items-start mt-4">
            <div>
              <h3 className="text-xl font-semibold">Quantity</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button className="border border-gray-300 px-2"
                onClick={() => {
                  dispatch(decreaseCart())
                }}
              >-</button>
              <span>{productQty}</span>
              <button className="border border-gray-300 px-2"
                onClick={() => {
                  dispatch(increaseCart())
                }}
              >+</button>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold my-4">Upgrades</h2>
        <div className="border-t border-b border-gray-300 py-4">
          <div class="flex items-center space-x-2">
            <input type="checkbox" className="toggle toggle-info  toggle-lg" checked={priorityAddOn}
              onChange={() => dispatch(togglePriorityAddOn())}
            />
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="feature-switch"
            >
              Priority Add-on $99.00 each
            </label>
          </div>
          <div className="flex justify-between items-start mt-4">
            <div>
              <h3 className="text-xl font-semibold">Priority Add-on  $99.00 each</h3>
              <p className="text-gray-600">Boost your job's exposure by up to 100%</p>
            </div>
            <span className="text-xl font-semibold">{priorityAddOn ? 99 * priorityQty : '$0.00'}</span>
          </div>
          <div className="flex justify-between items-start mt-4">
            <div>
              <h3 className="text-xl font-semibold">Quantity</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button className="border border-gray-300 px-2"
                onClick={() => {
                  dispatch(decreasePriorityQtyCart())
                }}
              >-</button>
              <span>{priorityQty}</span>
              <button className="border border-gray-300 px-2"
                onClick={() => {
                  dispatch(increasePriorityQtyCart())
                }}
              >+</button>
            </div>
          </div>
          <div class="mt-10 flex items-center space-x-2">
            <input type="checkbox" className="toggle toggle-info  toggle-lg" checked={socialAddOn}
              onChange={() => dispatch(toggleSocialAddOn())}
            />
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="feature-switch"
            >
              Social Add-on $99.00 each
            </label>
          </div>
          <div className="flex justify-between items-start mt-4">
            <div>
              <h3 className="text-xl font-semibold">Social Add-on $99.00 each</h3>
              <p className="text-gray-600">Boost your job's exposure by up to 100%</p>
            </div>
            <span className="text-xl font-semibold">{socialAddOn ? 99 * socialQty : '$0.00'}</span>
          </div>
          <div className="flex justify-between items-start mt-4">
            <div>
              <h3 className="text-xl font-semibold">Quantity</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button className="border border-gray-300 px-2"
                onClick={() => {
                  dispatch(decreaseSocialQtyCart())
                }}
              >-</button>
              <span>{socialQty}</span>
              <button className="border border-gray-300 px-2"
                onClick={() => {
                  dispatch(increaseSocialQtyCart())
                  //alert()
                }}
              >+</button>
            </div>
          </div>
        </div>
        <div className="text-right mt-6">
          <h3 className="text-2xl font-semibold">Total:  ${price * productQty + (+priorityAddOn) * priorityQty * 99 + (+socialAddOn) * socialQty * 99}.00</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <h2 className="text-2xl font-semibold text-red-600 py-6">Company Infomation</h2>
            <div className="flex flex-col gap-2">
              <div role="radiogroup" aria-required="true" aria-invalid="false">
                <label className="font-semibold">User Type</label>
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
              <InputBlock3 type="text" field="password" label="Passord*" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
              <InputBlock3 type="text" field="retypePassword" label="Retype Passord*" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
              <div>
                <UniSearchBlock
                  register={register}
                  field="employer_name"
                  customKey="company_name*"
                  label="Company Name*"
                  value1={""}
                  onChange={handleCompanyNameInput}
                  forceClass="w-full"
                />
                {errors.company_name && (
                  <p className={inputErrClass}>{errors.company_name}</p>
                )}
              </div>
              {/* <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700 w-1/2" htmlFor="country">
                  Country
                </label>
                <InputBlock3 type="text" field="country" label="Country*" register={register} errors={errors} forceClass="rounded-none w-1/2" />
              </div> */}
              <SelectBlock2 list={countries} field="country" label="Country*" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold text-red-600 py-6">Billing Infomation</h2>
            <div className="flex flex-col gap-2">
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
                <button type="submit" className="w-1/2 btn bg-blue-600 text-white mt-4 ">Complete Purchase</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {
        isOpen &&
        <Modal1>
          <div className="flex flex-col justify-center items-center gap-6 w-[40%]  bg-gray-50 rounded py-8">
            <div className="w-[400px] flex flex-col justify-start gap-4  py-8">
              <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Existing Customer</h3>
                <div className="flex flex-col space-y-4">
                  <Link to="/Login"
                    className='btn btn-outline'>
                    Returning User: Sign In
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">New Customer</h3>
                <input className="input w-full" placeholder="Email" />
              </div>
              <button
                className='btn btn-outline bg-gray-400'
                onClick={() => {
                  setIsOpen(false)
                }}
              >Continue with Posting</button>
            </div>
          </div>
        </Modal1>
      }
    </div >
  )
  return content
}
export default PaymentPublic
