
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Modern Website",
    description: "A responsive website with modern UI/UX principles and animations.",
    imageUrl: "https://source.unsplash.com/random/800x600/?website",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with payment integration.",
    imageUrl: "https://source.unsplash.com/random/800x600/?ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Mobile Application",
    description: "Cross-platform mobile app built for both iOS and Android.",
    imageUrl: "https://source.unsplash.com/random/800x600/?mobile,app",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-portfolio-purple/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">My Projects</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was carefully crafted with attention to detail and user experience.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
