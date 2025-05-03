import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import TechStackSection from './components/sections/TechStackSection';
import TrainingSection from './components/sections/TrainingSection';
import ContactSection from './components/sections/ContactSection';
import CTASection from './components/sections/CTASection';
import { MapPin } from 'lucide-react';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Infinex - Innovating The Future Together';
    
    // Add scrolling animations
    const addScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.section-animate').forEach(section => {
        observer.observe(section);
      });
    };
    
    addScrollAnimations();
    
    // Add scroll to section functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  // Add keyframe animations to global styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease forwards;
      }
      
      .section-animate {
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="section-animate">
          <AboutSection />
        </div>
        
        <div className="section-animate">
          <ServicesSection />
        </div>
        
        <div className="section-animate">
          <WhyChooseUsSection />
        </div>
        
        <div className="section-animate">
          <PortfolioSection />
        </div>
        
        <div className="section-animate">
          <TestimonialsSection />
        </div>
        
        <div className="section-animate">
          <TechStackSection />
        </div>
        
        <div className="section-animate">
          <TrainingSection />
        </div>
        
        <div className="section-animate">
          <ContactSection />
        </div>
        
        <div className="section-animate">
          <CTASection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;