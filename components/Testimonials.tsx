import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 mb-16">
          Lo que dicen nuestros fundadores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-8 right-8 text-brand-200 h-10 w-10" />
              <p className="text-lg text-slate-700 italic mb-6 relative z-10">"{t.quote}"</p>
              <div className="flex items-center space-x-4">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="h-12 w-12 rounded-full object-cover border-2 border-brand-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;