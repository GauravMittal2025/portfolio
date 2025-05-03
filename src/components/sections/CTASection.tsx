import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <Section background="gradient" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business with Technology?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Let's work together to build innovative solutions that drive growth, efficiency, and competitive advantage for your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            Schedule a Consultation <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;