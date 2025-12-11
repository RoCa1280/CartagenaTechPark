import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { GROWTH_STATS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span className="text-sm font-medium text-brand-800">Innovación en el Caribe</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              El Corazón de la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">
                Revolución Web3
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Únete al ecosistema tecnológico más vibrante de Latinoamérica. Conectamos talento, capital e infraestructura en Cartagena para construir el futuro digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-transform active:scale-95"
              >
                <span>Aplicar Ahora</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                Explorar Startups
              </a>
            </div>
          </motion.div>

          {/* Visual / Chart Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
             {/* Mock Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-2xl shadow-brand-900/10 border border-slate-100 p-6 relative overflow-hidden">
               <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-slate-500 text-sm font-medium">Inversión Acumulada (USD)</h3>
                    <p className="text-3xl font-bold text-slate-900">$24.5M <span className="text-green-500 text-sm font-normal">+91%</span></p>
                  </div>
                  <div className="bg-brand-50 text-brand-700 px-3 py-1 rounded-lg text-xs font-semibold">
                    Crecimiento Anual
                  </div>
               </div>
               
               <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={GROWTH_STATS}>
                    <defs>
                      <linearGradient id="colorInvest" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                    <Area 
                      type="monotone" 
                      dataKey="investment" 
                      stroke="#0ea5e9" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorInvest)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
               </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-3">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://picsum.photos/seed/face${i}/50/50`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                 ))}
               </div>
               <div>
                 <p className="text-sm font-bold text-slate-900">80+ Startups</p>
                 <p className="text-xs text-slate-500">Activas ahora</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;