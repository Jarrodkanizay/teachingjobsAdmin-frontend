import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
const CareerHelp = () => {  window.location.replace("https://www.academicjobs.com/career-help");
    return (
        <div className=" px-7 py-4 text-left  mb-0">
            <Helmet>
                <title>About AcademicJobs</title>
                <meta name="description" content="The Number 1 job board for Academic Jobs.  Listing higher ed jobs for faculty at colleges and universities in the United States and around the world.  " />
                <meta name="keywords" content="Career help, About Academic Jobs, Academicjobs About  " />
            </Helmet>
            <img
                src="https://academicjobs.s3.amazonaws.com/img/banner/Academic-jobs-About-AJ.png"
                alt="contact us"
                className=" rounded-3xl  "></img>
            <p className="block text-4xl font-bold font-roboto text-[#00aeef]  pt-12 p-8">About Us</p>
           
            <div  className="bg-gray-200  rounded-3xl"> 
            <div className=" border-[#00aeef] border-4 rounded-3xl p-8 mt-8">
           
                <p className="block text-3xl font-bold font-open-sans  mb-8 mt-12">
                    ALL THE BEST UNIVERSITY JOBS
                </p>
                <p className="block text-xl  font-open-sans  text-gray-700 mb-8 font-bold">
                    Find the best academic positions in your city, country and worldwide.
                </p>
                <p className="block text-xl   font-open-sans  text-gray-700 mb-8 font-bold">
                    Also listing administrative, staff and support roles in higher ed. Search for academic jobs, college careers and faculty positions online with AcademicJobs.com.
                </p>
                <p className=" block text-xl   font-roboto text-black mb-8 ">
                    Welcome to AcademicJobs, the leading online platform for finding and applying for university and higher education jobs and positions. Whether you are looking for a faculty, research, administrative, or professional role, we have the right opportunity for you.
                </p>
                <p className=" block text-xl   font-roboto text-black mb-8 ">
                    Academic Jobs was founded by a team of higher ed professionals who were frustrated with the lack of transparency and efficiency in the academic job market. Put simply, they thought that the old job boards out there for academic positions did not work for clients, and they continued to operate on very old, outdated technology. They therefore have created the best academic job platform in the world today... making it easier for candidates to search for jobs, compare offers, and communicate with employers. They have also provided employers with a cost-effective and user-friendly way to advertise their vacancies, reach a global talent pool, and manage their applications.
                </p>
                <p className=" block text-xl   font-roboto text-black mb-8">
                    AcademicJobs has grown to become the most trusted and popular website for academic job seekers and employers worldwide. With over 5000 universities and their jobs, and over 1 million registered users from all over the world, 10,000 active job listings, and 500 partner institutions across 50 countries. AcademicJobs.com lists all disciplines and academic specialties in all levels of academia, from humanities and social sciences to STEM and health sciences, from PhD students and postdocs to professors, lecturers, researchers and deans.
                </p>
                <p className=" block text-xl   font-roboto text-black mb-8 ">
                    Our mission is to help you find your dream academic job or hire the best academic talent. We are committed to providing you with the most comprehensive and up-to-date information, the most advanced and user-friendly tools, and the most professional and personalized service. We are also passionate about supporting the academic community and promoting diversity, equity, and inclusion in higher education.
                </p>
                <p className="block text-xl   font-roboto  mb-8">
                    We hope you enjoy using AcademicJobs and find it useful for your academic career or recruitment needs. If you have any questions, feedback, or suggestions, please feel free to contact us <Link to="/contact-us/" className="underline text-blue-500 font-bold ">HERE</Link>. We would love to hear from you!
                </p>
            </div>
        </div>
        <p className="underline text-[#00aeef]  pt-4 "> <Link to="/about/term-of-use/" className="underline text-[#00aeef] mb-8 pt-4 p-8">Terms & Conditions</Link> </p>
            <p className="underline text-[#00aeef]  pt-4 "> <Link to="/about/diversity-statement/" className="underline text-[#00aeef] mb-8 pt-4 p-8">Diversity Statement</Link>  </p>
            <p className="underline text-[#00aeef]  pt-4 "> <Link to="https://iloveacademicjobs.com/university-partners/" className="underline text-[#00aeef] mb-8 pt-4 p-8">Our Partners</Link>  </p>


        </div>
         
    );
}
export default CareerHelp;