import React from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { 
  Award, 
  Clock, 
  Users, 
  Globe, 
  ThumbsUp, 
  Zap 
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      id: 1,
      icon: <Award className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Industry Expertise",
      description: "Our team brings deep domain knowledge across multiple industries."
    },
    {
      id: 2,
      icon: <Clock className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Timely Delivery",
      description: "We consistently deliver projects on schedule without compromising quality."
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Dedicated Teams",
      description: "Skilled professionals committed to your project's success."
    },
    {
      id: 4,
      icon: <Globe className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Global Presence",
      description: "We serve clients worldwide with localized support and expertise."
    },
    {
      id: 5,
      icon: <ThumbsUp className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Client Satisfaction",
      description: "Our 95% client retention rate speaks to our commitment to excellence."
    },
    {
      id: 6,
      icon: <Zap className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to solve complex problems."
    }
  ];

  return (
    <Section id="why-choose-us" background="gradient">
      <SectionHeading 
        title="Why Choose Us" 
        subtitle="What sets us apart from the competition"
        className="text-white"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <div 
            key={reason.id}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <div className="flex justify-center">
              {reason.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
            <p className="text-gray-200">{reason.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <p className="text-gray-200">Projects Delivered</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <p className="text-gray-200">Expert Consultants</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <p className="text-gray-200">Client Retention</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <p className="text-gray-200">Years Experience</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUsSection;