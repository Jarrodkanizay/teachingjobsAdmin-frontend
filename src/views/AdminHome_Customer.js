import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import SearchResults1 from "./SearchResults1";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { setJobCredits } from "../store/postsSlice";
import UniSearchBlock from "./UniSearchBlock";
import { useForm } from "react-hook-form";
import SearchResultsEmployers from "./SearchResultsEmployers";
import { setJob, setId, setEmployer } from '../store/postsSlice'
import {
  useGetUserByIdQuery,
} from "../store/apiSlice";
import {
  useGetEmployerQuery,
} from "../store/apiSlice";

function AdminHome_Customer(props) {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);
  const {
    data,
    isLoading,
    isSuccess,
  } = useGetEmployerQuery(userInfo.employer_id)
  let content, content1;
  return (
    <div className=" flex  flex-col px-6  gap-8">
      <div className="flex justify-between w-full gap-8">
        <div className="w-1/2 flex flex-col gap-2">
          {/* Hero banner */}
          <div className="lg:hero-content flex-col lg:flex-row-reverse bg-slate-200 p-10 rounded-xl ">
            <img
              src={`https://academicjobs.s3.amazonaws.com/img/university-logo/${userInfo.logo}`}
              width={300}
              height={200}
              className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
              alt="AI Powered Recruitment Platform"
            />
            <div>
              <h1 className="lg:text-4xl font-bold text-aj">
                Welcome! {userInfo.firstName} to the newest and most amazing way to post.
              </h1>
              <p className="py-6">You've landed on the new AcademicJobs Admin Center.
                We've just made it easier for all Manila staff to post a job for all our clients.
              </p>
              {/* <Link className="btn btn-aj" href="/post-a-job">
                Post a Job
              </Link> */}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center">{userInfo.company_name}</h1>
          {data &&
            <>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex justify-between">
                <Link
                  to={`/employers-center/${userInfo.employer_id}`}
                  className="btn w-[49%]"
           
                >
                  Edit Employer Profile
                </Link>
                <Link
                  to={data?.employerPageURL}
                  className="btn w-[49%]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Employer Job Page URL
                </Link>
              </div>
              <Link to={`/post-a-job/`}
                className="btn"
              >Post A Job</Link>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.company_description }} />
            </>
          }
      
        </div>
      </div>
    </div>
  );
}
export default AdminHome_Customer;
