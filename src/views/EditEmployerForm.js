import React, { useState, useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    useGetEmployerQuery,
    useUpdateEmployerMutation,
} from "../store/apiSlice";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import InputBlock1 from "./InputBlock1";
import InputBlock4 from "./InputBlock4";
import SelectBlock from "./SelectBlock";
import SelectBlock3 from "./SelectBlock3";
const EditEmployerForm = ({ defaultData }) => {
    console.log("defaultData", defaultData)
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
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        setError,
    } = useForm({
        defaultValues: useMemo(() => {
            return defaultData;
        }, [defaultData])
    });
    useEffect(() => {
        setLogo(defaultData?.logo)
        reset(defaultData);
    }, [defaultData]);
    const { onChange, ...avatarField } = register('avatar');
    const onUploadAvatar = async (event) => {
        // Call API to BE to generate a pre-signed url to upload file object
        console.log("event.target.files[0].name", event.target.files[0].name)
        const response = await fetch('http://localhost:3500/api/generate-upload-url', {
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
        console.log(event.target.files[0].name)
        //console.log(imageResponse)
        //console.log(imageResponse.json())
        //const { url } = await imageResponse.json();
        //console.log(url)
        // Trigger onChange callback of react-hook-form to set uploaded image url string to form
        //onChange(event.target.files[0].name);
    }
    const onSubmit = async (data) => {
        //e.preventDefault();
        //alert()
        console.log('data', data)
    }
    return (
        <form className='flex w-full flex-col' onSubmit={handleSubmit(onSubmit)}>
            {defaultData?.id &&
                <Link to={`/employers/university/${defaultData?.id}/`}
                    className="btn ">
                    {`https://academicjobs.com/employers/university/${defaultData?.id}/`}
                </Link>}
            <div className="flex w-full flex-col gap-2 " >
                <div className="flex gap-4">
                    <div className="w-[30%] text-right  font-bold">
                        <div className="flex  justify-end text-right   ">
                            <div>
                            <img src={`${logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` : "/favicon.png"}`}
                                alt={defaultData?.company_name}
                                className="w-full h-full object-contain rounded-md bg-white "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] text-left">
                        <div class="w-full">
                            <InputBlock4 type="text" field="logo" label="Logo" register={register} errors={errors} forceClass="" />
                            {/* <input className="text-black" type="text" {...register('logo')} /> */}
                            <input type="file" id="fileInput" name="avatar"  {...avatarField} onChange={onUploadAvatar} />
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className="flex gap-4">
                    <label className="w-[30%] text-right font-bold">Featured</label>
                    <div className="w-[50%] text-left">
                        <input type="checkbox" {...register('featured')} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <label className="w-[30%] text-right  font-bold">Institution Name *</label>
                    <div className="w-[50%] text-left">
                        <InputBlock4 type="text" field="company_name" label="company_name" register={register} errors={errors} forceClass="" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <label className="w-[30%] text-right  font-bold">Client Type</label>
                    <div className="w-[50%] text-left">
                        <div className="flex items-center justify-start">
                            <div className="form-control items-start mb-2 mr-4">
                                <label className="flex items-start justify-start label cursor-pointer">
                                    <input
                                        {...register("cilentType")}
                                        type="radio"
                                        className="radio radio-warning radio-xs mr-1"
                                        value="unlimitedClient"
                                    />
                                    <span className="label-text text-xs">Unlimited</span>
                                </label>
                            </div>
                            <div className="form-control items-start mb-2 mr-4">
                                <label className="flex items-start justify-start label cursor-pointer">
                                    <input
                                        {...register("cilentType")}
                                        type="radio"
                                        className="radio radio-warning radio-xs mr-1"
                                        value="freeListingClient"
                                    />
                                    <span className="label-text text-xs">Free Listing</span>
                                </label>
                            </div>
                            <div className="form-control items-start mb-2">
                                <label className="flex items-start justify-start label cursor-pointer">
                                    <input
                                        {...register("cilentType")}
                                        type="radio"
                                        className="radio radio-warning radio-xs mr-1"
                                        value="salesTargetClient"
                                    />
                                    <span className="label-text text-xs">Sales Target</span>
                                </label>
                            </div>
                            <div className="form-control items-start mb-2">
                                <label className="flex items-start justify-start label cursor-pointer">
                                    <input
                                        {...register("cilentType")}
                                        type="radio"
                                        className="radio radio-warning radio-xs mr-1"
                                        value="salesTargetClient"
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
                    <label className="w-[30%] text-right  font-bold">Job Page URL</label>
                    <div className="w-[50%] text-left">
                        <InputBlock4 type="text" field="jobPageURL" label="jobPageURL" register={register} errors={errors} forceClass="" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <label className="w-[30%] text-right  font-bold">Email</label>
                    <div className="w-[50%] text-left">
                        <InputBlock4 type="text" field="email" label="email" register={register} errors={errors} forceClass="" />
                    </div>
                </div>
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
                <ReactQuill value={defaultData?.company_description} className=" mx-auto"
                    //onChange={handleChange(value, "company_description")}
                    onChange={(value) => {
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
                    {/* {isLoadingUpdateEmployer ? "Saving in Process" : "Save Changes"} */}
                </button>
                {/* {isSuccessUpdateEmployer &&
                        <div className="">
                            <div> Pls view your Institution Profile via:</div>
                            <div>
                                <Link to={`/employers/university/${record.id}/`}
                                    className="btn ">
                                    {`https://academicjobs.com/employers/university/${record.id}/`}
                                </Link>
                            </div>
                        </div>
                    } */}
            </div>
        </form>
    )
};
export default EditEmployerForm;
