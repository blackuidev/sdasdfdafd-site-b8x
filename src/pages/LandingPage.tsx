import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="p-8 md:p-16 flex flex-col items-center justify-center text-center gap-6 flex-grow">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">Empowering Your Digital World</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Unlock the potential of seamless digital experiences with our innovative solutions.
        </p>
        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 transition-all duration-300">
            Get Started <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white/5 backdrop-blur-md p-8 md:p-16 rounded-xl border border-white/10 shadow-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">About Us</h2>
          <p className="text-lg text-muted-foreground">
            We are a team of passionate innovators dedicated to crafting exceptional digital products. Our mission is to empower individuals and businesses with cutting-edge technology and intuitive design.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            From web applications to mobile solutions, we strive to deliver excellence in every project.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="p-8 md:p-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Digital Presence?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Contact us today to discuss your project and discover how we can help you achieve your goals.
        </p>
        <Button className="bg-green-500 hover:bg-green-600 transition-all duration-300">
          Contact Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
