import React from 'react';
import { Helmet } from "react-helmet";

const TermsConditions = () => {  
    return (
        <div className="">

<Helmet>
        <title>Terms and Conditions ScienceJobs</title>
        <meta name="description" content="Review our comprehensive terms and conditions to understand the guidelines and agreements for using our Science job board. Learn about the user rights.  " />
        <meta name="keywords" content="Terms and Conditions Sciencejobs, Sciencejobs Terms and Conditions" />
      </Helmet>
       
            <div className="px-12 py-8 text-gray-600">
                <h4 className="text-sky-500 text-2xl mb-4">Introduction</h4>
                <p>
                    Please read these Terms &amp; Conditions carefully before using
                    ScienceJobs. ScienceJobs reserves the right to modify these Terms
                    &amp; Conditions at any time.
                </p>

                <h4 className="text-sky-500 text-2xl mt-8">Services Provided</h4>
                <p>
                    ScienceJobs provides a service to bring Job Seekers and Employers
                    together. Job Seekers and Employers can register, create
                    profiles/job posts and search for jobs and resumes.
                </p>

                <h4 className="text-sky-500 text-2xl mt-8">Privacy Policy</h4>
                <p>
                    Job Seeker personal data will be available to Employers visiting
                    ScienceJobs. Personal data includes a Name which is mandatory, an
                    email Address which is mandatory and a Telephone Number which is
                    optional.
                </p>
                <p>
                    Personal data provided by the user may be used by ScienceJobs to
                    notify the user of any news, and or promotional offers relating only
                    to the ScienceJobs website. The user can unsubscribe from these
                    notifications at anytime.
                </p>
                <p>ScienceJobs will not disclose user personal data to any third party.</p>

                <h4 className="text-sky-500 text-2xl mt-8">Website Use</h4>
                <p>ScienceJobs may not be used for any of the following purposes:</p>
                <ul className="list-disc pl-8 mt-2">
                    <li>To contact ScienceJobs users regarding any issue apart from the purpose of recruitment.</li>
                    <li>To contact ScienceJobs users to offer any services from a 3rd party company.</li>
                    <li>To post any illegal content.</li>
                </ul>
                <p>The user is required to provide truthful information in their profile or job post.</p>
                <p>It is prohibited to use any text or images from ScienceJobs for personal or commercial use.</p>

                <h4 className="text-sky-500 text-2xl mt-8">User Information</h4>
                <p>
                    ScienceJobs does not hold responsibility for any untruthful and/or inaccurate
                    information included in job posts and profiles.
                </p>
                <p>ScienceJobs reserves the right to edit or delete any information submitted by the user to the website.</p>

                <h4 className="text-sky-500 text-2xl mt-8">Liability</h4>
                <p>ScienceJobs will not be responsible for any loss or damage the user may encounter from using the website.</p>

                <h4 className="text-sky-500 text-2xl mt-8">Cookies Policy</h4>
                <p>Our website uses cookies.</p>
                <p>
                    A cookie is a file containing an identifier (a string of letters and numbers)
                    that is sent by a web server to a web browser and is stored by the browser.
                    The identifier is then sent back to the server each time the browser requests a page from the server.
                </p>
                <p>We use Google Analytics to analyse the use of our website.</p>
                <p>Our analytics service provider generates statistical and other information about website use by means of cookies.</p>
                <p>You can delete cookies already stored on your computer. Please visit the 'Help' option in your browser menu to learn how to do this. Deleting cookies will have a negative impact on the usability of this website.</p>
            </div>
        </div>

    );
};

export default TermsConditions;