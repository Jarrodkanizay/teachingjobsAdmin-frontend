import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import SearchResults1 from "./SearchResults1";
// import { useGetOrderedProductsQuery } from "../store/apiSlice";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { setJobCredits } from "../store/postsSlice";
import InputBlock2 from "./InputBlock2";
import SelectBlock2 from "./SelectBlock2";
import SelectBlock from "./SelectBlock";
import UniSearchBlock from "./UniSearchBlock";
import { useForm } from "react-hook-form";
import EditEmployerProfile1 from "./EditEmployerProfile1";
import { setJob, setId, setEmployer } from '../store/postsSlice'
function JobsCenter(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [employerID, setEmployerID] = useState(3173)
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  // const { data, isLoading, isSuccess } = useGetOrderedProductsQuery({ id: userInfo.id });
  let content, content1;
  const { register, handleSubmit, setValue, watch, formState: { errors }, setError } = useForm()
  useEffect(() => {
    register("employer_name", { required: false });
  }, [register]);
  let { expired } = useParams();
  const onEditorStateChange1 = (company_name, id, Region, country) => {
    console.log("=====================================", company_name, id, Region, country)
    setEmployerID(id)
    dispatch(setEmployer({ company_name, employer_id: id }))
    //setValue("description", editorState);
  };
  const onSubmit = async (data) => {
    console.log('data', data)
  }
  return (
    <div className=" flex  flex-col px-6  gap-8 mt-16 w-1/2">
      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full  ">
        <div className="flex justify-start items-end gap-1">
          <InputBlock2 className="font-bold" type="text" field="location" label="Title" register={register} errors={errors} forceClass="font-bold" />
          <UniSearchBlock
            register={register}
            field="employer_name"
            customKey="employer_name"
            label="employer_name"
            value1=""
            forceClass=""
            onChange={onEditorStateChange1}
          />
          <InputBlock2 type="date" field="from_date" label="From Date" register={register} errors={errors} forceClass="font-bold text-xl"
          />
          <InputBlock2 type="date" field="to_date" label="To Date" register={register} errors={errors} forceClass=" font-bold"
          />
          <button
            type="submit"
            className="btn btn-success"
          >
            Search
          </button>
        </div>
      </form>
      <p className="text-3xl font-black text-orange-600 shadow-xl px-2 pb-4">Our Jobs</p>
      <a class="btn w-full " href="/post-a-job">Post A Job</a>
      <SearchResults1 q={{ userId: -2 }} />
    </div>
  );
}
export default JobsCenter;
