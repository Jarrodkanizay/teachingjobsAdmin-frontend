import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import SubHead from "../components/SubHead";

const AboutAJ = () => {  
  // window.location.replace("https://www.academicjobs.com/about");
  // useEffect(() => {
  //   window.location.replace("https://www.academicjobs.com/about");
  // }, []);
  return (
    <div>
      <Helmet>
        <title>About Science Jobs</title>
        <meta
          name="description"
          content="The Number 1 job board for Science Jobs.  Listing higher ed jobs for faculty at colleges and universities in the United States and around the world."
        />
        <meta
          name="keywords"
          content="About Sciencejobs, About Science Jobs, Sciencejobs About  "
        />
      </Helmet>

      {/* <img
        src="/about-us/about-aj.jpeg"
        alt="About us - ScienceJobs - Science Jobs - About"
        className="max-w-screen-sm p-0 m-0 mx-auto ml-36 rounded-2xl"
      ></img> */}

      <main className="container">
        <div className="prose mt-16">
          {/* <SubHead>About Us</SubHead> */}
          <h1>All the Best Science Jobs</h1>
          <h2>
            Find the best Science positions in your city, country and
            worldwide.
          </h2>
        </div>
        <div className="prose text mt-8">
          <p className="intro">
          Every Top Science Position
Discover the top Science jobs available in your location, nation, and the entire world.
          This a list of higher education staff, support, and administrative positions. Use ScienceJobs.com to search for faculty opportunities, college careers, and Science employment online.


          </p>
          <p>

          </p>
          <p>
          Greetings and welcome to ScienceJobs, the premier online job search and application portal for universities and higher education. We offer the ideal opportunity for you, whether you're searching for a professor, research, administrative, or professional career.

          </p>
          <p>
          A group of experts in higher education, dissatisfied with the opaque and ineffective nature of the Science employment market, formed Science Jobs. Simply put, they believed that consumers were not served by the outdated job sites for Science roles, therefore they kept

          </p>
          <p>
          function using antiquated, very ancient technologies. As a result, they have developed the greatest Science employment platform available today, which makes it simpler for applicants to look for positions, evaluate offers, and get in touch with employers. Additionally, they have given companies an easy-to-use and affordable option to manage their applications, reach a worldwide talent pool, and publicise their job openings.
          </p>
          <p>
          Over time, ScienceJobs has developed into the most reputable and well-liked website for Science employers and job searchers globally. Featuring more than 5000 universities and their employment, more than 1 million global users who have joined, 10,000 live job postings, and 500 partner institutions spread over 50 nations. All Science specialties and subjects at all Science levels are included on ScienceJobs.com, ranging from the humanities and social sciences to STEM and{" "}
           
          health sciences, ranging from deans and professors to postdocs and PhD candidates.

Our goal is to assist you in hiring the top Science talent or finding your ideal Science position. We are dedicated to giving you the most sophisticated and user-friendly tools, the most thorough and current information, and the most expert and individualised service. In addition, we have a strong commitment to advancing inclusion, equity, and diversity in higher education as well as to the Science community.

We really hope you find ScienceJobs enjoyable to use and helpful for your Science career or hiring requirements. Do not hesitate to contact us with any queries, comments, or recommendations. We hope to hear from you soon!
           
           <Link to="/contact-us/" className="link link-aj">
              contact us
            </Link>
            . We would love to hear from you!
          </p>
          <p>
            <Link to="/about/term-of-use/" className="link link-aj">
              Terms & Conditions
            </Link>
          </p>
          <p>
            <Link to="/about/diversity-statement/" className="link link-aj">
              Diversity Statement
            </Link>
          </p>
          {/* <p>
            <Link
              to="https://iloveSciencejobs.com/university-partners/"
              className="link link-aj"
            >
              Our Partners
            </Link>
          </p> */}
        </div>
      </main>
    </div>
  );
};
export default AboutAJ;
