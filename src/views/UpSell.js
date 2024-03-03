import React from "react";
import { Helmet } from "react-helmet";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";
const UpSell = () => { 
  return (
    <div className="">
      <Helmet>
        <title>Post a job - Recruit Academics</title>
        <meta
          name="description"
          content="All prices are in USD, switch region to change prices. Ads are live for up to 60 days, and include the employer logo and ad performance metrics. "
        />
        <meta
          name="keywords"
          content="Post Academic Jobs, Post a Job AcademicJobs"
        />
      </Helmet>
      <div className="blurb text-left pb-4 ">
      

        <div className=" rounded-3xl mx-4">
          <div className="max-w-screen-xl mx-auto ">
            <div className="newLine text-center max-w-screen-lg mx-auto mt-8">
              <div className="py-2 px-7 rounded-2xl text-center mt-12">
              <h2 className="newLine  text-3xl font-bold text-gray-400  ">
              Add-Ons We
                </h2>
                <h2 className="newLine  text-3xl font-bold text-gray-400 pb-2 ">
                Recommend for You
                </h2>
                <p>
                
                </p>
                <div className="newLine mb-2"></div>
              </div>
              <div className="newLine mb-2"></div>
            </div>
            <div className="max-w-1380 mx-auto ">
              <div className="my-4" id="packages">
                <div className="text-center mb-35"></div>
                <div className="p-4 grid-cols-1 grid md:flex md:flex-wrap justify-center gap-3 max-w-screen-2xl mx-auto">
                  
                  {/* Single Job Posting */}
                  <button className="md:w-[30%]  bg-gradient-to-t from-white to-amber-400   p-4 mb-10  border border-gray-300 p-4 mb-4 shadow-xl"   href="">
                    <div className="bg-white pt-2 mt-[-1rem] mx-[-1rem]">
                      {" "}
                    </div>
                    <h3 className="font-bold text-2xl text-center text-white pt-2">
                    Priority Listing Add-On
                    </h3>
                    <p className="text-center pt-5">Jump to to the top of our Job Search</p>

                    <div className="flex flex-col mt-5 items-center pb-8">                                 
                        <div className="flex items-center gap-3">
                          <p className="text-[4rem] font-bold">+ $99</p>
                          <p className="text-center font-bold line-through">+ $150</p>
                         
                        </div>
                        <a
                            href=""
                            className="btn"
                          >
                            Upgrade
                          </a>
                        </div>
                 
                  </button>
                  {/* 5 Job Pack */}
                  <button className="md:w-[30%] bg-gradient-to-t from-white to-amber-500  p-4 mb-10  border border-gray-300 p-4 mb-4  shadow-xl "  href="">
                    <div className="bg-white pt-2 mt-[-1rem] mx-[-1rem]"> </div>
                    <h3 className="font-bold text-2xl text-center text-white pt-2">
                      Social + Priority Add-On
                    </h3>
                    <p className="text-center pt-5 ">Priority Add-On with our social promotions</p>
                   
                    <p className="bg-white rounded-full p-3 font-bold text-1xl text-center text-[#00aeef]  mb-5 items-center shadow-lg hidden">
                      MOST POPULAR
                    </p>
                   
                    <div className="flex flex-col mt-5 items-center pb-8">                                 
                        <div className="flex items-center gap-3">
                       
                          <p className="text-[4rem] font-bold">+ $130</p>
                          <p className="text-center font-bold line-through">+ $300</p>
                      
                        </div>
                        <a
                            href="https://iloveacademicjobs.com/employer-products/?action=buy_product&product_sid=23"
                            className="btn"
                          >
                            Upgrade
                          </a>
                        </div>
                    
                   
                  
                  </button>
                  {/* 10 Job Pack */}
                  <button className="md:w-[30%] bg-gradient-to-t from-white to-orange-400   p-4 mb-10  border border-gray-300 p-4 mb-4  shadow-xl"  href="">
                    <div className="bg-white pt-2 mt-[-1rem] mx-[-1rem]">
                      {" "}
                    </div>
                    <h3 className="font-bold text-2xl text-center text-white pt-2">
                      5 Job Pack Add-On
                    </h3>
                    <p className="text-center pt-5">
                      Post 5 extra jobs at anytime.
                    </p>

                    <div className="flex flex-col mt-5 items-center pb-8">                                 
                        <div className="flex items-center gap-3">
                          <p className="text-[4rem] font-bold">+ $199</p>
                          <p className="text-center font-bold line-through">+ $1100</p>
                          
                        </div>
                        <a
                            href=""
                            className="btn"
                          >
                            Upgrade
                          </a>
                        </div>

                  </button>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};
export default UpSell;
