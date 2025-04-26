
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-garden-green/10 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-garden-green-dark mb-6">
              Grow Your Garden <br className="hidden sm:block" />
              <span className="text-garden-green">With Care</span>
            </h1>
            <p className="text-lg sm:text-xl text-garden-brown-dark mb-8">
              Track, plan, and maintain your garden with our comprehensive garden management system. Never forget to water your plants again.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button className="w-full sm:w-auto bg-garden-green text-white hover:bg-garden-green-dark px-8 py-6 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="w-full sm:w-auto border-garden-green text-garden-green hover:bg-garden-green hover:text-white px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-5 aspect-h-4 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
                alt="Beautiful garden"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center">
              <Leaf className="h-10 w-10 text-garden-green mr-3 animate-leaf-sway" />
              <div>
                <p className="font-semibold text-garden-brown-dark">Smart Reminders</p>
                <p className="text-sm text-garden-brown">Never miss a watering day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
