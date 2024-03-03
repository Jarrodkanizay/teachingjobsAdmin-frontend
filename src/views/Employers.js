import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import SearchResults1 from "./SearchResults1";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { setJobCredits } from "../store/postsSlice";
import UniSearchBlock1 from "./UniSearchBlock1";
import UniSearchBlock from "./UniSearchBlock";
import { useForm } from "react-hook-form";
import SearchResultsEmployers from "./SearchResultsEmployers";
import { setJob, setId, setEmployer } from '../store/postsSlice'
function AdminHome(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [employerID, setEmployerID] = useState(3173)
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);

  let content, content1;
  const { register, handleSubmit, setValue, watch, formState: { errors }, setError } = useForm()
  useEffect(() => {
    register("employer_name", { required: false });
  }, [register]);
  let { expired } = useParams();
  const onEditorStateChange1 = (company_name, id, Region, country) => {
    console.log("============222222=========================", company_name, id, Region, country)
    setEmployerID(id)
    dispatch(setEmployer({ company_name, employer_id: id }))
    //setValue("description", editorState);
  };
  const onSelectUniSearch = (company_name, id, Region, country) => {
    console.log("============33333=========================", company_name, id, Region, country)
    setEmployerID(id)
    dispatch(setEmployer({ company_name, employer_id: id }))
  
    navigate(`/employers-center/${id}/`);
    //setValue("description", editorState);
  };
  return (
    <div className=" flex  flex-col px-6  gap-8 mt-8">
      {/* <Link
          to={`/post-a-job/`}
          className="text-[#f4a10c] w-[20rem] h-[30px] font-bold shadow-md rounded px-2  text-center border border-[#f4a10c] hover:bg-gradient-to-r from-gray-400 via-amber-500 to-amber-500 font-bold hover:text-white "
          activeClassName="post-a-job"
        >
          Post a Job
        </Link> */}
      {/* <UniSearchBlock
          country=""
          register={register}
          field="employer_name"
          customKey="employer_name"
          label="employer_name"
          value1=""
          forceClass="mb-6"
          onChange={onEditorStateChange1}
        /> */}
      {/* <UniSearchBlock
          country="Australia"
          register={register}
          field="employer_name1"
          customKey="employer_name1"
          label="employer_name1"
          value1=""
          forceClass="mb-6"
          onChange={onEditorStateChange1}
        /> */}
<UniSearchBlock1
            country=""
            register={register}
            field="employer_name"
            customKey="Search all employers"
            label="Search all employers"
            value1=""
            forceClass="input-lg mx-0"
            onChange={onEditorStateChange1}
            onSelect={onSelectUniSearch}
          />

      <div className="flex justify-between w-full gap-8">
        
        <div className="w-1/2 ">
          <p className="text-3xl font-black text-orange-600 shadow-xl px-2 pb-4">Our Employers</p>
         <div class="flex gap-2 pr-2 ">
         <a class="btn mt-2 w-1/2" > Unlimited Clients</a>
                   <a class="btn mt-2 w-1/2" >Single Job Clients</a>
                   </div>
                   <div class="flex gap-2 pr-2 ">
                   <a class="btn mt-2 w-1/2" >JobElephant Clients</a>
          <a class="btn  mt-2 w-1/2" >Top Unis - Padding</a>
        
          </div>

          <a class="btn w-full mt-2 text-amber-500" href="/create-employer/">Add Employer</a>

          <h2 className="text-xl mt-8 font-bold">Recent Viewed Employers</h2>
          <SearchResultsEmployers />
        </div>
        <div className="w-1/2">
          {/* University Country Filter */}
          <details className="bg-gray-300 open:bg-[amber-200] duration-300  mb-4 full width w-2/3" >
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">USA Employers</summary>
            <div className="bg-white  border border-gray-300 p-4">
              <UniSearchBlock
                country="United States"
                register={register}
                field="employer_name1"
                customKey="Search in USA"
                label="Search in USA"
                value1=""
                forceClass=""
                onChange={onEditorStateChange1}
                onSelect={onSelectUniSearch}
              />
              <div className="">
                <SearchResultsEmployers q={{ country: "United States" }} />
              </div>
            </div>
          </details>
          {/* University Country Filter */}
          <details className="bg-gray-300 open:bg-[amber-200] duration-300  mb-4  w-2/3" >
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">Australian Employers</summary>
            <div className="bg-white  border border-gray-300 p-4">
              <UniSearchBlock
                country="Australia"
                register={register}
                field="employer_name1"
                customKey="Search in AUS"
                label="Search in AUS"
                value1=""
                forceClass=""
                onChange={onEditorStateChange1}
                onSelect={onSelectUniSearch}
              />
              <div className="">
                <SearchResultsEmployers q={{ country: "Australia" }} />
              </div>
            </div>
          </details>
          {/* University Country Filter */}
          <details className="bg-gray-300 open:bg-[amber-200] duration-300  mb-4 w-2/3" >
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">UK Employers</summary>
            <div className="bg-white  border border-gray-300 p-4">
              <UniSearchBlock
                country="United Kingdom"
                register={register}
                field="employer_name1"
                customKey="Search in UK"
                label="Search in UK"
                value1=""
                forceClass=""
                onChange={onEditorStateChange1}
                onSelect={onSelectUniSearch}
              />
              <div className="">
                <SearchResultsEmployers q={{ country: "United Kingdom" }} />
              </div>
            </div>
          </details>
          {/* University Country Filter */}
          <details className="bg-gray-300 open:bg-[amber-200] duration-300  mb-4 w-2/3" >
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">Canadian Employers</summary>
            <div className="bg-white  border border-gray-300 p-4">
              <UniSearchBlock
                country="Canada"
                register={register}
                field="employer_name1"
                customKey="Search in Canada"
                label="Search in Canada"
                value1=""
                forceClass=""
                onChange={onEditorStateChange1}
                onSelect={onSelectUniSearch}
              />
              <div className="">
                <SearchResultsEmployers q={{ country: "Canada" }} />
              </div>
            </div>
          </details>
          {/* University Country Filter */}
          <details className="bg-gray-300 open:bg-[amber-200] duration-300  mb-4 w-2/3" >
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer pl-8">NZ Employers</summary>
            <div className="bg-white  border border-gray-300 p-4">
              <UniSearchBlock
                country="New Zealand"
                register={register}
                field="employer_name1"
                customKey="Search in NZ"
                label="Search in NZ"
                value1=""
                forceClass=""
                onChange={onEditorStateChange1}
                onSelect={onSelectUniSearch}
              />
              <div className="">
                <SearchResultsEmployers q={{ country: "New Zealand" }} />
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
export default AdminHome;
