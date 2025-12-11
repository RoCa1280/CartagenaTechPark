import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Startups: React.FC = () => {
  return (
    <section id="projects" className="startups-section">
      <div className="container">
        <div className="startups-header">
          <div>
            <h2 className="section-title" style={{ marginTop: 0 }}>Ecosistema en Acción</h2>
            <p className="section-desc" style={{ marginLeft: 0, marginTop: '1rem', fontSize: '1.125rem' }}>
              Conoce algunas de las empresas que están construyendo el futuro desde aquí.
            </p>
          </div>
          <a href="#" className="link-arrow desktop-only">
            Ver todo el portafolio <ExternalLink size={16} />
          </a>
        </div>

        <div className="startups-grid">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="startup-card"
            >
              <div className="card-image-wrapper">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="card-image"
                />
                <div className="category-tag">
                  {project.category}
                </div>
              </div>
              <div className="card-content">
                <h3 className="startup-name">{project.name}</h3>
                <p className="startup-desc">{project.description}</p>
                <button className="btn-link">
                  Ver Detalles <span className="arrow-anim">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ marginTop: '2rem', textAlign: 'center' }} className="mobile-only-link" >
            <a href="#" className="link-arrow" style={{display: 'inline-flex'}}>
                Ver todo el portafolio <ExternalLink size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Startups;