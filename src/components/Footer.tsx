import React from 'react';
import { Link } from 'react-router-dom';
import { Flower, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-garden-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Flower className="h-8 w-8 text-white mr-2" />
              <span className="font-display text-xl font-semibold">GreenThumb</span>
            </Link>
            <p className="mt-4 text-sm text-gray-200">
              Your personal garden management system. Track, care, and grow your garden with ease.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-200 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-200 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/features/plant-tracking" className="text-gray-200 hover:text-white text-sm">
                  Plant Tracking
                </Link>
              </li>
              <li>
                <Link to="/features/care-reminders" className="text-gray-200 hover:text-white text-sm">
                  Care Reminders
                </Link>
              </li>
              <li>
                <Link to="/features/garden-planner" className="text-gray-200 hover:text-white text-sm">
                  Garden Planner
                </Link>
              </li>
              <li>
                <Link to="/features/plant-database" className="text-gray-200 hover:text-white text-sm">
                  Plant Database
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wide">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help" className="text-gray-200 hover:text-white text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-200 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-200 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-200 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-garden-green pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-200 text-sm">
            &copy; {new Date().getFullYear()} GreenThumb. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-200 hover:text-white text-sm mr-4">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-200 hover:text-white text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
