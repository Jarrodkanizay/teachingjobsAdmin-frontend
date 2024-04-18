import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector, useDispatch } from "react-redux";
import {
  useGetEmployerSuggestionsQuery,
  useGetOrderByIdQuery,
  useGetCampusesMutation,
  usePostAJobMutation,
  useGetEmployerQuery,
  useUpdateEmployerMutation,
} from "../store/apiSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Payment2 from "./Payment2";
import { useParams } from "react-router-dom";
import InputBlock from "../components/ui/InputPostAJob";
import InputBlock2 from "./InputBlock2";
import SelectBlock2 from "./SelectBlock2";
import SelectBlock from "./SelectBlock";
import UniSearchBlock from "./UniSearchBlock";
import SelectBlockNew from "./SelectBlockNew";
import SelectBlock1 from "./SelectBlock1";
import job_category from "../data/JobCategories.json";
import { countries } from "../utils/data";
import { currencies } from "../utils/data";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
//import { setuserInfo.jobCredits } from "./postSlice"
import { regions } from "../utils/data";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm1 from "./CheckoutForm1";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
const validationSchema = yup.object({
  // username: yup.string().required('Missing username'),
  // email: yup.string().required('Missing email').email('Invalid email format'),
  //password: yup.string().required('Missing password'),
}).required()
const QuickPayPost = () => {
  ///////////////////////////////
  const userInfo = useSelector((state) => state.auth.userInfo);
  const orderId = useSelector((state) => state.auth.orderId);
  const { data: dataGetOrder, isLoading, isFetching, isSuccess: isSuccessGetOrder } = useGetOrderByIdQuery({ id: orderId })
  // const productid = useSelector((state) => state.posts.productid)
  // const productQty = useSelector((state) => state.posts.productQty)
  // const priorityQty = useSelector((state) => state.posts.priorityQty)
  // const socialQty = useSelector((state) => state.posts.socialQty)
  // const socialAddOn = useSelector((state) => state.posts.socialAddOn);
  // const priorityAddOn = useSelector((state) => state.posts.priorityAddOn);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  // useEffect(() => {
  //   fetch("https://api2.sciencejobs.com.au/api/stripeconfig").then(async (r) => {
  //     const { publishableKey } = await r.json();
  //     setStripePromise(loadStripe(publishableKey));
  //   });
  // }, []);
  // useEffect(() => {
  //   fetch("https://api2.sciencejobs.com.au/api/paymentintent", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       currency: "AUD",
  //       amount: Math.round(totalPrice * 100),
  //       userid: userInfo.id,
  //     }),
  //   }).then(async (result) => {
  //     var { clientSecret } = await result.json();
  //     setClientSecret(clientSecret);
  //   });
  // }, []);
  ////////////////////////////////////////
  //const totalPrice = 1000;
  const region = useSelector((state) => state.posts.region);
  //const userInfo = useSelector((state) => state.auth.userInfo);
  const { register, handleSubmit, setValue, watch, formState: { errors }, setError } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      postedBy: userInfo.id,
      username: '',
      email: '',
      password: '',
      employer_name: userInfo.employer_name,
      employer_id: userInfo.employer_id,
    }
  })
  //const { setValue } = useFormContext();
  const [jobStatus, setJobStatus] = useState('Post Job');
  const editorContent = watch("description");
  const editorContent1 = watch("employer_name");
  //console.log('errors', errors)
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef();
  const submitRef = useRef();
  const countryRef = useRef('');
  const { data: suggestions = [] } = useGetEmployerSuggestionsQuery({ query, country: countryRef.current || "" }, {
  });
  const [newList, setNewList] = useState([]);
  const [noCreditsYN, setNoCreditsYN] = useState(false);
  const [newListName, setNewListName] = useState(null);
  const [newList1, setNewList1] = useState([]);
  const [newList1Name, setNewList1Name] = useState(null);
  const userid = useSelector((state) => state.auth.userid);
  const country = useSelector((state) => state.auth.country);
  const company_name = useSelector((state) => state.auth.company_name);
  const dispatch = useDispatch();
  console.log(company_name)
  console.log(country)
  const job_type = ["Full time", "Part time", "Contractor", "Sessional"];
  // This should be in the database
  const master_category_job_type = [
    "Academic / Faculty",
    "Executive",
    "Human Resources",
    "Industry Jobs",
    "Support /Administration",
    "Other",
  ];
  const [formState, setState] = useState({
    institution_name: "",
    internal_only: false,
    showInternalOnly: false,
    apply_type: "Email",
    job_location_type: "Onsite",
    priority_listing: true,
    socials_listing: true,
    single_job_post_price: 315,
    priority_listing_price: 150,
    socials_listing_price: 150,
    qut: "Queensland University of Technology",
  });
  const totalCartPrice = () => {
    let total = 0;
    if (formState.priority_listing) {
      total += formState.priority_listing_price;
    }
    if (formState.socials_listing) {
      total += formState.socials_listing_price;
    }
    total += formState.single_job_post_price;
    return total;
  };
  const updatePostFormData = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };
  const handleInputChange = (event, fieldName) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    updatePostFormData({ [fieldName]: value });
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const onEditorStateChange = (editorState) => {
    setValue("description", editorState);
  };
  const onEditorStateChange1 = (editorState, id, Region, country) => {
    setValue("employer_name", editorState);
    setValue("employer_id", id || 0);
    setValue("Region", Region);
    setValue("country", country);
    //alert(id)
    if (id) getCampuses({ id })
  }
  useEffect(() => {
    register("description", { required: false });
    register("employer_name", { required: false });
    register("country", { required: false });
  }, [register]);
  // useEffect(() => {
  //   setValue("country", "Albania")
  // }, []);
  function findValueForKey(array, keyToFind) {
    for (const obj of array) {
      const keys = Object.keys(obj);
      if (keys.includes(keyToFind)) {
        return obj[keyToFind];
      }
    }
    return null;
  }
  const [postAJob, { data, isLoadingpostAJob, isSuccess, isError, error }] = usePostAJobMutation();
  const [getCampuses, { data: dataCampuses }] = useGetCampusesMutation();
  let content, content1;
  const recordRef = useRef({ employer_id: userid });
  const handleChange1 = (newValue) => {
    setNewList(findValueForKey(job_category, newValue));
    setNewListName(newValue);
    setNewList1([]);
    setNewList1Name(null);
  };
  const handleChange2 = (newValue, flag) => {
    recordRef.current = { ...recordRef.current, [flag]: newValue };
    console.log(recordRef.current);
    //console.log(findValueForKey(job_category, newValue));
    //console.log(findValueForKey(job_category, 'Executive'));
    setNewList1(findValueForKey(job_category, newValue));
    setNewList1Name(newValue);
  };
  const handleChange3 = (newValue, flag) => {
    recordRef.current = { ...recordRef.current, [flag]: newValue };
    console.log(recordRef.current);
  };
  const onSubmit = async (data) => {
    //e.preventDefault();
    console.log('data', data)
    if (!(userInfo.jobCredits > 0)) {
      setNoCreditsYN(true);
    } else {
      const response = await postAJob(data);
      console.log(response);
      if (response) {
        setJobStatus("Job POSTED!")
        //submitRef.current.innerText = "Job POSTED!";
        setTimeout(() => {
          setJobStatus("Post Job")
          //submitRef.current.innerText = "Post Job";
        }, 5000);
      }
    }
  }
  let content9
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {

    console.log(dataGetOrder)
   
    if (isSuccessGetOrder && dataGetOrder) {
      console.log(dataGetOrder)
      let totalPrice1 = dataGetOrder.totalPrice 
      if (dataGetOrder.country === "Australia") {
        totalPrice1 = dataGetOrder.totalPrice * 1.1
        setTotalPrice(dataGetOrder.totalPrice * 1.1);
      }
      fetch("https://api2.sciencejobs.com.au/api/stripeconfig").then(async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      });
      fetch("https://api2.sciencejobs.com.au/api/paymentintent", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currency: "AUD",
          amount: Math.round(totalPrice1 * 100),
          userid: userInfo.id,
        }),
      }).then(async (result) => {
        var { clientSecret } = await result.json();
        setClientSecret(clientSecret);
      });
    }
  }, [isSuccessGetOrder, dataGetOrder]);
  content = (
    <div className=" max-w-2xl mx-auto flex flex-col gap-4  px-4 pb-16">
      <div className=" font-bold text-lg  flex flex-col gap-4  px-4 pb-16">
        <div className="text-orange-400 text-3xl font-black leading-tight mb-4 mt-0">Great! Let's get your job posted</div>
        <div>
          <div >You now have {userInfo.jobCredits} job credits</div>
          <div className="flex flex-start gap-4">
            <div>With: </div>
            <div>
              <div className="">{userInfo.priorityCredits} priority upgrades</div>
              <div className="">{userInfo.socialCredits} social upgrades</div>
            </div>
          </div>
          {(isSuccessGetOrder && dataGetOrder ) &&
          <div className="border border-orange-500  rounded px-4 py-4">
            <div className="text-orange-400 text-2xl font-black leading-tight mb-4 mt-0">AJ QUICK PAY</div>
            <div className="text-2xl font-black leading-tight mb-4 mt-0">Let's do this!</div>
              <div className="text-2xl font-black leading-tight mb-4 mt-0">cost: {dataGetOrder.totalPrice}</div>
            {(dataGetOrder.country === "Australia") &&
              <>
                <div className="text-2xl font-black leading-tight mb-4 mt-0">GST: {(dataGetOrder.totalPrice * 0.1).toFixed(2)}</div>
                <div className="text-2xl font-black leading-tight mb-4 mt-0">Total cost: {totalPrice.toFixed(2)}</div>
              </>
            }
          </div>}
          <div className="mx-auto max-w-xl">
            {clientSecret && stripePromise && (
              <div className="flex flex-col gap-4">
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              </div>
            )}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto flex flex-col gap-4  px-4 pb-16">
        <div className=" w-[100%] mx-auto flex flex-col gap-1 ">
          {/* <label className="label-text text-xs">Institution Name Search</label> */}
          <label className="label-text text-xs">Institution Name Search</label>
          <UniSearchBlock
            register={register}
            field="employer_name"
            customKey="employer_name"
            label="employer_name"
            value1={userInfo.orgnization_name}
            forceClass="mb-6"
            onChange={onEditorStateChange1}
          />
        </div>
        <div className="flex">
          <SelectBlock2 list={regions} field="Region" label="Region" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
          <SelectBlock2 list={countries} field="country" label="Country" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
        </div>
        <div>
          {dataCampuses?.length > 0 &&
            dataCampuses.map(({ campuse }, i) => <div key={i}>{campuse}</div>)
          }
        </div>
        {/* <div className="flex justify-between mb-6 mt-6">
          <div className="w-[30%]">
            <SelectBlock2 list={countries} field="country" label="Country" register={register} errors={errors} forceClass=" join-item rounded-r-none min-h-[34px]" />
          </div>
        </div> */}
        <InputBlock2 type="text" field="title" label="Job Title" register={register} errors={errors} forceClass="" />
        <div className="mb-6">
          <ReactQuill
            className="w-full mb-6"
            value={editorContent}
            onChange={onEditorStateChange}
          />
        </div>
        <div className=" w-full  flex flex-col  items-start">
          <label className="label-text text-xs">Job Type</label>
          <select className="select select-sm select-bordered w-full font-normal"
            {...register("master_category_job_type")}
            onChange={e => handleChange1(e.target.value)}
          >
            {master_category_job_type.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        {newList?.length > 0 && (
          <div className="pl-6">
            <SelectBlock
              list={newList}
              label={newListName}
              customKey="newListName"
              onChange={handleChange2}
              forceClass="mt-1"
            />
          </div>
        )}
        <div className="pl-12">
          {newList1?.length > 0 && (
            <SelectBlock
              list={newList1}
              label={newList1Name}
              customKey="newListName"
              onChange={handleChange3}
              forceClass="mt-1"
            />
          )}
        </div>
        <div className="grid grid-cols-2 gap-7 mb-6 mt-6">
          <SelectBlock2 list={job_type} field="job_type" label="Position Type" register={register} errors={errors} forceClass="" />
          <div>
            <InputBlock2 type="text" field="location" label="Job Location" register={register} errors={errors} forceClass="" />
            <div className="flex items-center justify-start">
              <div className="form-control items-start mb-2 mr-4">
                <label className="flex items-start justify-start label cursor-pointer">
                  <input
                    {...register("remote")}
                    type="radio"
                    className="radio  radio-xs mr-1"
                    value="Onsite"
                  />
                  <span className="label-text text-xs">Onsite</span>
                </label>
              </div>
              <div className="form-control items-start mb-2 mr-4">
                <label className="flex items-start justify-start label cursor-pointer">
                  <input
                    {...register("remote")}
                    type="radio"
                    className="radio  radio-xs mr-1"
                    value="Remote"
                  />
                  <span className="label-text text-xs">Remote</span>
                </label>
              </div>
              <div className="form-control items-start mb-2">
                <label className="flex items-start justify-start label cursor-pointer">
                  <input
                    {...register("remote")}
                    type="radio"
                    className="radio  radio-xs mr-1"
                    value="Hybrid"
                  />
                  <span className="label-text text-xs">Hybrid</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex">
          <InputBlock2 type="text" field="state" label="State / Territory" register={register} errors={errors} forceClass="" />
          <InputBlock2 type="text" field="city" label="City" register={register} errors={errors} forceClass="" />
        </div> */}
        <div className="label">
          <span className="label-text text-xs font-bold mb-[-10px]">
            Salary Range
          </span>
        </div>
        <div className="join flex mb-6">
          <div className="max-w-[80px]">
            <div>
              <SelectBlock2 list={currencies} field="currencies" label="Currency" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
            </div>
          </div>
          <div className="flex-grow">
            <InputBlock2 type="text" field="salary_from" label="$From" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
          </div>
          <div className="flex-grow">
            <InputBlock2 type="text" field="salary_to" label="$To" register={register} errors={errors} forceClass="rounded-none min-h-[34px]" />
          </div>
          <div className="max-w-[100px]">
            <div>
              <SelectBlock2 list={["yearly", "monthly", "weekly", "daily", "hourly"]} field="frequency" label="Frequency" register={register} errors={errors} forceClass="join-item rounded-l-none min-h-[34px]" />
            </div>
          </div>
        </div>
        <InputBlock2 type="text" field="how_to_apply" label="How To Apply" register={register} errors={errors} forceClass=""
        />
        <div className="form-control flex flex-row items-start justify-start mb-2">
          <label className="flex items-start justify-start label cursor-pointer mr-4">
            <input
              type="radio"
              name="apply_type"
              className="radio  radio-xs mr-1"
              value="Email"
              checked={formState.apply_type === "Email"}
              onChange={(event) => handleInputChange(event, "apply_type")}
            />
            <span className="label-text text-xs">Email</span>
          </label>
          <label className="flex items-start justify-start label cursor-pointer">
            <input
              type="radio"
              name="apply_type"
              className="radio  radio-xs mr-1"
              value="Online"
              checked={formState.apply_type === "Online"}
              onChange={(event) => handleInputChange(event, "apply_type")}
            />
            <span className="label-text text-xs">Website Link</span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <InputBlock2 type="date" field="post_date" label="Post Date" register={register} errors={errors} forceClass="mb-6"
          />
          <InputBlock2 type="date" field="expiration_date" label="Expiration Date" register={register} errors={errors} forceClass="mb-6"
          />
        </div>
        {/* Checkout Table */}
        <div className="overflow-x-auto mt-8 mb-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="w-full">Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Post row */}
              <tr>
                <td className="flex justify-between items-center">
                  Single Job Post{" "}
                </td>
                <td>${formState.single_job_post_price}</td>
              </tr>
              {/* Priority / Featured row */}
              <tr>
                <td className="flex justify-between items-center">
                  <span>Priority (Featured) Listing</span>{" "}
                  <input
                    type="checkbox"
                    name="priority_listing"
                    className="toggle toggle-sm toggle-success"
                    value="Priority (Featured) Listing"
                    checked={formState.priority_listing}
                    onChange={(event) =>
                      handleInputChange(event, "priority_listing")
                    }
                  />
                </td>
                <td>
                  $
                  {formState.priority_listing
                    ? formState.priority_listing_price
                    : 0}
                </td>
              </tr>
              {/* Promote on Socials row */}
              <tr>
                <td className="flex justify-between items-center">
                  <span>Promote on Socials</span>{" "}
                  <input
                    type="checkbox"
                    name="socials_listing"
                    className="toggle toggle-sm toggle-primary"
                    value="Promote on Socials"
                    checked={formState.socials_listing}
                    onChange={(event) =>
                      handleInputChange(event, "socials_listing")
                    }
                  />
                </td>
                <td>
                  $
                  {formState.socials_listing
                    ? formState.socials_listing_price
                    : 0}
                </td>
              </tr>
              {/* Total last row */}
              <tr className="border-y-2">
                <td className="flex justify-between items-center">
                  <span className="ml-auto font-bold uppercase mt-1">
                    Total Price:
                  </span>
                </td>
                <td className="text-green-600 text-lg">${totalCartPrice()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex mt-4 mb-6">
          <button className="btn btn-info">Save Post</button>
          <button
            type="submit"
            className="btn btn-success ml-auto"
            ref={submitRef}
          // onClick={async (e) => {
          //   e.preventDefault();
          //   if (!(userInfo.jobCredits > 0)) {
          //     setNoCreditsYN(true);
          //   } else {
          //     const response = await postAJob(recordRef.current);
          //     console.log(response);
          //     if (response) {
          //       e.target.innerText = "Job POSTED!";
          //       setTimeout(() => {
          //         e.target.innerText = "Post Job";
          //       }, 5000);
          //     }
          //   }
          // }}
          >
            {jobStatus}
          </button>
        </div>
        {isSuccess && (
          <div className="bg-yellow-500">
            <div> Pls view your posted job via:</div>
            <div>
              <Link
                to={`/jobs/${"company_name"
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${data.id}/`}
                className="btn "
              >
                {`https://academicjobs.com/jobs/company_name/${data.id}`}
              </Link>
            </div>
          </div>
        )}
      </form>
      {content1}
    </div>
  );
  return (
    <div className="overflow-y w-full">
      {content}
      {noCreditsYN && (
        <div className="flex flex-col gap-4">
          <div>You do not have any credits, pls purchase the products:</div>
          <NavLink
            to={`/post-a-job`}
            className="text-[#f4a10c]  font-bold shadow-md rounded-full px-4 py-2 border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
            activeClassName="post-a-job "
          >
            Purchase Products
          </NavLink>
        </div>
      )}
    </div>
  );
};
export default QuickPayPost;
