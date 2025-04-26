
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plant, Water, Sun, Calendar, Plus } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
const gardenSummary = {
  totalPlants: 18,
  needsWatering: 3,
  needsFertilizer: 2,
  recentlyAdded: 4,
};

const upcomingTasks = [
  { id: 1, task: 'Water Monstera', plant: 'Monstera Deliciosa', date: '2025-04-27', type: 'watering' },
  { id: 2, task: 'Fertilize Fiddle Leaf Fig', plant: 'Fiddle Leaf Fig', date: '2025-04-28', type: 'fertilizing' },
  { id: 3, task: 'Prune Roses', plant: 'Rose Bush', date: '2025-04-30', type: 'pruning' },
  { id: 4, task: 'Repot Snake Plant', plant: 'Snake Plant', date: '2025-05-02', type: 'repotting' },
];

const recentPlants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    waterLevel: 70,
    lastWatered: '3 days ago',
    sunlight: 'Indirect',
  },
  {
    id: 2,
    name: 'Fiddle Leaf Fig',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    waterLevel: 30,
    lastWatered: '5 days ago',
    sunlight: 'Bright',
  },
  {
    id: 3,
    name: 'Snake Plant',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    waterLevel: 60,
    lastWatered: '10 days ago',
    sunlight: 'Low to Bright',
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-garden-green/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-garden-brown-dark">Garden Dashboard</h1>
              <p className="text-garden-brown">Welcome back! Here's an overview of your garden</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-garden-green text-white hover:bg-garden-green-dark flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add New Plant
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Plants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Plant className="h-8 w-8 text-garden-green mr-4" />
                  <span className="text-3xl font-bold text-garden-brown-dark">{gardenSummary.totalPlants}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Needs Watering</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Water className="h-8 w-8 text-garden-green mr-4" />
                  <span className="text-3xl font-bold text-garden-brown-dark">{gardenSummary.needsWatering}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Needs Fertilizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Plant className="h-8 w-8 text-garden-green mr-4" />
                  <span className="text-3xl font-bold text-garden-brown-dark">{gardenSummary.needsFertilizer}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recently Added</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-garden-green mr-4" />
                  <span className="text-3xl font-bold text-garden-brown-dark">{gardenSummary.recentlyAdded}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Your Plants</CardTitle>
                  <CardDescription>Recently added and plants that need attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">All Plants</TabsTrigger>
                      <TabsTrigger value="needs-water">Needs Water</TabsTrigger>
                      <TabsTrigger value="new">New Plants</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="space-y-4">
                      {recentPlants.map(plant => (
                        <div key={plant.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-garden-green/5 transition-colors">
                          <div className="w-16 h-16 rounded overflow-hidden mr-4">
                            <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-garden-brown-dark">{plant.name}</h4>
                            <div className="text-sm text-garden-brown mb-1">Last watered: {plant.lastWatered}</div>
                            <div className="flex items-center">
                              <div className="w-full max-w-[120px] mr-2">
                                <Progress value={plant.waterLevel} className="h-2" />
                              </div>
                              <span className="text-xs text-garden-brown">{plant.waterLevel}% water</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Sun className="h-5 w-5 text-garden-brown mr-2" />
                            <span className="text-sm text-garden-brown">{plant.sunlight}</span>
                          </div>
                          <Button variant="outline" size="sm" className="ml-4 border-garden-green text-garden-green hover:bg-garden-green hover:text-white">
                            Details
                          </Button>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="needs-water">
                      <p className="text-garden-brown text-center py-8">Plants that need watering will appear here.</p>
                    </TabsContent>
                    <TabsContent value="new">
                      <p className="text-garden-brown text-center py-8">Newly added plants will appear here.</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Scheduled tasks for your plants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingTasks.map(task => (
                      <div key={task.id} className="p-3 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-garden-brown-dark">{task.task}</h4>
                        <div className="text-sm text-garden-brown mb-2">{task.plant}</div>
                        <div className="flex justify-between">
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-garden-green/10 text-garden-green text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            {task.date}
                          </span>
                          <Button variant="outline" size="sm" className="border-garden-green text-garden-green hover:bg-garden-green hover:text-white">
                            Complete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
