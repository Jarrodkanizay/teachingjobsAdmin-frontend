import React from 'react';
import { Helmet } from "react-helmet";
import SearchResults from './SearchResults';

const QUT = () => {  window.location.replace("https://www.academicjobs.com/");
    return (

        
        <div className="">
            <Helmet>
        <title>QUT Jobs</title>
        <meta name="description" content="Are you looking for a rewarding career at one of the nation’s leading universities? Do you want to work in a diverse and inclusive environment that fosters academic excellence, Jesuit values, and service to others? If so, you might be interested in exploring the job opportunities at Boston College. " />
        <meta name="keywords" content="Boston College Academic Jobs, AcademicJobs Boston College" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-lg md:text-2xl py-4 px-7 bg-[#00467f] text-white rounded-2xl ">Queensland University of Technology (QUT)</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="newLine">
            <div className="py-4 px-7 bg-[#00467f] text-white rounded-2xl ">
        <h2 className="font-semibold" >About QUT</h2>
          <p >Welcome to QUT (Queensland University of Technology)  - a leading Australian university with a truly global outlook. Home to nearly 50,000 students, we're well known as 'the university for the real world' because of our close links with industry and our relevant teaching and applied research. We offer academic programs in fields spanning business, creative industries, education, engineering, health, law, science, and social justice across five faculties.

We are transforming the learning experience, embedding work integrated learning, and focusing on developing entrepreneurial skills. We offer executive education and professional development through QUTeX, flexible learning through QUT Online, and pathways into our undergraduate programs through QUT College.

QUT is well-known for our strong links to industry and government, and our inter-disciplinary teams create high-impact research in areas as diverse as climate change mitigation, digital media, materials science, and biomedical innovation.
          </p>
          </div>
          <div className="newLine mb-2"></div>
         
          

          <div className="py-4 px-7 bg-[#00467f] text-white rounded-2xl ">
        <h2 className="font-semibold" >World class research</h2>
          <p >We provide transformative research that delivers real world solutions. QUT researchers collaborate across disciplines and work with industry, research and government partners to find solutions to societal problems and address the innovation needs of a global economy. Our research centres reflect our core strengths and underpin the partnerships that translate our research into real-world applications. QUT researchers work on projects in all corners of the globe, and beyond, collaborating on drones in Antarctica, disease-resistant crops in Uganda, autonomous vehicles in France and even on Mars Rovers with NASA.</p>
          </div>
          <div className="newLine mb-2"></div>

          <div className="py-4 px-7 bg-[#00467f] text-white rounded-2xl ">
        <h2 className="font-semibold" >Real world teaching and learning</h2>
          <p >QUT delivers exceptional campus-based and online educational experiences that prioritise learner success and graduate employability. Our staff recognise that the real world isn’t just about qualifications—it’s about collaborating, innovating and thinking outside the box. QUT prepares graduates to be adaptable, giving hands-on industry experience and connecting them to future opportunities.
We are transforming the learning experience—embedding work-integrated learning and focusing on developing entrepreneurial skills. We offer executive education and professional development through QUTeX, flexible learning through QUT Online and pathways into our undergraduate programs through QUT College.</p>
          </div>
          <div className="newLine mb-2"></div>

          <div className="py-4 px-7 bg-[#00467f] text-white rounded-2xl ">
        <h2 className="font-semibold" >Life at QUT</h2>
          <p >Our staff make a real difference. From the academic staff who inspire incredible graduates and researchers who change the world, to the support staff who create an environment in which all this can happen.

Our strong links with business and industry ensure we constantly evolve and maintain our reputation as a university that is planted firmly in the real world. We strive to find the best people for the best jobs to make the world a better place - and we'd love you to be a part of it.

We're committed to building a culture that fosters connection between people and purpose. Beyond personal and professional fulfillment, a career at QUT offers:</p>
          </div>
        
          <div className="py-4 px-7 bg-[#00467f] text-white rounded-2xl ">
        <h2 className="font-semibold" >Belong at QUT</h2>
          <p >We are guided by our values of Ambition, Curiosity, Integrity, Inclusiveness, Innovation, and Academic Freedom and our QUT Connections in our mission to inspire and shape the next generation of change-makers. 

In support of our Indigenous Australians Employment Strategy, we aspire to an Indigenous Australian workforce participation of 3.6% and we encourage Aboriginal Australians and Torres Strait Islander people to join us in pursuing a fulfilling career. 


We believe in creating safe spaces for inclusivity to flourish and we know that diversity is our strength – see our commitment. If you’re curious, innovative, and ready to experience what a career at QUT can offer, we’re ready to meet you.  </p>
          </div>
          


         
          </div>


          
           
      </div>
                <SearchResults q={{ employer_id: 3786 || 0 }} />
            </div>
        
    );
};

export default QUT;