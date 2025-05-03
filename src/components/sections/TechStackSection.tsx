import React, { useRef, useEffect } from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { TechItem } from '../../types';

const TechStackSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const technologies: TechItem[] = [
    {
      id: 1,
      name: "React",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
    },
    {
      id: 2,
      name: "Angular",
      logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
    },
    {
      id: 3,
      name: "Vue.js",
      logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg"
    },
    {
      id: 4,
      name: "Node.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    },
    {
      id: 5,
      name: "Python",
      logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg"
    },
    {
      id: 6,
      name: "AWS",
      logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
      id: 7,
      name: "Google Cloud",
      logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"
    },
    {
      id: 8,
      name: "Microsoft Azure",
      logo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg"
    },
    {
      id: 9,
      name: "Docker",
      logo: "https://cdn.worldvectorlogo.com/logos/docker.svg"
    },
    {
      id: 10,
      name: "Kubernetes",
      logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg"
    },
    {
      id: 11,
      name: "TensorFlow",
      logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg"
    },
    {
      id: 12,
      name: "MongoDB",
      logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
    }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const scrollSpeed = 1;
    let animationId: number;
    let scrollPos = 0;
    
    const animate = () => {
      scrollPos += scrollSpeed;
      
      if (scrollPos >= slider.scrollWidth / 2) {
        scrollPos = 0;
      }
      
      slider.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };
    
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Section id="tech-stack" background="light" className="py-12 md:py-16">
      <SectionHeading 
        title="Our Technology Stack" 
        subtitle="The cutting-edge tools and technologies we leverage to build powerful solutions"
      />
      
      <div className="mt-8 overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Double the items for infinite scroll effect */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={`${tech.id}-${index}`} 
              className="flex flex-col items-center justify-center min-w-[120px] bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
            >
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="h-12 w-12 object-contain mb-3"
              />
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Section>
  );
};

export default TechStackSection;