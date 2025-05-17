import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../Pages/Home'
import Support_Info from '../Pages/Support_Info'
import TextMarquee from "../components/TextMarquee";
import Cause from '../Pages/Cause';
import About from '../Pages/About';
import WallOfLove from '../Pages/WallOfLove';
import BlogCards from '../BlogPages/BlogCards';
import GetInTouch from '../Pages/GetInTouch';
import Footer from '../components/Footer';
import DonateFillter from '../components/DonateFillter';
import Cards from '../components/Cards';
import Blog from '../BlogPages/Blog';


const LayOut = () => {
  return (
    <div className='w-full'>
        {/* <NavBar /> */}

        <Home />
        
      <TextMarquee />
        <Support_Info />
        <DonateFillter />

        {/* <Cause /> */}
        <div className='lg:w-full lg:px-10 lg:bg-[#FDF5F3]'>

        <Cards />
     
        </div>
        <About />
        <WallOfLove />
        <Blog />
        <GetInTouch />
        
    </div>
  )
}

export default LayOut