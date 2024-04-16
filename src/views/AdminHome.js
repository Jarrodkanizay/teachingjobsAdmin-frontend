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
function AdminHome(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [employerID, setEmployerID] = useState(3173)
  const region = useSelector((state) => state.posts.region);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { data, isLoading, isSuccess } = useGetUserByIdQuery({ id: userInfo.id });
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
          forceclassName="mb-6"
          onChange={onEditorStateChange1}
        /> */}
      {/* <UniSearchBlock
          country="Australia"
          register={register}
          field="employer_name1"
          customKey="employer_name1"
          label="employer_name1"
          value1=""
          forceclassName="mb-6"
          onChange={onEditorStateChange1}
        /> */}
      <div className="flex justify-between w-full gap-8">
        <div className="w-1/2 ">
          {/* Hero banner */}
          <div className=" flex-col   rounded-xl ">
       
            <div>
              <h1 className="lg:text-4xl font-bold text-[#e74b7f]">
                Welcome {userInfo.firstName} ! <br/> to the TeachingJobs admin portal </h1>
          
              {/* <Link className="btn btn-aj" href="/post-a-job">
                Post a Job
              </Link> */}
            </div>
          </div>
          <div className="p-1  shadow-xl rounded-xl">
            <h1 className=" text-sky-600 font-bold mb-2">Your Tasks</h1>
            <div className="w-full min-h-[500px] border border-red-600 whitespace-pre-wrap">
              {
                data &&
                <div dangerouslySetInnerHTML={{ __html: data.task }} />
                
              }
            </div>

          </div>
          <SearchResults1 />
        </div>
        <div className="w-1/2">
 
        <h2 className="lg:text-3xl font-bold ">
                Powered by the Post My Job PTY LTD team
              </h2>

          <div className="flex gap-4">
          <div className="card bg-gray-900 shadow-xl w-1/2 rounded-3xl mt-16">
            <div className="card-body">
       
            <figure  >
              <img
                width={300}
                height={300}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/420242991_741144318123644_4167791228012772159_n.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
            </figure>
            <h2 className="card-title text-white">
                {' '}
                The Don{' '}
              </h2>
              <a className=" text-gray-400"> 23 Jan, 2024</a>
            </div>
            <ul className=" p-4 pl-12  text-gray-500 text-center font-bold" >
            </ul>
          </div>
        
  <figure className="    rounded-3xl p-16"> 
          
              <img
                width={300}
                height={300}
                src="https://academicjobs.s3.amazonaws.com/img/_misc/View+recent+photos.jpeg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl "
              />
                <h2 className="  capitalize font-bold pb-1">
                {' '}
               The Jazza
              </h2>
            </figure>
            </div>





          <div className="grid grid-cols-3 gap-2 mt-16">



            <figure className="    rounded-3xl ">
                          <img
                width={150}
                height={150}
                src="https://academicjobs.s3.amazonaws.com/img/users/laira_andrea_austria.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl "
              />
                <h2 className="  capitalize font-bold pb-1">
                {' '}
                laira andrea austria
              </h2>
            </figure>

            <figure className="   rounded-3xl ">
                         <img
                width={150}
                height={150}
                src="https://academicjobs.s3.amazonaws.com/img/users/joan_santos.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl h-4/5 w-40"
              />
                 <h2 className="  capitalize font-bold pb-1">
                {' '}
                joan santos
              </h2>
            </figure>


            <figure className="   rounded-3xl">
                          <img
                width={150}
                height={150}
                src="https://academicjobs.s3.amazonaws.com/img/users/lexphil_de_vera.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                <h2 className="  capitalize font-bold pb-1">
                {' '}
                lexphil de vera
              </h2>
            </figure>

            <figure className="   rounded-3xl ">
                          <img
                width={150}
                height={150}
                src="https://academicjobs.s3.amazonaws.com/img/users/fausto_san_juan.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                <h2 className="  capitalize font-bold pb-1">
                {' '}
                fausto san juan
              </h2>
            </figure>

            <figure className="    rounded-3xl ">
                        <img
                width={150}
                height={150}
                src="https://academicjobs.s3.amazonaws.com/img/users/jethro_mule.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                  <h2 className="  capitalize font-bold pb-1">
                {' '}
                jethro mule
              </h2>
            </figure>

            <figure className="   rounded-3xl">
                          <img
                width={150}
                height={150}
                src="https://academicjobs.s3.amazonaws.com/img/users/jhon_michael_cruz.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                <h2 className="  capitalize font-bold pb-1">
                {' '}
                jhon michael cruz
              </h2>
            </figure>



            <figure className="   rounded-3xl ">
                        <img
                width={150}
                height={150}
                src="https://academicjobs.s3.amazonaws.com/img/users/luigi_ynaki_jardin.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                  <h2 className="  capitalize font-bold pb-1">
                {' '}
                luigi ynaki jardin
              </h2>
            </figure>

            <figure className="    rounded-3xl ">
                         <img
                width={150}
                height={130}
                src="https://academicjobs.s3.amazonaws.com/img/users/mary_rose_joana_pecson.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                 <h2 className="  capitalize font-bold pb-1">
                {' '}
                mary rose joana pecson
              </h2>
            </figure>

            <figure className="   rounded-3xl">
                       <img
                width={150}
                height={150}
                src="https://academicjobs.s3.amazonaws.com/img/users/norren_saligan.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                   <h2 className="  capitalize font-bold pb-1">
                {' '}
                norren saligan
              </h2>
            </figure>

            </div>
        </div>
      </div>
    </div>
  );
}
export default AdminHome;
