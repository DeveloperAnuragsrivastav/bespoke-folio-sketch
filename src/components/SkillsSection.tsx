
import React from 'react';
import SkillBar from './SkillBar';

const skills = [
  { skill: "HTML/CSS", percentage: 95, delay: 100 },
  { skill: "JavaScript", percentage: 90, delay: 200 },
  { skill: "React", percentage: 85, delay: 300 },
  { skill: "Node.js", percentage: 80, delay: 400 },
  { skill: "UI/UX Design", percentage: 75, delay: 500 },
  { skill: "TypeScript", percentage: 70, delay: 600 }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
            
            {skills.map((skill, index) => (
              <SkillBar 
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                delay={skill.delay}
              />
            ))}
          </div>
          
          <div className="space-y-6 flex flex-col justify-center animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-2 text-white">My Expertise</h3>
            
            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2 text-white">Front-end Development</h4>
              <p className="text-gray-300">
                Creating responsive, accessible, and performant user interfaces with modern frameworks.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2 text-white">UI/UX Design</h4>
              <p className="text-gray-300">
                Designing intuitive user experiences with a focus on usability and aesthetics.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2 text-white">Full-stack Development</h4>
              <p className="text-gray-300">
                Building complete applications with integrated back-end services and databases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
