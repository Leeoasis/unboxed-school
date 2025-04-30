import React from "react";
import LifeSkillsImage from "../../assets/images/lifeskills.png"; 
import FaithbasedImage from "../../assets/images/faithbased.png";
import CommunicationImage from "../../assets/images/communicationbased.png";
import 'animate.css';

const programs = [
  {
    title: "Life Skills",
    description: "Empowering children with everyday skills that build independence and confidence.",
    image:  LifeSkillsImage,
    tag: "Core Program",
  },
  {
    title: "Faith-Based Activities",
    description: "Fostering spiritual growth through prayer, Bible stories, and worship.",
    image: FaithbasedImage,
    tag: "Spiritual Growth",
  },
  {
    title: "Communication & Language",
    description: "Developing expressive and receptive language skills with tailored support.",
    image: CommunicationImage,
    tag: "Speech Focus",
  },
];

const LearningPrograms = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800">Our Learning Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-105 relative animate__animated animate__fadeInUp"
            >
              <img
                src={program.image}
                alt={program.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-amber-600">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
              <span className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs">
                {program.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPrograms;
