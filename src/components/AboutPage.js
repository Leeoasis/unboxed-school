import React from 'react';
import { FaUserShield, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import heroImage from '../assets/images/unboxedabout.png';
import WhyChooseUs from '../components/homeComponents/WhyChooseUs';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-16 relative" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative z-10 text-white text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Unboxed Autism Christian School</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Learn more about our faith-driven mission, values, and why families choose Unboxed for autism-centered education.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-emerald-800">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-6">
            At <strong>Unboxed Autism Christian School</strong>, our mission is to empower children on the autism spectrum through personalized education rooted in Christian values. We foster a nurturing environment where each child’s God-given potential is celebrated, encouraged, and guided with love.
          </p>
          <blockquote className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 italic">
              "We believe every child is fearfully and wonderfully made, and we are committed to unlocking their fullest potential with grace and patience."
            </p>
            <footer className="mt-4 text-gray-800 font-semibold">– Unboxed Team</footer>
          </blockquote>
        </div>
      </section>

      {/* Core Values with Icons */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-amber-600">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaUserShield className="text-amber-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Compassion & Patience</h3>
              <p className="text-gray-600">
                We meet each child where they are, with patience and kindness.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaHandsHelping className="text-amber-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Faith-Driven Support</h3>
              <p className="text-gray-600">
                Our foundation is Jesus Christ, and our learning includes spiritual development.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaLightbulb className="text-amber-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Individualized Learning</h3>
              <p className="text-gray-600">
                Every student learns in their own unique way—we embrace and support that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (optional) */}
      <WhyChooseUs />

      {/* Testimonials */}
      <section className="text-center py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-emerald-800">What Parents Say</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-gray-100 shadow-md p-6 rounded-lg max-w-sm mx-auto">
            <p className="text-gray-700 italic">
              "Unboxed has changed my son's life. He now loves school and comes home smiling every day!"
            </p>
            <p className="mt-4 font-semibold text-emerald-700">– Lerato M.</p>
          </div>
          <div className="bg-gray-100 shadow-md p-6 rounded-lg max-w-sm mx-auto">
            <p className="text-gray-700 italic">
              "The spiritual and emotional support here is something we could not find anywhere else."
            </p>
            <p className="mt-4 font-semibold text-emerald-700">– Sipho D.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
