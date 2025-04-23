import React from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi'; // Icons for phone and email
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa'; // Social media icons from react-icons
import Logo2 from '../../../assets/Logo2.png'; // Path to the logo

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Designing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Content Writing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Ads Campaign
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="flex items-center mb-2">
              <FiPhoneCall className="text-[#b42638] mr-2" />
              <span className="text-gray-400">+91 9990597240</span>
            </div>
            <div className="flex items-center mb-4">
              <FiMail className="text-[#b42638] mr-2" />
              <span className="text-gray-400">info@prnbhaytech.com</span>
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25D366] transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4267B2] transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Get latest updates to your mailbox directly!
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-[#b42638]"
              />
              <button
                type="submit"
                className="bg-[#b42638] text-white px-4 py-2 rounded-md hover:bg-[#8a1a2a] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-400 pt-6 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={Logo2} alt="Logo" className="h-10 w-auto" />
            <span className="ml-2 text-gray-400">© 2024. All Rights Reserved</span>
          </div>

          {/* Links */}
          <div>
            <a href="#" className="text-[#b42638] hover:text-white transition-colors duration-300 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-[#b42638] hover:text-white transition-colors duration-300">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;