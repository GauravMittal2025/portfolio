import React from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { TrainingProgram } from '../../types';
import { Calendar, Users, BookOpen, MapPin } from 'lucide-react';

const TrainingSection = () => {
  const trainingPrograms: TrainingProgram[] = [
    {
      id: 1,
      title: "Cloud Architecture Masterclass",
      description: "Learn to design scalable, secure cloud infrastructure for enterprise applications.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Full-Stack Development Bootcamp",
      description: "Comprehensive training in modern web development technologies and practices.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Data Science & AI Workshop",
      description: "Hands-on experience with data analysis, machine learning, and AI applications.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const communityEvents = [
    // {
    //   id: 1,
    //   title: "Tech Conference 2023",
    //   date: "October 15-17, 2023",
    //   location: "San Francisco, CA",
    //   description: "Annual technology conference featuring industry leaders and innovative demonstrations."
    // },
    {
      id: 2,
      title: "Hackathon for Good",
      date: "November 5-7, 2023",
      location: "Virtual Event",
      description: "Collaborative coding event focused on developing solutions for nonprofit organizations."
    },
    {
      id: 3,
      title: "Women in Tech Meetup",
      date: "Monthly",
      location: "Multiple Locations",
      description: "Networking and mentorship opportunity for women in technology fields."
    }
  ];

  return (
    <Section id="training" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading 
            title="Training Programs" 
            subtitle="Enhance your skills with our expert-led training sessions"
            align="left"
          />
          
          <div className="space-y-8">
            {trainingPrograms.map((program) => (
              <div 
                key={program.id}
                className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{program.description}</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">Learn More</Button>
                    <Button variant="primary" size="sm">Register</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <SectionHeading 
            title="Community Engagement" 
            subtitle="Join our events and become part of our tech community"
            align="left"
          />
          
          <div className="space-y-6">
            {communityEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                <Button variant="outline" size="sm">
                  Register for Event
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users size={20} className="mr-2 text-blue-500" />
              Join Our Community
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stay updated on upcoming events, training programs, and networking opportunities by joining our tech community.
            </p>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="primary" className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrainingSection;