
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-portfolio-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-gradient">Portfolio</span>
            <p className="text-gray-400 mt-2">Crafting digital experiences</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Github"
            >
              <Github size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
