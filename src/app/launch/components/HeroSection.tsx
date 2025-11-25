import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228d88c0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Car Launch"
          className="object-cover w-full h-full blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 p-8 md:p-16 lg:p-24 backdrop-blur-md bg-white/10 border-white/20 rounded-xl shadow-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">The Future is Here: Car Launch 2024</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">Experience the revolutionary driving redefined. Pre-order now and be among the first to own the future.</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
          Pre-Order Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
