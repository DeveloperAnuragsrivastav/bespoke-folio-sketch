
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, delay }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(percentage);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [percentage, delay]);

  return (
    <div className="mb-6" ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2.5 glass rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-portfolio-navy via-portfolio-purple to-portfolio-burgundy transition-all duration-1000 ease-out"
          )}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
