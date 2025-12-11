import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Startups: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Ecosistema en Acción</h2>
            <p className="mt-4 text-lg text-slate-600">
              Conoce algunas de las empresas que están construyendo el futuro desde aquí.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-brand-600 font-semibold hover:text-brand-700">
            Ver todo el portafolio <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-700">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-1">{project.description}</p>
                <button className="text-brand-600 font-medium text-sm flex items-center group-hover:text-brand-500">
                  Ver Detalles <span className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-[-5px] group-hover:translate-x-0 transition-all">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700">
                Ver todo el portafolio <ExternalLink className="ml-2 h-4 w-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Startups;