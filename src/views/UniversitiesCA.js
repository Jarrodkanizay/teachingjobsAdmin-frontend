import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const countryRegion = "Canada";

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith("s")
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

const RecruitmentGlobal = () => {  window.location.replace("https://www.academicjobs.com/canada/employers");
  return (
    <div className="">
      <Helmet>
        <title>Find {countryRegionPlural()} Top University Employers</title>
        <meta
          name="description"
          content="Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, Canada, or anywhere else, we have the information you need to make an informed decision."
        />
        <meta
          name="keywords"
          content="Find Universities. Find employers, Find institutions"
        />
      </Helmet>
      <main>
        {/* Hero banner */}
        <section>
          <div className="hero max-h-fit bg-base-200 py-8 mx-auto">
            <div className="container mx-auto">
              <div className="hero-content flex-col xl:flex-row-reverse mx-auto max-w-full">
                <img
                  src="/academic-job-postings/university-of-toronto.jpg"
                  className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                  alt="The Top Academic Employers"
                />
                <div>
                  <h1 className="text-3xl font-bold text-aj">
                    Find {countryRegionPlural()} Top University Employers
                  </h1>

                  <p className="py-6">
                    Here you will find a variety of opportunities to join the
                    faculty or staff of leading Canadian institutions, such as
                    the University of Toronto, McGill University, the University
                    of British Columbia, the University of Alberta, and many
                    more. Whether you are interested in teaching, research,
                    administration, or service, you will find a role that suits
                    your skills, interests, and values.
                  </p>
                  <div className="card-actions flex ">
                    <Link to="/academic-talent-pool" className="btn btn-aj">
                      Join our Talent Pool
                    </Link>
                    <Link to="/job-ads" className="btn btn-aj">
                      Create Institutional Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl max-w-screen-2xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Alberta</li>
              <li>
                <Link to="/employers/university-of-alberta/3837/">
                  University of Alberta
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-calgary/12631/">
                  University of Calgary
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Quebec</li>
              <li>
                <Link to="/employers/mcgill-university/3162/">
                  McGill University
                </Link>
              </li>
              <li>
                <Link to="/employers/universite-de-montreal/3836/">
                  Universite De Montreal
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-waterloo/3838/">
                  University of Waterloo
                </Link>
              </li>
              <li>
                <Link to="/employers/laval-university/12443">
                  Laval University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Ontario</li>
              <li>
                <Link to="/employers/university-of-toronto//3134/">
                  University of Toronto
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-british-columbia/3157/">
                  University of British Columbia
                </Link>
              </li>
              <li>
                <Link to="/employers/simon-fraser-university/10280/">
                  Simon Fraser University
                </Link>
              </li>
              <li>
                <Link to="/employers/mcmaster-university/3835/">
                  McMaster University
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/employers/university-of-ottawa/12910/">
                  University of Ottawa
                </Link>
              </li>
              <li>
                <Link to="/employers/york-university/13421/">
                  York University
                </Link>
              </li>
              <li>
                <Link to="/employers/queens-university/9836/">
                  Queen's University
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <section>
          <h3 className="container mx-auto text-center py-8 px-4 items-end">
            {" "}
            <Link className="border rounded-3xl  p-4" to="/employers/">
              View All
            </Link>
          </h3>
        </section>
        {/* Contact us CTA */}
        <section className="container mx-auto px-4 mt-12">
          <div className="alert mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              ​​Try out Academic Jobs today, not because we are number 1 but for
              the best customer service and support you will ever experience.
            </span>
            <div>
              <Link to="/contact-us" className="btn btn-sm btn-aj">
                Experience the Difference
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h3 className="container mx-auto text-center py-8 px-4 items-end">
            If you're interested in a great experience while saving time &
            money…{" "}
            <Link className="btn btn-aj" to="/job-ads">
              Post a Job Today
            </Link>
          </h3>
        </section>
      </main>
    </div>
  );
};
export default RecruitmentGlobal;
