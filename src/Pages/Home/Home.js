import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import HeroSection from "../HeroSection/HeroSection";
import Header from "../Navbar/Header";
import Resume from "../Resume/Resume";


const Home = () => {
  return <div className="min-h-screen "
 >
  
    <Header></Header>
    <HeroSection></HeroSection>
    <AboutMe></AboutMe>
    <Resume></Resume>

  </div>;
};

export default Home;
