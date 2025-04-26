
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Leaf, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-garden-brown-dark mb-4">
              About GreenThumb
            </h2>
            <p className="text-garden-brown max-w-2xl mx-auto">
              We're passionate about helping people create and maintain beautiful, thriving gardens
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-garden-green/10 rounded-lg mb-4">
                <Leaf className="h-8 w-8 text-garden-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-garden-brown">
                To make gardening accessible and enjoyable for everyone through smart technology
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-garden-green/10 rounded-lg mb-4">
                <Heart className="h-8 w-8 text-garden-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-garden-brown">
                We believe in sustainable practices and helping people connect with nature
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-garden-green/10 rounded-lg mb-4">
                <Users className="h-8 w-8 text-garden-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Community</h3>
              <p className="text-garden-brown">
                Join thousands of garden enthusiasts sharing knowledge and experiences
              </p>
            </div>
          </div>

          <div className="bg-garden-green/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our Story</h3>
            <p className="text-garden-brown mb-4">
              GreenThumb started with a simple idea: make garden maintenance easier and more efficient. Our founders, passionate gardeners themselves, understood the challenges of keeping track of different plants' needs and maintenance schedules.
            </p>
            <p className="text-garden-brown">
              Today, we're proud to help thousands of gardeners worldwide maintain healthier, more vibrant gardens through our innovative platform. Whether you're a beginner or an experienced gardener, GreenThumb is here to support your gardening journey.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
