import React, { useState, useEffect, useRef } from "react";

const PasswordResetForm = () => {
  return (
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
      <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-primary lg:max-w-lg">
        <div class="flex justify-center items-center">
          <img
            className="max-w-xs"
            src="https://www.academicjobs.com/academicJobsLogo.png"
            alt="Academic Jobs Login"
          />
        </div>
        <form class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <button class="btn btn-primary btn-block">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PasswordResetForm;
