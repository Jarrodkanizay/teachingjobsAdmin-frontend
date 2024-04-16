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
    <div className=" flex  flex-col px-6  gap-8 mt-4">
    <p className="text-3xl font-bold text-black shadow-xl px-2 pb-4">Our Employers</p>

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

      <div className="">
        <div className=" ">
         <div class="flex gap-2 pr-2 ">
         {/* <a class="btn mt-2 w-1/2" > Unlimited Clients</a>
                   <a class="btn mt-2 w-1/2" >Single Job Clients</a>
                   </div>
                   <div class="flex gap-2 pr-2 ">
                   <a class="btn mt-2 w-1/2" >JobElephant Clients</a>
          <a class="btn  mt-2 w-1/2" >Top Unis - Padding</a> */}
        
          </div>

          <a class="btn w-full mt-2 text-amber-500" href="/create-employer/">Add Employer</a>

          <h2 className="text-xl mt-8 font-bold">Recent Viewed Employers</h2>
          <SearchResultsEmployers />
        </div>

      </div>
    </div>
  );
}
export default AdminHome;
