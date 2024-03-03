import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

const TuftsUniversity = () => {  window.location.replace("https://academicjobs/company/3460/tufts-university");
    return (

        
        <div className="">
            <Helmet>
        <title>Tufts University Jobs</title>
        <meta name="description" content="If you have any questions about the application process or the job requirements, you can contact the Office of Human Resources at hr@tufts.edu or 617-627-3272. You can also visit the Work at Tufts website4 for more information about the benefits, policies, and events related to working at Tufts University. " />
        <meta name="keywords" content="Tufts University Jobs, AcademicJobs Tufts University" />
      </Helmet>
            <div className="relative">
            
                <div
                    className="bg-cover bg-center bg-repeat"
                    
                >
                    <div className="max-w-screen-xl mx-auto py-12 px-6 text-gray-700">
                        <h1 className="text-orange-500 text-2xl font-semibold">Tufts University Jobs</h1>
                        <p>
                            Jobs at Tufts are located in Medford, Massachusetts. It has more than 11,000 undergraduate and graduate students and offers more than 150 majors and minors in nine colleges and schools. Tufts jobs are also known for its experiential learning model, which integrates classroom instruction with co-op, internships, research, service, and global opportunities. Tufts jobs are classified as R1 research by the Carnegie Classification of Institutions of Higher Education and have produced many prestigious scholars and awards. It also has a strong commitment to social justice and community engagement, inspired by its urban and global mission. Tufts University’s athletic teams are the Jumbos, and they compete in the NCAA Division III New England Small College Athletic Conference in various sports, including basketball, hockey, soccer, and lacrosse. The men’s lacrosse team has won three national championships. Start your Tufts career on AcademicJobs today. Academic Jobs is the leading online platform for finding and applying for Tufts University careers. Here you can browse through hundreds of Tufts University job postings from various campuses, schools, and departments. Whether you are looking for a faculty, staff, or student position, you will find your Tufts employment here. </p>


                    </div>
                </div>
                <SearchResults q={{ q:"Tufts University jobs" }} /> 
            </div>
        </div>
    );
};

export default TuftsUniversity;