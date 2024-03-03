import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {
    useSendEmail1Mutation
} from '../store/apiSlice'
const Nominate = () => {  window.location.replace("https://www.academicjobs.com/");
    const [sendEmail, {
        isSuccess: isSendSuccess,
        isError: isSendError,
        error: senderror
    }] = useSendEmail1Mutation()
    const [formData, setFormData] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await sendEmail(formData);
        //try {
        console.log(response)
        // Check the response for success or failure
        if (response) {
            console.log('Mutation was successful');
            setSubmitStatus('success');
        } else {
            console.error('Mutation failed:', response.error);
            setSubmitStatus('error');
        }
    }
    return (
        <div className="">
            <Helmet>
                <title>Nominate Academic Jobs</title>
                <meta name="description" content="Nominate our knowledgeable team today for assistance and information on our number 1 Academic job board site in higher education and academia. " />
                <meta name="keywords" content="Nominate Academicjobs, Nominate Academic Jobs, Academicjobs Nominate " />
            </Helmet>

            <img
          src="https://Academicjobs.s3.amazonaws.com/img/banner/Global-Academic-Awards.png"
          alt="Nominate us"
          className="  mt-[4rem] mx-auto max-w-screen-2xl object-fill w-full h-full rounded-3xl border-4 border-[#00aeef] shadow-xl"
          //className="   mx-auto max-w-screen-2xl object-fill w-full h-full rounded-3xl border-4 border-[#00aeef] shadow-xl"

        />
        <div className=" bg-orange-300 my-12"> 

<div className="  "> 
        <div className="px-7 py-8 container mx-auto  mt-8"> 
 <h1 className="    text-5xl font-bold  text-white bg-[#00aeef] rounded-full p-4 border-4 shadow-xl">Global Academic Awards 2023</h1>

 <h2 className=" pt-8 pl-8  mx-auto  text-2xl font-bold  text-white ">Awards Categories</h2>
 <ul className="list-disc pl-12 pt-4 flex flex-wrap gap-8 text-white  font-semibold">
 <li className="mb-2"><Link to="/nominate-academic-of-the-year/" > Academic of the Year</Link></li>
 <li className="mb-2"><Link to="/nominate-lecturer-of-the-year/" >Lecturer</Link></li>
      <li className="mb-2"><Link to="/nominate-researcher-of-the-year/" >Researcher</Link></li>
      <li className="mb-2"><Link to="/nominate-president-vice-chancellor-of-the-year/" >President/Vice Chancellor</Link></li>
      <li className="mb-2"><Link to="/nominate-phd-of-the-year/" >PhD</Link></li>
      <li className="mb-2"><Link to="/nominate-department-heads-managers-of-the-year/" >Department Heads/Managers</Link></li>
      <li className="mb-2"><Link to="/nominate-outstanding-student-of-the-year/" >Outstanding Student</Link></li>
    </ul>
 </div> 
 </div> 
 </div> 
            
            <div className="px-7 py-8 container mx-auto py-16 bg-orange-100 p-4 pt-4 rounded-3xl mt-8 mb-12">
               
                
                <h4 className=" text-[#00aeef] text-lg mt-4 pb-8">  <span className="font-semibold">( Cut off date: 22/12/2023 )</span> Nominating is easy. Fill in the simple form below with a brief explanation of your nominees achivements in 2023. All details are kept strcitly confidential</h4>
                
                <h4 className=" text-[#00aeef] text-3xl mt-8  "> <span className="font-semibold">Nominee</span></h4>
                <form className="mt-4 " onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="01_Nominee_First_Name"
                                    className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="02_Nominee_Last_Name"
                                    className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder=" Last Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="03_Nominee_Academic_Title"
                                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Academic Title"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <select className="select w-full "
                                    name="04_Nominee_Award_Nomination"
                                    onChange={handleChange}
                                >
                                    <option disabled selected>Award Nomination</option>
                                    <option>Academic of the Year</option>
                                    <option>Lecturer</option>
                                    <option>Researcher</option>
                                    <option>President/Vice Chancellor</option>
                                    <option>PhD</option>
                                    <option>Department Heads/Managers</option>
                                    <option>Outstanding Student</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="05_Nominee_Institution_Name"
                                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Institution Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="06_Nominee_Country"
                                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Country"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <textarea
                                    id="description-input"
                                    name="07_Nominee_Description"
                                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Please write a brief description as to why your Academic deserves our award (maxium 200 words)"
                                    onChange={handleChange}
                                />
                                <label htmlFor="description-input" className="absolute left-4 top-2 text-gray-600 transition-all">
                                </label>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h4 className=" text-[#00aeef] text-3xl mt-8  "> <span className="font-semibold">About You</span></h4>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="08_Nominator_First_Name"
                                    className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder=" First Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="09_Nominator_Last_Name"
                                    className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder=" Last Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="10_Nominator_Institution_Name"
                                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Institution Name"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="email-input"
                                    name="11_Nominator_Email"
                                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            </div>
                            <div className="col-span-1">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="email-input"
                                        name="12_Department_Faculty"
                                        className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                        placeholder="Department/Faculty"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        
                    </div>
                    <div className="text-right mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-semibold hover:bg-[#00aeef] hover:text-black transition duration-300 ease-in-out"
                        >
                            Send
                        </button>
                    </div>
                    {submitStatus === 'success' && (
                        <p className="mt-4 text-center text-2xl font-bold text-green-500">Thank you for your message/feedback, our team will get back to you soon!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="mt-4 text-center text-2xl font-bold text-red-500">An unknown error occurred.</p>
                    )}
                </form>
            </div>
            <div className="mainContent px-7 pb-4 hidden">
                <div className="container1b bg-white text-[#00aeef] font-openSans font-bold py-4" >
                    GLOBAL OFFICE PHONE NUMBERS
                </div>
                <div className="container1b bg-white text-black font-openSans grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+852-3730021">
                                Asia: +852-3730021(Hong Kong)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+61-452070156">
                                Australia: +61-452070156 (Melbourne)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:778 819 1866">
                                Canada: 778 819 1866(Vancouver)
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+49-4158730021">
                                Europe: +49-4158730021(Berlin)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+61-452070156">
                                New Zealand: +61-452070156 (Wellington)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+91-2250972736">
                                India: +91-2250972736 (Mumbai)
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a className="footer-nav__link" href="tel:+44-2045876329">
                                United Kingdom: +44-2045876329(London)
                            </a>
                        </li>
                        <li>
                            <a className="footer-nav__link" href="tel:+415 819 0021">
                                United States: 415 819 0021 (San Francisco )
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Nominate;