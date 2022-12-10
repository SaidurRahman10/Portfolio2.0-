import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import HeroSection from "../HeroSection/HeroSection";
import Header from "../Navbar/Header";
import ProjectSection from "../ProjectSection/ProjectSection";
import Resume from "../Resume/Resume";


const Home = () => {
  return <div className="min-h-screen "
 >
  
    <Header></Header>
    <HeroSection></HeroSection>
    <AboutMe></AboutMe>
    <Resume></Resume>
    <ProjectSection></ProjectSection>

  <Contact></Contact>
  </div>;
};

export default Home;
