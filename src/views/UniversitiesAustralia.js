import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const countryRegion = "Australia";

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith("s")
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

const RecruitmentGlobal = () => {  window.location.replace("https://www.academicjobs.com/australia/employers");
  return (
    <div className="">
      <Helmet>
        <title>Find {countryRegionPlural()} Top University Employers</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <main>
        {/* Hero banner */}
        <section>
          <div className="hero max-h-fit bg-base-200 py-8 mx-auto">
            <div className="container mx-auto">
              <div className="hero-content flex-col xl:flex-row-reverse mx-auto max-w-full">
                <img
                  src="/academic-job-postings/university-of-sydney.jpg"
                  className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                  alt="The Top Academic Employers"
                />
                <div>
                  <h1 className="text-3xl font-bold text-aj">
                    Find {countryRegionPlural()} Top University Employers
                  </h1>

                  <p className="py-6">
                    Here you will find a variety of opportunities to join the
                    faculty or staff of leading Australian institutions, such as
                    Bond University, the Queensland University of Technology
                    (QUT), the Australian Catholic University (ACU), the
                    Australian National University (ANU), and many more. Whether
                    you are interested in teaching, research, administration, or
                    service, you will find a role that suits your skills,
                    interests, and values.
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

        <div className="bg-gradient-to-b to-white from-orange-100 m-8 rounded-3xl  max-w-screen-2xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7 mb-16">
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">ACT</li>
              <li>
                <Link to="/employers/australian-national-university/3739/">
                  Australian National University
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-canberra/3821/">
                  University of Canberra
                </Link>
              </li>
              <li className="mb-1 text-[#00aeef] font-bold">New South Wales</li>

              <li>
                <Link to="/employers/the-university-of-sydney/3171/">
                  The University of Sydney
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-new-south-wales/3738/">
                  University of New South Wales
                </Link>
              </li>
              <li>
                <Link to="/employers/charles-sturt-university/3855/">
                  Charles Sturt University
                </Link>
              </li>
              <li>
                <Link to="/employers/australian-catholic-university/3853/">
                  Australian Catholic University
                </Link>
              </li>
              <li>
                <Link to="/employers/southern-cross-university/3862/">
                  Southern Cross University
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-technology-sydney/3864/">
                  University of Technology, Sydney
                </Link>
              </li>
              <li>
                <Link to="/employers/macquarie-university/3881/">
                  Macquarie University
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-new-england/3209/">
                  University of New England England
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-newcastle/3863/">
                  University of Newcastle
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-western-sydney/3865/">
                  University of Western Sydney
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-wollongong/3866/">
                  University of Wollongong
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Victoria</li>
              <li>
                <Link
                  to="/employers/university-of-melbourne/3170/
                                        "
                >
                  The University of Melbourne
                </Link>
              </li>
              <li>
                <Link
                  to="/employers/monash-university/3182/
                                        "
                >
                  Monash University
                </Link>
              </li>
              <li>
                <Link
                  to="/employers/victoria-university/3871/
                                    "
                >
                  Victoria University
                </Link>
              </li>
              <li>
                <Link
                  to="/employers/university-of-divinity/3872/
                                    "
                >
                  University of Divinity
                </Link>
              </li>
              <li>
                <Link
                  to="/employers/swimburne-university-of-technology/10541/
                                    "
                >
                  Swinburne University of Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/employers/rmit-university/3869/
                                    "
                >
                  RMIT University
                </Link>
              </li>
              <li>
                <Link
                  to="/employers/la-trobe-university/3868/
                                    "
                >
                  La Trobe University
                </Link>
              </li>
              <li>
                <Link
                  to="/employers/deakin-university/3856/
                                    "
                >
                  Deakin University
                </Link>
              </li>
              <li>
                <Link
                  to="/employers/federation-university/3787/
                                    "
                >
                  Federation University Australia
                </Link>
              </li>
              <li className="mb-1 text-[#00aeef] font-bold">Tasmania</li>
              <li>
                <Link
                  to="/employers/university-of-tasmania/3867/
                                    "
                >
                  The University of Tasmania
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Queensland</li>
              <li>
                <Link
                  to="/employers/bond-university/3785/
                                    "
                >
                  Bond University
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-queensland/3172/">
                  The University of Queensland
                </Link>
              </li>
              <li>
                <Link to="/employers/cquniversity/3854/">CQUniversity</Link>
              </li>

              <li>
                <Link to="/employers/griffith-university/3860/">
                  Griffith University
                </Link>
              </li>
              <li>
                <Link to="/employers/james-cook-university/3857/">
                  James Cook University
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-southern-queensland/3861/">
                  University of Southern Queensland
                </Link>
              </li>
              <li className="text-[#003463] font-bold">
                <Link to="/employers/queensland-university-of-technology-qut-/3786/">
                  Queensland University of Technology
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-sunshine-coast/3859/">
                  University of Sunshine Coast
                </Link>
              </li>
              <li className="mb-1 ">
                <Link
                  to="/find-jobs/northern-territory/"
                  className="text-[#00aeef] font-bold"
                >
                  Northern Territory
                </Link>
              </li>
              <li>
                <Link to="/employers/charles-darwin-university/3880/">
                  Charles Darwin University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">South Australia</li>
              <li>
                <Link to="/employers/the-university-of-adelaide/3737/">
                  The University of Adelaide
                </Link>
              </li>
              <li>
                <Link to="/employers/carnegie-mellon-university/3146/">
                  Carnegie Mellon University
                </Link>{" "}
              </li>
              <li>
                <Link to="/employers/torrens-university-australia/3875/">
                  Torrens University Australia
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-south-australia/3874/">
                  University of South Australia
                </Link>
              </li>
              <li>
                <Link to="/employers/flinders-university/3873/">
                  Flinders University
                </Link>
              </li>
              <li className="mb-1 text-[#00aeef] font-bold">
                Western Australia
              </li>
              <li>
                <Link to="/employers/university-of-western-australia/3173/">
                  The University of Western Australia
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-notre-dame/3879/">
                  University of Notre Dame
                </Link>
              </li>
              <li>
                <Link to="/employers/murdoch-university/3878/">
                  Murdoch University
                </Link>
              </li>
              <li>
                <Link to="/employers/edith-cowan-university/3877/">
                  Edith Cowan University
                </Link>
              </li>
              <li>
                <Link to="/employers/curtin-university/3876/">
                  Curtin University
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
