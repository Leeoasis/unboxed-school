import {
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-emerald-900 text-white py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-2">Unboxed Autism Christian School</h5>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-2">Cape Town, South Africa</p>
          <p>Phone: +27 68 236 2828</p>
          <p>Email: info@unboxedschool.co.za</p>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-6 md:mb-0">
          <h5 className="text-xl font-bold mb-2">Quick Links</h5>
          <ul>
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/admissions" className="hover:text-gray-400">Admissions</a></li>
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h5 className="text-xl font-bold mb-2">Follow Us</h5>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">Designed by Leslie Gudo</p>
      </div>
    </div>
  </footer>
);

export default Footer;
