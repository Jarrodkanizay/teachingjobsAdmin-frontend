import React, { useState, useEffect, useRef, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector, useDispatch } from "react-redux";
import {
  useGetCampusesMutation,
  useGetEmployerSuggestionsQuery,
  useCreateEmployerMutation,
  useGetEmployerQuery,
  useUpdateEmployerMutation,
  useGetEmployerByIdQuery,
} from "../store/apiSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import InputBlock2 from "./InputBlock2";
import InputBlock4 from "./InputBlock4";
import SelectBlock2 from "./SelectBlock2";
import SelectBlock3 from "./SelectBlock3";
import UniSearchBlock from "./UniSearchBlock";
import SelectBlockNew from "./SelectBlockNew";
import SelectBlock1 from "./SelectBlock1";
import { countries } from "../utils/data";
import { useNavigate, Link, NavLink } from "react-router-dom";
//import { setemployer} from "./postSlice"
import { regions } from "../utils/data";
import { setId, setEmployer } from '../store/postsSlice'
const users = [
  {
    "id": 75,
    "firstName": "Jethro",
    "portrait": "jethro_mule.jpg"
  },
  {
    "id": 76,
    "firstName": "Mary Rose Joana",
    "portrait": "mary_rose_joana_pecson.jpg"
  },
  {
    "id": 77,
    "firstName": "Joan",
    "portrait": "joan_santos.jpg"
  },
  {
    "id": 78,
    "firstName": "Norren",
    "portrait": "norren_saligan.jpg"
  },
  {
    "id": 79,
    "firstName": "Fausto",
    "portrait": "fausto_san_juan.jpg"
  },
  {
    "id": 81,
    "firstName": "Jhon Michael",
    "portrait": "jhon_michael_cruz.jpg"
  },
  {
    "id": 82,
    "firstName": "Lexphil",
    "portrait": "lexphil_de_vera.jpg"
  },
  {
    "id": 83,
    "firstName": "Laira Andrea",
    "portrait": "laira_andrea_austria.jpg"
  },
  {
    "id": 84,
    "firstName": "Luigi Yñaki",
    "portrait": "luigi_ynaki_jardin.jpg"
  },
  {
    "id": 86,
    "firstName": "Don",
    "portrait": "don_fernandez.jpg"
  }
]
const validationSchema = yup.object({
  // username: yup.string().required('Missing username'),
  // email: yup.string().required('Missing email').email('Invalid email format'),
  //password: yup.string().required('Missing password'),
}).required()
const EmployerAddEdit = ({ employer }) => {
  console.log("=====employer=============", employer)
  const isAddMode = !employer
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const regions = [
    'Australia',
    'Asia',
    'Africa',
    'New Zealand',
    'Canada',
    'Europe',
    'India',
    'Global',
    'United States',
    'United Kingdom'
  ];
  console.log("EditEmployerProfile");
  const [logo, setLogo] = useState("")
  const onUploadAvatar = async (event) => {
    // Call API to BE to generate a pre-signed url to upload file object
    console.log("event.target.files[0].name", event.target.files[0].name)
    const response = await fetch('https://api.sciencejobs.com.au/api/generate-upload-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify the content type as JSON
      },
      body: JSON.stringify({ fileName: event.target.files[0].name })
    }) //'https://api2.sciencejobs.com.au/api/generate-upload-url'
    const { presignedUploadUrl } = await response.json();
    console.log(presignedUploadUrl)
    // Use the pre-signed upload url to upload the image
    const imageResponse = await fetch(presignedUploadUrl, {
      method: 'PUT', // or 'POST' depending on your server requirements
      body: event.target.files[0]
    });
    setLogo(event.target.files[0].name)
    setValue("logo", event.target.files[0].name);
    console.log(event.target.files[0].name)
    //console.log(imageResponse)
    //console.log(imageResponse.json())
    //const { url } = await imageResponse.json();
    //console.log(url)
    // Trigger onChange callback of react-hook-form to set uploaded image url string to form
    //onChange(event.target.files[0].name);
  }
  const employerCurrent = useSelector((state) => state.posts.employer);
  let defaultValues
  const { register, reset, handleSubmit, setValue, watch, formState: { errors }, setError, } = useForm({
    defaultValues: useMemo(() => {
      return defaultValues;
    }, [defaultValues])
  });
  const { onChange, ...avatarField } = register('avatar');
  const [employerStatus, setEmployerStatus] = useState('Post Employer');
  const editorContent = watch("description");
  const editorContent1 = watch("employer_name");
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef();
  const submitRef = useRef();
  const countryRef = useRef('');
  const { data: suggestions = [] } = useGetEmployerSuggestionsQuery({ query, country: countryRef.current || "" }, {
  });
  const [updateEmployer, { isLoading: isLoadingUpdateEmployer, isSuccess: isSuccessUpdateEmployer, isError: isErrorUpdateEmployer, error: errorUpdateEmployer, }] =
    useUpdateEmployerMutation();
  const [createEmployer, { data, isLoading: isLoadingCreateEmployer, isSuccess: isSuccessCreateEmployer, isError: isErrorCreateEmployer, error: errorCreateEmployer }] = useCreateEmployerMutation();
  const [newList, setNewList] = useState([]);
  const [newListName, setNewListName] = useState(null);
  const [newList1, setNewList1] = useState([]);
  const [newList1Name, setNewList1Name] = useState(null);
  const userid = useSelector((state) => state.auth.userid);
  const country = useSelector((state) => state.auth.country);
  const company_name = useSelector((state) => state.auth.company_name);
  const navigate = useNavigate();
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
    if (employer) {
      setLogo(employer?.logo)
      reset(employer);
    } else {
      reset({ ranking: "3", });
      setValue("clientType", 'HeadlineOnly');
    }
    setValue('postedBy', userInfo.id)
  }, [employer]);
  useEffect(() => {
    register("description", { required: false });
    register("company_name1", { required: false });
    register("country", { required: false });
  }, [register]);
  const onEditorStateChange = (editorState) => {
    setValue("description", editorState);
  };
  const onEditorStateChange1 = (company_name, employer_id, Region, country, logo) => {
    console.log("======onEditorStateChange1=====", company_name, employer_id, Region, country, logo)
    setValue("company_name", company_name);
    setValue("employer_id", employer_id || 0);
    setValue("Region", Region);
    setValue("country", country);
    setValue("logo", logo);
    dispatch(setEmployer({ company_name, employer_id, logo }))
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
  let content, content1;
  const recordRef = useRef({ employer_id: userid });
  // const handleChange1 = (newValue) => {
  //   console.log(newValue, findValueForKey(employer_category, newValue))
  //   setNewList(findValueForKey(employer_category, newValue));
  //   setNewListName(newValue);
  //   setNewList1([]);
  //   setNewList1Name(null);
  // };
  // const handleChange2 = (newValue, flag) => {
  //   console.log(newValue, flag, findValueForKey(employer_category, newValue))
  //   recordRef.current = { ...recordRef.current, [flag]: newValue };
  //   console.log(recordRef.current);
  //   setNewList1(findValueForKey(employer_category, newValue));
  //   setNewList1Name(newValue);
  //   setValue(categoryCovert[newListName], newValue);
  // };
  const handleChange3 = (newValue, flag) => {
    recordRef.current = { ...recordRef.current, [flag]: newValue };
    console.log(recordRef.current);
  };
  const handleSalesNoteChange = () => {
    setValue("salesNoteUpdateDate", new Date());
  };
  const onSubmit = async (data) => {
    console.log('data', data)
    return isAddMode
      ? createEmployer1(data)
      : updateEmployer1({ id: employer?.id, ...data })
  }
  async function createEmployer1(data) {
    const response = await createEmployer(data);
    navigate("/admin-home/");
  }
  async function updateEmployer1(data) {
    const response = await updateEmployer(data);
    navigate("/admin-home/");
  }
  content = (
    <div className="w-full flex flex-col gap-4 pb-16">
      {!employer &&
        <p className="text-3xl font-bold text-black shadow-xl px-2 pb-4 mb-4">Create Employer</p>
      }
      <form className='flex w-full flex-col' onSubmit={handleSubmit(onSubmit)}>
        {defaultValues?.id > 0 &&
          <Link to={`/employers/university/${defaultValues?.id}/`}
            className="btn ">
            {`https://academicjobs.com/employers/university/${defaultValues?.id}/`}
          </Link>}
        <div className="flex w-full flex-col gap-2 " >
          <div className="flex gap-4">
            <div className="w-[30%] flex justify-end font-bold">
              <div className="w-[8rem] h-[8rem] mr-1  ">
                <img src={`${logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` : "/favicon.png"}`}
                  alt={defaultValues?.company_name}
                  className="w-full h-full object-contain rounded-md bg-white "
                />
              </div>
            </div>
            <div className="w-[50%] text-left justify-center pt-8">
              <div class="w-full">
                <InputBlock4 type="text" field="logo" label="Logo" register={register} errors={errors} forceClass="" />
                <input type="file" id="fileInput" name="avatar"  {...avatarField} onChange={onUploadAvatar} />
              </div>
            </div>
          </div>
          <div>
          </div>
          {/* <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Institution Name *</label>
            <div className="w-[50%] text-left">
              <UniSearchBlock
                register={register}
                field="company_name"
                customKey="company_name"
                label="company_name"
                value1={employer?.company_name}
                forceClass="mb-6"
                onChange={onEditorStateChange1}
              />
            </div>
          </div> */}
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Institution Name
            </label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="company_name" label="company_name" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Acronym
            </label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="acronym" label="Acronym" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">AJ Admin Agent</label>
            <div className="w-[50%] text-left">
              <select id="userDropdown"
                {...register("AJAdminAgent")}
              >
                <option value="">Select an Agent</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.firstName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Employer Type
            </label>
            <div className="w-[50%] flex flex-col gap-2 text-left">
              <div className="flex gap-3">
                <div className="flex gap-1">
                  <label className="text-sm text-right  font-bold">Unlimited
                  </label>
                  <div className=" text-left">
                    <input type="checkbox" {...register('unlimitedYN')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("ranking", "5");
                          setValue("clientType", 'HeadlineOnly');
                        } else {
                          setValue("ranking", "3");
                          setValue("clientType", 'HeadlineOnly');
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-1">
                  <label className="text-sm text-right  font-bold">Region Top Uni
                  </label>
                  <div className=" text-left">
                    <input type="checkbox" {...register('top20University')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("ranking", "5");
                          setValue("clientType", 'freeListing');
                        } else {
                          setValue("ranking", "3");
                          setValue("clientType", 'HeadlineOnly');
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-1">
                  <label className="text-sm text-right  font-bold">Job Elephant Client
                  </label>
                  <div className=" text-left">
                    <input type="checkbox" {...register('jobElephantClientYN')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("ranking", "5");
                          setValue("clientType", 'HeadlineOnly');
                        } else {
                          setValue("ranking", "3");
                          setValue("clientType", 'HeadlineOnly');
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex gap-1">
                  <label className="text-sm text-right  font-bold">Sales Lead Client
                  </label>
                  <div className=" text-left">
                    <input type="checkbox" {...register('salesLeadClientYN')}
                
                    />
                  </div>
                </div>
                <div className="flex gap-1">
                  <label className="text-sm  text-right  font-bold">Industry Client
                  </label>
                  <div className=" text-left">
                    <input type="checkbox" {...register('industryClientYN')}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setValue("ranking", "5");
                          setValue("clientType", 'HeadlineOnly');
                        } else {
                          setValue("ranking", "3");
                          setValue("clientType", 'HeadlineOnly');
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Ranking</label>
            <div className="w-[50%] text-left">
              <div className="flex items-center justify-start">
                <div className="form-control items-start mb-2 mr-4">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("ranking")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="1"
                      onChange={(e) => {
                        const selectedValue = +e.target.value; // Using the unary plus operator to convert to a number
                        // Now `selectedValue` will be a number, not a string
                        // You can use it as needed
                      }}
                    />
                    <span className="label-text text-xs">1</span>
                  </label>
                </div>
                <div className="form-control items-start mb-2 mr-4">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("ranking")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="2"
                    />
                    <span className="label-text text-xs">2</span>
                  </label>
                </div>
                <div className="form-control items-start mb-2  mr-4">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("ranking")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="3"
                    />
                    <span className="label-text text-xs">3</span>
                  </label>
                </div>
                <div className="form-control items-start mb-2 mr-4">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("ranking")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="4"
                    />
                    <span className="label-text text-xs">4</span>
                  </label>
                </div>
                <div className="form-control items-start mb-2 mr-4">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("ranking")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="5"
                    />
                    <span className="label-text text-xs">5</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Job Listing Type</label>
            <div className="w-[50%] text-left">
              <div className="flex items-center justify-start">
                <div className="form-control items-start mb-2 mr-4">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("clientType")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="unlimited"
                    />
                    <span className="label-text text-xs">Unlimited</span>
                  </label>
                </div>
                <div className="form-control items-start mb-2 mr-4">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("clientType")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="jobPadding"
                    />
                    <span className="label-text text-xs">Job Padding(FREE)</span>
                  </label>
                </div>
                <div className="form-control items-start mb-2">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("clientType")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="paidSingleListing"
                    />
                    <span className="label-text text-xs">Paid Single Listing</span>
                  </label>
                </div>
                <div className="form-control items-start mb-2">
                  <label className="flex items-start justify-start label cursor-pointer">
                    <input
                      {...register("clientType")}
                      type="radio"
                      className="radio radio-warning radio-xs mr-1"
                      value="HeadlineOnly"
                    />
                    <span className="label-text text-xs">Headline Only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Region&nbsp;*</label>
            <div className="w-[50%] text-left">
              <SelectBlock3 list={regions} field="Region" label="Region" register={register} errors={errors} forceClass="join-item rounded-r-none min-h-[34px]" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Institution-Location</label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="location" label="Institution Location" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Country
            </label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="country" label="Country" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">State
            </label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="state" label="State" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">City
            </label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="city" label="City" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Website</label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="website" label="website" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Employer Job Page URL</label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="employerPageURL" label="employerPageURL" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Email</label>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="email" label="email" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Sales Notes Update Date</label>
            <div className="w-[50%] text-left">
              {new Date(employer?.salesNoteUpdateDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
              {/* <InputBlock4 type="text" field="salesNoteUpdateDate" label="salesNoteUpdateDate" register={register} errors={errors} forceClass="" /> */}
            </div>
          </div>
          <label className="w-full text-center underline font-bold">Sales Notes</label>
          <textarea
            id="description-input"
            name="07_Nominee_Description"
            className="w-full px-4 py-3 0 border border-black  rounded-lg text-black focus:outline-none focus:border-orange-500"
            placeholder="Please write sales notes here"
            {...register("salesNote")}
            onChange={handleSalesNoteChange}
          />
          <button
            className="btn btn-success w-[80%] mx-auto"
            onClick={async (e) => {
              // const response = await updateEmployer(record);
              // console.log(response)
              // if (response) {
              //     e.target.innerText = 'Changes SAVED!';
              //     setTimeout(() => {
              //         e.target.innerText = 'Save Changes';
              //     }, 5000);
              // }
            }}
          >
            Save Changes
          </button>
          <ReactQuill value={employer?.company_description} className=""
            //onChange={handleChange(value, "company_description")}
            onChange={(value) => {
              setValue("company_description", value)
              // handleChange(value, "company_description")
            }}
          />
          <button
            className="btn btn-success w-[80%] mx-auto"
            onClick={async (e) => {
              // const response = await updateEmployer(record);
              // console.log(response)
              // if (response) {
              //     e.target.innerText = 'Changes SAVED!';
              //     setTimeout(() => {
              //         e.target.innerText = 'Save Changes';
              //     }, 5000);
              // }
            }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <div className="overflow-y w-full">
      {content}
    </div>
  );
};
export default EmployerAddEdit;
