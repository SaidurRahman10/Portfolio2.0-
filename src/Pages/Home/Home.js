import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import HeroSection from "../HeroSection/HeroSection";
import Header from "../Navbar/Header";


const Home = () => {
  return <div className="min-h-screen "
 >
  
    <Header></Header>
    <HeroSection></HeroSection>
    <AboutMe></AboutMe>

  </div>;
};

export default Home;
