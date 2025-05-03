import React from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { 
  Code, 
  Cloud, 
  BarChart, 
  Smartphone, 
  Shield, 
  Users
} from 'lucide-react';
import { Service } from '../../types';

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Software Development",
      description: "Custom software solutions designed to address your unique business challenges and streamline operations.",
      icon: "Code"
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description: "Scalable, secure cloud infrastructure and migration services to modernize your IT environment.",
      icon: "Cloud"
    },
    {
      id: 3,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics and business intelligence services.",
      icon: "BarChart"
    },
    {
      id: 4,
      title: "Mobile Development",
      description: "Create engaging, high-performance mobile applications for iOS and Android platforms.",
      icon: "Smartphone"
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security assessments and solutions.",
      icon: "Shield"
    },
    {
      id: 6,
      title: "IT Consulting",
      description: "Strategic technology advisory to help you navigate complex digital transformation initiatives.",
      icon: "Users"
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={40} className="text-blue-500" />;
      case 'Cloud':
        return <Cloud size={40} className="text-blue-500" />;
      case 'BarChart':
        return <BarChart size={40} className="text-blue-500" />;
      case 'Smartphone':
        return <Smartphone size={40} className="text-blue-500" />;
      case 'Shield':
        return <Shield size={40} className="text-blue-500" />;
      case 'Users':
        return <Users size={40} className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <Section id="services" background="accent">
      <SectionHeading 
        title="Our Services"
        subtitle="Comprehensive technology solutions to drive your business forward"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="mb-4">
              {renderIcon(service.icon)}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 flex-grow">
              {service.description}
            </p>
            <a href="#" className="mt-4 text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline">
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;