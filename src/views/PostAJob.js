import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector, useDispatch } from "react-redux";
import {
  useGetCampusesMutation,
  useGetEmployerSuggestionsQuery,
  usePostAJobMutation,
  useGetEmployerQuery,
  useUpdateEmployerMutation,
} from "../store/apiSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
import { useNavigate, Link, NavLink } from "react-router-dom";
//import { setemployer.jobCredits } from "./postSlice"
import { regions } from "../utils/data";
import { setJob, setId, setEmployer } from '../store/postsSlice'

const validationSchema = yup.object({
  // username: yup.string().required('Missing username'),
  // email: yup.string().required('Missing email').email('Invalid email format'),
  //password: yup.string().required('Missing password'),
}).required()
const PostAJob = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const region = useSelector((state) => state.posts.region);
  const employer = useSelector((state) => state.posts.employer);
  const { register, handleSubmit, setValue, watch, formState: { errors }, setError } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      salary_period: 'yearly',
      currency: 'USD',
      activation_date: new Date().toISOString().substring(0, 10),
      expiration_date: new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10),
      remote: 'Onsite'
    }
  })
  //const { setValue } = useFormContext();
  const [jobStatus, setJobStatus] = useState('Post Job');
  const editorContent = watch("description");
  const editorContent1 = watch("employer_name");
  console.log('errors', errors)
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
 
  const navigate = useNavigate();
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
  const handleSelectChange = (value, fieldName) => {
    updatePostFormData({ [fieldName]: value });
  };
  const handleInputClick = () => {
    setShowSuggestions(true);
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
  const onEditorStateChange1 = (company_name, employer_id, Region, country, logo) => {
    console.log("======onEditorStateChange1=====", company_name, employer_id, Region, country, logo)
    setValue("company_name1", company_name);
    setValue("employer_id", employer_id || 0);
    setValue("Region", Region);
    setValue("country", country);
    setValue("logo", logo);
    //alert(id)

    dispatch(setEmployer({ company_name, employer_id, logo }))

    if (employer_id) getCampuses({ id: employer_id })
  }
  useEffect(() => {
    register("description", { required: false });
    register("company_name1", { required: false });
    register("country", { required: false });
  }, [register]);
  useEffect(() => {
    setValue("company_name1", employer.company_name);
    setValue("employer_id", employer.employer_id);    
    setValue("headlineOnly", employer.clientType == "Headline Only");
  }, [employer]);
  function findValueForKey(array, keyToFind) {
    for (const obj of array) {
      const keys = Object.keys(obj);
      if (keys.includes(keyToFind)) {
        return obj[keyToFind];
      }
    }
    return null;
  }
  function getTodaysDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day =
      date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate();
    return `${year}-${month}-${day}`;
  }
  function calculateExpiryDate(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
  const [postAJob, { data, isLoadingpostAJob, isSuccess, isError, error }] = usePostAJobMutation();
  const [getCampuses, { data: dataCampuses }] = useGetCampusesMutation();
  let content, content1;
  const recordRef = useRef({ employer_id: userid });
  const handleChange = (newValue, flag) => {
    recordRef.current = { ...recordRef.current, [flag]: newValue };
    console.log(recordRef.current);
    // setNewList([]);
    // setNewListName(null);
    // setNewList1([]);
    // setNewList1Name(null);
  };
  const categoryCovert = {
    "Human Resources": "subcategory_hr_jobs"
  }
  const handleChange1 = (newValue) => {
    console.log(newValue, findValueForKey(job_category, newValue))
    setNewList(findValueForKey(job_category, newValue));
    setNewListName(newValue);
    setNewList1([]);
    setNewList1Name(null);
  };
  const handleChange2 = (newValue, flag) => {
    console.log(newValue, flag, findValueForKey(job_category, newValue))
    recordRef.current = { ...recordRef.current, [flag]: newValue };
    console.log(recordRef.current);
    //console.log(findValueForKey(job_category, newValue));
    //console.log(findValueForKey(job_category, 'Executive'));
    setNewList1(findValueForKey(job_category, newValue));
    setNewList1Name(newValue);
    setValue(categoryCovert[newListName], newValue);
  };
  const handleChange3 = (newValue, flag) => {
    recordRef.current = { ...recordRef.current, [flag]: newValue };
    console.log(recordRef.current);
  };
  const checkInstitutionName = () => {
    return formState.institution_name
      .toLowerCase()
      .includes(formState.qut.toLowerCase())
      ? (formState.showInternalOnly = true)
      : (formState.showInternalOnly = false);
  };
  const onSubmit = async (data) => {
    console.log('data', data)
    const response = await postAJob(data);
    navigate("/admin-home/");
  }
  content = (
    <div className="max-w-2xl mx-auto flex flex-col gap-4  px-4 pb-16">
      <ul className=" mb-8 text-left items-stretch grid grid-cols-1 md:grid-cols-2 gap-4   px-1  w-full ">
        {/* <div className="flex flex-col gap-2">
          <div className="card w-50 bg-base-100 shadow-xl">
            <div className="card-body bg-gradient-to-t from-gray-200 to-white  rounded-xl py-4">
              <h2 className="card-title text-base ">{employer.company_name}</h2>
            </div>
          </div>
        </div> */}
        {employer.logo &&
          <div className="card w-[208px] h-[208px] bg-base-100 shadow-xl grid place-items-center">
            <div className="w-[208px] h-[208px] mr-4 grid place-items-center">
              <img src={`https://academicjobs.s3.amazonaws.com/img/university-logo/${employer.logo}`}
                alt="" //{company_name}
                className="  object-contain rounded-md bg-white "
              />
            </div>
          </div>
        }
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}
        className="">
        <div className=" w-[100%] mx-auto flex flex-col gap-1 ">
          {/* <label className="label-text text-xs">Institution Name Search</label> */}
          <label className="label-text text-xs">Institution Name</label>
          <UniSearchBlock
            register={register}
            field="employer_name"
            customKey="employer_name"
            label="employer_name"
            value1={employer.company_name}
            forceClass="mb-6"
            onChange={onEditorStateChange1}
          />
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
            {master_category_job_type.map((type, index) => (
              <option key={index} value={type}>
                {type}
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
                    className="radio radio-warning radio-xs mr-1"
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
                    className="radio radio-warning radio-xs mr-1"
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
                    className="radio radio-warning radio-xs mr-1"
                    value="Hybrid"
                  />
                  <span className="label-text text-xs">Hybrid</span>
                </label>
              </div>
            </div>
            <div className="flex">
              <SelectBlock2 list={regions} field="Region" label="Region" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
              <SelectBlock2 list={countries} field="country" label="Country" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
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
              <SelectBlock2 list={currencies} field="currency" label="Currency" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
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
              className="radio radio-warning radio-xs mr-1"
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
              className="radio radio-warning radio-xs mr-1"
              value="Online"
              checked={formState.apply_type === "Online"}
              onChange={(event) => handleInputChange(event, "apply_type")}
            />
            <span className="label-text text-xs">Website Link</span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <InputBlock2 type="date" field="activation_date" label="Post Date" register={register} errors={errors} forceClass="mb-6"
          />
          <InputBlock2 type="date" field="expiration_date" label="Expiration Date" register={register} errors={errors} forceClass="mb-6"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success ml-auto"
          ref={submitRef}
        >
          {jobStatus}
        </button>
        {isSuccess && (
          <div className="bg-yellow-500">
            <div> Pls view your posted job via:</div>
            <div>
              <Link
                to={`/jobs/${"company_name"
                  .replace(/\W+/g, "-")
                  .toLowerCase()}/${data.jobId}/`}
                className="btn "
              >
                {`https://academicjobs.com/jobs/company_name/${data.jobId}`}
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
export default PostAJob;
