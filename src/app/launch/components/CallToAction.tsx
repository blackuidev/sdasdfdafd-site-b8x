import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 animate-pulse bg-[url(https://images.unsplash.com/photo-1503376780353-726074736e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-cover bg-center"></div>
      <div className="relative container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Future of Driving?</h2>
        <p className="text-lg mb-8 text-gray-300">Be among the first to reserve your BlackUI Electric Vehicle. Limited spots available!</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-md shadow-md transition-all duration-300">
          Reserve Your Spot Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
