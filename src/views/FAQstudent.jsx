import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
const FAQstudent = () => {  window.location.replace("https://www.academicjobs.com/student/faq");
    return (
        <div className="p-8">
            <Helmet>
        <title>University Student Jobs FAQ</title>
        <meta name="description" content="This FAQ page is for university student work, helping you explore the academic job market and find the best opportunities for you.  " />
        <meta name="keywords" content="University Student Jobs FAQ, academicjobs Student FAQ" />
      </Helmet>
         

    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-orange-400 ">University Student Jobs FAQ</h1>
      <Link className='text-[#00aeef] mb-4 px-2'to='/student/'>← Back</Link>
        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">Where Do Uni Students Usually Work - University Student Jobs FAQ</h2>
        <p>
          Working in the retail or hospitality industries is really popular with uni students as casual shift work is often flexible. You can let your employer know your availability and preferred days and times - and usually weekends and weeknights work well for both parties!
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">Can You Do Uni and Have a Full-Time Job?</h2>
        <p>
          Although it may at times feel like too much hard work balancing both work and study, the benefits are enormous, especially if you have on-the-job experience to draw from that can enrich your studies, and vice versa. You'll also still be earning a salary, therefore avoiding the debt that lots of students fall into.
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">How Much Should a Uni Student Be Working?</h2>
        <p>
          How many hours do you work a week as a full-time college student? The recommended amount is no more than 10–15 hours/week, but you can work more if you have good time management skills.
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">How Do People Study and Work Full-Time?</h2>
        <p>
          Instead, set one day per week where you focus on completing your studies, track how much work you can get done, and how many hours it takes. This will help you figure out how long you need to schedule for each study session in order to meet the requirements for your course and how quickly you can get it all finished.
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">Can You Work Part-Time and Do Uni?</h2>
        <p>
          You can successfully attend university full-time and work part-time by creating to-do lists. You may write a to-do list for each day or week and focus on prioritizing important tasks over ones that don't require immediate completion.
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">How Do I Find a Job as a Student at University?</h2>
        <p>
          Your university itself is a tremendous resource – you can look everywhere from noticeboards in student services buildings and libraries to your institution's careers hub. Many universities have careers portals that you can log into to receive updates regarding any on or off-campus job vacancies.
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">How Can Universities Help Students Find Jobs?</h2>
        <p>
          Below are five uni-run facilities that can help you boost your employability prospects while studying:
        </p>
        <ul className="list-disc pl-4">
          <li>Careers and employment services</li>
          <li>Student and industry recruitment events</li>
          <li>Research centers or institutes</li>
          <li>Meeting different kinds of people</li>
          <li>Professional industry associations</li>
        </ul>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">Is It Hard to Get a Job in Australia as a Student?</h2>
        <p>
          Working in Australia is very easy to do while you are a student – after graduation, it's more difficult. Remember, as an international student, you should never expect to live on the money you make while studying, but the extra income can certainly help you meet your financial needs.
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">How Can Students Earn More Money in Australia?</h2>
        <p>
          International students can work full-time, or up to 38 hours a week, during the holidays. Working full-time over holidays is an excellent way for international students to supplement their income. International students working full-time in retail and hospitality can earn between AUD 600 to AUD 1,000 per week.
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">What Is the Average Income of Australian Uni Students?</h2>
        <p>
          Median annual income for full-time domestic undergraduate students is $18,000, while their median spending is $14,000. One-third of domestic undergraduate students have estimated expenses exceeding their estimated income.
        </p>
      </div>

        <div  className="bg-gray-200 p-4 rounded-3xl">
        <h2 className="text-xl font-bold">How Do You Juggle Uni Life?</h2>
        <p>
          How to juggle university and part-time work:
        </p>
        <ul className="list-disc pl-4">
          <li>Let work know your uni schedule. Most places that employ students understand the temporary nature of uni schedules.</li>
          <li>If possible, try and get a job near uni.</li>
          <li>Don't always sleep in.</li>
          <li>You don't always have to attend lectures!</li>
          <li>Find that balance.</li>
        </ul>
      </div>
    </div>
    </div>
 

    
    );
};

export default FAQstudent;
