import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

const NortheasternUniversity = () => {  window.location.replace("https://www.academicjobs.com/company/3285/northeastern-university");
    return (

        
        <div className="">
            <Helmet>
        <title>Northeastern University Jobs</title>
        <meta name="description" content="Are you interested in working at a dynamic and innovative university that offers a wide range of programs, research opportunities, and benefits? Do you want to join a diverse and collaborative community that values excellence, creativity, and social justice? If so, you might want to check out the job listings at Northeastern University. " />
        <meta name="keywords" content="northeastern university Jobs, AcademicJobs northeastern university" />
      </Helmet>
            <div className="relative">
            
                <div
                    className="bg-cover bg-center bg-repeat"
                    
                >
                    <div className="max-w-screen-xl mx-auto py-12 px-6 text-gray-700">
                        <h1 className="text-orange-500 text-2xl font-semibold">Northeastern University Jobs</h1>
                        <p>
                            
To apply for a job at Northeastern University careers, you can use our online application system. You can browse the current openings by category, location, or keyword. You can also create a profile and upload your resume and cover letter. If searching for Northeastern University employment, log in with your NU credentials and view the internal postings. You can also check the status of your application and update your information at any time.

If you have any questions about the application process or the job requirements, you can contact the Office of Human Resources Management at hrminfo@northeastern.edu or 617-373-2230. You can also visit the Work at NU website for more information about the benefits, policies, and events related to working at Northeastern University employment. </p>


                    </div>
                </div>
                <SearchResults q={{ q:"Northeastern University jobs" }} /> 
            </div>
        </div>
    );
};

export default NortheasternUniversity;