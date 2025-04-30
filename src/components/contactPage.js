import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../styles/contactPage.css';
import ContactImage from '../assets/images/unabout.png';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section
        className="relative py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${ContactImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate__animated animate__fadeInUp">
            Contact Unboxed Autism Christian School
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            We’re here to support you! Whether you're exploring enrollment, have questions about our autism-centered learning approach,
            or want to schedule a visit, our team is ready to assist you with warmth and care rooted in Christian values.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 shadow-lg rounded-lg p-8 bg-white animate__animated animate__fadeInLeft">
            <h2 className="text-3xl font-semibold mb-6 text-emerald-800">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
              </div>
              <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + MAP */}
          <div className="w-full lg:w-1/2 shadow-lg rounded-lg p-8 bg-white animate__animated animate__fadeInRight">
            <h2 className="text-3xl font-semibold mb-6 text-emerald-800">Contact Details</h2>
            <p className="mb-4"><strong>School Address:</strong> 2 Settler's Drive, Edgemead, Cape Town</p>
            <p className="mb-4"><strong>Phone:</strong> +27 68 236 2828</p>
            <p className="mb-4"><strong>Email:</strong> info@unboxedschool.co.za</p>
            <div className="w-full h-64 rounded-lg mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.490038741079!2d-122.08092208469228!3d37.3886306798281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb61f611334e7%3A0xb75b40cc0162626f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1635236437225!5m2!1sen!2sus"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
