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
//import { setuserInfo.jobCredits } from "./postSlice"
import { regions } from "../utils/data";
import {
  useSendEmailMutation
} from '../store/apiSlice'
const validationSchema = yup.object({
  // username: yup.string().required('Missing username'),
  // email: yup.string().required('Missing email').email('Invalid email format'),
  //password: yup.string().required('Missing password'),
}).required()
const PostAJobForm = () => {
  useEffect(() => {
    window.location.replace("https://www.academicjobs.com/jobelephant/post-job");
  }, []);
  const [sendEmail, {
    isSuccess: isSendSuccess,
    isError: isSendError,
    error: senderror
  }] = useSendEmailMutation()
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { register, handleSubmit, setValue, watch, formState: { errors }, setError } = useForm()
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
  const dispatch = useDispatch();
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
  useEffect(() => {
    register("description", { required: false });
  }, [register]);
  const onEditorStateChange = (editorState) => {
    setValue("description", editorState);
  };
  const [postAJob, { data, isLoadingpostAJob, isSuccess, isError, error }] = usePostAJobMutation();
  let content, content1;
  const onSubmit = async (data) => {
    //e.preventDefault();
    console.log('data', data)
    const response = await sendEmail(data);
    //try {
    console.log(response)
    // Check the response for success or failure
    if (response) {
      alert('job sent successful!');
    } else {
      alert('job sent NOT successful!');
    }
  }
  content = (
    <div className="max-w-2xl mx-auto flex flex-col gap-4  px-4 pb-16">
      <h1 className="text-5xl font-semibold  text-[#f4a10c] ">Let's Do This!</h1>
      <h4 className=" text-gray-700 text-3xl font-semibold mt-4">Simply select your package and fill in the form. We will do the rest for you.</h4>
    
      <h4 className=" font-semibold text-lg mt-4"> <span className=" text-[#f4a10c]">Fun Fact: </span> We make it easy for you at Academic Jobs! We are your personal assistant, loading the jobs for you when you just don't have the time. That makes it fun for you, and a nice fact for you to remember always.  </h4>
      <form onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4">
        <div className="flex justify-between gap-2">
          <label>
            Basic Listing
            <input type="checkbox" {...register('basicListing')} />
          </label>
          <label>
            Priority Listing
            <input type="checkbox" {...register('priorityListing')} />
          </label>
          <label>
            5 Jobs Pack
            <input type="checkbox" {...register('5JobsPack')} />
          </label>
          <label>
            JobElephant Listing
            <input type="checkbox" {...register('jobElephantListing')} />
          </label>
        </div>
        <InputBlock2 type="text" field="name" label="Name" register={register} errors={errors} forceClass="" />
        <InputBlock2 type="text" field="email" label="Email" register={register} errors={errors} forceClass="" />
        <InputBlock2 type="text" field="phone" label="Phone" register={register} errors={errors} forceClass="" />
        <InputBlock2 type="text" field="orgnization_name" label="Orgnization Name" register={register} errors={errors} forceClass="" />
        <InputBlock2 type="text" field="title" label="Job Title" register={register} errors={errors} forceClass="" />
        <div>Job Description</div>
        <div className="">
          <ReactQuill
            className="w-full mb-2"
            value={editorContent}
            onChange={onEditorStateChange}
          />
        </div>
        <InputBlock2 type="text" field="jobUrl" label="Job Url" register={register} errors={errors} forceClass="" />
        <button
          type="submit"
          className="btn bg-orange-400 ml-auto"
          ref={submitRef}
        >
          Post My Job Now
        </button>
      </form>
      {content1}
    </div>
  );
  return (
    <div className="overflow-y w-full">
      {content}
    </div>
  );
};
export default PostAJobForm;
