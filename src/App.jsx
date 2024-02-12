import React from 'react';
import HeroSection from './components/HeroSection';
import AboutFounderSection from './components/AboutFounderSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CountdownTimer from './components/CountdownTimer';
import CTASection from './components/CTASection';
import SlideInForm from './components/SlideInForm';


const App = () => {
  return (
    <>
    <div className='font-sans bg-sage-green '>
      <HeroSection/>
      <AboutFounderSection/>
      <CountdownTimer/>
      <WhyChooseUsSection/>
      <CTASection/>
      <SlideInForm/>
     </div>
      
      
      
    </>
  );
};

export default App;
