import React from 'react';
import { Cpu } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-lg">Scot LaClair</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Navigate to profile section"
            >
              Profile
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Navigate to projects section"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Navigate to methodology section"
            >
              Methodology
            </button>
            <a
              href="/docs/"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Navigate to documentation"
            >
              Docs
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              aria-label="Navigate to contact section"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
