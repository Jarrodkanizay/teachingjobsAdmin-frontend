import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {
  useShareJobMutation
} from '../store/apiSlice'
const ShareJob = ({ jobSummary }) => {
  const [sendEmail, {
    isSuccess: isSendSuccess,
    isError: isSendError,
    error: senderror
  }] = useShareJobMutation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    toEmail: '',
    desc: '',
    job: jobSummary,
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendEmail(formData);
    //try {
    console.log(response)
    // Check the response for success or failure
    if (response) {
      console.log('Mutation was successful');
      setSubmitStatus('success');
    } else {
      console.error('Mutation failed:', response.error);
      setSubmitStatus('error');
    }
  }
  return (
    <div class="bg-gray-500/[.03] flex flex-col gap-2 p-12 centre">
      <div class="modal-header">
        <h2 class="modal-title mt-0 font-bold text-white text-2xl  bg-[#00aeef]  rounded-2xl p-2 ml-[-1rem] ">Email this job to a friend</h2>
      </div>
      <div class="flex justify-between">
        <div class="form mt-0">
          <form className="mt-0" onSubmit={handleSubmit}>
            <div class="form-group row pt-8">
              <label for="ToAddress" class="col-lg-4 control-label label-required font-bold  text-orange-400"> Email Job To </label>
              <div class="col-lg-8">
                <input className="input input-bordered w-full max-w-xs"
                  type="text"
                  id="toemail-input"
                  name="toEmail"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-group row pt-4">
              <label for="FromAddress" class="col-lg-4 control-label label-required font-bold  text-orange-400"> Your Email </label>
              <div class="col-lg-8">
                <input className="input input-bordered w-full max-w-xs" type="text"
                  id="fromemail-input"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange} />
              </div>
            </div>
            <div class="form-group row pt-4">
              <label for="FromName" class="col-lg-4 control-label font-bold  text-orange-400"> Your Name </label>
              <div class="col-lg-8">
                <input className="input input-bordered w-full max-w-xs" type="text"
                  id="name-input"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange} />
              </div>
            </div>
            <div class="form-group row pt-4">
              <label for="Message" class="col-lg-4 control-label font-bold  text-orange-400"> Message </label>
              <div class="col-lg-8">
                <textarea
                  id="description-input"
                  name="desc"
                  placeholder="Message"
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs"></textarea>
              </div>
            </div>
            <div class="modal-footer pt-4">
              <div class="row">
                <div class="col-lg-4 order-lg-1">
                  <div class="form-actions mt-0">
                    <button class="btn btn-yellow" type="submit" data-dismiss="modal">Send Email</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          {submitStatus === 'success' && (
            <p className="mt-4 text-center text-2xl font-bold text-green-500">Thank you for your message/feedback, our team will get back to you soon!</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-center text-2xl font-bold text-red-500">An unknown error occurred.</p>
          )}
        </div>
      </div>
    </div>
  )
}
export default ShareJob
