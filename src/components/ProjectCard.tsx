
import React from 'react';
import { ArrowRight, Github, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  demoUrl,
  githubUrl,
  index
}) => {
  return (
    <div 
      className={cn(
        "glass rounded-xl overflow-hidden transform transition-all duration-500 hover:translate-y-[-5px]",
        "animate-fade-in opacity-0"
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden group h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex gap-3 justify-end">
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
              {demoUrl && (
                <a 
                  href={demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <LinkIcon size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        
        <Button variant="link" className="px-0 text-gray-300 hover:text-white group">
          View Details
          <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
