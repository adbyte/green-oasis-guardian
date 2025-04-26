
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plant } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would be implemented here
    console.log('Login form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-garden-green/5">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Plant className="h-12 w-12 text-garden-green mx-auto" />
            <h2 className="mt-6 text-3xl font-display font-bold text-garden-brown-dark">
              Welcome back
            </h2>
            <p className="mt-2 text-garden-brown">
              Sign in to your account to manage your garden
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="input-field"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-garden-green hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="input-field"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-garden-green text-white hover:bg-garden-green-dark">
                  Sign in
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-6">
              <div className="text-center text-garden-brown">
                Don't have an account?{' '}
                <Link to="/signup" className="text-garden-green hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
