import React from 'react';
import { Hexagon, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Hexagon className="h-6 w-6 text-brand-600 fill-brand-900" />
            <span className="font-bold text-lg text-slate-200">
              Cartagena<span className="text-brand-600">Tech</span>
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} Parque Tecnológico Cartagena.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;