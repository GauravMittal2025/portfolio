import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "FinTech Innovations",
      content: "Working with TechnoRath transformed our digital infrastructure. Their team delivered a robust cloud solution that increased our operational efficiency by 40% and significantly improved our security posture.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Product Director",
      company: "HealthCare Solutions",
      content: "The mobile application TechnoRath developed for us has revolutionized how we interact with patients. The intuitive design and seamless functionality exceeded our expectations and received glowing feedback from users.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Amanda Rodriguez",
      role: "VP of Operations",
      company: "Global Logistics Inc.",
      content: "TechnoRath's supply chain management solution provided unprecedented visibility into our operations. Their team's expertise in both technology and logistics was evident throughout the project, resulting in a 25% reduction in operational costs.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToIndex = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Section id="testimonials" background="dark">
      <SectionHeading 
        title="Client Feedback" 
        subtitle="Don't just take our word for it - hear what our clients have to say"
        className="text-white"
      />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -top-12 left-0 text-blue-400 opacity-30">
          <Quote size={80} />
        </div>
        
        <div className="overflow-hidden">
          <div 
            className={`transition-all duration-500 ease-in-out flex ${
              isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => {
            return(
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
                // style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="bg-gray-800 rounded-lg p-8 relative">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-500"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-gray-300 text-lg mb-6">"{testimonial.content}"</p>
                      <div>
                        <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-blue-400">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <button 
            onClick={goToPrevious}
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={goToNext}
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;