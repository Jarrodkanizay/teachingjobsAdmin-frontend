import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EmployerCenter from "./views/EmployerCenter";
import Employers from "./views/Employers";
import Invoices from "./views/Invoices";
import Invoice from "./views/Invoice";
// import JobPosts from "./views/JobPosts";
import Home from "./views/Home";
// import Payment from "./views/Payment";
// import Payment1 from "./views/Payment1";
import PaymentPublic from "./views/auth/PaymentPublic";
import Completion from "./views/Completion";
import TermsConditions from "./views/TermsConditions";
import JobSearch from "./views/JobSearch";
import AboutAJ from "./views/AboutAJ";
import Employer from "./views/Employer";
import Category from "./views/Category";
import Faculty from "./views/Faculty";
import Position from "./views/Position";
import Position2 from "./views/Position2";
import HR from "./views/HR";
import Login from "./views/auth/Login";
import HR2 from "./views/HR2";
import Lecturer from "./views/Lecturer";
import Lecturer2 from "./views/Lecturer2";
import Cities from "./views/Cities";
import UKpositions from "./views/UKpositions";
import UsersTask from "./views/UsersTask";
import NewZealandPositions from "./views/NewZealandPositions";
import MiddleEastPositions from "./views/MiddleEastPositions";
import SouthAmericaPositions from "./views/SouthAmericaPositions";
import IndiaPositions from "./views/IndiaPositions";
import EuropePositions from "./views/EuropePositions";
import CanadaPositions from "./views/CanadaPositions";
import AfricaPositions from "./views/AfricaPositions";
import AsiaPositions from "./views/AsiaPositions";
import Industry from "./views/Industry";
import Industry2 from "./views/Industry2";
import AdminHome1 from "./views/AdminHome1";

import Executive from "./views/Executive";
import EmployerCreate from "./views/EmployerCreate";
import Executive2 from "./views/Executive2";
import Admin from "./views/Admin";
import Adelaide from "./views/Adelaide";
import HRassociations from "./views/HRassociations";
import Admin2 from "./views/Admin2";
import CareerAdvice from "./views/CareerAdvice";
import Careeradvice2 from "./views/Careeradvice2";
import Student from "./views/Student";
import Students from "./views/Students";
import AdvancedSearch from "./views/AdvancedSearch";
import PostJob from "./views/PostJob";
import PostJobAU from "./views/PostJobAU";
import Rankings from "./views/Rankings";
import FAQ from "./views/FAQ";
import EmployersCenter from "./views/EmployersCenter";
import JobsCenter from "./views/JobsCenter";
import ContactUs from "./views/ContactUs";
import Nominate from "./views/NominateAcademicOfTheYear";
import TalentPoolSignUp from "./views/TalentPoolSignUp";
import SuccessfullyJoinedTalentPool from "./views/SuccessfullyJoinedTalentPool";
import AcademicTalentPool from "./views/AcademicTalentPool";
import NomineePromoIdeas from "./views/NomineePromotionIdeas";
import NominationSuccessful from "./views/NominationSuccessful";
import DiversayStatement from "./views/DiversayStatement";
import FindEmployers from "./views/FindEmployers";
import CreateEmployer from "./views/CreateEmployer";
import Australia from "./views/Australia";
import India from "./views/India";
import Asia from "./views/Asia";
import Africa from "./views/Africa";
import Europe from "./views/Europe";
import SouthAmerica from "./views/SouthAmerica";
import MiddleEast from "./views/MiddleEast";
import Canada from "./views/Canada";
import UK from "./views/UK";
import NewZealand from "./views/NewZealand";
import USA from "./views/USA";
import SiteMap from "./views/SiteMap";
import BostonCollege from "./views/BostonCollege";
import NortheasternUniversity from "./views/NortheasternUniversity";
import MassachusettsAmherst from "./views/MassachusettsAmherst";
import TuftsUniversity from "./views/TuftsUniversity";
import BostonUniversity from "./views/BostonUniversity";
import QUT from "./views/QUT";
import Layout from "./components/Layout";
import Layout1 from "./components/Layout1";
import JobDetailPage from "./views/JobDetailPage";
import Research from "./views/Research";
import Research2 from "./views/Research2";
import Professor from "./views/Professor";
import Professor2 from "./views/Professor2";
import Online from "./views/Online";
import FAQaustralia from "./views/FAQaustralia";
import FAQresearch from "./views/FAQresearch";
import FAQstudent from "./views/FAQstudent";
import FAQusa from "./views/FAQusa";
import LecturerUSA from "./views/LecturerUSA";
import ResearchUSA from "./views/ResearchUSA";
import ProfessorUSA from "./views/ProfessorUSA";
import ExecutiveUSA from "./views/ExecutiveUSA";
import AdminUSA from "./views/AdminUSA";
import HRUSA from "./views/HRUSA";
import EditEmployerProfile from "./views/EditEmployerProfile";
import StudentsUSA from "./views/StudentsUSA";
import LecturerAustralia from "./views/LecturerAustralia";
import ResearchAustralia from "./views/ResearchAustralia";
import ProfessorAustralia from "./views/ProfessorAustralia";
import ExecutiveAustralia from "./views/ExecutiveAustralia";
import AdminAustralia from "./views/AdminAustralia";
import HRAustralia from "./views/HRAustralia";
import IndigenousAustralia from "./views/IndigenousAustralia";
import StudentsAustralia from "./views/StudentsAustralia";
import Scroll2Top from "./utils/Scroll2Top";
import Graduates from "./views/Graduates1";
import PHD from "./views/PHD";
import GroupOf8 from "./views/GroupOf8";
import RusselGroup from "./views/RusselGroup";
import IvyLeague from "./views/IvyLeague";
import JobEdit from "./views/JobEdit";
import NominateAcademicOfTheYear from "./views/NominateAcademicOfTheYear";
import NominateLecturerOfTheYear from "./views/NominateLecturerOfTheYear";
import NominateResearcherOfTheYear from "./views/NominateResearcherOfTheYear";
import NominatePresidentViceChancellorOfTheYear from "./views/NominatePresidentViceChancellorOfTheYear";
import NominatePhDrOfTheYear from "./views/NominatePhDrOfTheYear";
import NominateDepartmentHeadsManagersOfTheYear from "./views/NominateDepartmentHeadsManagersOfTheYear";
import NominateOutstandingStudentOfTheYear from "./views/NominateOutstandingStudentOfTheYear";
import JobCreate from "./views/JobCreate";
import JobLoadingActivity from "./views/JobLoadingActivity";
import PostAJobForm from "./views/PostAJobForm";
import QuickPayPost from "./views/QuickPayPost";
import SignUp from "./views/auth/SignUp";
import Test from "./views/Test";
import PersistLogin from "./views/auth/PersistLogin";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Scroll2Top>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact path="/Global" element={<Navigate to="/" replace />} />
            <Route
              exact
              path="/post-job/Global"
              element={<Navigate to="/job-ads/" replace />}
            />
            <Route
              exact
              path="/post-job/USA"
              element={<Navigate to="/job-ads/" replace />}
            />
            <Route exact path="/post-job/" element={<PostJob />} />
            <Route exact path="/post-job/Australia" element={<PostJobAU />} />
            {/* I have copied the links to action redirects but they seem wrong 
            to me, should the region come first? Dan */}
            <Route
              path="/post-job/Australia"
              element={<Navigate to="/job-ads/Australia" replace />}
            />
            <Route
              path="/post-job/"
              element={<Navigate to="/job-ads/" replace />}
            />
            <Route exact path="/job-ads/" element={<PostJob />} />
            <Route exact path="/" index element={<Home />} />
            <Route exact path="/test" index element={<Test />} />
            <Route exact path="/signup" index element={<SignUp />} />
            <Route exact path="/home/" element={<Home />} />
            <Route
              exact
              path="/advanced-search/:category1?"
              element={<AdvancedSearch />}
            />
            <Route exact path="/completion/" element={<Completion />} />
            <Route exact path="/jobs/" element={<JobSearch />} />
            <Route
              exact
              path="/editEmployerProfile/:id"
              element={<EditEmployerProfile />}
            />
            <Route exact path="/jobs/:name?" element={<JobSearch />} />
            <Route exact path="/jobs/:name/:id?/" element={<JobDetailPage />} />
            <Route exact path="/employers/:name/:id?" element={<Employer />} />
            <Route exact path="/faculty/" element={<Faculty />} />
            <Route exact path="/QUT/" element={<QUT />} />
            <Route exact path="/faculty/:category?" element={<Category />} />
            <Route exact path="/job-type/:position?" element={<Position />} />
            <Route exact path="/job-type/" element={<Position2 />} />
            <Route exact path="/hr-jobs/" element={<HR2 />} />
            <Route
              exact
              path="/hr-jobs/associations/"
              element={<HRassociations />}
            />
            <Route exact path="/hr-jobs/:hr-jobs?" element={<HR />} />
            <Route exact path="/cities?" element={<Cities />} />
            <Route exact path="/UK/:ukpositions?" element={<UKpositions />} />
            <Route
              exact
              path="/Asia/:asiapositions?"
              element={<AsiaPositions />}
            />
            <Route
              exact
              path="/Africa/:africapositions?"
              element={<AfricaPositions />}
            />
            <Route
              exact
              path="/Canada/:canadapositions?"
              element={<CanadaPositions />}
            />
            <Route
              exact
              path="/Europe/:europepositions?"
              element={<EuropePositions />}
            />
            <Route
              exact
              path="/India/:indiapositions?"
              element={<IndiaPositions />}
            />
            <Route
              exact
              path="/South-America/:southamericapositions?"
              element={<SouthAmericaPositions />}
            />
            <Route
              exact
              path="/Middle-East/:middleeastpositions?"
              element={<MiddleEastPositions />}
            />
            <Route
              exact
              path="/New-Zealand/:newzealandpositions?"
              element={<NewZealandPositions />}
            />
            <Route exact path="/UK/:ukpositions?" element={<UKpositions />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/online/" element={<Online />} />
            <Route exact path="/research/:research?" element={<Research />} />
            <Route exact path="/research/" element={<Research2 />} />
            <Route
              exact
              path="/professor/:professor?"
              element={<Professor />}
            />
            <Route exact path="/professor/" element={<Professor2 />} />
            <Route exact path="/lecturer/:lecturer?" element={<Lecturer />} />
            <Route exact path="/lecturer/" element={<Lecturer2 />} />
            <Route exact path="/USA/lecturer/" element={<LecturerUSA />} />
            <Route exact path="/USA/research/" element={<ResearchUSA />} />
            <Route exact path="/USA/professor/" element={<ProfessorUSA />} />
            <Route exact path="/USA/executive/" element={<ExecutiveUSA />} />
            <Route exact path="/USA/admin/" element={<AdminUSA />} />
            <Route exact path="/USA/hr-jobs/" element={<HRUSA />} />
            <Route exact path="/USA/student/" element={<StudentsUSA />} />
            <Route
              exact
              path="/Australia/lecturer/"
              element={<LecturerAustralia />}
            />
            <Route
              exact
              path="/Australia/research/"
              element={<ResearchAustralia />}
            />
            <Route
              exact
              path="/Australia/professor/"
              element={<ProfessorAustralia />}
            />
            <Route
              exact
              path="/Australia/executive/"
              element={<ExecutiveAustralia />}
            />
            <Route
              exact
              path="/Australia/admin/"
              element={<AdminAustralia />}
            />
            <Route exact path="/Australia/hr-jobs/" element={<HRAustralia />} />
            <Route
              exact
              path="/Australia/student/"
              element={<StudentsAustralia />}
            />
            <Route
              exact
              path="/Australia/indigenous/"
              element={<IndigenousAustralia />}
            />
            <Route exact path="/industry/:industry?" element={<Industry />} />
            <Route exact path="/industry/" element={<Industry2 />} />
            <Route
              exact
              path="/executive/:executive?"
              element={<Executive />}
            />
            <Route exact path="/executive/" element={<Executive2 />} />
            <Route exact path="/admin/:admin?" element={<Admin />} />
            <Route exact path="/admin/" element={<Admin2 />} />
            <Route exact path="/adelaide/" element={<Adelaide />} />
            <Route
              exact
              path="/academic-hub/:careerAdvice?"
              element={<CareerAdvice />}
            />
            <Route exact path="/academic-hub/" element={<Careeradvice2 />} />
            <Route exact path="/student/:student?" element={<Student />} />
            <Route exact path="/student/" element={<Students />} />
            <Route exact path="/graduate/" element={<Graduates />} />
            <Route exact path="/phd/" element={<PHD />} />
            <Route
              exact
              path="/the-university-rankings/"
              element={<Rankings />}
            />
            <Route exact path="/about/" element={<AboutAJ />} />
            <Route
              exact
              path="/about/term-of-use/"
              element={<TermsConditions />}
            />
            <Route
              exact
              path="/about/diversity-statement/"
              element={<DiversayStatement />}
            />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/contact-us/" element={<ContactUs />} />
            <Route
              path="/nominate/"
              element={
                <Navigate
                  to="/global-academic-awards-2023-nominations"
                  replace
                />
              }
            />
            <Route
              path="/global-academic-awards-2023-nominations"
              element={<Nominate />}
            />
            <Route
              exact
              path="/nominee-promotion-ideas/"
              element={<NomineePromoIdeas />}
            />
            <Route
              exact
              path="/thank-you-for-joining-our-talent-pool/"
              element={<SuccessfullyJoinedTalentPool />}
            />
            <Route
              exact
              path="/nomination-successful/"
              element={<NominationSuccessful />}
            />
            <Route
              exact
              path="/academic-talent-pool/"
              element={<AcademicTalentPool />}
            />
            <Route
              exact
              path="/talent-pool-sign-up/"
              element={<TalentPoolSignUp />}
            />
            {/* <Route exact path="/employers/" element={<FindEmployers />} /> */}
            <Route exact path="/employers" element={<Navigate to="/Gloabal/employers" replace />} />
            <Route exact path="/sitemap/" element={<SiteMap />} />
            <Route exact path="/Australia/faq/" element={<FAQaustralia />} />
            <Route exact path="/research/faq/" element={<FAQresearch />} />
            <Route exact path="/student/faq/" element={<FAQstudent />} />
            <Route exact path="/USA/faq/" element={<FAQusa />} />
            <Route
              exact
              path="/company/3604/boston-college/"
              element={<BostonCollege />}
            />
            <Route
              exact
              path="/company/3285/northeastern-university/"
              element={<NortheasternUniversity />}
            />
            <Route
              exact
              path="/company/3396/university-of-massachusetts-amherst/"
              element={<MassachusettsAmherst />}
            />
            <Route
              exact
              path="/company/3460/tufts-university/"
              element={<TuftsUniversity />}
            />
            <Route
              exact
              path="/company/3190/boston-university/"
              element={<BostonUniversity />}
            />
            <Route
              exact
              path="/queensland-university-of-technology/"
              element={<QUT />}
            />
            <Route exact path="/Australia/" element={<Australia />} />
            <Route exact path="/USA/" element={<USA />} />
            <Route exact path="/Asia/" element={<Asia />} />
            <Route exact path="/Africa/" element={<Africa />} />
            <Route exact path="/India/" element={<India />} />
            <Route exact path="/UK/" element={<UK />} />
            <Route exact path="/United-Kingdom/" element={<UK />} />
            <Route exact path="/New-Zealand/" element={<NewZealand />} />
            <Route exact path="/South-America/" element={<SouthAmerica />} />
            <Route exact path="/Canada/" element={<Canada />} />
            <Route exact path="/Europe/" element={<Europe />} />
            <Route exact path="/Middle-East/" element={<MiddleEast />} />
            <Route exact path="/GroupOf8/" element={<GroupOf8 />} />
            <Route exact path="/russelgroup/" element={<RusselGroup />} />
            <Route exact path="/ivyleague/" element={<IvyLeague />} />
            <Route
              exact
              path="/nominate-academic-of-the-year/"
              element={<NominateAcademicOfTheYear />}
            />
            <Route
              exact
              path="/nominate-lecturer-of-the-year/"
              element={<NominateLecturerOfTheYear />}
            />
            <Route
              exact
              path="/nominate-researcher-of-the-year/"
              element={<NominateResearcherOfTheYear />}
            />
            <Route
              exact
              path="/nominate-president-vice-chancellor-of-the-year/"
              element={<NominatePresidentViceChancellorOfTheYear />}
            />
            <Route
              exact
              path="/nominate-phd-of-the-year/"
              element={<NominatePhDrOfTheYear />}
            />
            <Route
              exact
              path="/nominate-department-heads-managers-of-the-year/"
              element={<NominateDepartmentHeadsManagersOfTheYear />}
            />
            <Route
              exact
              path="/nominate-outstanding-student-of-the-year/"
              element={<NominateOutstandingStudentOfTheYear />}
            />
            <Route exact path="/paymentPublic/:id" element={<PaymentPublic />} />
            <Route exact path="/post-a-job-form/" element={<PostAJobForm />} />
            <Route element={<PersistLogin />}>
              <Route exact path="/" element={<Layout1 />}>
                <Route
                  exact
                  path="/employer-center/"
                  element={<EmployerCenter />}
                />
                <Route
                  exact
                  path="/employers/"
                  element={<Employers />}
                />
                <Route
                  exact
                  path="/employer-center/invoices/"
                  index
                  element={<Invoices />}
                />
                {/* <Route
                  exact
                  path="/employer-center/job-posts/:expired"
                  index
                  element={<JobPosts />}
                /> */}
                <Route exact path="/jobs/edit/:id?/" element={<JobEdit />} />
                <Route exact path="/UsersTask/" element={<UsersTask />} />
                <Route exact path="/admin-home/" element={<AdminHome1 />} />
                <Route exact path="/create-employer/" element={<EmployerCreate />} />
                <Route exact path="/employers-center/:id?" element={<EmployersCenter />} />
                <Route exact path="/jobs-center/" element={<JobsCenter />} />
                <Route exact path="/invoice/" element={<Invoice />} />
                <Route exact path="/post-a-job/" element={<JobCreate />} />
                <Route exact path="/JobLoadingActivity" element={<JobLoadingActivity />} />
                <Route exact path="/employer-center/quick-pay-post/" element={<QuickPayPost />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Scroll2Top>
    </BrowserRouter>
  );
};
export default AppRouter;
