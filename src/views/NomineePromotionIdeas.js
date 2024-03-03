import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NomineePromoIdeas = () => {  window.location.replace("https://www.academicjobs.com/");
  return (
    <div className="">
      <Helmet>
        <title>Nominee Promotion Ideas and Help</title>
        <meta
          name="description"
          content="Information, templates and resources to help you promote your nomination for the Global Academic Awards."
        />
        <meta
          name="keywords"
          content="Nominee help, promo templates, nominee resources, nominee promotion, nominee promotion ideas, nominee promotion help, nominee promotion resources, nominee promotion templates, nominee promotion examples, nominee promotion tips, nominee promotion advice, nominee promotion strategies"
        />
      </Helmet>

      <div className="px-7 py-8 container mx-auto py-16 p-4 pt-4 rounded-3xl mt-8 mb-56">
        <section>
          <h1 className="text-5xl font-semibold  text-[#00aeef] ">
            Global Academic Awards 2023 Resources!
          </h1>
          <p className="mt-10">
            Use the resources below to help you promote your nominations. The
            CSS file can be used for the website and intranet templates and all
            styles are embedded into the email template.
          </p>
          <ul>
            <li>
              <strong>Tokens:</strong> remember to replace any text in{" "}
              <em style={{ color: "red" }}>[square brackets]</em> with your own
              information.
            </li>
            <li>
              <strong>Images &amp; Logos:</strong> don't forget to replace any
              placeholder images with your own. Mainly the Global Academic
              Nominees headshot and the institution logo. You can also delete
              these if easier!
            </li>
            <li>
              <strong>Nomination Badge:</strong> feel free to use the provided
              nomination badge anywhere you like!{" "}
              <a
                className="link link-warning hover:text-[#00aeef]"
                href="/academic-awards/global-academic-of-the-year-nominee-badge.png"
                download
              >
                Download Badge
              </a>
            </li>
          </ul>
        </section>

        <h2 className="text-sky-500 mt-10 text-xl mt-8">
          Website Announcement Helper Template (between red lines){" "}
          <a
            className="link link-warning"
            target="_blank"
            href="/templates.css"
          >
            Get the CSS
          </a>
        </h2>
        {/* Divider */}
        <div className="pt-6 border-b-2 border-red-500 mb-8"></div>
        {/* Website Announcement Helper Template START */}
        <section className="template">
          <h2 class="header">Global Academic Awards 2023 Nominee</h2>
          <h4 class="sub-header">Celebrating Excellence in Leadership</h4>
          <div className="school-images">
            <a
              href="/academic-awards/global-academic-of-the-year-nominee-badge.png"
              download
            >
              <img
                width="140"
                src="/academic-awards/global-academic-of-the-year-nominee-badge.png"
                alt="Digital Nomination Badge"
                class="nomination-badge"
              />
            </a>

            <span>
              <img
                src="/placeholders/generic-headshot.png"
                alt="[Global Academic's Name]"
                className="Global Academic-headshot"
              />
            </span>
            <span>
              <img
                src="/placeholders/your-school-logo.png"
                alt="[School's Name]"
                className="school-logo"
              />
            </span>
          </div>
          <strong></strong>
          <p>We are Proud to Announce:</p>
          <p class="Global Academic-name">
            Our esteemed academic, <strong>[Global Academic’s Name]</strong>,
            has been nominated for the prestigious a prestigious 'Global
            Academic' award. This nomination recognizes their unwavering
            commitment to excellence in education and inspirational leadership
            at <strong>[Institution Name]</strong>.
          </p>

          <p class="Global Academic-name">
            <strong>[Global Academic’s Name]</strong>: A Beacon of Educational
            Leadership
          </p>
          <p>Join Us in Celebrating this Honour</p>
          <p>
            We invite our institution's community to join us in celebrating this
            significant achievement. <strong>[Global Academic’s Name]</strong>'s
            nomination is not just a personal accolade but a testament to our
            collective dedication to creating an enriching and supportive
            educational environment.
          </p>
          <h4>Stay Informed</h4>
          <p>
            For more details about the 'Global Academic Awards' 2023 and the
            nomination, visit{" "}
            <a
              target="_blank"
              href="https://www.academicjobs.com/global-academic-awards-2023-nominations"
              rel="noreferrer"
            >
              www.AcademicJobs.com
            </a>{" "}
            to find out more about this auspicious award.
          </p>
        </section>
        {/* Website Announcement Helper Template END */}

        {/* Divider */}
        <div className="pt-6 border-b-2 border-red-500 mb-8"></div>

        <h2 className="text-sky-500 mt-10 text-xl mt-20">
          Intranet Announcement Helper Template (between red lines)
        </h2>

        {/* Divider */}
        <div className="pt-6 border-b-2 border-red-500 mb-8"></div>
        <section className="template">
          <h2>
            Subject: Celebrating Our Leader:{" "}
            <strong>[Global Academic’s Name]</strong> Nominated for the 'Global
            Academic Awards' 2023
          </h2>
          <p>&nbsp;</p>
          <p>
            Dear <strong>[Institution Name]</strong> Community,
          </p>
          <p>
            We have some incredibly exciting news to share! Our esteemed Global
            Academic, <strong>[Global Academic’s Name]</strong>, has been
            nominated for the auspicious 'Global Academic Awards' 2023. This
            nomination recognizes
            <strong>[Global Academic’s Name]’s</strong> exceptional leadership,
            dedication to educational excellence, and unwavering commitment to
            our institution's community.
          </p>
          <h2>Why This Nomination Matters:</h2>
          <ul>
            <li>
              <strong>Leadership:</strong>{" "}
              <strong>[Global Academic’s Name]</strong> has been an
              inspirational figure, guiding both our staff and students towards
              achieving remarkable goals.
            </li>
            <li>
              <strong>Innovation:</strong> Under their leadership, [*** mention
              any notable initiatives or programs ***].
            </li>
            <li>
              <strong>Community Impact:</strong> [*** Describe how the Global
              Academic has positively impacted the institution community ***].
            </li>
          </ul>
          <p>Let’s Show Our Support:</p>
          <ul>
            <li>
              Spread the Word: Share this news with your peers and colleagues.
            </li>
            <li>
              Engage on Social Media: Follow our institution's social media
              channels and join in the conversation using
              #GlobalAcademicAwards2023.
            </li>
            <li>
              Share Your Stories: We would love to hear your personal
              experiences and stories about{" "}
              <strong>[Global Academic’s Name]</strong>. Please submit them [***
              provide method or link ***].
            </li>
          </ul>
          <p>
            This nomination is not just a personal achievement for{" "}
            <strong>[Global Academic’s Name]</strong> but a moment of pride for
            our entire [Institution Name] family. Let’s come together to support
            and celebrate <strong>[Global Academic’s Name]’s</strong> journey in
            this prestigious award.
          </p>
          <p>
            To learn more about the auspicious 'Global Academic Awards' 2023 and
            the nomination, visit{" "}
            <a
              target="_blank"
              href="https://www.academicjobs.com/global-academic-awards-2023-nominations"
              rel="noreferrer"
            >
              www.AcademicJobs.com
            </a>
            .
          </p>
          <p>Thank you for being part of this momentous occasion.</p>
          <p>Warm regards,</p>
          <p>[Your Name or Communication Team's Name]</p>
          <p>[Your Position or Team's Position]</p>
          <p>[Institution Name]</p>
        </section>

        {/* Divider */}
        <div className="pt-6 border-b-2 border-red-500 mb-8"></div>

        <h2 className="text-sky-500 mt-10 text-xl mt-20">
          Email Announcement Helper Template (between red lines)
        </h2>

        {/* Divider */}
        <div className="pt-6 border-b-2 border-red-500 mb-8"></div>

        <section className="template">
          <h2 style={{ color: "#4A90E2" }}>
            Subject: Proudly Nominated for the 'Global Academic Awards' 2023!
          </h2>
          <p>&nbsp;</p>
          <p>Dear [Institution Community/Colleagues/Parents/Students],</p>
          <p>
            I am excited to share some wonderful news with you all. I have been
            nominated for the 'Global Academic Awards' 2023, a significant
            recognition of our collective efforts in fostering an environment of
            excellence in education.
          </p>
          <p>
            This nomination is not just a personal honor but a testament to the
            hard work, dedication, and spirit of our entire institution's
            community. It reflects our shared commitment to creating a nurturing
            and inspiring educational environment.
          </p>
          <h2 style={{ color: "#4A90E2" }}>
            Here's How You Can Join in the Celebration:
          </h2>
          <ul>
            <li>
              Visit Our Institution Website: Read more about the nomination and
              what it means for our Institution.
            </li>
            <li>
              Stay Tuned on Social Media: Follow our Institution's social media
              channels for updates and share the news with your networks using
              #Global AcademicOfTheYear2023 and #EducationalExcellence.
            </li>
            <li>
              Spread the Word: Let’s celebrate this moment together! Feel free
              to share this news with friends and family.
            </li>
          </ul>
          <p>
            I am truly humbled by this nomination and want to extend my
            heartfelt gratitude to each one of you for your continuous support
            and enthusiasm. Together, we make our Institution a wonderful place
            to learn and grow.
          </p>
          <p>
            To help me secure this auspicious award please submit a nomination
            at{" "}
            <a
              target="_blank"
              href="https://www.academicjobs.com/global-academic-awards-2023-nominations"
              rel="noreferrer"
            >
              www.AcademicJobs.com
            </a>
          </p>

          <p>Thank you for being an integral part of this journey.</p>
          <p>Warm regards,</p>
          <p>[Your Name]</p>
          <p>[Your Title]</p>
          <p>[Your Institution]</p>
        </section>
        {/* Divider */}
        <div className="pt-6 border-b-2 border-red-500 mb-8"></div>
      </div>
    </div>
  );
};

export default NomineePromoIdeas;
