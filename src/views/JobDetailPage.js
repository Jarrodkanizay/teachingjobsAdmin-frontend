import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ShareJob from "./ShareJob";
import Modal from "../components/Modal";
import { BsFillShareFill } from "react-icons/bs";
import JoinTalentPoolButton from "../components/JoinTalentPoolButton";

import { useGetJobByIdQuery } from "../store/apiSlice";
const JobDetail = () => { 
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const { data: job, isLoading, isSuccess } = useGetJobByIdQuery(id);
  //window.location.replace(`https://www.academicjobs.com/jobs/name/${id}`);

  let content;
  if (isLoading) {
    content = (
      <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
        <div className="flex items-center w-full space-x-2">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[400px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[480px]">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[440px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        </div>
        <div className="flex items-center w-full space-x-2 max-w-[360px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (isSuccess) {
    const {
      employer_id,
      id,
      company_name,
      logo,
      title,
      location,
      activation_date,
      expiration_date,
      description,
      how_to_apply,
      featured,
    } = job;
    window.location.replace(`https://www.academicjobs.com/jobs/${title?.replace(/\W+/g, '-').toLowerCase()}/${id}`);
    function renameURL(oldURL) {
      if (oldURL === undefined)
        return "https://www.sciencejobs.com.au/favicon.png";
      const splitURL = oldURL.split("/");
      const lastItem = splitURL[splitURL.length - 1];
      const prefixURL =
        "https://www.academicjobs.com/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2Funiversity-logo%2F";
      const suffixURL = "&w=384&q=75";
      return prefixURL + lastItem + suffixURL;
    }

    if (location == "Academic Hub") {
      console.log(expiration_date);
      console.log(new Date(expiration_date) < new Date());
      content = (
        <div className="bg-white max-w-screen-xl mx-auto ">
          <Helmet>
            <title>{`${title} | ${company_name}`}</title>
            <meta
              name="description"
              content={`Explore our ${title} job opportunities available at ${company_name}! Apply to become a ${title} today. Apply for an academic job today!`}
            />
            <meta
              name="keywords"
              content={`${title} jobs| ${company_name} university jobs| ${location} university jobs`}
            />
          </Helmet>
          <div className="flex items-center p-4">
            <div className="w-1/4 pr-4 hidden">
              <Link
                to={`https://www.academicjobs.com/employers/${company_name
                  ?.replace(/\W+/g, "-")
                  .toLowerCase()}/${employer_id}/`}
              >
                <img
                  className="w-full rounded-xl "
                  src={renameURL(logo) || "/favicon.png"}
                  alt={company_name}
                />
              </Link>
            </div>
            <div className="w-3/4">
              <h1 className="text-2xl font-bold mb-2 text-[#00aeef]">
                {title}
              </h1>
              <div className="mb-4">
                <Link className="text-blue-500" to={`/employers/id/${id}`}>
                  {location}
                </Link>
              </div>
              <div className="flex items-center">
                <div className="ml-4">
                  <a
                    className="text-blue-500"
                    data-toggle="modal"
                    data-target="#apply-modal"
                    data-id="60078"
                    title="Save"
                    data-href="/saved-jobs/?id=60078&amp;action=save&amp;reload=✓"
                    rel="nofollow"
                    href="#"
                  ></a>
                  <a
                    tabIndex="-1"
                    className="text-blue-500"
                    role="button"
                    rel="nofollow"
                    aria-label="Share this job"
                    data-original-title=""
                    title=""
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-6 bg-white border-2 border-2-gray-300 p-4 mb-4 rounded-lg shadow-lg" '>
            <span>{location}</span>
            <span>
              {expiration_date &&
                `Exp. ${new Date(expiration_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}`}
            </span>
            {featured ? (
              <span className="inline-block bg-blue-400 text-white px-2 py-1 text-xs font-bold rounded-full mr-2">
                Career Advice
              </span>
            ) : (
              ""
            )}
          </div>
          <article
            className="wrapper media bg-white border-2 border-2-gray-300 p-4 mb-4 rounded-lg shadow-lg"
            data-id="59972"
          >
            {/* <div className='wrapper'> */}
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </article>
          {/* <ReactQuill value={description} modules={quillModules} /> */}
          {new Date(expiration_date) < new Date() && expiration_date && (
            <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 skew-y-0">
              Job Fulfilled By AcademicJobs.com
            </div>
          )}
        </div>
      );
    } else {
      console.log(job);
      console.log(expiration_date);
      console.log(new Date(expiration_date) < new Date());
      content = (
        <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
          <Helmet>
            <title>{`${title} | ${company_name}`}</title>
            <meta
              name="description"
              content={`Explore our ${title} job opportunities available at ${company_name}! Apply to become a ${title} today. Apply for an academic job today!`}
            />
            <meta
              name="keywords"
              content={`${title} jobs| ${company_name} university jobs| ${location} university jobs`}
            />
          </Helmet>
          <div className="flex items-center p-4">
            <div className="w-1/4 pr-4">
              <Link
                to={`https://www.academicjobs.com/employers/${company_name
                  ?.replace(/\W+/g, "-")
                  .toLowerCase()}/${employer_id}/`}
              >
                <img
                  className="w-full rounded-xl"
                  src={renameURL(logo) || "/favicon.png"}
                  alt={company_name}
                />
              </Link>
            </div>
            <div className="w-3/4">
              <h1 className="text-2xl font-bold mb-2">{title}</h1>
              <div className="mb-4">
                <Link
                  className="text-blue-500 hidden"
                  to={`/employers/id/${id}`}
                >
                  {location}
                </Link>
              </div>
              <div className="flex items-center">
                <button
                  target="_blank"
                  className="px-4 py-2 bg-[#00aeef] text-white font-bold rounded-full"
                  data-toggle="modal"
                  data-target="#apply-modal"
                  data-title={title}
                  rel=""
                  onClick={() => {
                    let subject = `Application for ${title} position at  ${company_name} from AcademicJobs.com`;
                    if (how_to_apply.includes("@")) {
                      window.location.href = `mailto:${how_to_apply}?subject=${encodeURIComponent(
                        subject
                      )}`;
                    } else {
                      window.open(how_to_apply, "_blank");
                      //window.location.href = how_to_apply;
                    }
                  }}
                >
                  Apply Now
                </button>
                <div className="ml-4">
                  <a
                    className="text-blue-500"
                    data-toggle="modal"
                    data-target="#apply-modal"
                    data-id="60078"
                    title="Save"
                    data-href="/saved-jobs/?id=60078&amp;action=save&amp;reload=✓"
                    rel="nofollow"
                    href="#"
                  ></a>
                  <a
                    tabIndex="-1"
                    className="text-blue-500"
                    role="button"
                    rel="nofollow"
                    aria-label="Share this job"
                    data-original-title=""
                    title=""
                  ></a>
                  <div className="">
                    <div
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      <BsFillShareFill />
                    </div>
                    <Modal
                      open={isOpen}
                      onClose={() => {
                        setIsOpen(false);
                      }}
                    >
                      {/* <button onClick={() => {
                    setIsOpen(false)
                  }}>Close</button> */}
                      <ShareJob />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap gap-6 bg-white border-2 border-[#00aeef] p-4 mb-4 rounded-lg shadow-lg" '>
            <span className="text-blue-500">{location}</span>
            <span>
              {expiration_date &&
                `Exp. ${new Date(expiration_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}`}
            </span>
            {featured ? (
              <span className="inline-block bg-[#00aeef] text-white px-2 py-1 text-xs font-bold rounded-full mr-2">
                Featured
              </span>
            ) : (
              ""
            )}
          </div>
          <article
            className="wrapper media bg-white border-2 border-2-gray-300 p-4 mb-4 rounded-lg shadow-lg"
            data-id="59972"
          >
            {/* <div className='wrapper'> */}
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div className="mt-5 mb-0 text-right">
              <JoinTalentPoolButton />
            </div>
          </article>
          {/* <ReactQuill value={description} modules={quillModules} /> */}
          {new Date(expiration_date) < new Date() && expiration_date && (
            <div className="bg-opacity-50 bg-red-500 text-white text-4xl px-8 py-8 rounded-full absolute top-[200px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-45 skew-y-0">
              Job Fulfilled By AcademicJobs.com
            </div>
          )}
        </div>
      );
    }
  }
  return <div className="overflow-y w-full relative">{content}</div>;
};
export default JobDetail;
