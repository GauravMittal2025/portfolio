import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      // Parallax effect
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      
      {/* Background Pattern */}
      <div 
        ref={heroRef}
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            Innovating The Future <span className="text-blue-400">Together</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            We help businesses transform and thrive in the digital age with cutting-edge technology solutions and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
            <Button variant="primary" size="lg" className="bg-blue-500 hover:bg-blue-600">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Learn More <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Hero bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,138.7C672,107,768,85,864,96C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;