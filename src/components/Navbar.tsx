import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User, Flower, Calendar, Bell } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Mock authenticated state - in a real app, this would come from auth context
  const isAuthenticated = false;
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-garden-green/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Flower className="h-8 w-8 text-garden-green mr-2" />
                <span className="font-display text-xl font-semibold text-garden-green">GreenThumb</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-garden-brown-dark border-transparent hover:border-garden-green hover:text-garden-green px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/features" className="text-garden-brown-dark border-transparent hover:border-garden-green hover:text-garden-green px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-garden-brown-dark border-transparent hover:border-garden-green hover:text-garden-green px-1 pt-1 border-b-2 text-sm font-medium">
                Pricing
              </Link>
              <Link to="/about" className="text-garden-brown-dark border-transparent hover:border-garden-green hover:text-garden-green px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="text-garden-brown-dark hover:text-garden-green">
                  <Calendar className="h-5 w-5" />
                </Link>
                <Link to="/notifications" className="text-garden-brown-dark hover:text-garden-green">
                  <Bell className="h-5 w-5" />
                </Link>
                <Link to="/profile" className="text-garden-brown-dark hover:text-garden-green">
                  <User className="h-5 w-5" />
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" className="border-garden-green text-garden-green hover:bg-garden-green hover:text-white">
                    Sign in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-garden-green text-white hover:bg-garden-green-dark">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-garden-brown-dark hover:text-garden-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-garden-green"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-garden-brown-dark hover:bg-gray-50 hover:border-garden-green hover:text-garden-green">
              Home
            </Link>
            <Link to="/features" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-garden-brown-dark hover:bg-gray-50 hover:border-garden-green hover:text-garden-green">
              Features
            </Link>
            <Link to="/pricing" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-garden-brown-dark hover:bg-gray-50 hover:border-garden-green hover:text-garden-green">
              Pricing
            </Link>
            <Link to="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-garden-brown-dark hover:bg-gray-50 hover:border-garden-green hover:text-garden-green">
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              {!isAuthenticated ? (
                <div className="flex flex-col space-y-2 w-full">
                  <Link to="/login" className="w-full">
                    <Button variant="outline" className="w-full border-garden-green text-garden-green hover:bg-garden-green hover:text-white">
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/signup" className="w-full">
                    <Button className="w-full bg-garden-green text-white hover:bg-garden-green-dark">
                      Sign up
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 w-full">
                  <Link to="/dashboard" className="block px-4 py-2 text-base font-medium text-garden-brown-dark hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link to="/notifications" className="block px-4 py-2 text-base font-medium text-garden-brown-dark hover:bg-gray-100">
                    Notifications
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-base font-medium text-garden-brown-dark hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/logout" className="block px-4 py-2 text-base font-medium text-garden-brown-dark hover:bg-gray-100">
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
