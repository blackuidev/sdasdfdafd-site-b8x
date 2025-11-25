"use client";

import React from 'react';
import { Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ComponentType, title: string, description: string }) => (
  <div className="relative p-6 rounded-lg shadow-md bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-all duration-300">
    <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black opacity-10 z-0"></div>
    <div className="relative z-10 flex flex-col items-start">
      <Icon className="w-6 h-6 text-primary mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    { icon: Sparkles, title: 'Advanced Technology', description: 'Cutting-edge tech for a seamless driving experience.' },
    { icon: Sparkles, title: 'Sustainable Design', description: 'Eco-friendly materials and energy-efficient performance.' },
    { icon: Sparkles, title: 'Unmatched Performance', description: 'Experience exhilarating speed and precision handling.' },
    { icon: Sparkles, title: 'Luxurious Comfort', description: 'Premium interiors and ergonomic design for ultimate comfort.' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
