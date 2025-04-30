import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Lebo M.",
    feedback:
      "Unboxed Autism Christian School has transformed my son's life. He’s more confident, and I see real joy in his learning!",
  },
  {
    name: "Thandi N.",
    feedback:
      "A school where my child is understood, accepted, and nurtured — both academically and spiritually.",
  },
  {
    name: "Sipho D.",
    feedback:
      "The Christian values and personalized care make this school a safe haven for our little ones. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">What Parents Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <FaQuoteLeft className="text-amber-500 text-3xl mb-4" />
              <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
              <h4 className="text-amber-700 font-semibold">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
