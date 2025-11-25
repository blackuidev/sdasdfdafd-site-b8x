"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <img
            src="https://via.placeholder.com/150x50?text=Shoe+Co+Logo"
            alt="Shoe Company Logo"
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-4">Welcome to Shoe Store</h1>
          <p className="text-lg text-gray-300">Find your perfect pair of shoes.</p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Featured Shoes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example shoe cards - replace with actual data */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Running Shoe</CardTitle>
                <CardDescription>High-performance running shoe.</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1549298713-244e32c686a3?auto=format&fit=crop&w=300&q=80"
                  alt="Running Shoe"
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <p className="text-sm text-gray-300">Comfort and speed for your daily runs.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Casual Sneaker</CardTitle>
                <CardDescription>Stylish and comfortable for everyday wear.</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1525525909400-479418c8ba9d?auto=format&fit=crop&w=300&q=80"
                  alt="Casual Sneaker"
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <p className="text-sm text-gray-300">Perfect for any casual occasion.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Formal Shoe</CardTitle>
                <CardDescription>Elegant and sophisticated for special events.</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0a29a5b4b4aa?auto=format&fit=crop&w=300&q=80"
                  alt="Formal Shoe"
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <p className="text-sm text-gray-300">Make a statement with these classic shoes.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="text-center">
          <Link to="/products">
            <Button className="bg-primary hover:bg-primary/80 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300">Shop All Shoes</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
