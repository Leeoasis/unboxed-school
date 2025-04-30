import React from "react";
import HeroSection from "./homeComponents/Hero";
import Announcements from "./homeComponents/Announcements";
import LearningPrograms from "./homeComponents/LearningPrograms";
import WhyChooseUs from "./homeComponents/WhyChooseUs";
import Testimonials from "./homeComponents/Testimonials";
import ContactInvite from "./homeComponents/ContactInvite";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Announcements />
      <LearningPrograms />
      <WhyChooseUs />
      <Testimonials />
      <ContactInvite />
    </div>
  );
};

export default HomePage;
