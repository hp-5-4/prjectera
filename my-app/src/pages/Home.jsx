import React from 'react'
import banner from '../assets/logo.png'
import bgimg from '../assets/bgimg.png'
import { AuroraBackgroundDemo } from '../components/AuroraBackgroundDemo'
import { FlipWordsDemo } from '../components/FlipWordsDemo'
import { StickyScrollRevealDemo } from '../components/StickyScrollRevealDemo'
import { WobbleCardDemo } from '../components/WobbleCardDemo'
const Home = () => {
  return (
    <div className=''>
      {/* header */}
        <AuroraBackgroundDemo/>

        <FlipWordsDemo/>

        <StickyScrollRevealDemo />
      
        <WobbleCardDemo/>
      
    </div>
  )
}

export default Home