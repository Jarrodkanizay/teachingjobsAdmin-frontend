import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useUpdateJobMutation,
  useGetJobByIdQuery,
  useUpdateEmployerMutation,
} from "../store/apiSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import InputBlock1 from "./InputBlock1";
import CheckBoxBlock from "./CheckBoxBlock";
import SelectBlock from "./SelectBlock";
const PostAJob = () => {
  console.log("EditEmployerProfile");
  const dispatch = useDispatch();
  const job_type1 = ["Full time", "Part time", "Contractor", "Sessional"];
  const master_category_job_type1 = [
    "Academic / Faculty",
    "Executive ",
    "Human Resources",
    "Industry Jobs",
    "Support /Administration",
  ];
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isSuccess } = useGetJobByIdQuery(id);
  const [updateJob, { isLoadingUpdateJob, isUpdateSuccess, isError, error }] =
    useUpdateJobMutation();
  let content, content1;
  let record = { id };
  const handleChange = (newValue, flag) => {
    record = { ...record, [flag]: newValue };
    console.log(record);
  };
  if (isUpdateSuccess) {
    console.log("Mutation was successful:", data);
    content1 = (
      <div className="">
        <div> Pls view your posted job via:</div>
        <div>
          <Link
            to={`/jobs/${"company_name".replace(/\W+/g, "-").toLowerCase()}/${
              data.id
            }/`}
            className="btn "
          >
            {`https://academicjobs.com/jobs/company_name/${data.id}`}
          </Link>
        </div>
      </div>
    );
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    console.log("data", data);
    const {
      description,
      featured,
      region,
      country,
      state,
      city,
      employer_id,
      title,
      job_type,
      location,
      master_category_job_type,
      activation_date,
      expiration_date,
      how_to_apply,
      logo,
      company_name,
    } = data;
    content = (
      <div className={`flex w-full flex-col  `}>
        <div method="post" className="flex w-full flex-col gap-2 ">
          <div className="flex gap-4">
            <label className="label cursor-pointer">
              <span className="label-text pr-2 text-xs">Featured?</span>
              <CheckBoxBlock
                customKey="featured"
                value1={featured}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* <div className="flex gap-4">
                        <label className="w-[30%] text-right font-bold">Featured</label>
                        <div className="w-[50%] text-left">
                            <input type="checkbox" className="" name="featured" id="featured" checked="checked" value="1" />
                        </div>
                    </div> */}
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Title</label>
            <div className="w-[50%] text-left">
              <InputBlock1
                customKey="title"
                value1={title}
                onChange={handleChange}
                forceClass="flex-grow mr-1 mb-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">
              Job Type&nbsp;
            </label>
            <div className="w-[50%] text-left">
              <SelectBlock
                list={job_type1}
                customKey="job_type"
                value1={job_type || ""}
                onChange={handleChange}
                forceClass="w-50 mb-2 mb-2 mr-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">
              master_category_job_type&nbsp;
            </label>
            <div className="w-[50%] text-left">
              <SelectBlock
                list={master_category_job_type1}
                customKey="master_category_job_type"
                value1={master_category_job_type || ""}
                onChange={handleChange}
                forceClass="w-50 mb-2 mb-2 mr-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">
              Institution-Location
            </label>
            <div className="w-[50%] text-left">
              <InputBlock1
                customKey="location"
                value1={location || ""}
                onChange={handleChange}
                forceClass="flex-grow mr-1 mb-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Region</label>
            <div className="w-[50%] text-left">
              <InputBlock1
                customKey="region"
                value1={region || ""}
                onChange={handleChange}
                forceClass="flex-grow mr-1 mb-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">Country</label>
            <div className="w-[50%] text-left">
              <InputBlock1
                customKey="country"
                value1={country || ""}
                onChange={handleChange}
                forceClass="flex-grow mr-1 mb-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">State</label>
            <div className="w-[50%] text-left">
              <InputBlock1
                customKey="state"
                value1={state || ""}
                onChange={handleChange}
                forceClass="flex-grow mr-1 mb-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <label className="w-[30%] text-right  font-bold">City</label>
            <div className="w-[50%] text-left">
              <InputBlock1
                customKey="city"
                value1={city || ""}
                onChange={handleChange}
                forceClass="flex-grow mr-1 mb-2"
              />
            </div>
          </div>
          {/* <button
                        className="btn btn-success w-[80%] mx-auto"
                        onClick={() => {
                            updateJob(record);
                        }}
                    >Save Changes</button> */}
          <button
            className="btn btn-success w-[80%] mx-auto"
            onClick={async (e) => {
              const response = await updateJob(record);
              console.log(response);
              if (response) {
                e.target.innerText = "Changes SAVED!";
                setTimeout(() => {
                  e.target.innerText = "Save Changes";
                }, 5000);
              }
            }}
          >
            {isLoadingUpdateJob ? "Saving in Process" : "Save Changes"}
          </button>
          <ReactQuill
            value={description}
            className="w-[80%] mx-auto"
            //onChange={handleChange(value, "company_description")}
            onChange={(value) => {
              handleChange(value, "description");
            }}
          />

          <button
            className="btn btn-success w-[80%] mx-auto"
            onClick={async (e) => {
              const response = await updateJob(record);
              console.log(response);
              if (response) {
                e.target.innerText = "Changes SAVED!";
                setTimeout(() => {
                  e.target.innerText = "Save Changes";
                }, 5000);
              }
            }}
          >
            {isLoadingUpdateJob ? "Saving in Process" : "Save Changes"}
          </button>
        </div>
        {content1}
      </div>
    );
  }
  return <div className="overflow-y w-full">{content}</div>;
};
export default PostAJob;
