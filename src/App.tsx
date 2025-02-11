import React, { useState } from 'react';
import { Building2, Users, Briefcase, Mail, Phone, MapPin, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import Footer from './components/Footer';

function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log(formData);
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src='assets/header-photo.jpg'
            alt="Office"
            className="w-full h-full object-cover"
            style={{filter: 'blur(8px)' }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative text-center text-white px-4">
          {/* <Building2 className="w-16 h-16 mx-auto mb-6" /> */}
          <img className="w-16 h-16 mx-auto mb-6" src='assets/logo-wb.png' />
          <h1 className="text-5xl md:text-7xl font-bold mb-4"><span>INFINEX TECHNOLOGIES</span></h1>
          <p className="text-xl md:text-2xl mb-8">Innovating for tomorrow, delivering today</p>
          <a href="#contact" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Industry professionals with decades of combined experience</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-600">Committed to delivering exceptional results</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Successfully completed 500+ projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications',
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80'
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile solutions',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and services',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Govind Bhardwaj',
                role: 'CEO',
                image: 'assets/govind-1.jpg'
              },
              {
                name: 'Gaurav Mittal',
                role: 'CTO',
                image: 'assets/gaurav-1.jpg'
              },
              {
                name: 'Aanchal Saini',
                role: 'HR Manager',
                image: 'assets/aanchal.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full object-cover" style={{height:'18rem'}} />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <span>(+91) 80790-61623 / (+91) 97852-28992</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <span>info.infinextechnologies.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span>Jaipur</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  {formStatus === 'success' ? (
                    <>
                      Message Sent <CheckCircle className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Send Message <MessageSquare className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Building2 className="w-10 h-10 mb-4" />
              <p className="text-gray-400">Innovating for tomorrow, delivering today</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400">Follow us on social media for updates and insights.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-0 text-center text-gray-400">
            <Footer/>            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;