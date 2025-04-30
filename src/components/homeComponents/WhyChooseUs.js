import React from "react";
import { FaHandsHelping, FaBible, FaChild } from "react-icons/fa";

const reasons = [
  {
    icon: <FaHandsHelping className="text-4xl text-amber-500 mb-4" />,
    title: "Autism-Centered Support",
    description: "We tailor every aspect of learning and environment to meet the unique needs of children on the autism spectrum.",
  },
  {
    icon: <FaBible className="text-4xl text-amber-500 mb-4" />,
    title: "Faith-Based Values",
    description: "Our Christian foundation helps nurture spiritual, emotional, and moral development through daily worship and lessons.",
  },
  {
    icon: <FaChild className="text-4xl text-amber-500 mb-4" />,
    title: "Individual Attention",
    description: "Low student-teacher ratios ensure your child receives personal care, support, and encouragement.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl text-center transform transition duration-300 hover:scale-105"
            >
              {reason.icon}
              <h3 className="text-xl font-semibold text-amber-600 mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
