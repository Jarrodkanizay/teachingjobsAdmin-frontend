import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import SearchResults2 from "./SearchResults2";
// import { useGetOrderedProductsQuery } from "../store/apiSlice";
import { useParams, useNavigate, Link, NavLink } from "react-router-dom";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { setJobCredits } from "../store/postsSlice";
import UniSearchBlock1 from "./UniSearchBlock1";
import { useForm } from "react-hook-form";
import EditEmployerProfile1 from "./EditEmployerProfile1";
import { setJob, setId, setEmployer } from '../store/postsSlice'
import SearchResultsEmployers from "./SearchResultsEmployers";
function EmployersCenter(props) {
  const { id } = useParams();
  
  const employer = useSelector((state) => state.posts.employer);
  //alert(employer.employer_id)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [employerID, setEmployerID] = useState(employer?.employer_id || 7)
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
    <div className="w-full flex  flex-col px-6  gap-8 mt-2">
                        <div className=" flex justify-start gap-1 items-center align-middle">
                            <ul className=" flex justify-start items-end gap-4   px-1  ">
                                <div className="card w-[100px] h-[100px] bg-base-100 shadow-xl ">
                                    <div className="w-[100px] h-[100px] grid place-items-center">
                                        <img
                                            src={employer?.logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${employer?.logo}` : '/favicon.png'}
                                            alt={`${employer?.company_name}`}
                                            className="object-contain rounded-md bg-white"
                                        />
                                    </div>
                                </div>
                            </ul>
                            <div className="text-4xl text-black font-bold text-center ">{employer?.company_name}</div>
                        </div>

      <div className="w-full flex justify-between">
        <div className="w-[50%]">
          <EditEmployerProfile1 id={employer?.employer_id} /> 
          {/* {employer?.company_name && (
            <div className="flex flex-col gap-2 p-4">
              <div className=" flex justify-start gap-1 items-center align-middle">
                <ul className=" flex justify-start items-end gap-4   px-1  ">
                  <div className="card w-[100px] h-[100px] bg-base-100 shadow-xl ">
                    <div className="w-[100px] h-[100px] grid place-items-center">
                      <img
                        src={employer?.logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${employer?.logo}` : '/favicon.png'}
                        alt={`${employer?.company_name}`}
                        className="object-contain rounded-md bg-white"
                      />
                    </div>
                  </div>
                </ul>
                <div className="text-4xl text-orange-600 font-black text-center ">{employer?.company_name}</div>
              </div>
              <div className="text-2xl text-orange-600 font-black text-left ">Employer Profile</div>
              <div>
                <Link
                  to={`/employers/${employer?.company_name
                    ?.replace(/\W+/g, "-")
                    .toLowerCase()}/${employer?.employer_id}/`}
                  className="btn w-[49%]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Employer Profile
                </Link>
                <Link
                  to={employer?.website}
                  className="btn w-[49%] ml-2"
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
          )}
          <EditEmployerProfile1 id={employer?.employer_id} /> */}
        </div>
        <div className="w-[50%]">
          <SearchResults2 q={{ employer_id: employer?.employer_id || 0, expired: "0" }} />
        </div>
      </div>
    </div>
  );
}
export default EmployersCenter;
