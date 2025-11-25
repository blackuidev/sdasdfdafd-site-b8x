"use client";

import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { GallerySection } from './GallerySection';
import { CallToAction } from './CallToAction';

const LaunchPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <CallToAction />
    </div>
  );
};

export default LaunchPage;

// HeroSection Component
const HeroSection = () => (
  <section className="bg-gradient-to-br from-gray-900 to-black py-24 px-8 text-center">
    <h1 className="text-5xl font-bold mb-4">Experience the Future of Launching</h1>
    <p className="text-lg text-gray-400 mb-8">
      Join us on an exciting journey as we redefine launching experiences.
    </p>
    <button className="bg-primary hover:bg-primary-900 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
      Explore More
    </button>
  </section>
);

// FeaturesSection Component
const FeaturesSection = () => (
  <section className="py-16 px-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Unparalleled Speed</h3>
          <p className="text-gray-400">Experience the fastest launch times ever.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Cutting-Edge Technology</h3>
          <p className="text-gray-400">Utilizing the latest advancements in launch technology.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Enhanced Reliability</h3>
          <p className="text-gray-400">Ensuring consistent and dependable launch performance.</p>
        </div>
      </div>
    </div>
  </section>
);

// GallerySection Component
const GallerySection = () => (
  <section className="py-16 px-8 bg-gray-800">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <img
          src="https://images.unsplash.com/photo-1682685797257-7a9b9241949c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Launch 1"
          className="rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        />
        <img
          src="https://images.unsplash.com/photo-1682685797168-6798c3b81888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Launch 2"
          className="rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        />
        <img
          src="https://images.unsplash.com/photo-1682685797369-3c759c775826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Launch 3"
          className="rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  </section>
);

// CallToAction Component
const CallToAction = () => (
  <section className="py-16 px-8 bg-gradient-to-br from-gray-900 to-black text-center">
    <h2 className="text-3xl font-semibold mb-4">Ready to Launch?</h2>
    <p className="text-lg text-gray-400 mb-8">
      Get started today and experience the future of launching.
    </p>
    <button className="bg-primary hover:bg-primary-900 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
      Contact Us
    </button>
  </section>
);
