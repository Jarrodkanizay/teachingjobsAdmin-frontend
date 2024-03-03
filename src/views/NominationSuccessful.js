import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NominationSuccessful = () => {  window.location.replace("https://www.academicjobs.com/");
  return (
    <div className="">
      <Helmet>
        <title>Nomination Successful - Thank you</title>
        <meta
          name="description"
          content="Successful nomination for the Principal of the Year Award."
        />
        <meta name="keywords" content="Successful nomination" />
      </Helmet>
      <section>
        <div className="px-7 py-8 container mx-auto py-16 p-4 pt-4 rounded-3xl mt-8 mb-56">
          <h1 className="text-5xl font-semibold  text-[#00aeef] mb-8">
            Thank you for your nomination of Global Academic of the Year!
          </h1>
          <p>
            To increase your nominees chances of winning ask other academic
            staff to share this link{" "}
            <a
              className="link link-warning hover:text-[#00aeef]"
              href="https://www.academicjobs.com/global-academic-awards-2023-nominations"
            >
              www.AcademicJobs.com
            </a>{" "}
            on their various social media accounts and their email…
          </p>
          <ul>
            <li>Email</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Website</li>
            <li>Other social media accounts</li>
          </ul>
          <a
            className="btn btn-warning hover:bg-[#00aeef] mt-4"
            href="/global-academic-awards-2023-nominations"
          >
            Nominate someone else
          </a>
        </div>
      </section>
    </div>
  );
};

export default NominationSuccessful;
