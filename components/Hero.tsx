import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { GROWTH_STATS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero-section">
      {/* Background Elements */}
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      <div className="container">
        <div className="hero-grid">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Innovación en el Caribe</span>
            </div>
            
            <h1 className="hero-title">
              El Corazón de la <br />
              <span className="gradient-text">
                Revolución Web3
              </span>
            </h1>
            
            <p className="hero-subtitle">
              Únete al ecosistema tecnológico más vibrante de Latinoamérica. Conectamos talento, capital e infraestructura en Cartagena para construir el futuro digital.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-dark">
                <span>Aplicar Ahora</span>
                <ArrowRight size={20} />
              </a>
              <a href="#projects" className="btn-outline">
                Explorar Startups
              </a>
            </div>
          </motion.div>

          {/* Visual / Chart Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'relative', width: '100%' }}
          >
             {/* Mock Dashboard Card */}
            <div className="chart-card">
               <div className="chart-header">
                  <div>
                    <h3 style={{ fontSize: '0.875rem', color: 'var(--slate-500)', fontWeight: 500 }}>Inversión Acumulada (USD)</h3>
                    <p className="stat-value">$24.5M <span className="stat-growth">+91%</span></p>
                  </div>
                  <div style={{ backgroundColor: 'var(--brand-50)', color: 'var(--brand-700)', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: 600 }}>
                    Crecimiento Anual
                  </div>
               </div>
               
               <div className="chart-container">
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
            <div className="floating-startups">
               <div className="avatar-group">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://picsum.photos/seed/face${i}/50/50`} alt="User" />
                 ))}
               </div>
               <div>
                 <p style={{ fontWeight: 700, fontSize: '0.875rem' }}>80+ Startups</p>
                 <p style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>Activas ahora</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;