import React, { useState } from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import LanguagesSection from "./components/LanguagesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <AboutSection />
      <LanguagesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Portfolio;
