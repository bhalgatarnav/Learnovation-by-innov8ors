import React from 'react';
import Hero from  '../../components/LandingPage/Home/Hero.jsx'
import CallToAction from '../../components/LandingPage/Home/CallToAction.jsx'
import Features from '../../components/LandingPage/Home/Features.jsx';
import HowItWorks from '../../components/LandingPage/Home/HowItWorks.jsx';
const HomePage = () => {

  return (
    <div className="bg-lightOrange">
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
    </div>
  )

}
export default HomePage