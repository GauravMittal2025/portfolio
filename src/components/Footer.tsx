import React from 'react';
import { Github, Twitter, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';


function FooterContent() {
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:Www.infinextechnologies.com',
      label: 'Email',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: ' https://www.linkedin.com/company/infinextechnologies',
      label: 'LinkedIn',
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: 'www.Facebook.com/infinexTechnologies',
      label: 'Facebook',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'www.instagram.com/infinexTechnologies',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-7">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 ease-in-out"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Infinix Technologies Corp. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Footer() {
  return (
    // <div className="min-h-screen bg-gray-100 flex flex-col">
    //   <main className="flex-grow flex items-center justify-center">
    //     <p>Start prompting (or editing) to see magic happen :)</p>
    //   </main>
    // </div>
      <FooterContent />
  );
}

export default Footer;
