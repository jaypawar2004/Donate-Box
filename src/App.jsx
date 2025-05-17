
import { Routes, Route, useLocation } from "react-router-dom"; // add useLocation
import TextMarquee from "./components/TextMarquee";
import NavBar from "./components/NavBar";
import LayOut from "./utils/LayOut";
import About_Us from "./About/About_Us";
import Home from "./Pages/Home";
import Contact_Us from "./Pages/Contact_Us";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import FundraiseDetails from "./Donate/DonateDetails";
import Profile from "./Profile/Profile";
import TermsAndConditions from "./Policy/TermsAndConditions";
import PrivacyP from "./Policy/PrivacyP";
import ScrollToTop from "./TopScrolling/ScrollToTop";
import Donate from "./Donate/Donate";
import Cards from "./components/Cards";
import DonateDetails from "./Donate/DonateDetails";
import BlogDetails from "./BlogPages/BlogDetails";
import BasicDetails from "./Fundraiser/BasicDetails";
import BeneficiaryDetails from "./Fundraiser/BeneficiaryDetails";
import ElaborateCauseDetails from "./Fundraiser/ElaborateCauseDetails";
import UserEditDetails from "./UserAccess/UserEditDetails";
import TextEditor from "./TextEditor/TextEditor";
import UserDonate from "./UserAccess/UserDonate";
import AllBlogPage from "./BlogPages/AllBlogPage";
import HospitalDetails from "./Fundraiser/HospitalDetails";
import Blog from "./BlogPages/Blog";
import BlogCards from "./BlogPages/BlogCards";
import Ngo from "./components/Ngo";
import OtherPage2 from "./Fundraiser/OtherPage2";
import Other_Elaborate_Cause_Details from './Fundraiser/Other_Elaborate_Cause_Details';
import WelcomPage from "./Fundraiser/WelcomPage";


function App() {
  const location = useLocation();

  // Paths jahan NavBar aur Footer nahi dikhani hai
  const hideLayoutPaths = ["/fundraiser", "/beneficiary", "/elaborate_cause_details" ,"/hospital","/elaborate_cause_details_others","/wlcm"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      <div>
        <ScrollToTop />
        {!shouldHideLayout && <NavBar />}

        <Routes>
          <Route path="/" element={<LayOut />} />
          <Route path="/" element={<Home />} />
          <Route path="/t" element={<TextMarquee />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/about-us" element={<About_Us />} />
          <Route path="/contact" element={<Contact_Us />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donateDetails" element={<DonateDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-donate" element={<UserDonate />} />
          <Route
            path="/terms_and_conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy_policy" element={<PrivacyP />} />
          <Route path="/cards/" element={<Cards />} />
          <Route path="/donate/:id" element={<DonateDetails />} />
          {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}
          <Route path="/fundraiser" element={<BasicDetails />} />
          <Route path="/beneficiary" element={<BeneficiaryDetails />} />
          <Route path="/user-edit-details" element={<UserEditDetails />} />
          <Route path="/text-editor" element={<TextEditor />} />
          <Route path="/all_blog_page" element={<AllBlogPage />} />
          <Route path="/hospital" element={<HospitalDetails />} />
          <Route path="/ngo" element={<Ngo />} />
          <Route path="/otherP2" element={<OtherPage2 />} />
          <Route path="/blogcards/:id" element={<BlogDetails/>} />
          <Route path="/wlcm" element={<WelcomPage/>} />
          <Route
            path="/elaborate_cause_details"
            element={<ElaborateCauseDetails />}
          />
          <Route
            path="/elaborate_cause_details_others"
            element={<Other_Elaborate_Cause_Details />}
          />
        </Routes>

        {!shouldHideLayout && <Footer />}
      </div>
    </>
  );
}

export default App;
