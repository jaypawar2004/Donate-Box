// import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Sahi imports
import TextMarquee from "./components/TextMarquee";
import NavBar from "./components/NavBar";
import LayOut from "./utils/LayOut";
import About_Us from "./About/About_Us";
import Home from "./Pages/Home";
import Contact_Us from "./Pages/Contact_Us";
import Login from "./Pages/Login";
// import Fundraise from "./Fundraiser/Donate";
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
// import { Home } from "lucide-react";

function App() {
  // const [count, setCount] = useState(0); // Uncomment if needed

  return (
    <>
    <div>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<LayOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/t" element={<TextMarquee />} />
        <Route path="/navbar" element={<NavBar />}/>
        <Route path="/about-us" element={<About_Us />}/>
        <Route path="/contact" element={<Contact_Us />}/>
        {/* <Route path="/fundraise" element={<Fundraise/>}/> */}
        <Route path="/donate" element={<Donate />}/>
        <Route path="/donateDetails" element={<DonateDetails />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/terms_and_conditions" element={<TermsAndConditions />}/>
        <Route path="/privacy_policy" element={<PrivacyP />} />
        <Route path="/cards/" element={<Cards />} />
        <Route path="/donate/:id" element={<DonateDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      
      <Footer />

    </div>
    </>
  );
}

export default App;