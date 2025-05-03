import React from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { CheckCircle, TrendingUp, Users, Shield } from 'lucide-react';
import { FeatureItem } from '../../types';

const AboutSection = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      title: "Excellence in Delivery",
      description: "We take pride in delivering high-quality solutions that exceed expectations and drive measurable business outcomes.",
      icon: "CheckCircle"
    },
    {
      id: 2,
      title: "Innovation-First Approach",
      description: "Our team constantly explores emerging technologies to bring innovative solutions to complex business challenges.",
      icon: "TrendingUp"
    },
    {
      id: 3,
      title: "Client Partnership",
      description: "We build lasting relationships with our clients, becoming trusted advisors and partners in their digital journey.",
      icon: "Users"
    },
    {
      id: 4,
      title: "Security & Reliability",
      description: "We implement robust security measures and reliable infrastructure to protect your business and ensure continuity.",
      icon: "Shield"
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle':
        return <CheckCircle size={24} className="text-blue-500" />;
      case 'TrendingUp':
        return <TrendingUp size={24} className="text-blue-500" />;
      case 'Users':
        return <Users size={24} className="text-blue-500" />;
      case 'Shield':
        return <Shield size={24} className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <Section id="about" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <SectionHeading 
            title="About Infinex"
            subtitle="A technology partner committed to your success"
            align="left"
          />
          
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Founded in 2025, Infinex has grown from a small tech startup to a leading technology consultancy serving clients across industries. Our mission is to help businesses harness the power of technology to achieve their strategic goals and stay ahead in today's rapidly evolving digital landscape.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start">
                <div className="mt-1 mr-4">
                  {renderIcon(feature.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
          <div className="absolute -top-6 -left-6 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl z-0"></div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;