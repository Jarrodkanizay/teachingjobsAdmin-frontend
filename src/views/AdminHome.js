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
          <div className="lg:hero-content flex-col lg:flex-row-reverse bg-slate-200 p-10 rounded-xl ">
            <img
              src={`https://academicjobs.s3.amazonaws.com/img/_misc/Brown+Minimalist+New+Year+Greeting+Photo+Facebook+Post+(2).jpeg`}
              width={300}
              height={200}
              className="lg:max-w-lg rounded-lg shadow-2xl mb-8 lg:mb-0"
              alt="AI Powered Recruitment Platform"
            />
            <div>
              <h1 className="lg:text-4xl font-bold text-aj">
                Welcome! {userInfo.firstName} & the Manila team
              </h1>
              <p className="py-6">You've landed on the new AcademicJobs Admin Center.
                We've just made it easier for all Manila staff to post a job for all our clients.
              </p>
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
                forceclassName=""
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
                forceclassName=""
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
                forceclassName=""
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
                forceclassName=""
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
                forceclassName=""
                onChange={onEditorStateChange1}
                onSelect={onSelectUniSearch}
              />
              <div className="">
                <SearchResultsEmployers q={{ country: "New Zealand" }} />
              </div>
            </div>
          </details>

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

            <figure className="   rounded-3xl "> 
                        <img
                width={150}
                height={150}
                src="https://media.licdn.com/dms/image/D5603AQEmcwoG_gnjFg/profile-displayphoto-shrink_200_200/0/1703919255002?e=1712188800&v=beta&t=VTdBPqWS3G09LVG6uDr2FnjD7hT89fXvhkqG2sSOuYk"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                <h2 className="  capitalize font-bold pb-1">
                {' '}
             Sean
              </h2>
            </figure>

            <figure className="    rounded-3xl "> 
                         <img
                width={150}
                height={130}
                src="https://media.licdn.com/dms/image/D5603AQHcPHJ8mX7p5A/profile-displayphoto-shrink_200_200/0/1704583557572?e=1712188800&v=beta&t=JoXIC6vySUNfHfBSs4x2OfQm20oHMmgjz0KSzzAXmaw"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
               <h2 className="  capitalize font-bold pb-1">
                {' '}
               Dan
              </h2>
            </figure>

            <figure className="   rounded-3xl"> 
                        <img
                width={150}
                height={150}
                src="https://media.licdn.com/dms/image/D5603AQH8XgUhkhGoeA/profile-displayphoto-shrink_200_200/0/1680087359555?e=1712188800&v=beta&t=WQHYNcc76cnlk-LMcZzt1Oh6luSuM7qIkstUnRb-4p8"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-3xl"
              />
                <h2 className="  capitalize font-bold pb-1">
                {' '}
                Walter
              </h2>
            </figure>

          </div>

          <figure className="   rounded-3xl mt-16"> 
            <h2 className="  capitalize font-bold pb-1">
                {' '}
                Employee of The Month:
                <span className="text-amber-500"><br/>BIG JIM</span>
              </h2>
              <img
                width={500}
                height={500}
                src="https://academicjobs.s3.amazonaws.com/img/users/IMG_2126.jpg"
                alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                className="rounded-full items-center justify-center"
              />
            </figure>

        </div>
      </div>
    </div>
  );
}
export default AdminHome;
