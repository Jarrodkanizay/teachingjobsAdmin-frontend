import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {
    useSendEmailMutation
} from '../store/apiSlice'
const Nominate = () => {  window.location.replace("https://www.academicjobs.com/about");
    const [sendEmail, {
        isSuccess: isSendSuccess,
        isError: isSendError,
        error: senderror
    }] = useSendEmailMutation()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        desc: '',
    });
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
            <div className="px-7 py-8 container mx-auto py-16 bg-orange-100 p-4 pt-4 rounded-3xl mt-8">
                <h1 className="text-5xl font-semibold  text-[#00aeef] ">Academic of the year 2023!</h1>
                <h4 className=" text-gray-500 text-lg mt-4">Nominate for outstanding achievement as a Academic. To nominate a  Academic for an "Academic OF THE YEAR 2023 AWARD", you need to: </h4>
                <h4 className=" text-gray-700 text-lg mt-4 hidden"> Nominating a  Academic for an award is a great way to show your appreciation and support for their work. It can also help them gain recognition and visibility in the education sector, and inspire others to follow their example. </h4>
                <h4 className=" text-[#00aeef] text-lg mt-4"> <span className="font-semibold"></span>  </h4>
                <h4 className=" text-[#00aeef] text-lg mt-4 pb-8"> Write a nomination letter that explains why you think they deserve the award. All noimations are kept confidential</h4>
                <div className="p-4 bg-gray-100 mt-[3rem] hidden">
                    <p className="mb-4 text-lg font-semibold text-[#00aeef]">Drop us an email:</p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            <span className="font-semibold">University and College Advertisers:</span> BestResults (AT) Academicjobs.com
                        </li>
                        <li>
                            <span className="font-semibold">Academics and Higher Ed Staff:</span> TheBestJobs (AT) AcademicJobs.com
                        </li>
                        <li>
                            <span className="font-semibold">Student Jobs on Campus:</span> StudentWork (AT) AcademicJobs.com
                        </li>
                        <li>
                            <span className="font-semibold">Academic Talent Pool:</span> TalentPool (AT) AcadmeicJobs.com
                        </li>
                    </ul>
                    <p className="mt-4">Or call us:</p>
                </div>
                <Link to="https://iloveAcademicjobs.com/Nominate/"><img
                    src="https://Academicjobs.s3.amazonaws.com/img/_misc/Nominate-us.jpeg"
                    alt="Nominate us"
                    className="  mt-[4rem] hidden  "
                /></Link>
                <form className="mt-8 " onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="name"
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
                                    name="name"
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
                                    name="name"
                                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Academic Title"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <select className="select w-full ">
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
                                    name="name"
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
                                    name="name"
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
                                    name="desc"
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
                                    name="name"
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
                                    name="name"
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
                                    name="name"
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
                                    name="email"
                                    className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
                                    placeholder="Email"
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