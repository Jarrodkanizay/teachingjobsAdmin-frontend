import React, { useState, useEffect, useRef } from "react";

const LoginForm = () => {
  return (
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="m-auto">
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
                type="email"
                placeholder="Email Address"
                autocomplete="email"
                class="w-full input input-bordered"
              />
            </div>
            <div>
              <label class="label">
                <span class="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autocomplete="current-password"
                class="w-full input input-bordered"
              />
            </div>
            <a
              href="/password-reset"
              class="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forgot Password?
            </a>
            <div>
              <button class="btn btn-primary btn-block">Login</button>
            </div>
          </form>
        </div>
        <div className="mt-8">
          <p className="text-xs mb-1">Don't have an account…</p>
          <a href="/sign-up" class="btn btn-block">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
