import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollCarousel } from '@/components/ui/scroll-carousel';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c2280653c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    alt: 'Car Image 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1549399543-9c041b98e236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    alt: 'Car Image 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    alt: 'Car Image 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    alt: 'Car Image 4',
  },
];

const videos = [
  {
    src: 'https://www.youtube.com/embed/your_video_id_1',
    alt: 'Car Video 1',
  },
  {
    src: 'https://www.youtube.com/embed/your_video_id_2',
    alt: 'Car Video 2',
  },
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <ScrollCarousel>
          {images.map((image, index) => (
            <div key={index} className="w-64 h-48 md:w-96 md:h-64 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          ))}
          {/* Add videos as needed */}
        </ScrollCarousel>
      </div>
    </section>
  );
};

export default GallerySection;
