import React from 'react';
import { BENEFITS } from '../constants';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-600 tracking-wide uppercase">Por qué Cartagena</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Todo lo que necesitas para escalar
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Nuestro campus está diseñado para potenciar la creatividad y la productividad en un entorno paradisíaco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-brand-100 group"
              >
                <div className="absolute top-8 right-8 text-slate-200 group-hover:text-brand-100 transition-colors">
                  <Icon className="h-16 w-16 opacity-20 transform group-hover:scale-110 transition-transform" />
                </div>
                <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-lg text-brand-600 mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;