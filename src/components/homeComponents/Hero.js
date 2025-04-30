import React from "react";
import backgroundImage from "../../assets/images/heroback.png"; // Replace with a school-related image
import "../../styles/hero.css";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown">
          Empowering Children with Autism Through Faith & Education
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate__animated animate__fadeInUp">
          A safe, nurturing environment where every child is seen, supported, and celebrated.
        </p>
        <a
          href="/admissions"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg animate__animated animate__pulse animate__infinite"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
