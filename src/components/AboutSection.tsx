
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass p-1">
              <div 
                className="w-full h-full rounded-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://source.unsplash.com/random/400x400/?portrait')" }}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Hello! I'm a passionate developer with expertise in building modern web applications.
              I specialize in creating beautiful, functional, and responsive user interfaces.
            </p>
            <p className="text-gray-300 text-lg">
              With a strong foundation in web technologies and a keen eye for design,
              I strive to deliver high-quality solutions that exceed expectations.
            </p>
            
            <div className="pt-4">
              <Button className="glass hover:bg-white/10 text-white transition-all duration-300">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
