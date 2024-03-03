import React, { useState } from 'react';
import axios from 'axios';

const Contact-us = () => {  window.location.replace("https://www.academicjobs.com/about");
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint = 'https://x0p2y2mno7.execute-api.us-east-1.amazonaws.com/default/sendMail2PostJob';

        axios
            .post(endpoint, formData)
            .then((response) => {
                setSubmitStatus('success');
            })
            .catch((error) => {
                setSubmitStatus('error');
            });
    };

    return (
        <div className="">
            <div className="container mx-auto py-16">
                <h1 className="text-white text-5xl font-semibold text-center">LET'S GO!</h1>
                <h4 className="text-center text-gray-500 text-lg mt-4">Tell us what you need, we make it easy.</h4>
                <form className="mt-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name-input"
                                    name="name"
                                    className="w-full px-4 py-3 bg-gray-300 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    placeholder="Name"
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
                                    className="w-full px-4 py-3 bg-gray-300 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="phone-input"
                                    name="phone"
                                    className="w-full px-4 py-3 bg-gray-300 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                />

                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="relative">
                                <textarea
                                    id="description-input"
                                    name="desc"
                                    className="w-full px-4 py-3 bg-gray-300 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    placeholder="Message"
                                    onChange={handleChange}
                                />
                                <label htmlFor="description-input" className="absolute left-4 top-2 text-gray-600 transition-all">

                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-semibold hover:bg-[#00aeef] hover:text-white transition duration-300 ease-in-out"
                        >
                            Send
                        </button>
                    </div>
                    {submitStatus === 'success' && (
                        <p className="mt-4 text-center text-green-500">Thank you for your message/feedback, our team will get back to you soon!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="mt-4 text-center text-red-500">An unknown error occurred.</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact - us;