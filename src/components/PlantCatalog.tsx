
import React from 'react';
import { Button } from '@/components/ui/button';

interface PlantProps {
  name: string;
  image: string;
  category: string;
  waterFrequency: string;
  sunlight: string;
}

const plants: PlantProps[] = [
  {
    name: "Monstera Deliciosa",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Indoor",
    waterFrequency: "Weekly",
    sunlight: "Indirect"
  },
  {
    name: "Snake Plant",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Indoor",
    waterFrequency: "Bi-weekly",
    sunlight: "Low to Bright"
  },
  {
    name: "Fiddle Leaf Fig",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Indoor",
    waterFrequency: "Weekly",
    sunlight: "Bright"
  },
  {
    name: "Lavender",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    category: "Outdoor",
    waterFrequency: "Weekly",
    sunlight: "Full"
  }
];

const PlantCard = ({ plant }: { plant: PlantProps }) => (
  <div className="garden-card h-full flex flex-col">
    <div className="h-48 overflow-hidden">
      <img src={plant.image} alt={plant.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <div className="flex-1">
        <span className="inline-block px-2 py-1 bg-garden-green/10 text-garden-green rounded-full text-xs font-medium mb-2">
          {plant.category}
        </span>
        <h3 className="text-lg font-semibold mb-2 text-garden-brown-dark">{plant.name}</h3>
        <div className="text-sm text-garden-brown">
          <div className="flex justify-between mb-1">
            <span>Water:</span>
            <span className="font-medium">{plant.waterFrequency}</span>
          </div>
          <div className="flex justify-between">
            <span>Light:</span>
            <span className="font-medium">{plant.sunlight}</span>
          </div>
        </div>
      </div>
      <Button variant="outline" className="w-full mt-4 border-garden-green text-garden-green hover:bg-garden-green hover:text-white">
        View Details
      </Button>
    </div>
  </div>
);

const PlantCatalog = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-garden-brown-dark mb-4">
            Popular Plants in Our Database
          </h2>
          <p className="max-w-2xl mx-auto text-garden-brown">
            Browse through our collection of plants and learn how to care for them properly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-garden-green text-white hover:bg-garden-green-dark">
            View All Plants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlantCatalog;
