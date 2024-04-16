import React, { useState, useEffect, useRef, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector, useDispatch } from "react-redux";
import {
    useGetCampusesMutation,
    useGetEmployerSuggestionsQuery,
    usePostAJobMutation,
    useGetEmployerQuery,
    useUpdateEmployerMutation,
    useUpdateJobMutation,
    useGetJobByIdQuery,
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
import job_category from "../data/JobCategories1.json";
import { countries } from "../utils/data";
import { currencies } from "../utils/data";
import { useNavigate, Link, NavLink } from "react-router-dom";
//import { setemployer.jobCredits } from "./postSlice"
import { regions } from "../utils/data";
import { setJob, setId, setEmployer } from '../store/postsSlice'
import {
    useSendEmail3Mutation
} from '../store/apiSlice'
import { BsCheckLg } from "react-icons/bs";
const validationSchema = yup.object({
    // username: yup.string().required('Missing username'),
    // email: yup.string().required('Missing email').email('Invalid email format'),
    //password: yup.string().required('Missing password'),
}).required()
const academic_positions =
{
    "Faculty Positions": [
        "Lecturer/Instructor",
        "Senior Lecturer",
        "Sessional Lecturer",
        "Tutor",
        "Teaching Assistant",
        "Adjunct Faculty",
        "Post-Doc",
        "Tenure",
        "Tenure-track",
    ],
    "Research Positions": [
        "Research",
        "Scientist/Associate",
        "Senior Research Assistant",
        "Research Assistant",
        "Research Fellow",
        "Post Doc Research Fellow",
        "Research Coordinator",
        "Research Manager",
        "Research Technician",
        "Faculty Researcher"
    ]
    ,
    "Professorial Positions": [
        "Professor",
        "Assistant Professor",
        "Associate Professor",
        "Adjunct Professor",
        "Visiting Professor",
        "Research Professor",
        "Clinical Professor/Prof of Practice",
        "Emeritus Professor",
        "Visiting Scholar",
        "Visiting Fellow"
    ],
    "Executive Positions": [
        "Assistant/Associate Head",
        "Dean",
        "Assistant/Associate Dean",
        "Director/Manager",
        "Assistant Director",
        "Dept. Head/Head/Chair",
        "Endowed",
        "Program Coordinator",
        "Clinical Chair",
    ],
    "Others": [
        "Sessional Academic",
        "Clinical Educator",
        "Academic Advisor",
        "Curriculum Developer",
        "Educational Technologist",
        "Learning Specialist",
        "Academic Coach",
    ],
    "Others1": [
        "Lab Manager",
        "Program Director",
        "Academic Coordinator",
        "Exam Supervisor",
        "Librarian",
        "Faculty Development Specialist",
        "Instructional Designer"
    ],
}
const JobAddEdit = ({ job }) => {
    console.log(job)
    const isAddMode = !job
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo);
    const employer = useSelector((state) => state.posts.employer);
    const [startTime, setStartTime] = useState(Date.now());
    let defaultValues
    let buttonText
    const { control, register, reset, handleSubmit, setValue, watch, getValues, formState: { errors }, setError } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: useMemo(() => {
            return defaultValues;
        }, [defaultValues])
    })
    // const master_category_job_type = useWatch({
    //   name: "master_category_job_type",
    //   defaultValue: "default", // default value before the render
    // })
    let master_category_job_type = watch("master_category_job_type");
    //alert(master_category_job_type)
    const [sendEmail, {
        isSuccess: isSuccessSendEmail,
        isError: isErrorSendEmail,
        error: errorSendEmail
    }] = useSendEmail3Mutation()
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
        if (!job) {
            buttonText = "Post Job"
            reset({
                salary_period: 'yearly',
                currency: 'AUD',
                activation_date: new Date().toISOString().substring(0, 10),
                expiration_date: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10),
                remote: 'Onsite',
                position_type: ''
            })
            if (employer.clientType == "unlimited") {
                setValue('featured', true)
            }
            setValue("headlineOnly", employer.clientType === "HeadlineOnly");
            master_category_job_type = 'All Teaching Jobs'
            setValue('master_category_job_type', 'All Teaching Jobs')
        } else {
            console.log("=========Job=========", job)
            buttonText = "Update Job"
            reset(job);
            master_category_job_type = job.master_category_job_type
            setValue('activation_date', new Date(job.activation_date).toISOString().split('T')[0])
            setValue('expiration_date', new Date(job.expiration_date).toISOString().split('T')[0])
            dispatch(setEmployer({ company_name: job?.employer?.company_name, employer_id: job.employer_id, logo: job.employer?.logo, employerPageURL: job.employer.employerPageURL, clientType: job.clientType }))
        }
        // setValue('postedBy', userInfo.id)
        // if (employer) {
        //   setLogo(employer?.logo)
        //   reset(employer);
        // } else {
        //   reset({ featured: true, });
        // }
    }, [job]);
    useEffect(() => {
        register("description", { required: false });
        register("company_name1", { required: false });
        register("country", { required: false });
    }, [register]);
    useEffect(() => {
        if (!job) {
            setValue("company_name1", employer.company_name);
            setValue("employer_id", employer.employer_id);
            setValue("headlineOnly", employer.clientType === "HeadlineOnly");
        }
    }, [employer]);
    const { ref } = usePlacesWidget({
        apiKey: "AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA", //process.env.REACT_APP_GOOGLE,
        options: {
            componentRestrictions: { country: "Australia" },
        },
        onPlaceSelected: (place) => {
            //formik.setFieldValue("country", place.formatted_address);
        },
    });
    // if (!job) {
    //   buttonText="Post Job"
    //   defaultValues = {
    //     salary_period: 'yearly',
    //     currency: 'USD',
    //     activation_date: new Date().toISOString().substring(0, 10),
    //     expiration_date: new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10),
    //     remote: 'Onsite'
    //   }
    // } else {
    //   console.log("=========Job=========", job)
    //   buttonText = "Update Job"
    //   defaultValues = job
    //   setValue('activation_date', job.activation_date.split(' ')[0]);
    // }
    const [jobStatus, setJobStatus] = useState("Save Post");
    const editorContent = watch("description");
    const editorContent1 = watch("employer_name");
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(true);
    const inputRef = useRef();
    const submitRef = useRef();
    const countryRef = useRef('');
    const { data: suggestions = [] } = useGetEmployerSuggestionsQuery({ query, country: countryRef.current || "" }, {
    });
    const [updateJob, { isLoading: isLoadingUpdateJob, isSuccess: isSuccessUpdateJob, isError: isErrorUpdateJob, error: errorUpdateJob, }] =
        useUpdateJobMutation();
    const [postAJob, { data: dataPostAJob, isLoading: isLoadingPostAJob, isSuccess: isSuccessPostAJob, isError: isErrorPostAJob, error: errorPostAJob }] = usePostAJobMutation();
    const [newList, setNewList] = useState([]);
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
    //alert(process.env.REACT_APP_ENV)
    //alert(process.env.REACT_APP_GOOGLE)
    // const master_category_job_type = [
    //   "Academic / Faculty",
    //   "Executive",
    //   "Human Resources",
    //   "Industry Jobs",
    //   "Support /Administration",
    //   "Other",
    // ];
    const onEditorStateChange = (editorState) => {
        setValue("description", editorState);
    };
    const onEditorStateChange1 = (company_name, employer_id, Region, country, logo, employerPageURL, clientType) => {
        // console.log("======onEditorStateChange1=====", company_name, employer_id, Region, country, logo)
        setValue("company_name1", company_name);
        setValue("employer_id", employer_id || 0);
        setValue("Region", Region);
        setValue("country", country);
        setValue("logo", logo);
        // setValue("clientType", clientType);

        //alert(id)
        dispatch(setEmployer({ company_name, employer_id, logo, employerPageURL, clientType }))
        if (employer_id) getCampuses({ id: employer_id })
    }
    function findValueForKey(array, keyToFind) {
        for (const obj of array) {
            const keys = Object.keys(obj);
            if (keys.includes(keyToFind)) {
                return obj[keyToFind];
            }
        }
        return null;
    }
    const [getCampuses, { data: dataCampuses }] = useGetCampusesMutation();
    let content, content1, content2;
    const recordRef = useRef({ employer_id: userid });
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
        setNewList1(findValueForKey(job_category, newValue));
        setNewList1Name(newValue);
    };
    const handleChange3 = (newValue, flag) => {
        recordRef.current = { ...recordRef.current, [flag]: newValue };
        console.log(recordRef.current);
    };
    const onSubmit = async (data) => {
        console.log('data', data)
        return isAddMode
            ? createJob(data)
            : updateJob1({ id: job?.id, ...data })
    }
    async function createJob(data) {
        console.log(data)
        setJobStatus("Job Posting ......!")
        const { data: { id } } = await postAJob({ ...data, jobPostDuration: Math.ceil((Date.now() - startTime) / 1000), postedBy: userInfo.id });
        setJobStatus("Job POSTED!")
        if (id > 0) {
            setJobStatus("Job POSTED! Now Sending Email ....")
            if (getValues("email1")) {
                const { email1, firstName1, title } = data
                await sendEmail({ email: email1, firstName: firstName1, jobId: id, jobTitle: title });
            }
            if (getValues("email2")) {
                const { email2, firstName2, title } = data
                await sendEmail({ email: email2, firstName: firstName2, jobId: id, jobTitle: title });
            }
            setJobStatus("Job POSTED! Email SENT!")
            navigate(`/jobs/edit/${id}`);
        }
    }
    async function updateJob1(data) {
        setJobStatus("Job Updating ......!")
        const response = await updateJob(data);
        console.log(response);
        if (response) {
            setJobStatus("Job UPDATED!")
            //submitRef.current.innerText = "Job POSTED!";
            setTimeout(() => {
                setJobStatus("Update Job")
                //submitRef.current.innerText = "Post Job";
            }, 10000);
        }
        navigate(`/jobs/edit/${data.id}`);
    }
    if (isSuccessPostAJob || job) {
        console.log(job)
        console.log(dataPostAJob)
        const id = job?.id || dataPostAJob?.id
        if (id) {
            content2 = (
                <div className="flex justify-start gap-2">
                    <Link
                        to={`https://www.teachingjobs.com.au/jobs/${"company_name"
                            .replace(/\W+/g, "-")
                            .toLowerCase()}/${id}?active=true`}
                        className="btn bg-yellow-500"
                        target="_blank" rel="noopener noreferrer"
                    >
                        view Posted Job
                    </Link>
                    {/* <button
            className="btn btn-primary"
            onClick={() => {
              if (window.confirm(`====ALERT=====
              Are you sure to permanetly delete this job:
              title: ${job?.title} 
              employer:  ${job?.company_name}   
              ?`)) {
              }
            }}
          > DELETE JOB</button> */}
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            if (window.confirm(`====ALERT=====
              Are you sure to EXPIRE this job:
              title: ${job?.title} 
              employer:  ${job?.company_name}   
              ?`)) {
                                setValue('expiration_date', new Date("1900-01-01").toISOString().split('T')[0])
                                handleSubmit(onSubmit)
                            }
                        }}
                    > EXPIRE THIS JOB</button>
                </div>
            )
        }
    }

    content = (
        
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}
                className="w-full flex justify-between ">
                <div className="w-[49%] flex flex-col gap-2">
                <div>
    <p className="text-3xl font-bold text-black shadow-xl px-2 pb-4 mb-4">Post a Job</p>
    </div>
                    
                    <div className="flex justify-start gap-1">

                        <ul className=" flex justify-start items-end gap-4   px-1  ">
                            {/* <div className="card w-[100px] h-[100px] bg-base-100 shadow-xl ">
                                <div className="w-[100px] h-[100px] ">
                                    <img
                                        src={employer?.logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${employer?.logo}` : '/favicon.png'}
                                        alt={`${company_name}`}
                                        className="object-contain rounded-md bg-white"
                                    />
                                </div>
                            </div> */}
                        </ul>
                        <div>
                            {employer.employerPageURL &&
                                <Link className="  text-blue-500 " to={employer.employerPageURL}>Institution Recruitment Page </Link>
                            }
                            {/* <div className=" w-[100%] mx-auto flex flex-col gap-1 ">
                                <label className="label-text font-bold pb-2  text-lg">Institution Name</label>
                                <UniSearchBlock
                                    register={register}
                                    field="employer_name"
                                    customKey="employer_name"
                                    label="employer_name"
                                    value1={employer.company_name}
                                    forceClass="mb-6"
                                    onChange={onEditorStateChange1}
                                />
                            </div> */}
                        </div>
                    </div>



                    <label className="label-text font-bold text-lg">Institution Name</label>
                    <UniSearchBlock
                        register={register}
                        field="employer_name"
                        customKey="employer_name"
                        label="employer_name"
                        value1={employer.company_name}
                        forceClass="mb-6"
                        onChange={onEditorStateChange1}
                    />

                    <label className="label-text  text-md font-bold">Job Title</label>
                    <InputBlock2 type="text" field="title" label="" register={register} errors={errors} forceClass="" />
                    <div className="flex gap-2 ">
                        <div className=" w-[100%] mx-auto flex flex-col gap-1 ">
                            <label className="label-text text-sm">Featured</label>
                            <div className="w-[50%] text-left">
                                <input type="checkbox" {...register('featured')} />
                            </div>
                        </div>
                        <div className=" w-[100%] mx-auto flex flex-col gap-1 ">
                            <label className="label-text text-sm">Internal Only</label>
                            <label className="label-text text-sm">i.e: unlimited advertisers</label>
                            <div className="w-[50%] text-left">
                                <input type="checkbox" {...register('internalonly')} />
                            </div>
                        </div>
                        <div className=" w-[100%] mx-auto flex flex-col gap-1 ">
                            <label className="label-text text-sm">Headline Only</label>
                            <div className="w-[50%] text-left">
                                <input type="checkbox" {...register('headlineOnly')} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 mt-4">
                        <label className="label-text  pb-2  text-md mt-4 font-bold">Job Description</label>
                        <ReactQuill
                            className="w-full mb-6"
                            value={editorContent}
                            onChange={onEditorStateChange}
                        />
                    </div>
                </div>
                <div className="w-[49%] flex flex-col ">
                    {/* <div className="py-[2rem] text-4xl font-black text-yellow-500 flex flex-col gap-2 ">
                        {
                            isAddMode
                                ? <>
                                </>
                                : <div className="flex justify-start gap-10">
                                    <h1 className="text-red-600">Edit Job</h1>
                                    <Link
                                        to={`https://www.teachingjobs.com.au/jobs/${"company_name"
                                            .replace(/\W+/g, "-")
                                            .toLowerCase()}/${job.id}?active=true`}
                                        className="btn bg-yellow-500"
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        view Posted Job
                                    </Link>
                                </div>
                        }
                    </div> */}
                    <div className="col-start-2 w-full  flex flex-col  items-start ">
                        <label className="label-text font-bold pb-2  text-lg">Master Category: General Job Type</label>
                        <select className="select select-sm select-bordered w-full font-normal"
                            {...register("master_category_job_type")}
                        >
                            {job_category['master_category_job_type'].map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={`w-full  flex flex-col  items-start     
          ${master_category_job_type === "All Teaching Jobs"
                            ? "block"
                            : "hidden"
                        }`}>
                        <label className="label-text pb-2 text-md mt-4">Subcategory: All Teaching Jobs</label>
                        <select className="select select-sm select-bordered w-full font-normal"
                            {...register("subcategory_academic_jobs")}
                        >
                            <option key="-1" value="" selected disabled hidden></option>
                            {job_category['All Teaching Jobs'].map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={` w-full  flex flex-col  items-start     
          ${master_category_job_type === "Student Focused Support"
                            ? "block"
                            : "hidden"
                        }`}>
                        <label className="label-text  pb-2  text-md mt-4">Subcategory: Student Focused Support</label>
                        <select className="select select-sm select-bordered w-full font-normal"
                            {...register("subcategory_executive_jobs")}
                        >
                            <option key="-1" value="" selected disabled hidden></option>
                            {job_category['Student Focused Support'].map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={` ml-[100px]  w-full  flex flex-col  items-start     
          ${master_category_job_type === "Operations - Support Staff"
                            ? "block"
                            : "hidden"
                        }`}>
                        <label className="label-text  pb-2  text-md mt-4">Subcategory: Staff role-support / Admin</label>
                        <select className="select select-sm select-bordered w-full font-normal"
                            {...register("subcategory_administration_support")}
                        >
                            <option key="-1" value="" selected disabled hidden></option>
                            {job_category['Operations - Support Staff'].map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={` ml-[100px]  w-full  flex flex-col  items-start     
          ${master_category_job_type === "Leadership"
                            ? "block"
                            : "hidden"
                        }`}>
                        <label className="label-text  pb-2  text-md mt-4">Subcategory: Leadership Jobs</label>
                        <select className="select select-sm select-bordered w-full font-normal"
                            {...register("subcategory_hr_jobs")}
                        >
                            <option key="-1" value="" selected disabled hidden></option>
                            {job_category['Leadership'].map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={`w-full  flex flex-col  items-start   mt-6  `}>
                        <InputBlock2 className="font-bold" type="text" field="subcategoryOthers" label='If "others" is selected, fill the detail of others here:' register={register} errors={errors} forceClass="font-bold" />
                    </div>
                    <div className={`flex flex-col gap-2 mb-6 mt-6 `}>
                        {/* <SelectBlock2 list={position_type} field="position_type" label="Academic Position Type" register={register} errors={errors} forceClass=" font-bold" /> */}
                        <div className={`flex flex-col gap-2  ${master_category_job_type === "Academic / Faculty"
                            ? "block"
                            : "hidden"
                            }`}>
                        <label className="label-text font-bold text-lg">Academic Position Types:</label>
                        <div className="flex flex-wrap gap-4">
                            {Object.entries(academic_positions).map(([category, positions]) => (
                                <div key={category} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                    {category === "Others" && <h2 className="text-base font-black underline mb-2">{category}</h2>}
                                    <ul className="list-none p-0 mb-4">
                                        {positions.map((position, index) => (
                                            <div className="flex gap-1">
                                                <div className=" text-left">
                                                    <input type="checkbox" value={position}
                                                        defaultChecked={job?.positiontypes?.some((p) => p.positionType === position)}
                                                        {...register('positiontypes')}
                                                    />
                                                </div>
                                                <label className={`text-sm text-left text-gray-600 ${(index === 0 && category !== "Others" && category !== "Others1") ? 'font-black underline' : ''}`}>{position}</label>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        </div>
                        {/* <div className="flex flex-wrap gap-2 mb-1 ">
                            {academic_positions.map((position) => (
                                <div className="flex gap-1">
                                    <label className="text-sm text-right  font-bold">{position}
                                    </label>
                                    <div className=" text-left">
                                        <input type="checkbox" value={position}
                                            defaultChecked={job?.positiontypes.some((p) => p.positionType === position)}
                                            {...register('positiontypes')}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        <SelectBlock2 list={job_type} field="job_type" label="Employment Type" register={register} errors={errors} forceClass=" font-bold" />
                        <div>
                            <InputBlock2 className="font-bold" type="text" field="location" label="Job Location (use second box for auto-fill)" register={register} errors={errors} forceClass="font-bold" />
                            <Autocomplete
                                className="border-2 rounded mt-2 text-pink-400"
                                style={{ width: "100%" }}
                                ref={inputRef}
                                apiKey="AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA"
                                {...register("location")}
                                onPlaceSelected={(place) =>
                                    setValue("location", place.formatted_address)
                                }
                                // onPlaceSelected={(selected, a, c) => {
                                //   console.log(selected,a,c);
                                //   setValue("location", selected)
                                // }}
                                options={{
                                    types: ["geocode", "establishment"],
                                    //componentRestrictions: { country: "Australia" },
                                }}
                                //onPlaceSelected={(place) =>
                                //formik.setFieldValue("countryAnother", place.formatted_address)
                                //}
                                onChange={e => setValue("location", e.target.value)}
                            //onChange={e => console.log(e)}
                            />
                            <div className="flex items-center justify-start mt-4">
                                <div className="form-control items-start mb-2 mr-4">
                                    <label className="flex items-start justify-start label cursor-pointer">
                                        <input
                                            {...register("remote")}
                                            type="radio"
                                            className="radio radio-warning radio-xs mr-1"
                                            value="Onsite"
                                        />
                                        <span className="label-text font-bold pb-2  text-sm">Onsite</span>
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
                                        <span className="label-text font-bold pb-2  text-sm">Remote</span>
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
                                        <span className="label-text font-bold pb-2  text-sm">Hybrid</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <SelectBlock2 list={regions} field="region" label="Region" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
                                <SelectBlock2 list={countries} field="country" label="Country" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
                            </div>
                        </div>
                    </div>
                    <div className="label">
                        <span className="label-text  pb-2  text-lg font-bold mb-[-10px]">
                            Salary Range
                        </span>
                    </div>
                    <div className="join flex mb-6 gap-2">
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
                    <label className="label-text font-bold pb-2  text-lg">How To Apply</label>
                    <InputBlock2 type="text" field="how_to_apply" label="" register={register} errors={errors} forceClass=""
                    />
                    <div className="grid grid-cols-2 gap-4 mb-4 mt-8">
                        <InputBlock2 type="date" field="activation_date" label="Post Date" register={register} errors={errors} forceClass="mb-6 font-bold text-xl"
                        />
                        <InputBlock2 type="date" field="expiration_date" label="Expiration Date" register={register} errors={errors} forceClass="mb-6 font-bold"
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-8">
                        <p> <span className="font-bold text-xl">Auto-Sales Info</span> <br />Email Addresses and infomation found in this job description:</p>
                        <div className="flex gap-2 justify-start">
                            <InputBlock2 type="text" field="firstName1" placeholder="First Name" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                            <InputBlock2 type="text" field="lastName1" placeholder="Last Name" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                            <InputBlock2 type="text" field="jobTitle1" placeholder="Job Title" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                            <InputBlock2 type="text" field="email1" placeholder="Email" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                            <InputBlock2 type="text" field="phone1" placeholder="Phone" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                        </div>
                        <div className="flex gap-2 justify-start">
                            <InputBlock2 type="text" field="firstName2" placeholder="First Name" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                            <InputBlock2 type="text" field="lastName2" placeholder="Last Name" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                            <InputBlock2 type="text" field="jobTitle2" placeholder="Job Title" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                            <InputBlock2 type="text" field="email2" placeholder="Email" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                            <InputBlock2 type="text" field="phone2" placeholder="Phone" label="" register={register} errors={errors} forceClass="" forceClass1="bg-yellow-100 text-gray-800" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-8">
                        <p> <span className="font-bold text-xl">Talent Pool</span> <br />Seekers respond to this job</p>
                        <div className="flex gap-2 justify-start border border-red-700">
                            No one responded to this so far
                        </div>
                    </div>
                    {
                        job &&
                        <>
                            <div className="flex justify-start gap-2 mb-8">
                                <span className="font-bold text-xl">Posted By</span>
                                <span>{job.user.firstName} {job.user.lastName}, from {job.user.orgnization_name}</span>
                            </div>
                            <div className="flex justify-start gap-2 mb-8">
                                <span className="font-bold text-xl">{job.jobPostDuration}</span>
                            </div>
                        </>
                    }
                    <div className="flex justify-start gap-1">
                        <button
                            type="submit"
                            className="btn btn-success"
                            ref={submitRef}
                        >
                            {jobStatus}
                        </button>
                        {content2}
                    </div>
                </div>
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
export default JobAddEdit;
