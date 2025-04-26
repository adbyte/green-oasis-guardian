
import React from 'react';
import { Flower, Calendar, Bell, Search, Settings, Leaf } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
  <div className="garden-card p-6">
    <div className="inline-flex items-center justify-center p-3 bg-garden-green/10 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-garden-brown-dark">{title}</h3>
    <p className="text-garden-brown">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-garden-green" />,
      title: "Plant Tracking",
      description: "Keep detailed records of all your plants, including care history and growth progress."
    },
    {
      icon: <Calendar className="h-6 w-6 text-garden-green" />,
      title: "Care Schedules",
      description: "Create customized care schedules based on your plants' specific needs."
    },
    {
      icon: <Bell className="h-6 w-6 text-garden-green" />,
      title: "Smart Reminders",
      description: "Get timely notifications for watering, fertilizing, pruning, and more."
    },
    {
      icon: <Search className="h-6 w-6 text-garden-green" />,
      title: "Plant Database",
      description: "Access our extensive database of plants with detailed care instructions."
    },
    {
      icon: <Settings className="h-6 w-6 text-garden-green" />,
      title: "Garden Planning",
      description: "Plan and design your garden layout with our intuitive planning tools."
    },
    {
      icon: <Flower className="h-6 w-6 text-garden-green" />,
      title: "Seasonal Tips",
      description: "Receive seasonal gardening advice tailored to your local climate and plants."
    }
  ];

  return (
    <section className="py-16 bg-garden-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-garden-brown-dark mb-4">
            Comprehensive Garden Management
          </h2>
          <p className="max-w-2xl mx-auto text-garden-brown">
            Our system provides everything you need to maintain a thriving garden, from plant tracking to care reminders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
