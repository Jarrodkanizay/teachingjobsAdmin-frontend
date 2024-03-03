import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    useGetEmployerQuery,
    useUpdateEmployerMutation,
} from "../store/apiSlice";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import InputBlock1 from "./InputBlock1";
import SelectBlock from "./SelectBlock";
const EditEmployerProfile = () => {
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
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const {
        data,
        isLoading,
        isSuccess,
    } = useGetEmployerQuery(id)
    const [
        updateEmployer,
        { isLoadingUpdateEmployer, isSuccessUpdateEmployer, isUpdateSuccessUpdateEmployer, isErrorUpdateEmployer, errorUpdateEmployer },
    ] = useUpdateEmployerMutation();
    let content, content1;
    let record = { id };
    const handleChange = (newValue, flag) => {
        record = { ...record, [flag]: newValue };
        console.log(record);
    };
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        console.log(data);
        const {
            company_description,
            firstname,
            phone,
            email,
            salesman,
            company_name,
            active,
            full_name,
            website,
            youtube,
            facebook,
            instagram,
            linkedin,
            twitter,
            location,
            featured,
            logo,
            id,
            id1,
            finishedYN,
            registration_date,
            jobtitle,
            Region,
            country,
            state,
            city
        } = data;
        //console.log(companydescription); //onSubmit={handleFormSubmit}
        content = (
            <div className={`flex w-full flex-col  `}>
                <Link to={`/employers/university/${record.id}/`}
                    className="btn ">
                    {`https://academicjobs.com/employers/university/${record.id}/`}
                </Link>
                <div method="post" className="flex w-full flex-col gap-2 " >
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right font-bold">Featured</label>
                        <div className="w-[50%] text-left">
                            <input type="checkbox" className="" name="featured" id="featured" checked="checked" value="1" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">Region&nbsp;*</label>
                        <div className="w-[50%] text-left">
                            <SelectBlock
                                list={regions}
                                customKey='Region'
                                value1={Region || ""}
                                onChange={handleChange}
                                forceClass="w-50 mb-2 mb-2 mr-2"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">Institution-Location</label>
                        <div className="w-[50%] text-left">
                            <InputBlock1
                                customKey='location'
                                value1={location || ""}
                                onChange={handleChange}
                                forceClass="flex-grow mr-1 mb-2"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">Institution Name *</label>
                        <div className="w-[50%] text-left">
                            <InputBlock1
                                customKey='company_name'
                                value1={company_name || ""}
                                onChange={handleChange}
                                forceClass="flex-grow mr-1 mb-2"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">Website</label>
                        <div className="w-[50%] text-left">
                            <InputBlock1
                                customKey='website'
                                value1={website || ""}
                                onChange={handleChange}
                                forceClass="flex-grow mr-1 mb-2"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">Email</label>
                        <div className="w-[50%] text-left">
                            <InputBlock1
                                customKey='email'
                                value1={email || ""}
                                onChange={handleChange}
                                forceClass="flex-grow mr-1 mb-2"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">Region,
                        </label>
                        <div className="w-[50%] text-left">
                            <InputBlock1
                                customKey='Region'
                                value1={email || ""}
                                onChange={handleChange}
                                forceClass="flex-grow mr-1 mb-2"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">Country
                        </label>
                        <div className="w-[50%] text-left">
                            <InputBlock1
                                customKey='Country'
                                value1={country || ""}
                                onChange={handleChange}
                                forceClass="flex-grow mr-1 mb-2"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">State
                        </label>
                        <div className="w-[50%] text-left">
                            <InputBlock1
                                customKey='state'
                                value1={state || ""}
                                onChange={handleChange}
                                forceClass="flex-grow mr-1 mb-2"
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label className="w-[30%] text-right  font-bold">City
                        </label>
                        <div className="w-[50%] text-left">
                            <InputBlock1
                                customKey='city'
                                value1={city || ""}
                                onChange={handleChange}
                                forceClass="flex-grow mr-1 mb-2"
                            />
                        </div>
                    </div>
                    <button
                        className="btn btn-success w-[80%] mx-auto"
                        onClick={async (e) => {
                            const response = await updateEmployer(record);
                            console.log(response)

                            if (response) {
                                e.target.innerText = 'Changes SAVED!';
                                setTimeout(() => {
                                    e.target.innerText = 'Save Changes';
                                }, 5000);
                            }
                        }}
                    >
                        {isLoadingUpdateEmployer ? "Saving in Process" : "Save Changes"}
                    </button>
                    <ReactQuill value={company_description} className=" mx-auto"
                        //onChange={handleChange(value, "company_description")}
                        onChange={(value) => {
                            handleChange(value, "company_description")
                        }}
                    />
                    <button
                        className="btn btn-success w-[80%] mx-auto"
                        onClick={async (e) => {
                            const response = await updateEmployer(record);
                            console.log(response)
                            if (response) {
                                e.target.innerText = 'Changes SAVED!';
                                setTimeout(() => {
                                    e.target.innerText = 'Save Changes';
                                }, 5000);
                            }
                        }}
                    >
                        {isLoadingUpdateEmployer ? "Saving in Process" : "Save Changes"}
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
                {content1}
            </div>
        )
    }
    return <div className="overflow-y w-full">
        {content}
    </div>;
};
export default EditEmployerProfile;
