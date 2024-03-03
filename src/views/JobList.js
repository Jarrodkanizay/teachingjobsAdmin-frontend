import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setJob, setId, setStatusId } from "../store/postsSlice";
import Job from "./Job";
import Modal from "../components/Modal";
import JobDetail from "./JobDetail";
const JobList = ({ endOfJobs, data, nextPage }) => {
  console.log("JobList");
  ///alert(endOfJobs)
  const dispatch = useDispatch();
  let content;
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  content = data.map((job, index) => {
    const { id } = job;
    //console.log(job)
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? "" : ""}`}
        onClick={() => {
          dispatch(setJob(job));
          if (window.innerWidth <= 768) {
            setIsOpen(true);
          }
        }}
        key={index}
      >
        <Job job={job} />
      </div>
    );
  });
  return (
    <div className="overflow-y w-full">
      {content}
      <button
        type="button"
        className="load-more bg-white py-2 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100"
        onClick={() => {
          if (!endOfJobs) {
            nextPage();
          }
        }}
      >
        {endOfJobs ? "End Of Job list" : "Load more"}
      </button>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <JobDetail />
      </Modal>
    </div>
  );
};
export default JobList;
