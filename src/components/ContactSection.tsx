
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-portfolio-purple/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">City, Country</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-xl animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  rows={4}
                />
              </div>
              
              <Button className="w-full glass hover:bg-white/10 text-white transition-all duration-300">
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
