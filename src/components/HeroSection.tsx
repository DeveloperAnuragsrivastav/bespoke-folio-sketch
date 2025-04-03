
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-dark"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="flex flex-col items-start max-w-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-lg md:text-xl mb-2 text-gray-300">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">
            A creative developer focused on building beautiful and functional web experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="px-8 py-6 rounded-full glass hover:bg-white/10 text-white transition-all duration-300">
              View Projects
            </Button>
            <Button variant="outline" className="px-8 py-6 rounded-full border-white/20 hover:bg-white/5 text-white transition-all duration-300">
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
