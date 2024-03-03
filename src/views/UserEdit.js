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
  useGetUserByIdQuery,
  useUpdateUserMutation
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
const validationSchema = yup.object({
  // username: yup.string().required('Missing username'),
  // email: yup.string().required('Missing email').email('Invalid email format'),
  //password: yup.string().required('Missing password'),
}).required()
const UserEdit = ({ id }) => {
  console.log("=====user=============")
  let content
  const { data: user, isLoading, isSuccess } = useGetUserByIdQuery({ id });
  let defaultValues
  const [updateUser, { isLoading: isLoadingUpdateUser, isSuccess: isSuccessUpdateUser, isError: isErrorUpdateUser, error: errorUpdateUser, }] =
    useUpdateUserMutation();
  const { register, reset, handleSubmit, setValue, watch, formState: { errors }, setError, } = useForm({
    defaultValues: useMemo(() => {
      return defaultValues;
    }, [defaultValues])
  });
  useEffect(() => {
    reset(user);
  }, [user]);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log('data', data)
    const response = await updateUser({ id, ...data })
    //navigate("/UsersTask");
    
  }
  if (user) {
    content = (
      <form className='w-[80%] mx-auto flex  flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      
          <div className="flex gap-4">
            <div className="w-[30%] flex justify-end  font-bold">
              < div className="card w-[100px] h-[100px] bg-base-100 shadow-xl "         >
                <img
                  src={`https://academicjobs.s3.amazonaws.com/img/users/${user.portrait}` || '/favicon.png'}
                  alt={user.firstName}
                  className=" w-[100px] h-[100px] object-contain rounded-md bg-white"
                />
              </div>
            </div>
            <div className="w-[50%] text-left">
              <InputBlock4 type="text" field="firstName" label="firstName" register={register} errors={errors} forceClass="" />
            </div>
          </div>
          <ReactQuill value={user?.task} className=""
            onChange={(value) => {
              setValue("task", value)
            }}
          />
          <button
            className="btn btn-success "
          >
            Save Changes
          </button>
      
      </form>
    )
  }
  return (
    <div className="overflow-y w-full">
      <div className="w-full flex flex-col gap-4">
        {content}
      </div>
    </div>
  );
};
export default UserEdit;
