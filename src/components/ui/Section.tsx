import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
  background?: 'light' | 'dark' | 'accent' | 'gradient';
}

const Section = ({ 
  id, 
  className = '', 
  children, 
  containerClassName = '',
  background = 'light'
}: SectionProps) => {
  const backgroundStyles = {
    light: 'bg-white dark:bg-gray-900',
    dark: 'bg-gray-900 text-white',
    accent: 'bg-blue-50 dark:bg-gray-800',
    gradient: 'bg-gradient-to-r from-blue-600 to-teal-500 text-white'
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className={`container mx-auto px-4 md:px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;