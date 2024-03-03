import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const countryRegion = "Africa";

function countryRegionPlural() {
  return countryRegion.toLowerCase().endsWith("s")
    ? `${countryRegion}'`
    : `${countryRegion}'s`;
}

const RecruitmentGlobal = () => {  window.location.replace("https://www.academicjobs.com/africa/employers");
  return (
    <div className="">
      <Helmet>
        <title>Find {countryRegionPlural()} Top University Employers</title>
        <meta
          name="description"
          content="Browse through our comprehensive list of universities from around the world and find the best one for you. Whether you want to study in Australia, Canada, UK, Africa, or anywhere else, we have the information you need to make an informed decision."
        />
        <meta
          name="keywords"
          content="Find Universities. Find employers, Find institutions"
        />
      </Helmet>
      <main>
        {/* Hero banner */}
        <section>
          <div className="hero max-h-fit bg-base-200 py-8 mx-auto">
            <div className="container mx-auto">
              <div className="hero-content flex-col xl:flex-row-reverse mx-auto max-w-full">
                <img
                  src="/academic-job-postings/Africa-University-of-Pretoria.jpg"
                  className="object-none h-60 w-96  rounded-xl shadow-2xl mb-8 lg:mb-0"
                  alt="The Top Academic Employers"
                />
                <div>
                  <h1 className="text-3xl font-bold text-aj">
                    Find {countryRegionPlural()} Top University Employers
                  </h1>

                  <p className="py-6">
                    Here you will find a variety of opportunities to join the
                    faculty or staff of leading African institutions, such as
                    the University of Cape Town, the University of the
                    Witwatersrand, the University of Ghana, the University of
                    Nairobi, and many more. Whether you are interested in
                    teaching, research, administration, or service, you will
                    find a role that suits your skills, interests, and values.
                  </p>
                  <div className="card-actions flex ">
                    <Link to="/academic-talent-pool" className="btn btn-aj">
                      Join our Talent Pool
                    </Link>
                    <Link to="/job-ads" className="btn btn-aj">
                      Create Institutional Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b to-white from-orange-100 m-8 mb-12 rounded-3xl max-w-screen-2xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7  mb-16">
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Egypt</li>
              <li>
                <Link to="/employers/cairo-university/6226/">
                  Cairo University
                </Link>
              </li>
              <li>
                <Link to="/employers/american-university-in-cairo/5798/">
                  American University in Cairo
                </Link>
              </li>
              <li>
                <Link to="/employers/alexandria-university/5713/">
                  Alexandria University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">South Africa</li>
              <li>
                <Link to="/employers/university-of-cape-town/12637/">
                  University of Cape Town
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-the-witwatersrand/13133/">
                  University of the Witwatersrand
                </Link>
              </li>
              <li>
                <Link to="/employers/stellenbosch-university/13008/">
                  Stellenbosch University
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-pretoria/12935/">
                  University of Pretoria
                </Link>
              </li>
              <li>
                <Link to="/employers/12787/university-of-kwazulu-natal/">
                  University of KwaZulu-Natal
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Nigeria</li>
              <li>
                <Link to="/employers/university-of-ibadan/12743/">
                  University of Ibadan
                </Link>
              </li>
              <li>
                <Link to="/employers/ahmadu-bello-university/6388/">
                  Ahmadu Bello University
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-lagos/12789/">
                  University of Lagos
                </Link>
              </li>
              <li>
                <Link to="/employers/obafemi-awolowo-university/9482/">
                  Obafemi Awolowo University
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-nigeria-nsukka/12881/">
                  University of Nigeria, Nsukka
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Kenya</li>
              <li>
                <Link to="/employers/university-of-nairobi/12866/">
                  University of Nairobi
                </Link>
              </li>
              <li>
                <Link to="/employers/kenyatta-university/8470/">
                  Kenyatta University
                </Link>
              </li>
              <li>
                <Link to="/employers/strathmore-university/10485/">
                  Strathmore University
                </Link>
              </li>
              <li>
                <Link to="/employers/moi-university/9051/">Moi University</Link>
              </li>
              <li>
                <Link to="/employers/egerton-university/7048/">
                  Egerton University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Morocco</li>
              <li>
                <Link to="/employers/university-mohammed-v-of-rabat/12453/">
                  University Mohammed V of Rabat
                </Link>
              </li>
              <li>
                <Link to="/employers/cadi-ayyad-university/12262/">
                  Cadi Ayyad University
                </Link>
              </li>
              <li>
                <Link to="/employers/hassan-ii-university-of-casablanca/12426/">
                  Hassan II University of Casablanca
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Ghana</li>
              <li>
                <Link to="/employers/university-of-ghana/12711/">
                  University of Ghana
                </Link>
              </li>
              <li>
                <Link to="/employers/kwame-nkrumah-university-of-science-and-technology/8649/">
                  Kwame Nkrumah University of Science and Technology
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-cape-coast/12636/">
                  University of Cape Coast
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Senegal</li>
              <li>
                <Link to="/employers/cheikh-anta-diop-university/12272/">
                  Cheikh Anta Diop University
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Tunisia</li>
              <li>
                <Link to="/employers/university-of-tunis-el-manar/12393/">
                  University of Tunis El Manar
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-sfax/12370/">
                  University of Sfax
                </Link>
              </li>
              <li>
                <Link to="/employers/university-of-carthage/12303/">
                  University of Carthage
                </Link>
              </li>
            </ul>
            <ul>
              <li className="mb-1 text-[#00aeef] font-bold">Uganda</li>
              <li>
                <Link to="/employers/makerere-university/8875/">
                  Makerere University
                </Link>
              </li>
              <li>
                <Link to="/employers/uganda-martyrs-university/10962/">
                  Uganda Martyrs University
                </Link>
              </li>
              <li>
                <Link to="/employers/kyambogo-university/8660/">
                  Kyambogo University
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <section>
          <h3 className="container mx-auto text-center py-8 px-4 items-end">
            {" "}
            <Link className="border rounded-3xl  p-4" to="/employers/">
              View All
            </Link>
          </h3>
        </section>
        {/* Contact us CTA */}
        <section className="container mx-auto px-4 mt-12">
          <div className="alert mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              ​​Try out Academic Jobs today, not because we are number 1 but for
              the best customer service and support you will ever experience.
            </span>
            <div>
              <Link to="/contact-us" className="btn btn-sm btn-aj">
                Experience the Difference
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h3 className="container mx-auto text-center py-8 px-4 items-end">
            If you're interested in a great experience while saving time &
            money…{" "}
            <Link className="btn btn-aj" to="/job-ads">
              Post a Job Today
            </Link>
          </h3>
        </section>
      </main>
    </div>
  );
};
export default RecruitmentGlobal;
