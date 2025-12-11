import React from 'react';
import { BENEFITS } from '../constants';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-tag">Por qué Cartagena</h2>
          <p className="section-title">
            Todo lo que necesitas para escalar
          </p>
          <p className="section-desc">
            Nuestro campus está diseñado para potenciar la creatividad y la productividad en un entorno paradisíaco.
          </p>
        </div>

        <div className="benefits-grid">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="benefit-card"
              >
                <div className="bg-icon-wrapper">
                   <Icon className="bg-icon" />
                </div>
                <div className="icon-box">
                  <Icon size={24} />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;