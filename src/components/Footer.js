import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-4 px-7 md:mt-4 md:pb-10 bg-[#f4a10c] rounded-b-3xl rounded-t-lg shadow-xl pb-4 border-4 ">
      <hr className="w-ful  mx-auto my-2 bg-white border-0 rounded md:my-2 md:mb-4 dark:bg-gray-700 max-w-screen-xl mx-auto "></hr>
      <div className=" text-white font-open-sans grid grid-cols-1 md:grid-cols-4 gap-8 pb-4 max-w-screen-xl mx-auto pl-2">
        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Recruiters</li>

            <li>
              <a className="footer-nav__link" href="/post-job/">
                Post a Job
              </a>
            </li>
            <li>
              <Link to="/about/">About AJ</Link>
            </li>
            <li>
              <Link to="/contact-us/">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1">Job Seekers</li>
            <li>
              <Link to="/jobs/">Find Jobs</Link>
            </li>
            <li>
              <Link to="/employers/">Find Employers</Link>
            </li>
            <li>
              <Link to="/academic-hub/">Academic Hub</Link>
            </li>
            <li>
              <Link to="/academic-talent-pool/">Talent Pool</Link>
            </li>
          </ul>
        </div>

        <div className=" text-white font-open-sans">
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Navigation</li>
            {/* <li><a className="footer-nav__link" href="/">Home</a></li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/faq/">FAQ</Link>
            </li>

            <li>
              <Link to="/sitemap/">Site Map</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-white font-bold text-xl pb-1 ">Socials</li>
            {/* <li><a href="https://academicjobs.com/career-advice">Career Advice</a></li> */}
            <li>
              <a
                className="footer-nav__link"
                href="https://www.facebook.com/profile.php?id=100088232015128"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                className="footer-nav__link"
                href="https://www.youtube.com/channel/UCIaknpVcM_ZijJSWJCYi8aw"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/academic-jobs/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
