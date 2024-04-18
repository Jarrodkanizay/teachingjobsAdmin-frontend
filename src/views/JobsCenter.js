import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import SearchResults2 from "./SearchResults2";
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
  const [q, setQ] = useState({ userId: -1 })
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  if (userInfo.employer_id) {
    setQ()
  }
  // const { data, isLoading, isSuccess } = useGetOrderedProductsQuery({ id: userInfo.id });
  let content, content1;
  const { register, handleSubmit, setValue, watch, formState: { errors }, setError } = useForm()
  const onEditorStateChange1 = (company_name, id, Region, country) => {
    console.log("=====================================", company_name, id, Region, country)
    setValue("employer_name", company_name)
  };
  const onSubmit = async (data) => {
    console.log('data', data)
    setQ(data)
  }
  return (

    <div className=" flex  flex-col px-6  gap-8 mt-4 w-full">
      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full">
        <p className="text-3xl font-bold text-black shadow-xl px-2 pb-4 mt-4 mb-6">Our Jobs</p>

        <div className="hidden justify-start items-end gap-1">

          <InputBlock2 className="font-bold" type="text" field="title" label="Title" register={register} errors={errors} forceClass="font-bold" />
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
      <a class="btn w-full text-[#e74b7f]" href="/post-a-job">Post A Job</a>
      <SearchResults2 q={q} />
    </div>
  );
}
export default JobsCenter;
