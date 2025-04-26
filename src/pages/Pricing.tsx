
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 bg-garden-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-garden-brown-dark mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-garden-brown max-w-2xl mx-auto">
              Choose the plan that best fits your gardening needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Free</h3>
              <p className="text-3xl font-bold mb-6">$0<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Up to 5 plants</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Basic care reminders</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Plant database access</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-garden-green">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-3xl font-bold mb-6">$9<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Unlimited plants</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Advanced care tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Weather integration</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <Button className="w-full bg-garden-green hover:bg-garden-green-dark">
                Start Pro Trial
              </Button>
            </div>

            {/* Business Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business</h3>
              <p className="text-3xl font-bold mb-6">$29<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Multiple locations</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Button className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingPage;
