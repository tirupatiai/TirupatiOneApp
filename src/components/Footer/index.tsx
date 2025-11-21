import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const socialLinks = [
    { icon: <FiFacebook className="w-5 h-5" />, url: '#' },
    { icon: <FiTwitter className="w-5 h-5" />, url: '#' },
    { icon: <FiInstagram className="w-5 h-5" />, url: '#' },
    { icon: <FiLinkedin className="w-5 h-5" />, url: '#' },
    { icon: <FiMail className="w-5 h-5" />, url: 'mailto:contact@tirupatione.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-6 xl:col-span-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">TirupatiOne<span className="text-indigo-400">App</span></span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your complete guide to Tirupati - connecting you with the best hotels, hospitals, and local services. Get real-time assistance through our AI chatbot.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <FiInstagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Need help? Our support team is here for you 24/7.
              </p>
              <div className="mt-2 flex items-center">
                <FiMail className="h-5 w-5 text-indigo-400 mr-2" />
                <a href="mailto:support@tirupationeapp.com" className="text-sm text-indigo-300 hover:text-white">
                  support@tirupationeapp.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-indigo-300 tracking-wider uppercase">Quick Links</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Services', href: '/services' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Contact', href: '/contact' },
                    { name: 'FAQs', href: '/faq' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold text-indigo-300 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    { name: 'Hotels & Lodging', href: '/services/hotels' },
                    { name: 'Hospitals & Clinics', href: '/services/hospitals' },
                    { name: 'Transportation', href: '/services/transport' },
                    { name: 'Tourist Spots', href: '/services/tourist-spots' },
                    { name: 'Emergency Services', href: '/emergency' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    { name: 'Privacy Policy', path: '/privacy' },
                    { name: 'Terms of Service', path: '/terms' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="text-base text-gray-500 hover:text-indigo-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="mailto:contact@tirupatione.com"
                      className="text-base text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      contact@tirupatione.com
                    </a>
                  </li>
                  <li>
                    <span className="text-base text-gray-500">
                      Tirupati, Andhra Pradesh, India
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                  Newsletter
                </h3>
                <p className="mt-4 text-gray-500 text-base">
                  Subscribe to our newsletter for the latest updates.
                </p>
                <form className="mt-4 sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center bg-indigo-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} TirupatiOneApp. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <span className="text-xs text-gray-500">Version 1.0.0</span>
              <span className="text-xs text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-xs text-gray-600">
              TirupatiOneApp is not affiliated with any government organization. This is an independent service platform.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};