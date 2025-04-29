import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../Pages/Home'
import Support_Info from '../Pages/Support_Info'
import TextMarquee from "../components/TextMarquee";
import Cause from '../Pages/Cause';
import About from '../Pages/About';
import WallOfLove from '../Pages/WallOfLove';
import Blog from '../Pages/Blog';
import GetInTouch from '../Pages/GetInTouch';
import Footer from '../components/Footer';


const LayOut = () => {
  return (
    <div className='w-full'>
        <NavBar />

        <Home />
        
      <TextMarquee />
        <Support_Info />

        <Cause />
        <About />
        <WallOfLove />
        <Blog />
        <GetInTouch />
        <Footer />
    </div>
  )
}

export default LayOut