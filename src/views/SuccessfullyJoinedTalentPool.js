import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SuccessfullyJoinedTalentPool = () => {  window.location.replace("https://www.academicjobs.com/academic-talent-pool");
  return (
    <div className="">
      <Helmet>
        <title>Nomination Successful - Thank you</title>
        <meta
          name="description"
          content="Thank you! You have successfully joined our talent pool."
        />
        <meta name="keywords" content="talent pool" />
      </Helmet>
      <section>
        <div className="px-7 py-8 container mx-auto py-16 p-4 pt-4 rounded-3xl mt-8 mb-56">
          <h1 className="text-5xl font-semibold  text-[#00aeef] mb-8">
            Thank you for joining our Talent Pool!
          </h1>
          <p>
            Thank you for joining our distinguished talent pool! We are thrilled
            to have you as part of our vibrant academic community. Your
            expertise and dedication to academia enrich our network and open up
            new horizons for collaboration, innovation, and professional growth.
          </p>
          <p>
            We are committed to supporting your career journey and look forward
            to connecting you with rewarding opportunities that align with your
            exceptional skills and aspirations. Welcome aboard, and let’s make a
            significant impact together!
          </p>
        </div>
      </section>
    </div>
  );
};

export default SuccessfullyJoinedTalentPool;
