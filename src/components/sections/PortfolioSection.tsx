import React, { useState } from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { PortfolioItem } from '../../types';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Financial Analytics Dashboard",
      description: "A comprehensive analytics platform for a leading financial institution.",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "web"
    },
    {
      id: 2,
      title: "HealthTrack Mobile App",
      description: "Patient monitoring application for healthcare providers.",
      image: "https://images.pexels.com/photos/3758748/pexels-photo-3758748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "mobile"
    },
    {
      id: 3,
      title: "E-Commerce Platform Migration",
      description: "Cloud migration and infrastructure modernization for an e-commerce giant.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "cloud"
    },
    {
      id: 4,
      title: "Smart City IoT Solution",
      description: "IoT infrastructure for urban monitoring and resource management.",
      image: "https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "iot"
    },
    {
      id: 5,
      title: "Logistics Management System",
      description: "End-to-end logistics and supply chain tracking application.",
      image: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "web"
    },
    {
      id: 6,
      title: "AI-Powered Customer Service",
      description: "Intelligent customer service automation for a telecommunications provider.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "ai"
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'iot', name: 'IoT' },
    { id: 'ai', name: 'AI' }
  ];

  return (
    <Section id="portfolio" background="light">
      <SectionHeading 
        title="Portfolio Highlights" 
        subtitle="Innovative solutions we've delivered for our clients"
      />
      
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === category.id
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div> 
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <span className="text-xs uppercase tracking-wider bg-orange-600 text-white px-2 py-1 rounded">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
              <a 
                href="#" 
                className="text-orange-600 dark:text-orange-400 font-medium inline-flex items-center hover:underline"
              >
                View Case Study
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PortfolioSection;