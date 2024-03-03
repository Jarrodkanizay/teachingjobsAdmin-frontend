import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

const BostonUniversity = () => {  window.location.replace("https://www.academicjobs.com/company/3190/boston-university");
    return (

        
        <div className="">
            <Helmet>
        <title>Boston University jobs</title>
        <meta name="description" content="Boston University offers a variety of job opportunities for faculty, staff, and students. Whether you are looking for a full-time or part-time position, a tenure-track or non-tenure-track role, or an on-campus or off-campus location, you can find your ideal job at Boston University.  " />
        <meta name="keywords" content="Boston University jobs, AcademicJobs Boston University" />
      </Helmet>
            <div className="relative">
            
                <div
                    className="bg-cover bg-center bg-repeat"
                    
                >
                    <div className="max-w-screen-xl mx-auto py-12 px-6 text-gray-700">
                        <h1 className="text-orange-500 text-2xl font-semibold">Boston University jobs</h1>
                        <p>
                            Boston University is a private research university located in Boston, Massachusetts. It has more than 34,000 undergraduate and graduate students and offers more than 300 majors and minors in nine colleges and schools. Boston University is also known for its experiential learning model, which integrates classroom instruction with co-op, internships, research, service, and global opportunities. Boston University is classified as an R1 research university by the Carnegie Classification of Institutions of Higher Education1, and has produced many prestigious scholars and awards. It also has a strong commitment to social justice and community engagement, inspired by its urban and global mission2. Boston University’s athletic teams are the Terriers, and they compete in the NCAA Division I Patriot League in various sports, including basketball, hockey, soccer, and rowing. The men’s hockey team has won six national championships.</p>


                    </div>
                </div>
                <SearchResults q={{ q:"Boston University jobs" }} /> 
            </div>
        </div>
    );
};

export default BostonUniversity;