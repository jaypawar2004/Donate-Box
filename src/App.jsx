// import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Sahi imports
import TextMarquee from "./components/TextMarquee";
import NavBar from "./components/NavBar";
import LayOut from "./utils/LayOut";
import About_Us from "./About/About_Us";
import Home from "./Pages/Home";
import Contact_Us from "./Pages/Contact_Us";
import Login from "./Pages/Login";
import Fundraise from "./Fundraiser/Fundraise";
import Footer from "./components/Footer";
import FundraiseDetails from "./Fundraiser/FundraiseDetails";
import Profile from "./Profile/Profile";
// import { Home } from "lucide-react";

function App() {
  // const [count, setCount] = useState(0); // Uncomment if needed

  return (
    <>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LayOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/t" element={<TextMarquee />} />
        <Route path="/navbar" element={<NavBar />}/>
        <Route path="/about-us" element={<About_Us />}/>
        <Route path="/contact" element={<Contact_Us />}/>
        <Route path="/fundraise" element={<Fundraise/>}/>
        <Route path="/fd" element={<FundraiseDetails/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      
      <Footer />

    </div>
    </>
  );
}

export default App;