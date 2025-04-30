import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactInvite = () => {
  return (
    <div className="py-16 bg-amber-100 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-800">Let’s Connect</h2>
        <p className="text-lg mb-6 text-gray-700">
          Have questions or want to learn more about enrollment? We’d love to hear from you!
        </p>
        <a
          href="/contact"
          className="inline-flex items-center bg-emerald-800 hover:bg-emerald-900 px-6 py-3 rounded-full font-bold text-white transition duration-300"
        >
          <FaEnvelope className="mr-2" />
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ContactInvite;
