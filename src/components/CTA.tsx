
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Flower } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-garden-green rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-lg mb-6">
                <Flower className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Ready to Transform Your Garden?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Join thousands of garden enthusiasts who have simplified their plant care routine with GreenThumb. Start your 30-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/signup">
                  <Button className="w-full sm:w-auto bg-white text-garden-green hover:bg-garden-foliage px-8 py-6 text-lg">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
                alt="Beautiful garden"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
